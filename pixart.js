const palette = {
    ".": [0, 0, 0, 255],
    "a": [26, 18, 18, 255],
    "b": [41, 29, 29, 255],
    "c": [50, 35, 35, 255],
    "d": [75, 54, 54, 255],
    "e": [118, 89, 89, 255],
    "f": [103, 0, 0, 255],
    "g": [138, 8, 8, 255],
    "h": [168, 0, 0, 255],
    "i": [214, 205, 191, 255],
    "j": [31, 54, 28, 255],
    "k": [46, 77, 43, 255],
    "l": [60, 95, 56, 255],
};
const gfxData = {
    player: {
        idle: [
			[
				'----------------',
				'-----.......----',
				'----.hiiiiii.---',
				'---.hiiiiiiii.--',
				'---.hiiiiiiii.--',
				'---.hii.ii.ii.--',
				'---.hih.ii.hi.--',
				'----.hiiiiii.---',
				'-----.......----',
				'----..hhhhh..---',
				'---.hi.iiii.h.--',
				'---.hh.iiii.h.--',
				'----..hi..i..---',
				'-----.h.-.i.----',
				'------..-..-----',
				'----------------',
				'----------------',
			],
			[
				'----------------',
				'----------------',
				'-----.......----',
				'----.hiiiiii.---',
				'---.hiiiiiiii.--',
				'---.hiiiiiiii.--',
				'---.hii.ii.ii.--',
				'---.hih.ii.hi.--',
				'----.hiiiiii.---',
				'----.........---',
				'---.hi.hhhh.h.--',
				'---.hh.iiii.h.--',
				'----..hi..i..---',
				'-----.h.-.i.----',
				'------..-..-----',
				'----------------',
				'----------------',
			],
			[
				'----------------',
				'----------------',
				'-----.......----',
				'----.hiiiiii.---',
				'---.hiiiiiiii.--',
				'---.hiiiiiiii.--',
				'---.hii.ii.ii.--',
				'---.hih.ii.hi.--',
				'----.hiiiiii.---',
				'-----.......----',
				'----..hhhhh..---',
				'---.hi.iiii.h.--',
				'---.hh.i..i.h.--',
				'----..h.-.i..---',
				'------..-..-----',
				'----------------',
				'----------------',
			],
		],
		jump: [
			[
				'----------------',
				'-----.......----',
				'----.hiiiiii.---',
				'---.hiiiiiiii.--',
				'---.hiiiiiiii.--',
				'---.hii.ii.ii.--',
				'---.hih.ii.hi.--',
				'----.hiiiiii.---',
				'-----.......----',
				'-----.hhhhh.----',
				'----..hiiii..---',
				'---.hi.iiii.h.--',
				'---.hh.i..i.h.--',
				'----..h.-.i..---',
				'------..-..-----',
				'----------------',
				'----------------',
			],
			[
				'-----.......----',
				'----.hiiiiii.---',
				'---.hiiiiiiii.--',
				'---.hii.ii.ii.--',
				'---.hih.ii.hi.--',
				'---.hiiiiiiii.--',
				'----.hiiiiii.---',
				'-----.......----',
				'---...hhhhh...--',
				'--.hi.hiiii.hh.-',
				'--.hh.hiiii.hh.-',
				'---...hi..i...--',
				'-----.h.-.i.----',
				'------..-..-----',
				'----------------',
				'----------------',
				'----------------',
			],
			[
				'-----.......----',
				'----.hiiiiii.---',
				'---.hii.ii.ii.--',
				'---.hih.ii.hi.--',
				'---.hiiiiiiii.--',
				'---.hiiiiiiii.--',
				'----.hiiiiii.---',
				'---...........--',
				'--.hi.hhhhh.hh.-',
				'--.hh.hiiii.hh.-',
				'---...hiiii...--',
				'-----.hi..i.----',
				'-----.h.-.i.----',
				'------..-..-----',
				'----------------',
				'----------------',
			],
		],	
		fall: [
			[
				'-----.......----',
				'----.hiiiiii.---',
				'---.hiiiiiiii.--',
				'---.hii.ii.ii.--',
				'---.hih.ii.hi.--',
				'---.hiiiiiiii.--',
				'----.hiiiiii.---',
				'---...........--',
				'--.hi.hhhhh.hh.-',
				'--.hh.hiiii.hh.-',
				'---...hiiii...--',
				'-----.hi..i.----',
				'-----.h.-.i.----',
				'------..-..-----',
				'----------------',
				'----------------',
			],
			[
				'-----.......----',
				'----.hiiiiii.---',
				'---.hiiiiiiii.--',
				'---.hiiiiiiii.--',
				'---.hii.ii.ii.--',
				'---.hih.ii.hi.--',
				'----.hiiiiii.---',
				'-----.......----',
				'---...hhhhh...--',
				'--.hi.hiiii.hh.-',
				'--.hh.hiiii.hh.-',
				'---...hi..i...--',
				'-----.h.-.i.----',
				'------..-..-----',
				'----------------',
				'----------------',
			],
			[
				'----------------',
				'-----.......----',
				'----.hiiiiii.---',
				'---.hiiiiiiii.--',
				'---.hiiiiiiii.--',
				'---.hiiiiiiii.--',
				'---.hii.ii.ii.--',
				'----.hh.ii.h.---',
				'-----.......----',
				'----..hhhhh..---',
				'---.hi.iiii.h.--',
				'---.hh.iiii.h.--',
				'----..hi..i..---',
				'-----.h.-.i.----',
				'------..-..-----',
				'----------------',
				'----------------',
			],		
		],
		run: [
			[
				'----------------',
				'-----.......----',
				'----.hiiiiii.---',
				'---.hiiiiiiii.--',
				'---.hiiiiiiii.--',
				'---.hii.ii.ii.--',
				'---.hih.ii.hi.--',
				'----.hiiiiii.---',
				'-----.......----',
				'---..hhhhhh..---',
				'--.hi.iiiii.h.--',
				'--.hh.iiiii.h.--',
				'---..hiiiii..---',
				'-----..hh..-----',
				'-------...------',
				'----------------',
				'----------------',
			],
			[
				'----------------',
				'----------------',
				'-----.......----',
				'----.hiiiiii.---',
				'---.hiiiiiiii.--',
				'---.hiiiiiiii.--',
				'---.hii.ii.ii.--',
				'---.hih.ii.hi.--',
				'----.hiiiiii.---',
				'-----.......----',
				'----..hhhhh..---',
				'---.hi.iiii.h.--',
				'---.hh.iiii.h.--',
				'----..hi..i..---',
				'-----.h.--..----',
				'-----..---------',
				'----------------',
				'----------------',
			],
			[
				'----------------',
				'-----.......----',
				'----.hiiiiii.---',
				'---.hiiiiiiii.--',
				'---.hiiiiiiii.--',
				'---.hii.ii.ii.--',
				'---.hih.ii.hi.--',
				'----.hiiiiii.---',
				'-----.......----',
				'-----..hhhh..---',
				'----.hi.iii.h.--',
				'----.hh.iii.h.--',
				'-----....ii..---',
				'-----...-...----',
				'----------------',
				'----------------',
			],
			[
				'----------------',
				'----------------',
				'-----.......----',
				'----.hiiiiii.---',
				'---.hiiiiiiii.--',
				'---.hiiiiiiii.--',
				'---.hii.ii.ii.--',
				'---.hih.ii.hi.--',
				'----.hiiiiii.---',
				'-----.......----',
				'----..hhhhh..---',
				'---.hi.iiii.h.--',
				'---.hh.iiii.h.--',
				'----..hi.ii..---',
				'-----...-.i.----',
				'----------..----',
				'----------------',
				'----------------',
			],
		],
		groundpound: [
			[
				'-----.......----',
				'----.hiiiiii.---',
				'---.hiiiiiiii.--',
				'---.hiiiiiiii.--',
				'---.hii.ii.ii.--',
				'---.hih.ii.hi.--',
				'----.hiiiiii.---',
				'-----.......----',
				'----..hhhhh..---',
				'---.hi.iiii.h.--',
				'---.hh.iiii.h.--',
				'----..hiiii..---',
				'-----.h...i.----',
				'------..-..-----',
				'----------------',
				'----------------',
			],
			[
				'----------------',
				'-----.......----',
				'----.hiiiiii.---',
				'---.hiiiiiiii.--',
				'--h.hiiiiiiii.--',
				'---.hii.ii.ii.--',
				'---.hih.ii.hi.h-',
				'---h.hiiiiii.h--',
				'----h.......----',
				'----..hhhhh..---',
				'---.hi.iiii.h.--',
				'---.hh.iiii.h.--',
				'----..hiiii..---',
				'-----.hiiii.----',
				'-----h.....h----',
				'------hhhhh-----',
			],
			[
				'----------------',
				'-----.......----',
				'----.hiiiiii.-h-',
				'--h.hiiiiiiii.h-',
				'--h.hiiiiiiii.--',
				'---.hii.ii.ii.h-',
				'--h.hih.ii.hi.hh',
				'--hh.hiiiiii.hh-',
				'---hh.......----',
				'----..hhhhh..--h',
				'--h.hi.iiii.h.h-',
				'--h.hh.iiii.h.--',
				'----..hiiii..-h-',
				'----h.hiiii.h---',
				'-----h.....hh---',
				'-----hhhhhhh----',
				'------hhhhh-----',
			],
			[
				'----------------',
				'-----.......----',
				'----.hiiiiii.-h-',
				'--h.hiiiiiiii.h-',
				'--h.hiiiiiiii.--',
				'---.hii.ii.ii.h-',
				'--h.hih.ii.hi.hh',
				'--hh.hiiiiii.hh-',
				'---hh.......----',
				'----..hhhhh..--h',
				'--h.hi.iiii.h.h-',
				'--h.hh.iiii.h.--',
				'----..hiiii..-h-',
				'----hh.....hh---',
				'-----hhhhhhh----',
				'------hhhhh-----',
			],
			[
				'----------------',
				'-----.......----',
				'----.hiiiiii.-h-',
				'--h.hiiiiiiii.--',
				'---.hiiiiiiii.--',
				'---.hii.ii.ii.h-',
				'--h.hih.ii.hi.hh',
				'---h.hiiiiii.h--',
				'-----.......---h',
				'----..hhhhh..-h-',
				'--h.hi.iiii.h.--',
				'---.hh.iiii.h.--',
				'hh--..hiiii..---',
				'----hh.....hh---',
				'--h-hhhhhhhhh-hh',
				'----------------',
			],
		],
        heartFull: [
            "-..-..-",
            ".fg.hh.",
            ".ffggg.",
            "-.fff.-",
            "--.f.--",
            "---.---",
        ],
        heartEmpty: [
            "-..-..-",
            ".cc.cc.",
            ".ccccc.",
            "-.ccc.-",
            "--.c.--",
            "---.---",
        ],
        spikeBall: [
            "----.----",
            "--..i..--",
            "-..ghh..-",
            "-.fgggh.-",
            ".ifgighi.",
            "-.fgggg.-",
            "-..fff..-",
            "--..i..--",
            "----.----",
        ],
    },
    tiles: {
        // Uppercase represents the block, or foreground tiles, and lowercase letters represent the tilesets for background tiles.
        // Each tile is named based on the four directly adjacent tiles starting at the top, and rotating clockwise. "y" if there is a tile there, and "n" if there isn't. For example, ynnn should be displayed if there's a tile on the top, and on the right.
        "A": {
            yyyy: [
                "ddddcdddd",
                "ccccccccc",
                "dcddddddd",
                "dcddddddd",
                "ccccccccc",
                "dddddddcd",
                "dddddddcd",
                "ccccccccc",
                "ddddcdddd",
            ],
            ynnn: [
                ".........",
                "ccccccccc",
                "dcddddddd",
                "dcddddddd",
                "ccccccccc",
                "dddddddcd",
                "dddddddcd",
                "ccccccccc",
                "ddddcdddd",
            ],
            nynn: [
                "ddddcddc.",
                "cccccccc.",
                "dcdddddc.",
                "dcdddddc.",
                "cccccccc.",
                "dddddddc.",
                "dddddddc.",
                "cccccccc.",
                "ddddcddc.",
            ],
            nnyn: [
                "ddddcdddd",
                "ccccccccc",
                "dcddddddd",
                "dcddddddd",
                "ccccccccc",
                "dddddddcd",
                "dddddddcd",
                "ccccccccc",
                ".........",
            ],
            nnny: [
                ".cddcdddd",
                ".cccccccc",
                ".cddddddd",
                ".cddddddd",
                ".cccccccc",
                ".cdddddcd",
                ".cdddddcd",
                ".cccccccc",
                ".cddcdddd",
            ],
            yynn: [
                "........-",
                "cccccccc.",
                "dcdddddc.",
                "dcdddddc.",
                "cccccccc.",
                "dddddddc.",
                "dddddddc.",
                "cccccccc.",
                "ddddcddc.",
            ],
            nyyn: [
                "ddddcddc.",
                "cccccccc.",
                "dcdddddc.",
                "dcdddddc.",
                "cccccccc.",
                "dddddddc.",
                "dddddddc.",
                "cccccccc.",
                "........-",
            ],
            nnyy: [
                ".cddcdddd",
                ".cccccccc",
                ".cddddddd",
                ".cddddddd",
                ".cccccccc",
                ".cdddddcd",
                ".cdddddcd",
                ".cccccccc",
                "-........",
            ],
            ynny: [
                "-........",
                ".cccccccc",
                ".cddddddd",
                ".cddddddd",
                ".cccccccc",
                ".cddddddd",
                ".cddddddd",
                ".cccccccc",
                ".cddddddd",
            ],
            yyyn: [
                "........-",
                "cccccccc.",
                "dddddddc.",
                "dddddddc.",
                "cccccccc.",
                "dddddddc.",
                "dddddddc.",
                "cccccccc.",
                "........-",
            ],
            nyyy: [
                ".cddcddc.",
                ".ccccccc.",
                ".cdddddc.",
                ".cdddddc.",
                ".ccccccc.",
                ".cdddddc.",
                ".cdddddc.",
                ".ccccccc.",
                "-.......-",
            ],
            ynyy: [
                "-........",
                ".cccccccc",
                ".cddddddd",
                ".cddddddd",
                ".cccccccc",
                ".cdddddcd",
                ".cdddddcd",
                ".cccccccc",
                "-........",
            ],
            yyny: [
                "-.......-",
                ".ccccccc.",
                ".cdddddc.",
                ".cdddddc.",
                ".ccccccc.",
                ".cdddddc.",
                ".cdddddc.",
                ".ccccccc.",
                ".cddcddc.",
            ],
            ynyn: [
                ".........",
                "ccccccccc",
                "dcddddddd",
                "dcddddddd",
                "ccccccccc",
                "dddddddcd",
                "dddddddcd",
                "ccccccccc",
                ".........",
            ],
            nyny: [
                ".cddcddc.",
                ".ccccccc.",
                ".cdddddc.",
                ".cdddddc.",
                ".ccccccc.",
                ".cdddddc.",
                ".cdddddc.",
                ".ccccccc.",
                ".cddcddc.",
            ],
            nnnn: [
                "-.......-",
                ".ccccccc.",
                ".cdddddc.",
                ".cdddddc.",
                ".ccccccc.",
                ".cdddddc.",
                ".cdddddc.",
                ".ccccccc.",
                "-.......-",
            ],
        },
        "a": {
            yyyy: [
                "bbbbabbbb",
                "aaaaaaaaa",
                "babbbbbbb",
                "babbbbbbb",
                "aaaaaaaaa",
                "bbbbbbbab",
                "bbbbbbbab",
                "aaaaaaaaa",
                "bbbbabbbb",
            ],
            ynnn: [
                "a---aa--a",
                "aaaaaaaaa",
                "babbbbbbb",
                "babbbbbbb",
                "aaaaaaaaa",
                "bbbbbbbab",
                "bbbbbbbab",
                "aaaaaaaaa",
                "bbbbabbbb",
            ],
            nynn: [
                "bbbbabba-",
                "aaaaaaaa-",
                "babbbbbaa",
                "babbbbbaa",
                "aaaaaaaaa",
                "bbbbbbbaa",
                "bbbbbbba-",
                "aaaaaaaaa",
                "bbbbabbaa",
            ],
            nnyn: [
                "bbbbabbbb",
                "aaaaaaaaa",
                "babbbbbbb",
                "babbbbbbb",
                "aaaaaaaaa",
                "bbbbbbbab",
                "bbbbbbbab",
                "aaaaaaaaa",
                "aa-aaaaaa",
            ],
            nnny: [
                "-abbabbbb",
                "aaaaaaaaa",
                "aabbbbbbb",
                "aabbbbbbb",
                "aaaaaaaaa",
                "aabbbbbab",
                "aabbbbbab",
                "aaaaaaaaa",
                "-abbabbbb",
            ],
            yynn: [
                "aaaaa-aa-",
                "aaaaaaaaa",
                "babbbbbaa",
                "babbbbbaa",
                "aaaaaaaaa",
                "bbbbbbba-",
                "bbbbbbba-",
                "aaaaaaaaa",
                "bbbbabbaa",
            ],
            nyyn: [
                "bbbbabbaa",
                "aaaaaaaa-",
                "babbbbba-",
                "babbbbbaa",
                "aaaaaaaaa",
                "bbbbbbbaa",
                "bbbbbbbaa",
                "aaaaaaaaa",
                "aa---aaa-",
            ],
            nnyy: [
                "-abbabbbb",
                "-aaaaaaaa",
                "aabbbbbbb",
                "aabbbbbbb",
                "aaaaaaaaa",
                "aabbbbbab",
                "-abbbbbab",
                "aaaaaaaaa",
                "-aaaaaaaa",
            ],
            ynny: [
                "a--aaaa-a",
                "aaaaaaaaa",
                "-abbbbbbb",
                "aabbbbbbb",
                "aaaaaaaaa",
                "aabbbbbab",
                "-abbbbbab",
                "-aaaaaaaa",
                "aabbabbbb",
            ],
            yyyn: [
                "a--aa-aa-",
                "aaaaaaaaa",
                "babbbbbaa",
                "babbbbbaa",
                "aaaaaaaa-",
                "bbbbbbba-",
                "bbbbbbbaa",
                "aaaaaaaaa",
                "aaaaaa-aa",
            ],
            nyyy: [
                "aabbabbaa",
                "aaaaaaaa-",
                "aabbbbba-",
                "-abbbbbaa",
                "aaaaaaaaa",
                "-abbbbba-",
                "-abbbbbaa",
                "aaaaaaaaa",
                "-aa-aaaa-",
            ],
            ynyy: [
                "aa--aa-aa",
                "-aaaaaaaa",
                "aabbbbbbb",
                "aabbbbbbb",
                "-aaaaaaaa",
                "-abbbbbab",
                "-abbbbbab",
                "aaaaaaaaa",
                "-aa--aa-a",
            ],
            yyny: [
                "-aa---aa-",
                "aaaaaaaaa",
                "aabbbbbaa",
                "-abbbbbaa",
                "-aaaaaaa-",
                "aabbbbba-",
                "aabbbbba-",
                "aaaaaaaaa",
                "aabbabbaa",
            ],
            ynyn: [
                "aa---aaaa",
                "aaaaaaaaa",
                "babbbbbbb",
                "babbbbbbb",
                "aaaaaaaaa",
                "bbbbbbbab",
                "bbbbbbbab",
                "aaaaaaaaa",
                "aaaa--aaa",
            ],
            nyny: [
                "aabbabbaa",
                "-aaaaaaaa",
                "-abbbbbaa",
                "aabbbbbaa",
                "aaaaaaaaa",
                "-abbbbbaa",
                "aabbbbba-",
                "aaaaaaaaa",
                "aabbabbaa",
            ],
            nnnn: [
                "-aa--a-a-",
                "aaaaaaaaa",
                "-abbbbbaa",
                "-abbbbba-",
                "-aaaaaaa-",
                "aabbbbbaa",
                "aabbbbbaa",
                "aaaaaaaa-",
                "-aaa--aaa",
            ],
        },
        "B": {
            yyyy: [
                "ddddddddd",
                "ddddddddd",
                "ddddddddd",
                "ddddddddd",
                "deedddeed",
                "eeeeeeeee",
                "eeeeeeeee",
                "eeeeeeeee",
                "eddeeedde",
            ],
            ynnn: [
                ".........",
                "kjjjkkjjj",
                "jccjjjccj",
                "cddcccddc",
                "deedddeed",
                "eeeeeeeee",
                "eeeeeeeee",
                "eeeeeeeee",
                "eddeeedde",
            ],
            nynn: [
                "dddddcjj.",
                "ddddddcj.",
                "ddddddcj.",
                "dddddcjk.",
                "dedddcjk.",
                "eeeedcjj.",
                "eeeeedcj.",
                "eeeeedcj.",
                "eddedcjk.",
            ],
            nnyn: [
                "ddddddddd",
                "ddddddddd",
                "eddeeedde",
                "eeeeeeeee",
                "deedddeed",
                "cddcccddc",
                "jccjjjccj",
                "kjjjkkjjj",
                ".........",
            ],
            nnny: [
                ".jjcddddd",
                ".jcdddddd",
                ".jcdddddd",
                ".kjcddddd",
                ".kjcddded",
                ".jjcdeeee",
                ".jcdeeeee",
                ".jcdeeeee",
                ".kjcdedde",
            ],
            yynn: [
                ".......",
                "jjjjkkk.",
                "jccjjjjk.",
                "cddcccjk.",
                "deeddcjk.",
                "eeeedcjj.",
                "eeeeedcj.",
                "eeeeedcj.",
                "eddedcjj.",
            ],
            nyyn: [
                "dddddcjj.",
                "ddddedcj.",
                "eddeedcj.",
                "eeeedcjj.",
                "deeddcjk.",
                "cddcccjk.",
                "jccjjjjk.",
                "jjjjjjk.",
                ".......",
            ],
            nnyy: [
                ".jjcddddd",
                ".jcdedddd",
                ".jcdeedde",
                ".jjcdeeee",
                ".jjcddeed",
                ".jjcccddc",
                ".jjjjjccj",
                " .jjjjjjj",
                "  .......",
            ],
            ynny: [
                "  .......",
                " .kkkjjjj",
                ".kjjjjccj",
                ".jjcccddc",
                ".jjcddeed",
                ".jjcdeeee",
                ".jcdeeeee",
                ".jcdeeeee",
                ".jjcdedde",
            ],
            yyyn: [
                ".......",
                "jjjjkkk.",
                "jccjjjjk.",
                "cddcccjk.",
                "dddddcjk.",
                "cddcccjk.",
                "jccjjjjk.",
                "jjjjjjk.",
                ".......",
            ],
            nyyy: [
                ".jjcdcjj.",
                ".jcdddcj.",
                ".jcdddcj.",
                ".jjcdcjj.",
                ".jjcdcjk.",
                ".jjcccjk.",
                ".kjjjjjk.",
                " .kjjjk.",
                "  .....",
            ],
            ynyy: [
                "  .......",
                " .kkkjjjj",
                ".kjjjjccj",
                ".jjcccddc",
                ".jjcddddd",
                ".jjcccddc",
                ".kjjjjccj",
                " .kjjjjjj",
                "  .......",
            ],
            yyny: [
                "  .....",
                " .kkkkk.",
                ".kjjjjjk.",
                ".jjcccjk.",
                ".jjcdcjk.",
                ".jjcdcjj.",
                ".jcdddcj.",
                ".jcdddcj.",
                ".jjcdcjj.",
            ],
            ynyn: [
                ".........",
                "kjjjkkjjj",
                "jccjjjccj",
                "cddcccddc",
                "ddddddddd",
                "cddcccddc",
                "jccjjjccj",
                "kjjjkkjjj",
                ".........",
            ],
            nyny: [
                ".jjcdcjj.",
                ".jcdddcj.",
                ".jcdddcj.",
                ".kjcdcjk.",
                ".kjcdcjk.",
                ".jjcdcjj.",
                ".jcdddcj.",
                ".jcdddcj.",
                ".kjcdcjk.",
            ],
            nnnn: [
                "  .....",
                " .kkkkk.",
                ".kjjjjjk.",
                ".jjcccjk.",
                ".jjcdcjk.",
                ".jjcccjk.",
                ".kjjjjjk.",
                " .kjjjk.",
                "  .....",
            ],
        },
    },
    props: {
        
    },
    enemies: {
        slimes: {
            g1: {
                idle: [
                    " aaaaa",
                    "aakllla",
                    "ajkkkka",
                    "ajjkkka",
                    "ajjjjja",
                    "aaaaaaa",
                ],
                jump: [
                    
                ],
            },
            g2: {
                idle: [
                    " aaaaaaaa",
                    "aakkllllla",
                    "akkkkkkkla",
                    "ajkkkkkkka",
                    "ajkkkkkkka",
                    "ajjkkkkkka",
                    " ajjjjjja",
                    " aaaaaaaa",
                ],
                jump: [
                    
                ],
            },
            r1: {
                idle: [
                    " aaaaa",
                    "aaghhha",
                    "afgggga",
                    "affggga",
                    "afffffa",
                    "aaaaaaa",
                ],
                jump: [
                    
                ],
            },
            r2: {
                idle: [
                    " aaaaaaaa",
                    "aagghhhhha",
                    "agggggggha",
                    "afggggggga",
                    "afggggggga",
                    "affgggggga",
                    " affffffa",
                    " aaaaaaaa",
                ],
                jump: [
                    
                ],
            },
        },
        bosses: {
            
        },
    },
};

