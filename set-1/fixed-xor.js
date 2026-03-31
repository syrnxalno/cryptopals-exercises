function fixedXor(val1, val2) {
  const buf1 = Buffer.from(val1, 'hex');
  const buf2 = Buffer.from(val2, 'hex');

  let res = [];

  for (let i = 0; i < buf1.length; i++) {
    res.push(buf1[i] ^ buf2[i]);
  }
  return Buffer.from(res).toString('hex');
}

// console.log(
//   fixedXor(
//     '1c0111001f010100061a024b53535009181c',
//     '686974207468652062756c6c277320657965'
//   )
// )