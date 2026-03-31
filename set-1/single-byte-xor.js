function decodeCipher(val1) {
    //commonly used leters and space = heavily rewarded
    const scores = {
        'a': 8, 'b': 1, 'c': 3, 'd': 4, 'e': 13,
        'f': 2, 'g': 2, 'h': 6, 'i': 7, 'j': 0,
        'k': 1, 'l': 4, 'm': 2, 'n': 7, 'o': 8,
        'p': 2, 'q': 0, 'r': 6, 's': 6, 't': 9,
        'u': 3, 'v': 1, 'w': 2, 'x': 0, 'y': 2,
        'z': 0,
        ' ': 15
    };
    var byteArray = hexToBytes(val1);
    let bestScore = -Infinity;
    let bestText = '';
    let bestKey = 0;

    //xor all possible combinations
    for (let key = 0; key <= 255; key++) {
        let text = '';
        let score = 0;

        for (let b of byteArray) {
            const char = String.fromCharCode(b ^ key);
            text += char;

            const c = char.toLowerCase();
            if (scores[c] !== undefined) score += scores[c];
        }

        if (score > bestScore) {
            bestScore = score;
            bestText = text;
            bestKey = key;
        }
    }

    return { key: bestKey, text: bestText,score: bestScore };
}

function hexToBytes(hex) {
    let bytes = [];
    for (let i = 0; i < hex.length; i += 2) {
        bytes.push(parseInt(hex.substr(i, 2), 16));
    }
    return bytes;
}
//yasss
console.log(decodeCipher('1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736'))