/** Sprite reference, from spritesheet.
 * 
 */
class SpriteRef {
    /** Constructs an instance of SpriteRef.
     * 
     * @constructor
     * @param {CanvsaImageSource} spritesheet 
     * @param {number} x 
     * @param {number} y 
     * @param {number} w 
     * @param {number} h 
     */
    constructor(spritesheet, x, y, w, h) {
        this.spritesheet = spritesheet;
        // SOURCE, NOT DESTINATION COORDINATES!
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    /** Draws the sprite reference onto a canvas.
     * 
     * @param {CanvasRenderingContext2D} ctx 
     * @param {number} x 
     * @param {number} y 
     * @param {number} pixel - pixel size
     * @returns {void}
     */
    draw(ctx, x, y, pixel) {
        // this.x, etc is source coordinates
        // x, y, etc is destination coordinates
        ctx.save();
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(this.spritesheet,
            this.x, this.y, this.w, this.h,
            x, y, this.w * pixel, this.h * pixel
        );
        ctx.restore();
    }
}

/** Spritesheet, containing all sprites. 
 * 
 */
class Spritesheet {
    /** Constructs an instance of Spritesheet.
     * 
     * @param {number} width 
     * @param {number} height 
     */
    constructor(width, height) {
        this.canvas = document.createElement("canvas");
        this.canvas.width = width;
        this.canvas.height = height;
        this.w = width;
        this.h = height;
        this.ctx = this.canvas.getContext("2d");
        // tracking variables so sprites don't overlap
        this.penX = 0;
        this.penY = 0;
        this.nextY = 0;
    }

