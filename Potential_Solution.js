function consonantOrVowel(letter){
    switch (letter) {
        case 'A':
        case 'a':
        case 'E':
        case 'e':
        case 'I':
        case 'i':
        case 'O':
        case 'o':
        case 'U':
        case 'u':
                return 'Vowel';
          // Consonants (both uppercase and lowercase)
          case 'B':
            case 'b':
            case 'C':
            case 'c':
            case 'D':
            case 'd':
            case 'F':
            case 'f':
            case 'G':
            case 'g':
            case 'H':
            case 'h':
            case 'J':
            case 'j':
            case 'K':
            case 'k':
            case 'L':
            case 'l':
            case 'M':
            case 'm':
            case 'N':
            case 'n':
            case 'P':
            case 'p':
            case 'Q':
            case 'q':
            case 'R':
            case 'r':
            case 'S':
            case 's':
            case 'T':
            case 't':
            case 'V':
            case 'v':
            case 'W':
            case 'w':
            case 'X':
            case 'x':
            case 'Y':
            case 'y':
            case 'Z':
            case 'z':
                return 'Consonant';
             default:
                // Check if the input is a single letter and ALPHABET 
                 if (!(letter.length === 1 && /[a-zA-Z]/.test(letter))) {
                     return 'Not a valid input, please enter a single letter string';
                 }
    }
      };