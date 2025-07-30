function multiFNV1a(str) {
  const seeds = [0x811c9dc5, 0xABCDEF01, 0x12345678];
  return seeds.map(seed => {
      let hash = seed;
      for (let i = 0; i < str.length; i++) {
          hash ^= str.charCodeAt(i);
          hash = (hash * 0x01000193) >>> 0;
      }
      return ("00000000" + hash.toString(16)).slice(-8);
  }).join('');
}