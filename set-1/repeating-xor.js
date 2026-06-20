//repeating xor encryption
function encryptText(text, key) {
    const pt_len = text.length;
    const key_len = key.length;
    var encoded = [];

    for(let i=0; i<pt_len; i++){
        encoded.push(text[i] ^ key[i % key_len])
    }
    return encoded;
}

function stringToBytes(str) {
    return Array.from(str, c => c.charCodeAt(0));
}

function bytesToHex(bytes) {
    return bytes
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");
}

function main(){
    const plain_text = "Burning 'em, if you ain't quick and nimble I go crazy when I hear a cymbal";
    const key = "ICE";
    encrypted = encryptText(stringToBytes(plain_text), stringToBytes(key))
    console.log(bytesToHex(encrypted));
}
main();