    /** INTERNAL: Stores a single sprite into an imageData.
     * 
     * @param {ImageData} imageData
     * @param {number[][]} palette 
     * @param {string[]} sprite 
     * @returns {SpriteRef}
     */
    #internalStoreImageData(imageData, palette, sprite) {
        const spriteH = sprite.length;
        const spriteW = Math.max(...sprite.map(row => row.length));
        if (spriteW > this.w) {
            throw "Error: spritesheet is too small for image to fit!";
        }
        let endX = this.penX + spriteW, endY;
        if (endX > this.w) {
            this.penX = 0;
            this.penY = this.nextY;
            endX = this.penX + spriteW;
        }
        endY = this.penY + spriteH;
        if (endY > this.h) {
            throw "Error: spritesheet is too small for image to fit!";
        }
        const spriteRef = new SpriteRef(this.canvas, this.penX, this.penY, spriteW, spriteH);        
        for (let y = this.penY; y < endY; y ++) {
            for (let x = this.penX; x < endX; x ++) {
                // imageData.data is a 1-dimensional array
                // 4 values for each pixel, r g b a
                // this gets the location of the pixel in the data
                // << 2 is a fancy way of multiplying by 4
                const n = (y * this.w + x) * 4;
                const c = palette?.[sprite[y - this.penY]?.[x - this.penX]];
                if (c) {
                    imageData.data[n+0] = c[0];
                    imageData.data[n+1] = c[1];
                    imageData.data[n+2] = c[2];
                    imageData.data[n+3] = c[3];
                }
            }
        }
        this.penX = endX;
        if (endY > this.nextY) this.nextY = endY;
        return spriteRef;
    }

