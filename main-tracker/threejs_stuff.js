    // Camera and controls
    camera.position.set(0, 95, 0);
    camera.lookAt(0, 0, 0);
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableRotate = false;
    controls.enableZoom = true;
    controls.enablePan = true;

    // Load textures
    const textureLoader = new THREE.TextureLoader();
    const textures = [textureLoader.load("resources/feathered60.png"), textureLoader.load("resources/sprite120.png")];
    textures.forEach((tex) => {
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
    });

    const planetCount = planets.length;
    const positions = new Float32Array(planetCount * 3);
    const colors = new Float32Array(planetCount * 3);
    const textureIndices = new Float32Array(planetCount);
    planets.forEach((obj, i) => {
      positions[i * 3] = obj.x * 2;
      positions[i * 3 + 1] = obj.y * 2;
      positions[i * 3 + 2] = obj.z * 2;

      const color = new THREE.Color(obj.color || 0xadd8e6);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      textureIndices[i] = obj.textureIndex ?? 0;
    });

    const planetsGeometry = new THREE.BufferGeometry();
    planetsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    planetsGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    planetsGeometry.setAttribute("textureIndex", new THREE.BufferAttribute(textureIndices, 1));

    const starsMaterial = new THREE.ShaderMaterial({
  uniforms: {
    textures: { value: textures },
    pointSize: { value: 900.0},
  },
  vertexShader: `
    attribute float textureIndex;
    varying vec3 vColor;
    varying float vTextureIndex;
    uniform float pointSize;
    void main() {
      vColor = color;
      vTextureIndex = textureIndex;
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      gl_PointSize = pointSize / -mvPosition.z;
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  fragmentShader: `
    uniform sampler2D textures[2];
    varying vec3 vColor;
    varying float vTextureIndex;
    void main() {
      vec4 texColor;
      if (vTextureIndex < 0.5) {
        texColor = texture2D(textures[0], gl_PointCoord);
      } else {
        texColor = texture2D(textures[1], gl_PointCoord);
      }
      if (texColor.a < 0.1) discard;
      gl_FragColor = vec4(vColor * texColor.rgb, texColor.a);
    }
  `,
  transparent: true,
  vertexColors: true,
  blending: THREE.AdditiveBlending,
});

    const stars = new THREE.Points(planetsGeometry, starsMaterial);
    scene.add(stars);

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 1));

    // Animate
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    // Handle window resize
    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });