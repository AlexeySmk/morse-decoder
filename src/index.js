const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(str) {
    let arr = [];
    let acc = "";
    for (let i = 0; i < str.length; i++) {
        acc += str[i];
        if (acc.length === 10) {
            arr.push(acc);
            acc = "";
        }
    }

    arr = arr.map(item => {

        let itemToString = String(+item);
        let newArr = [];
        let temp = "";
        for (let i = 0; i < itemToString.length; i++) {
            temp += itemToString[i];
            if (temp.length === 2) {
                if (temp === "10") {
                    newArr.push(".");
                    temp = "";
                }

                if (temp === "11") {

                    newArr.push("-");
                    temp = "";

                }

                if (temp === "Na") {

                    newArr.push(" ");
                    temp = "";

                }

            }

        }

        return newArr.join("");
    });

    return arr.map(item => {
        if (item === ".-") return "a";
        if (item === "-...") return "b";
        if (item === "-.-.") return "c";
        if (item === "-..") return "d";
        if (item === ".") return "e";
        if (item === "..-.") return "f";
        if (item === "--.") return "g";
        if (item === "....") return "h";
        if (item === "..") return "i";
        if (item === ".---") return "j";
        if (item === "-.-") return "k";
        if (item === ".-..") return "l";
        if (item === "--") return "m";
        if (item === "-.") return "n";
        if (item === "---") return "o";
        if (item === ".--.") return "p";
        if (item === "--.-") return "q";
        if (item === ".-.") return "r";
        if (item === "...") return "s";
        if (item === "-") return "t";
        if (item === "..-") return "u";
        if (item === "...-") return "v";
        if (item === ".--") return "w";
        if (item === "-..-") return "x";
        if (item === "-.--") return "y";
        if (item === "--..") return "z";
        if (item === ".----") return "1";
        if (item === "..---") return "2";
        if (item === "...--") return "3";
        if (item === "....-") return "4";
        if (item === ".....") return "5";
        if (item === "-....") return "6";
        if (item === "--...") return "7";
        if (item === "---..") return "8";
        if (item === "----.") return "9";
        if (item === "-----") return "0";
        if (item === " ") return " ";
    }).join("");
}

module.exports = {
    decode
}