    /** INTERNAL: Stores a bunch of sprites in the spritesheet at once. It is more
     * efficient to store many at once than many in many calls.
     * 
     * @param {number[][]} palette 
     * @param {Object} sprites 
     * @returns {Object|SpriteRef}
     */
    #internalStoreMultipleImageData(imageData, palette, sprites) {
        const spriteRefs = {};
        if (Array.isArray(sprites) && typeof sprites[0] === "string") {
            // we've hit a sprite, and now, we can store image data
            // (sprites is singular here lol)
            return this.#internalStoreImageData(imageData, palette, sprites);
        }
        for (const i in sprites) {
            spriteRefs[i] = this.#internalStoreMultipleImageData(imageData, palette, sprites[i]);
        }
        return spriteRefs;
    }

    /** Stores a bunch of sprites in the spritesheet at once. It is more
     * efficient to store many at once than many in many calls.
     * 
     * @param {number[][]} palette 
     * @param {Object} sprites 
     * @returns {Object}
     */
    store(palette, sprites) {
        const imageData = this.ctx.getImageData(0, 0, this.w, this.h);
        const spriteRefs = this.#internalStoreMultipleImageData(imageData, palette, sprites);
        this.ctx.putImageData(imageData, 0, 0);
        return spriteRefs;
    }
}

const spritesheet = new Spritesheet(300, 300);
const gfx = spritesheet.store(palette, gfxData);