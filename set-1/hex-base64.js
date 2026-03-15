function hexToBase64(hex_value) {
  const base64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  const bytes = [];
  for (let i = 0; i < hex_value.length; i += 2) {
    bytes.push(parseInt(hex_value.substr(i, 2), 16));
  }

  let base64 = "";
  for (let i = 0; i < bytes.length; i += 3) {
    const chunk = bytes.slice(i, i + 3);
    let bits = (chunk[0] << 16) | ((chunk[1] || 0) << 8) | (chunk[2] || 0);

    const b64_1 = (bits >> 18) & 0x3f;
    const b64_2 = (bits >> 12) & 0x3f;
    const b64_3 = (bits >> 6) & 0x3f;
    const b64_4 = bits & 0x3f;

    // padding
    base64 += base64chars[b64_1] + base64chars[b64_2];
    base64 += chunk.length > 1 ? base64chars[b64_3] : "=";
    base64 += chunk.length > 2 ? base64chars[b64_4] : "=";
  }

  return base64;
}

// //tests
// console.log(hexToBase64("49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d")); 
// console.log(hexToBase64("4F2A")); 
// console.log(hexToBase64("49276d")); 
// console.log(hexToBase64("FF")); 