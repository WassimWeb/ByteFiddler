export default {
  namespaced: true,
  state: {
    value: 0,
    bit: {
      bit0: 0,
      bit1: 0,
      bit2: 0,
      bit3: 0,
      bit4: 0,
      bit5: 0,
      bit6: 0,
      bit7: 0
    },
    rgb0: 0,
    rgb1: 0,
    rgb2: 0,
    rgb3: 0,
    rows: [
      {
        CHAR: '',
        BIN: '00000000',
        DEC: 0,
        OCT: 0,
        HEX: '0h',
        NAME: 'null'
      },
      {
        CHAR: '',
        BIN: '00000001',
        DEC: 1,
        OCT: 1,
        HEX: '1h',
        NAME: 'start of heading'
      },
      {
        CHAR: '',
        BIN: '00000010',
        DEC: 2,
        OCT: 2,
        HEX: '2h',
        NAME: 'start of text'
      },
      {
        CHAR: '',
        BIN: '00000011',
        DEC: 3,
        OCT: 3,
        HEX: '3h',
        NAME: 'end of text'
      },
      {
        CHAR: '',
        BIN: '00000100',
        DEC: 4,
        OCT: 4,
        HEX: '4h',
        NAME: 'end of transmission'
      },
      {
        CHAR: '',
        BIN: '00000101',
        DEC: 5,
        OCT: 5,
        HEX: '5h',
        NAME: 'enquiry'
      },
      {
        CHAR: '',
        BIN: '00000110',
        DEC: 6,
        OCT: 6,
        HEX: '6h',
        NAME: 'acknowledge'
      },
      {
        CHAR: '',
        BIN: '00000111',
        DEC: 7,
        OCT: 7,
        HEX: '7h',
        NAME: 'bell'
      },
      {
        CHAR: '',
        BIN: '00001000',
        DEC: 8,
        OCT: 10,
        HEX: '8h',
        NAME: 'backspace'
      },
      {
        CHAR: '',
        BIN: '00001001',
        DEC: 9,
        OCT: 11,
        HEX: '9h',
        NAME: 'horizontal tab'
      },
      {
        CHAR: '',
        BIN: '00001010',
        DEC: 10,
        OCT: 12,
        HEX: 'Ah',
        NAME: 'line feed'
      },
      {
        CHAR: '',
        BIN: '00001011',
        DEC: 11,
        OCT: 13,
        HEX: 'Bh',
        NAME: 'vertical tab'
      },
      {
        CHAR: '',
        BIN: '00001100',
        DEC: 12,
        OCT: 14,
        HEX: 'Ch',
        NAME: 'form feed'
      },
      {
        CHAR: '',
        BIN: '00001101',
        DEC: 13,
        OCT: 15,
        HEX: 'Dh',
        NAME: 'carriage return'
      },
      {
        CHAR: '',
        BIN: '00001110',
        DEC: 14,
        OCT: 16,
        HEX: 'Eh',
        NAME: 'shift out'
      },
      {
        CHAR: '',
        BIN: '00001111',
        DEC: 15,
        OCT: 17,
        HEX: 'Fh',
        NAME: 'shift in'
      },
      {
        CHAR: '',
        BIN: '00010000',
        DEC: 16,
        OCT: 20,
        HEX: '10h',
        NAME: 'data link escape'
      },
      {
        CHAR: '',
        BIN: '00010001',
        DEC: 17,
        OCT: 21,
        HEX: '11h',
        NAME: 'device control 1'
      },
      {
        CHAR: '',
        BIN: '00010010',
        DEC: 18,
        OCT: 22,
        HEX: '12h',
        NAME: 'device control 2'
      },
      {
        CHAR: '',
        BIN: '00010011',
        DEC: 19,
        OCT: 23,
        HEX: '13h',
        NAME: 'device control 3'
      },
      {
        CHAR: '',
        BIN: '00010100',
        DEC: 20,
        OCT: 24,
        HEX: '14h',
        NAME: 'device control 4'
      },
      {
        CHAR: '',
        BIN: '00010101',
        DEC: 21,
        OCT: 25,
        HEX: '15h',
        NAME: 'negative acknowledge'
      },
      {
        CHAR: '',
        BIN: '00010110',
        DEC: 22,
        OCT: 26,
        HEX: '16h',
        NAME: 'synchronous idle'
      },
      {
        CHAR: '',
        BIN: '00010111',
        DEC: 23,
        OCT: 27,
        HEX: '17h',
        NAME: 'end of block'
      },
      {
        CHAR: '',
        BIN: '00011000',
        DEC: 24,
        OCT: 30,
        HEX: '18h',
        NAME: 'cancel'
      },
      {
        CHAR: '',
        BIN: '00011001',
        DEC: 25,
        OCT: 31,
        HEX: '19h',
        NAME: 'end of medium'
      },
      {
        CHAR: '',
        BIN: '00011010',
        DEC: 26,
        OCT: 32,
        HEX: '1Ah',
        NAME: 'substitute'
      },
      {
        CHAR: '',
        BIN: '00011011',
        DEC: 27,
        OCT: 33,
        HEX: '1Bh',
        NAME: 'escape'
      },
      {
        CHAR: '',
        BIN: '00011100',
        DEC: 28,
        OCT: 34,
        HEX: '1Ch',
        NAME: 'file separator'
      },
      {
        CHAR: '',
        BIN: '00011101',
        DEC: 29,
        OCT: 35,
        HEX: '1Dh',
        NAME: 'group separator'
      },
      {
        CHAR: '',
        BIN: '00011110',
        DEC: 30,
        OCT: 36,
        HEX: '1Eh',
        NAME: 'record separator'
      },
      {
        CHAR: '',
        BIN: '00011111',
        DEC: 31,
        OCT: 37,
        HEX: '1Fh',
        NAME: 'unit separator'
      },
      {
        CHAR: '',
        BIN: '00100000',
        DEC: 32,
        OCT: 40,
        HEX: '20h',
        NAME: 'space'
      },
      {
        CHAR: '!',
        BIN: '00100001',
        DEC: 33,
        OCT: 41,
        HEX: '21h',
        NAME: 'exclamation mark'
      },
      {
        CHAR: '"',
        BIN: '00100010',
        DEC: 34,
        OCT: 42,
        HEX: '22h',
        NAME: 'double quotes'
      },
      {
        CHAR: '#',
        BIN: '00100011',
        DEC: 35,
        OCT: 43,
        HEX: '23h',
        NAME: 'number sign or hash tag'
      },
      {
        CHAR: '$',
        BIN: '00100100',
        DEC: 36,
        OCT: 44,
        HEX: '24h',
        NAME: 'dollar sign'
      },
      {
        CHAR: '%',
        BIN: '00100101',
        DEC: 37,
        OCT: 45,
        HEX: '25h',
        NAME: 'percent sign'
      },
      {
        CHAR: '&',
        BIN: '00100110',
        DEC: 38,
        OCT: 46,
        HEX: '26h',
        NAME: 'ampersand'
      },
      {
        CHAR: '‘',
        BIN: '00100111',
        DEC: 39,
        OCT: 47,
        HEX: '27h',
        NAME: 'single quote'
      },
      {
        CHAR: '(',
        BIN: '00101000',
        DEC: 40,
        OCT: 50,
        HEX: '28h',
        NAME: 'left parenthesis'
      },
      {
        CHAR: ')',
        BIN: '00101001',
        DEC: 41,
        OCT: 51,
        HEX: '29h',
        NAME: 'right parenthesis'
      },
      {
        CHAR: '*',
        BIN: '00101010',
        DEC: 42,
        OCT: 52,
        HEX: '2Ah',
        NAME: 'asterisk'
      },
      {
        CHAR: '+',
        BIN: '00101011',
        DEC: 43,
        OCT: 53,
        HEX: '2Bh',
        NAME: 'plus sign'
      },
      {
        CHAR: ',',
        BIN: '00101100',
        DEC: 44,
        OCT: 54,
        HEX: '2Ch',
        NAME: 'comma'
      },
      {
        CHAR: '–',
        BIN: '00101101',
        DEC: 45,
        OCT: 55,
        HEX: '2Dh',
        NAME: 'hyphen or minus sign'
      },
      {
        CHAR: '.',
        BIN: '00101110',
        DEC: 46,
        OCT: 56,
        HEX: '2Eh',
        NAME: 'period'
      },
      {
        CHAR: '/',
        BIN: '00101111',
        DEC: 47,
        OCT: 57,
        HEX: '2Fh',
        NAME: 'slash'
      },
      {
        CHAR: '0',
        BIN: '00110000',
        DEC: 48,
        OCT: 60,
        HEX: '30h',
        NAME: 'zero'
      },
      {
        CHAR: '1',
        BIN: '00110001',
        DEC: 49,
        OCT: 61,
        HEX: '31h',
        NAME: 'one'
      },
      {
        CHAR: '2',
        BIN: '00110010',
        DEC: 50,
        OCT: 62,
        HEX: '32h',
        NAME: 'two'
      },
      {
        CHAR: '3',
        BIN: '00110011',
        DEC: 51,
        OCT: 63,
        HEX: '33h',
        NAME: 'three'
      },
      {
        CHAR: '4',
        BIN: '00110100',
        DEC: 52,
        OCT: 64,
        HEX: '34h',
        NAME: 'four'
      },
      {
        CHAR: '5',
        BIN: '00110101',
        DEC: 53,
        OCT: 65,
        HEX: '35h',
        NAME: 'five'
      },
      {
        CHAR: '6',
        BIN: '00110110',
        DEC: 54,
        OCT: 66,
        HEX: '36h',
        NAME: 'six'
      },
      {
        CHAR: '7',
        BIN: '00110111',
        DEC: 55,
        OCT: 67,
        HEX: '37h',
        NAME: 'seven'
      },
      {
        CHAR: '8',
        BIN: '00111000',
        DEC: 56,
        OCT: 70,
        HEX: '38h',
        NAME: 'eight'
      },
      {
        CHAR: '9',
        BIN: '00111001',
        DEC: 57,
        OCT: 71,
        HEX: '39h',
        NAME: 'nine'
      },
      {
        CHAR: ':',
        BIN: '00111010',
        DEC: 58,
        OCT: 72,
        HEX: '3Ah',
        NAME: 'colon'
      },
      {
        CHAR: ';',
        BIN: '00111011',
        DEC: 59,
        OCT: 73,
        HEX: '3Bh',
        NAME: 'semicolon/td>'
      },
      {
        CHAR: '<',
        BIN: '00111100',
        DEC: 60,
        OCT: 74,
        HEX: '3Ch',
        NAME: 'less than sign'
      },
      {
        CHAR: '=',
        BIN: '00111101',
        DEC: 61,
        OCT: 75,
        HEX: '3Dh',
        NAME: 'equal sign'
      },
      {
        CHAR: '>',
        BIN: '00111110',
        DEC: 62,
        OCT: 76,
        HEX: '3Eh',
        NAME: 'greater than sign'
      },
      {
        CHAR: '?',
        BIN: '00111111',
        DEC: 63,
        OCT: 77,
        HEX: '3Fh',
        NAME: 'question mark'
      },
      {
        CHAR: '@',
        BIN: '01000000',
        DEC: 64,
        OCT: 100,
        HEX: '40h',
        NAME: 'at symbol'
      },
      {
        CHAR: 'A',
        BIN: '01000001',
        DEC: 65,
        OCT: 101,
        HEX: '41h',
        NAME: 'capital a'
      },
      {
        CHAR: 'B',
        BIN: '01000010',
        DEC: 66,
        OCT: 102,
        HEX: '42h',
        NAME: 'capital b'
      },
      {
        CHAR: 'C',
        BIN: '01000011',
        DEC: 67,
        OCT: 103,
        HEX: '43h',
        NAME: 'capital c'
      },
      {
        CHAR: 'D',
        BIN: '01000100',
        DEC: 68,
        OCT: 104,
        HEX: '44h',
        NAME: 'capital d'
      },
      {
        CHAR: 'E',
        BIN: '01000101',
        DEC: 69,
        OCT: 105,
        HEX: '45h',
        NAME: 'capital e'
      },
      {
        CHAR: 'F',
        BIN: '01000110',
        DEC: 70,
        OCT: 106,
        HEX: '46h',
        NAME: 'capital f'
      },
      {
        CHAR: 'G',
        BIN: '01000111',
        DEC: 71,
        OCT: 107,
        HEX: '47h',
        NAME: 'capital g'
      },
      {
        CHAR: 'H',
        BIN: '01001000',
        DEC: 72,
        OCT: 110,
        HEX: '48h',
        NAME: 'capital h'
      },
      {
        CHAR: 'I',
        BIN: '01001001',
        DEC: 73,
        OCT: 111,
        HEX: '49h',
        NAME: 'capital i'
      },
      {
        CHAR: 'J',
        BIN: '01001010',
        DEC: 74,
        OCT: 112,
        HEX: '4Ah',
        NAME: 'capital j'
      },
      {
        CHAR: 'K',
        BIN: '01001011',
        DEC: 75,
        OCT: 113,
        HEX: '4Bh',
        NAME: 'capital k'
      },
      {
        CHAR: 'L',
        BIN: '01001100',
        DEC: 76,
        OCT: 114,
        HEX: '4Ch',
        NAME: 'capital l'
      },
      {
        CHAR: 'M',
        BIN: '01001101',
        DEC: 77,
        OCT: 115,
        HEX: '4Dh',
        NAME: 'capital m'
      },
      {
        CHAR: 'N',
        BIN: '01001110',
        DEC: 78,
        OCT: 116,
        HEX: '4Eh',
        NAME: 'capital n'
      },
      {
        CHAR: 'O',
        BIN: '01001111',
        DEC: 79,
        OCT: 117,
        HEX: '4Fh',
        NAME: 'capital o'
      },
      {
        CHAR: 'P',
        BIN: '01010000',
        DEC: 80,
        OCT: 120,
        HEX: '50h',
        NAME: 'capital p'
      },
      {
        CHAR: 'Q',
        BIN: '01010001',
        DEC: 81,
        OCT: 121,
        HEX: '51h',
        NAME: 'capital q'
      },
      {
        CHAR: 'R',
        BIN: '01010010',
        DEC: 82,
        OCT: 122,
        HEX: '52h',
        NAME: 'capital r'
      },
      {
        CHAR: 'S',
        BIN: '01010011',
        DEC: 83,
        OCT: 123,
        HEX: '53h',
        NAME: 'capital s'
      },
      {
        CHAR: 'T',
        BIN: '01010100',
        DEC: 84,
        OCT: 124,
        HEX: '54h',
        NAME: 'capital t'
      },
      {
        CHAR: 'U',
        BIN: '01010101',
        DEC: 85,
        OCT: 125,
        HEX: '55h',
        NAME: 'capital u'
      },
      {
        CHAR: 'V',
        BIN: '01010110',
        DEC: 86,
        OCT: 126,
        HEX: '56h',
        NAME: 'capital v'
      },
      {
        CHAR: 'W',
        BIN: '01010111',
        DEC: 87,
        OCT: 127,
        HEX: '57h',
        NAME: 'capital w'
      },
      {
        CHAR: 'X',
        BIN: '01011000',
        DEC: 88,
        OCT: 130,
        HEX: '58h',
        NAME: 'capital x'
      },
      {
        CHAR: 'Y',
        BIN: '01011001',
        DEC: 89,
        OCT: 131,
        HEX: '59h',
        NAME: 'capital y'
      },
      {
        CHAR: 'Z',
        BIN: '01011010',
        DEC: 90,
        OCT: 132,
        HEX: '5Ah',
        NAME: 'capital z'
      },
      {
        CHAR: '[',
        BIN: '01011011',
        DEC: 91,
        OCT: 133,
        HEX: '5Bh',
        NAME: 'left bracket'
      },
      {
        CHAR: '\\',
        BIN: '01011100',
        DEC: 92,
        OCT: 134,
        HEX: '5Ch',
        NAME: 'backslash'
      },
      {
        CHAR: ']',
        BIN: '01011101',
        DEC: 93,
        OCT: 135,
        HEX: '5Dh',
        NAME: 'right bracket'
      },
      {
        CHAR: '^',
        BIN: '01011110',
        DEC: 94,
        OCT: 136,
        HEX: '5Eh',
        NAME: 'caret or circumflex'
      },
      {
        CHAR: '_',
        BIN: '01011111',
        DEC: 95,
        OCT: 137,
        HEX: '5Fh',
        NAME: 'underscore'
      },
      {
        CHAR: '`',
        BIN: '01100000',
        DEC: 96,
        OCT: 140,
        HEX: '60h',
        NAME: 'grave accent'
      },
      {
        CHAR: 'a',
        BIN: '01100001',
        DEC: 97,
        OCT: 141,
        HEX: '61h',
        NAME: 'lowercase a'
      },
      {
        CHAR: 'b',
        BIN: '01100010',
        DEC: 98,
        OCT: 142,
        HEX: '62h',
        NAME: 'lowercase b'
      },
      {
        CHAR: 'c',
        BIN: '01100011',
        DEC: 99,
        OCT: 143,
        HEX: '63h',
        NAME: 'lowercase c'
      },
      {
        CHAR: 'd',
        BIN: '01100100',
        DEC: 100,
        OCT: 144,
        HEX: '64h',
        NAME: 'lowercase d'
      },
      {
        CHAR: 'e',
        BIN: '01100101',
        DEC: 101,
        OCT: 145,
        HEX: '65h',
        NAME: 'lowercase e'
      },
      {
        CHAR: 'f',
        BIN: '01100110',
        DEC: 102,
        OCT: 146,
        HEX: '66h',
        NAME: 'lowercase f'
      },
      {
        CHAR: 'g',
        BIN: '01100111',
        DEC: 103,
        OCT: 147,
        HEX: '67h',
        NAME: 'lowercase g'
      },
      {
        CHAR: 'h',
        BIN: '01101000',
        DEC: 104,
        OCT: 150,
        HEX: '68h',
        NAME: 'lowercase h'
      },
      {
        CHAR: 'i',
        BIN: '01101001',
        DEC: 105,
        OCT: 151,
        HEX: '69h',
        NAME: 'lowercase i'
      },
      {
        CHAR: 'j',
        BIN: '01101010',
        DEC: 106,
        OCT: 152,
        HEX: '6Ah',
        NAME: 'lowercase j'
      },
      {
        CHAR: 'k',
        BIN: '01101011',
        DEC: 107,
        OCT: 153,
        HEX: '6Bh',
        NAME: 'lowercase k'
      },
      {
        CHAR: 'l',
        BIN: '01101100',
        DEC: 108,
        OCT: 154,
        HEX: '6Ch',
        NAME: 'lowercase l'
      },
      {
        CHAR: 'm',
        BIN: '01101101',
        DEC: 109,
        OCT: 155,
        HEX: '6Dh',
        NAME: 'lowercase m'
      },
      {
        CHAR: 'n',
        BIN: '01101110',
        DEC: 110,
        OCT: 156,
        HEX: '6Eh',
        NAME: 'lowercase n'
      },
      {
        CHAR: 'o',
        BIN: '01101111',
        DEC: 111,
        OCT: 157,
        HEX: '6Fh',
        NAME: 'lowercase o'
      },
      {
        CHAR: 'p',
        BIN: '01110000',
        DEC: 112,
        OCT: 160,
        HEX: '70h',
        NAME: 'lowercase p'
      },
      {
        CHAR: 'q',
        BIN: '01110001',
        DEC: 113,
        OCT: 161,
        HEX: '71h',
        NAME: 'lowercase q'
      },
      {
        CHAR: 'r',
        BIN: '01110010',
        DEC: 114,
        OCT: 162,
        HEX: '72h',
        NAME: 'lowercase r'
      },
      {
        CHAR: 's',
        BIN: '01110011',
        DEC: 115,
        OCT: 163,
        HEX: '73h',
        NAME: 'lowercase s'
      },
      {
        CHAR: 't',
        BIN: '01110100',
        DEC: 116,
        OCT: 164,
        HEX: '74h',
        NAME: 'lowercase t'
      },
      {
        CHAR: 'u',
        BIN: '01110101',
        DEC: 117,
        OCT: 165,
        HEX: '75h',
        NAME: 'lowercase u'
      },
      {
        CHAR: 'v',
        BIN: '01110110',
        DEC: 118,
        OCT: 166,
        HEX: '76h',
        NAME: 'lowercase v'
      },
      {
        CHAR: 'w',
        BIN: '01110111',
        DEC: 119,
        OCT: 167,
        HEX: '77h',
        NAME: 'lowercase w'
      },
      {
        CHAR: 'x',
        BIN: '01111000',
        DEC: 120,
        OCT: 170,
        HEX: '78h',
        NAME: 'lowercase x'
      },
      {
        CHAR: 'y',
        BIN: '01111001',
        DEC: 121,
        OCT: 171,
        HEX: '79h',
        NAME: 'lowercase y'
      },
      {
        CHAR: 'z',
        BIN: '01111010',
        DEC: 122,
        OCT: 172,
        HEX: '7Ah',
        NAME: 'lowercase z'
      },
      {
        CHAR: '{',
        BIN: '01111011',
        DEC: 123,
        OCT: 173,
        HEX: '7Bh',
        NAME: 'left brace'
      },
      {
        CHAR: '|',
        BIN: '01111100',
        DEC: 124,
        OCT: 174,
        HEX: '7Ch',
        NAME: 'bar'
      },
      {
        CHAR: '}',
        BIN: '01111101',
        DEC: 125,
        OCT: 175,
        HEX: '7Dh',
        NAME: 'right brace'
      },
      {
        CHAR: '~',
        BIN: '01111110',
        DEC: 126,
        OCT: 176,
        HEX: '7Eh',
        NAME: 'tilde or equivalency sign'
      },
      {
        CHAR: '',
        BIN: '01111111',
        DEC: 127,
        OCT: 177,
        HEX: '7Fh',
        NAME: 'DEL'
      },
      {
        CHAR: '€',
        BIN: '10000000',
        DEC: 128,
        OCT: 200,
        HEX: '80h',
        NAME: 'euro sign'
      },
      {
        CHAR: '',
        BIN: '10000001',
        DEC: 129,
        OCT: 201,
        HEX: '81h',
        NAME: ''
      },
      {
        CHAR: '‚',
        BIN: '10000010',
        DEC: 130,
        OCT: 202,
        HEX: '82h',
        NAME: 'single low-9 quotation mark'
      },
      {
        CHAR: 'ƒ',
        BIN: '10000011',
        DEC: 131,
        OCT: 203,
        HEX: '83h',
        NAME: 'lowercase f with hook'
      },
      {
        CHAR: '„',
        BIN: '10000100',
        DEC: 132,
        OCT: 204,
        HEX: '84h',
        NAME: 'double low-9 quotation mark'
      },
      {
        CHAR: '…',
        BIN: '10000101',
        DEC: 133,
        OCT: 205,
        HEX: '85h',
        NAME: 'horizontal ellipsis'
      },
      {
        CHAR: '†',
        BIN: '10000110',
        DEC: 134,
        OCT: 206,
        HEX: '86h',
        NAME: 'dagger'
      },
      {
        CHAR: '‡',
        BIN: '10000111',
        DEC: 135,
        OCT: 207,
        HEX: '87h',
        NAME: 'double dagger'
      },
      {
        CHAR: 'ˆ',
        BIN: '10001000',
        DEC: 136,
        OCT: 210,
        HEX: '88h',
        NAME: 'circumflex accent'
      },
      {
        CHAR: '‰',
        BIN: '10001001',
        DEC: 137,
        OCT: 211,
        HEX: '89h',
        NAME: 'per mille sign'
      },
      {
        CHAR: 'Š',
        BIN: '10001010',
        DEC: 138,
        OCT: 212,
        HEX: '8Ah',
        NAME: 'uppercase s with caron'
      },
      {
        CHAR: '‹',
        BIN: '10001011',
        DEC: 139,
        OCT: 213,
        HEX: '8Bh',
        NAME: 'single left-pointing angle quotation'
      },
      {
        CHAR: 'Œ',
        BIN: '10001100',
        DEC: 140,
        OCT: 214,
        HEX: '8Ch',
        NAME: 'OE ligature'
      },
      {
        CHAR: '',
        BIN: '10001101',
        DEC: 141,
        OCT: 215,
        HEX: '8Dh',
        NAME: ''
      },
      {
        CHAR: 'Ž',
        BIN: '10001110',
        DEC: 142,
        OCT: 216,
        HEX: '8Eh',
        NAME: 'uppercase z with caron'
      },
      {
        CHAR: '',
        BIN: '10001111',
        DEC: 143,
        OCT: 217,
        HEX: '8Fh',
        NAME: ''
      },
      {
        CHAR: '',
        BIN: '10010000',
        DEC: 144,
        OCT: 220,
        HEX: '90h',
        NAME: ''
      },
      {
        CHAR: '‘',
        BIN: '10010001',
        DEC: 145,
        OCT: 221,
        HEX: '91h',
        NAME: 'left single quotation mark'
      },
      {
        CHAR: '’',
        BIN: '10010010',
        DEC: 146,
        OCT: 222,
        HEX: '92h',
        NAME: 'right single quotation mark'
      },
      {
        CHAR: '“',
        BIN: '10010011',
        DEC: 147,
        OCT: 223,
        HEX: '93h',
        NAME: 'left double quotation mark'
      },
      {
        CHAR: '”',
        BIN: '10010100',
        DEC: 148,
        OCT: 224,
        HEX: '94h',
        NAME: 'right double quotation mark'
      },
      {
        CHAR: '•',
        BIN: '10010101',
        DEC: 149,
        OCT: 225,
        HEX: '95h',
        NAME: 'bullet'
      },
      {
        CHAR: '–',
        BIN: '10010110',
        DEC: 150,
        OCT: 226,
        HEX: '96h',
        NAME: 'en dash'
      },
      {
        CHAR: '—',
        BIN: '10010111',
        DEC: 151,
        OCT: 227,
        HEX: '97h',
        NAME: 'em dash'
      },
      {
        CHAR: '˜',
        BIN: '10011000',
        DEC: 152,
        OCT: 230,
        HEX: '98h',
        NAME: 'small tilde'
      },
      {
        CHAR: '™',
        BIN: '10011001',
        DEC: 153,
        OCT: 231,
        HEX: '99h',
        NAME: 'trade mark sign'
      },
      {
        CHAR: 'š',
        BIN: '10011010',
        DEC: 154,
        OCT: 232,
        HEX: '9Ah',
        NAME: 'lowercase s with caron'
      },
      {
        CHAR: '›',
        BIN: '10011011',
        DEC: 155,
        OCT: 233,
        HEX: '9Bh',
        NAME: 'Single right-pointing angle quotation mark'
      },
      {
        CHAR: 'œ',
        BIN: '10011100',
        DEC: 156,
        OCT: 234,
        HEX: '9Ch',
        NAME: 'lowercase oe ligature'
      },
      {
        CHAR: '',
        BIN: '10011101',
        DEC: 157,
        OCT: 235,
        HEX: '9Dh',
        NAME: ''
      },
      {
        CHAR: 'ž',
        BIN: '10011110',
        DEC: 158,
        OCT: 236,
        HEX: '9Eh',
        NAME: 'lowercase z with caron'
      },
      {
        CHAR: 'Ÿ',
        BIN: '10011111',
        DEC: 159,
        OCT: 237,
        HEX: '9Fh',
        NAME: 'capital y with diaeresis'
      },
      {
        CHAR: '',
        BIN: '10100000',
        DEC: 160,
        OCT: 240,
        HEX: 'A0h',
        NAME: 'non-breaking space'
      },
      {
        CHAR: '¡',
        BIN: '10100001',
        DEC: 161,
        OCT: 241,
        HEX: 'A1h',
        NAME: 'inverted exclamation mark'
      },
      {
        CHAR: '¢',
        BIN: '10100010',
        DEC: 162,
        OCT: 242,
        HEX: 'A2h',
        NAME: 'cent sign'
      },
      {
        CHAR: '£',
        BIN: '10100011',
        DEC: 163,
        OCT: 243,
        HEX: 'A3h',
        NAME: 'pound sign'
      },
      {
        CHAR: '¤',
        BIN: '10100100',
        DEC: 164,
        OCT: 244,
        HEX: 'A4h',
        NAME: 'currency sign'
      },
      {
        CHAR: '¥',
        BIN: '10100101',
        DEC: 165,
        OCT: 245,
        HEX: 'A5h',
        NAME: 'yen sign'
      },
      {
        CHAR: '¦',
        BIN: '10100110',
        DEC: 166,
        OCT: 246,
        HEX: 'A6h',
        NAME: 'broken vertical bar'
      },
      {
        CHAR: '§',
        BIN: '10100111',
        DEC: 167,
        OCT: 247,
        HEX: 'A7h',
        NAME: 'section sign'
      },
      {
        CHAR: '¨',
        BIN: '10101000',
        DEC: 168,
        OCT: 250,
        HEX: 'A8h',
        NAME: 'umlaut'
      },
      {
        CHAR: '©',
        BIN: '10101001',
        DEC: 169,
        OCT: 251,
        HEX: 'A9h',
        NAME: 'copyright sign'
      },
      {
        CHAR: 'ª',
        BIN: '10101010',
        DEC: 170,
        OCT: 252,
        HEX: 'AAh',
        NAME: 'feminine ordinal indicator'
      },
      {
        CHAR: '«',
        BIN: '10101011',
        DEC: 171,
        OCT: 253,
        HEX: 'ABh',
        NAME: 'left double angle quotes'
      },
      {
        CHAR: '¬',
        BIN: '10101100',
        DEC: 172,
        OCT: 254,
        HEX: 'ACh',
        NAME: 'not sign'
      },
      {
        CHAR: '­',
        BIN: '10101101',
        DEC: 173,
        OCT: 255,
        HEX: 'ADh',
        NAME: 'soft hyphen'
      },
      {
        CHAR: '®',
        BIN: '10101110',
        DEC: 174,
        OCT: 256,
        HEX: 'AEh',
        NAME: 'registered trademark sign'
      },
      {
        CHAR: '¯',
        BIN: '10101111',
        DEC: 175,
        OCT: 257,
        HEX: 'AFh',
        NAME: 'overline'
      },
      {
        CHAR: '°',
        BIN: '10110000',
        DEC: 176,
        OCT: 260,
        HEX: 'B0h',
        NAME: 'degree sign'
      },
      {
        CHAR: '±',
        BIN: '10110001',
        DEC: 177,
        OCT: 261,
        HEX: 'B1h',
        NAME: 'plus-or-minus sign'
      },
      {
        CHAR: '²',
        BIN: '10110010',
        DEC: 178,
        OCT: 262,
        HEX: 'B2h',
        NAME: '2 cubed'
      },
      {
        CHAR: '³',
        BIN: '10110011',
        DEC: 179,
        OCT: 263,
        HEX: 'B3h',
        NAME: '3 cubed'
      },
      {
        CHAR: '´',
        BIN: '10110100',
        DEC: 180,
        OCT: 264,
        HEX: 'B4h',
        NAME: 'acute accent'
      },
      {
        CHAR: 'µ',
        BIN: '10110101',
        DEC: 181,
        OCT: 265,
        HEX: 'B5h',
        NAME: 'micro sign'
      },
      {
        CHAR: '¶',
        BIN: '10110110',
        DEC: 182,
        OCT: 266,
        HEX: 'B6h',
        NAME: 'pilcrow sign'
      },
      {
        CHAR: '·',
        BIN: '10110111',
        DEC: 183,
        OCT: 267,
        HEX: 'B7h',
        NAME: 'middle dot'
      },
      {
        CHAR: '¸',
        BIN: '10111000',
        DEC: 184,
        OCT: 270,
        HEX: 'B8h',
        NAME: 'cedilla'
      },
      {
        CHAR: '¹',
        BIN: '10111001',
        DEC: 185,
        OCT: 271,
        HEX: 'B9h',
        NAME: 'superscript one'
      },
      {
        CHAR: 'º',
        BIN: '10111010',
        DEC: 186,
        OCT: 272,
        HEX: 'BAh',
        NAME: 'masculine ordinal indicator'
      },
      {
        CHAR: '»',
        BIN: '10111011',
        DEC: 187,
        OCT: 273,
        HEX: 'BBh',
        NAME: 'right double angle quotes'
      },
      {
        CHAR: '¼',
        BIN: '10111100',
        DEC: 188,
        OCT: 274,
        HEX: 'BCh',
        NAME: 'fraction one quarter'
      },
      {
        CHAR: '½',
        BIN: '10111101',
        DEC: 189,
        OCT: 275,
        HEX: 'BDh',
        NAME: 'fraction one-half'
      },
      {
        CHAR: '¾',
        BIN: '10111110',
        DEC: 190,
        OCT: 276,
        HEX: 'BEh',
        NAME: 'fraction three-quarters'
      },
      {
        CHAR: '¿',
        BIN: '10111111',
        DEC: 191,
        OCT: 277,
        HEX: 'BFh',
        NAME: 'inverted question mark'
      },
      {
        CHAR: 'À',
        BIN: '11000000',
        DEC: 192,
        OCT: 300,
        HEX: 'C0h',
        NAME: 'capital a with grave'
      },
      {
        CHAR: 'Á',
        BIN: '11000001',
        DEC: 193,
        OCT: 301,
        HEX: 'C1h',
        NAME: 'capital a with acute'
      },
      {
        CHAR: 'Â',
        BIN: '11000010',
        DEC: 194,
        OCT: 302,
        HEX: 'C2h',
        NAME: 'capital a with circumflex'
      },
      {
        CHAR: 'Ã',
        BIN: '11000011',
        DEC: 195,
        OCT: 303,
        HEX: 'C3h',
        NAME: 'capital a with tilde'
      },
      {
        CHAR: 'Ä',
        BIN: '11000100',
        DEC: 196,
        OCT: 304,
        HEX: 'C4h',
        NAME: 'capital a with diaeresis'
      },
      {
        CHAR: 'Å',
        BIN: '11000101',
        DEC: 197,
        OCT: 305,
        HEX: 'C5h',
        NAME: 'capital a with ring above'
      },
      {
        CHAR: 'Æ',
        BIN: '11000110',
        DEC: 198,
        OCT: 306,
        HEX: 'C6h',
        NAME: 'capital AE'
      },
      {
        CHAR: 'Ç',
        BIN: '11000111',
        DEC: 199,
        OCT: 307,
        HEX: 'C7h',
        NAME: 'capital c with cedilla'
      },
      {
        CHAR: 'È',
        BIN: '11001000',
        DEC: 200,
        OCT: 310,
        HEX: 'C8h',
        NAME: 'capital e with grave'
      },
      {
        CHAR: 'É',
        BIN: '11001001',
        DEC: 201,
        OCT: 311,
        HEX: 'C9h',
        NAME: 'capital e with acute'
      },
      {
        CHAR: 'Ê',
        BIN: '11001010',
        DEC: 202,
        OCT: 312,
        HEX: 'CAh',
        NAME: 'capital e with circumflex'
      },
      {
        CHAR: 'Ë',
        BIN: '11001011',
        DEC: 203,
        OCT: 313,
        HEX: 'CBh',
        NAME: 'capital e with diaeresis'
      },
      {
        CHAR: 'Ì',
        BIN: '11001100',
        DEC: 204,
        OCT: 314,
        HEX: 'CCh',
        NAME: 'capital i with grave'
      },
      {
        CHAR: 'Í',
        BIN: '11001101',
        DEC: 205,
        OCT: 315,
        HEX: 'CDh',
        NAME: 'capital i with acute'
      },
      {
        CHAR: 'Î',
        BIN: '11001110',
        DEC: 206,
        OCT: 316,
        HEX: 'CEh',
        NAME: 'capital i with circumflex'
      },
      {
        CHAR: 'Ï',
        BIN: '11001111',
        DEC: 207,
        OCT: 317,
        HEX: 'CFh',
        NAME: 'capital i with diaeresis'
      },
      {
        CHAR: 'Ð',
        BIN: '11010000',
        DEC: 208,
        OCT: 320,
        HEX: 'D0h',
        NAME: 'capital eth'
      },
      {
        CHAR: 'Ñ',
        BIN: '11010001',
        DEC: 209,
        OCT: 321,
        HEX: 'D1h',
        NAME: 'capital n with circumflex'
      },
      {
        CHAR: 'Ò',
        BIN: '11010010',
        DEC: 210,
        OCT: 322,
        HEX: 'D2h',
        NAME: 'capital o with circumflex'
      },
      {
        CHAR: 'Ó',
        BIN: '11010011',
        DEC: 211,
        OCT: 323,
        HEX: 'D3h',
        NAME: 'capital o with acute/td>'
      },
      {
        CHAR: 'Ô',
        BIN: '11010100',
        DEC: 212,
        OCT: 324,
        HEX: 'D4h',
        NAME: 'capital o with circumflex'
      },
      {
        CHAR: 'Õ',
        BIN: '11010101',
        DEC: 213,
        OCT: 325,
        HEX: 'D5h',
        NAME: 'capital o with tilde'
      },
      {
        CHAR: 'Ö',
        BIN: '11010110',
        DEC: 214,
        OCT: 326,
        HEX: 'D6h',
        NAME: 'capital o with diaeresis'
      },
      {
        CHAR: '×',
        BIN: '11010111',
        DEC: 215,
        OCT: 327,
        HEX: 'D7h',
        NAME: 'multiplication sign'
      },
      {
        CHAR: 'Ø',
        BIN: '11011000',
        DEC: 216,
        OCT: 330,
        HEX: 'D8h',
        NAME: 'capital o with slash'
      },
      {
        CHAR: 'Ù',
        BIN: '11011001',
        DEC: 217,
        OCT: 331,
        HEX: 'D9h',
        NAME: 'capital u with grave'
      },
      {
        CHAR: 'Ú',
        BIN: '11011010',
        DEC: 218,
        OCT: 332,
        HEX: 'DAh',
        NAME: 'capital u with acute'
      },
      {
        CHAR: 'Û',
        BIN: '11011011',
        DEC: 219,
        OCT: 333,
        HEX: 'DBh',
        NAME: 'capital u with circumflex'
      },
      {
        CHAR: 'Ü',
        BIN: '11011100',
        DEC: 220,
        OCT: 334,
        HEX: 'DCh',
        NAME: 'capital u with diaeresis'
      },
      {
        CHAR: 'Ý',
        BIN: '11011101',
        DEC: 221,
        OCT: 335,
        HEX: 'DDh',
        NAME: 'capital y with acute'
      },
      {
        CHAR: 'Þ',
        BIN: '11011110',
        DEC: 222,
        OCT: 336,
        HEX: 'DEh',
        NAME: 'capital thorn'
      },
      {
        CHAR: 'ß',
        BIN: '11011111',
        DEC: 223,
        OCT: 337,
        HEX: 'DFh',
        NAME: 'lowercase ess-zed'
      },
      {
        CHAR: 'à',
        BIN: '11100000',
        DEC: 224,
        OCT: 340,
        HEX: 'E0h',
        NAME: 'lowercase a with grave'
      },
      {
        CHAR: 'á',
        BIN: '11100001',
        DEC: 225,
        OCT: 341,
        HEX: 'E1h',
        NAME: 'lowercase a with acute'
      },
      {
        CHAR: 'â',
        BIN: '11100010',
        DEC: 226,
        OCT: 342,
        HEX: 'E2h',
        NAME: 'lowercase a with circumflex'
      },
      {
        CHAR: 'ã',
        BIN: '11100011',
        DEC: 227,
        OCT: 343,
        HEX: 'E3h',
        NAME: 'lowercase a with tilde'
      },
      {
        CHAR: 'ä',
        BIN: '11100100',
        DEC: 228,
        OCT: 344,
        HEX: 'E4h',
        NAME: 'lowercase a with diaeresis'
      },
      {
        CHAR: 'å',
        BIN: '11100101',
        DEC: 229,
        OCT: 345,
        HEX: 'E5h',
        NAME: 'lowercase a with ring above'
      },
      {
        CHAR: 'æ',
        BIN: '11100110',
        DEC: 230,
        OCT: 346,
        HEX: 'E6h',
        NAME: 'lowercase ae'
      },
      {
        CHAR: 'ç',
        BIN: '11100111',
        DEC: 231,
        OCT: 347,
        HEX: 'E7h',
        NAME: 'lowercase c with cedilla'
      },
      {
        CHAR: 'è',
        BIN: '11101000',
        DEC: 232,
        OCT: 350,
        HEX: 'E8h',
        NAME: 'lowercase e with grave'
      },
      {
        CHAR: 'é',
        BIN: '11101001',
        DEC: 233,
        OCT: 351,
        HEX: 'E9h',
        NAME: 'lowercase e with acute'
      },
      {
        CHAR: 'ê',
        BIN: '11101010',
        DEC: 234,
        OCT: 352,
        HEX: 'EAh',
        NAME: 'lowercase e with circumflex'
      },
      {
        CHAR: 'ë',
        BIN: '11101011',
        DEC: 235,
        OCT: 353,
        HEX: 'EBh',
        NAME: 'lowercase e with diaeresis'
      },
      {
        CHAR: 'ì',
        BIN: '11101100',
        DEC: 236,
        OCT: 354,
        HEX: 'ECh',
        NAME: 'lowercase e with grave'
      },
      {
        CHAR: 'í',
        BIN: '11101101',
        DEC: 237,
        OCT: 355,
        HEX: 'EDh',
        NAME: 'lowercase i with acute'
      },
      {
        CHAR: 'î',
        BIN: '11101110',
        DEC: 238,
        OCT: 356,
        HEX: 'EEh',
        NAME: 'lowercase i with circumflex'
      },
      {
        CHAR: 'ï',
        BIN: '11101111',
        DEC: 239,
        OCT: 357,
        HEX: 'EFh',
        NAME: 'lowercase i with diaeresis'
      },
      {
        CHAR: 'ð',
        BIN: '11110000',
        DEC: 240,
        OCT: 360,
        HEX: 'F0h',
        NAME: 'lowercase eth'
      },
      {
        CHAR: 'ñ',
        BIN: '11110001',
        DEC: 241,
        OCT: 361,
        HEX: 'F1h',
        NAME: 'lowercase n with tilde'
      },
      {
        CHAR: 'ò',
        BIN: '11110010',
        DEC: 242,
        OCT: 362,
        HEX: 'F2h',
        NAME: 'lowercase o with grave'
      },
      {
        CHAR: 'ó',
        BIN: '11110011',
        DEC: 243,
        OCT: 363,
        HEX: 'F3h',
        NAME: 'lowercase o with acute'
      },
      {
        CHAR: 'ô',
        BIN: '11110100',
        DEC: 244,
        OCT: 364,
        HEX: 'F4h',
        NAME: 'lowercase o with circumflex'
      },
      {
        CHAR: 'õ',
        BIN: '11110101',
        DEC: 245,
        OCT: 365,
        HEX: 'F5h',
        NAME: 'lowercase o with tilde'
      },
      {
        CHAR: 'ö',
        BIN: '11110110',
        DEC: 246,
        OCT: 366,
        HEX: 'F6h',
        NAME: 'lowercase o with diaeresis'
      },
      {
        CHAR: '÷',
        BIN: '11110111',
        DEC: 247,
        OCT: 367,
        HEX: 'F7h',
        NAME: 'division sign'
      },
      {
        CHAR: 'ø',
        BIN: '11111000',
        DEC: 248,
        OCT: 370,
        HEX: 'F8h',
        NAME: 'lowercase o with slash'
      },
      {
        CHAR: 'ù',
        BIN: '11111001',
        DEC: 249,
        OCT: 371,
        HEX: 'F9h',
        NAME: 'lowercase u with grave'
      },
      {
        CHAR: 'ú',
        BIN: '11111010',
        DEC: 250,
        OCT: 372,
        HEX: 'FAh',
        NAME: 'lowercase u with acute'
      },
      {
        CHAR: 'û',
        BIN: '11111011',
        DEC: 251,
        OCT: 373,
        HEX: 'FBh',
        NAME: 'lowercase u with circumflex'
      },
      {
        CHAR: 'ü',
        BIN: '11111100',
        DEC: 252,
        OCT: 374,
        HEX: 'FCh',
        NAME: 'lowercase u with diaeresis'
      },
      {
        CHAR: 'ý',
        BIN: '11111101',
        DEC: 253,
        OCT: 375,
        HEX: 'FDh',
        NAME: 'lowercase y with acute'
      },
      {
        CHAR: 'þ',
        BIN: '11111110',
        DEC: 254,
        OCT: 376,
        HEX: 'FEh',
        NAME: 'lowercase thorn'
      },
      {
        CHAR: 'ÿ',
        BIN: '11111111',
        DEC: 255,
        OCT: 377,
        HEX: 'FFh',
        NAME: 'lowercase y with diaeresis'
      }
    ],
    list: [{
      CHAR: '',
      DEC: '',
      HEX: '',
      NAME: ''
    }]
  },
  mutations: {
    calcValue (state, value) {
      state.value = value.value
    },
    find (state, value) {
      state.list[0].CHAR = state.rows[value.value].CHAR
      state.list[0].DEC = state.rows[value.value].DEC
      state.list[0].HEX = state.rows[value.value].HEX.replace('h', '')
      state.list[0].NAME = state.rows[value.value].NAME
    },
    setBit (state, obj) {
      console.log(obj.value)
      state.bit[obj.value.name.toString()] = obj.value.value
      console.log(state.bit)
    },
    setRgb0 (state) {
      state.rgb0 = state.bit.bit7 + state.bit.bit6
    },
    setRgb1 (state) {
      state.rgb1 = state.bit.bit0 + state.bit.bit1
    },
    setRgb2 (state) {
      state.rgb2 = state.bit.bit2 + state.bit.bit3
    },
    setRgb3 (state) {
      state.rgb3 = state.bit.bit4 + state.bit.bit5
    }
  },
  actions: {}
}
