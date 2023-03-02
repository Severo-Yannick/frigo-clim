export function md5(message: (string | number)): string {

  const rotateLeft = (x: number, n: number) => (x << n) | (x >>> (32 - n));

  const addUnsigned = (x: number, y: number) => {
    const mask = 0xffffffff;
    const xh = x >>> 16;
    const xl = x & mask;
    const yh = y >>> 16;
    const yl = y & mask;
    const res = xl + yl;
    return (xh + yh + (res >>> 16)) | (res & mask);
  };

  const hex = (val: number) => {
    const s = val.toString(16);
    return s.length < 2 ? "0" + s : s;
  };

  const padMessage = (msg: string) => {
    const length = msg.length;
    let padded = msg + "\u0080";
    while (padded.length % 64 !== 56) {
      padded += "\u0000";
    }
    const bitLength = length * 8;
    padded +=
      String.fromCharCode(bitLength & 0xff) +
      String.fromCharCode((bitLength >>> 8) & 0xff) +
      String.fromCharCode((bitLength >>> 16) & 0xff) +
      String.fromCharCode((bitLength >>> 24) & 0xff);
    return padded;
  };

  const k = [
    0xd76aa478, 0xe8c7b756, 0x242070db, 0xc1bdceee, 0xf57c0faf, 0x4787c62a,
    0xa8304613, 0xfd469501, 0x698098d8, 0x8b44f7af, 0xffff5bb1, 0x895cd7be,
    0x6b901122, 0xfd987193, 0xa679438e, 0x49b40821, 0xf61e2562, 0xc040b340,
    0x265e5a51, 0xe9b6c7aa, 0xd62f105d, 0x2441453, 0xd8a1e681, 0xe7d3fbc8,
    0x21e1cde6, 0xc33707d6, 0xf4d50d87, 0x455a14ed, 0xa9e3e905, 0xfcefa3f8,
    0x676f02d9, 0x8d2a4c8a, 0xfffa3942, 0x8771f681, 0x6d9d6122, 0xfde5380c,
    0xa4beea44, 0x4bdecfa9, 0xf6bb4b60, 0xbebfbc70, 0x289b7ec6, 0xeaa127fa,
    0xd4ef3085, 0x4881d05, 0xd9d4d039, 0xe6db99e5, 0x1fa27cf8, 0xc4ac5665,
    0xf4292244, 0x432aff97, 0xab9423a7, 0xfc93a039,
  ];

  let a = 0x67452301;
  let b = 0xefcdab89;
  let c = 0x98badcfe;
  let d = 0x10325476;

  const paddedMessage = padMessage(message);

  for (let i = 0; i < paddedMessage.length; i += 64) {
    const chunk = paddedMessage.slice(i, i + 64);
    const words = new Array<number>(16);
    for (let j = 0; j < 64; j += 4) {
      words[j / 4] =
        chunk.charCodeAt(j) |
        (chunk.charCodeAt(j + 1) << 8) |
        (chunk.charCodeAt(j + 2) << 16) |
        (chunk.charCodeAt(j + 3) << 24);
    }
    let aa = a;
    let bb = b;
    let cc = c;
    let dd = d;
    for (let j = 0; j < 64; j++) {
      let f, g;
      if (j < 16) {
        f = (b & c) | (~b & d);
        g = j;
      } else if (j < 32) {
        f = (d & b) | (~d & c);
        g = (5 * j + 1) % 16;
      } else if (j < 48) {
        f = b ^ c ^ d;
        g = (3 * j + 5) % 16;
      } else {
        f = c ^ (b | ~d);
        g = (7 * j) % 16;
      }
      const temp = d;
      d = c;
      c = b;
      b = addUnsigned(
        b,
        rotateLeft(
          addUnsigned(a, addUnsigned(f, addUnsigned(k[j], words[g]))),
          (j < 16
            ? [7, 12, 17, 22]
            : j < 32
            ? [5, 9, 14, 20]
            : j < 48
            ? [4, 11, 16, 23]
            : [6, 10, 15, 21])[j % 4]
        )
      );
      a = temp;
    }
    a = addUnsigned(a, aa);
    b = addUnsigned(b, bb);
    c = addUnsigned(c, cc);
    d = addUnsigned(d, dd);
  }

  return hex(a) + hex(b) + hex(c) + hex(d);
}
