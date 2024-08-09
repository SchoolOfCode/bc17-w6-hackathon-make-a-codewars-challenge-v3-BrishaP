Make your own Codewars Style Challenge

-Clearly describing a problem/task that you want others to solve
-Writing unit tests to check whether their solution to your task is correct
-Present your project plan, story, and anything else you feel supports your creation process and final outcome in a document

Ticket 1:
-Install Vitest
    -REMEMBER: script test in package.json
    (NPM test script)
-Brainstorm:
Disney ideation:
Dreamer: 
-I would have an interactive public/frontend with graphics of Countdown
-Carol Vorderman would speak to you in alerts
-The website itself would look like the letters game from countdown 
-You would need to complete the task and get the countdown music playing on the website
-Multiple challenges
-Really complex storyline

Realist:
-Short time frame, won't get a frontend done in time
                Won't get multiple levels completed, I can plan for two
-Maybe get a few images in the readME file instead 

Spoiler:
-The brief is a kata challenge and not a website, KEEP IT SIMPLE
-No long winded storylines or music playing when katas are completed
-Meet the basic MVP's/tickets of installing vitest, creating basic tests 
-Next MVP is to complete level 1
-Next MVP: add a few hints and tips
-Next MVP: complete level 2 
-Stretch tasks/MVP's are all levels after this 
-Maybe use GitTasks

(Brainstorm originally on figma)
Inspiration: Countdown

'Can You Help Carol Vorderman?'
Scenario: Trying to help Carol determine whether a letter is a vowel or consonant

function consonantOrVowel(Letter inserted here as a string input) {};

-Maybe 3 different levels of difficulty:
    1) Easy: parameter input is a single letter input
        function consonantOrVowel(letter){};

    2) Intermediate: parameter input is a single word and the number of vowels and consonants need to be counted
        function countConsonantsAndVowels(word) {};

    3) Hard: parameter input is a sentence and the number of vowels and consonants need to be counted and spaces between words need to be ignored
        function countConsonantAndVowels(sentence) {};

    4) Bonus: Replace all of the consonants with random vowels and replace all of the vowels with random consonants. This must work on letters, single words and sentences.
        function consonantVowelSwap(stringInput) {};

Aim to get level 1 completed any maybe move to level 2

Team planning: 
-Every hour meet up to demo and discuss
-If you need help, unmute/message in slack to ask for help

Ticket 2: Plan Your Kata
Scenario: 
Easy level 1:
"PLEASE HELP! I told Carol I would fill in for her at work, but I don't know the differences between vowels and consonants... 
Can you help me by writing a function?"

Your function should take in a string containing a single letter in a string either uppercase or lowercase.

A few examples 

 'function consonantOrVowel('A')' should return the string 'Vowel'

  'function consonantOrVowel('b')' should return the string 'Consonant'

  function  'function consonantOrVowel('33')' should return the string 'Not a valid input, please enter a single letter string'.

  export function  'function consonantOrVowel(letter){
//Good luck!
  };

Ticket 3: Write your kata
Equivalency Partitioning, Boundary Value Analysis, and Decision Tables 

Equivalency Partitioning:

    Valid Inputs:

    Vowels: Single letter strings that are vowels (e.g., 'a', 'E')
    Consonants: Single letter strings that are consonants (e.g., 'b', 'D')

    Invalid Inputs:

    Not a Single Letter: Strings with more than one character (e.g., 'ab', '123')
    Non-Alphabetic Characters: Strings that are not letters (e.g., '1', '#')

    Test Cases:

    Valid Inputs:

    consonantOrVowel('A') should return 'Vowel'
    consonantOrVowel('b') should return 'Consonant'
    
    Invalid Inputs:

    consonantOrVowel('33') should return 'Not a valid input, please enter a single letter string'
    consonantOrVowel('ab') should return 'Not a valid input, please enter a single letter string'
    consonantOrVowel('#') should return 'Not a valid input, please enter a single letter string'

Boundary Value Analysis:

    Test Cases:

    Boundary between valid and invalid inputs:

    Valid Boundary Test Case: consonantOrVowel('a') (lower boundary of valid single letter)
    Invalid Boundary Test Case: consonantOrVowel('') (empty string, should be invalid)
    Invalid Boundary Test Case: consonantOrVowel('aa') (two letters, should be invalid)

Decision Tables:
 
| Input | Is a Single character? | Is Alphabetic? | Output    |
|-------|-------------------   |----------------|-----------|
| 'a'   | Yes                  | Yes            | Vowel     |
| 'B'   | Yes                  | Yes            | Consonant |
| '1'   | Yes                  | No             | *         |
| '#'   | Yes                  | No             | *         |
| 'ab'  | No                   | -              | *         |
| ''    | No                   | -              | *         |

* Not a valid input, please enter a single letter string 

I might ignore the 'Is a Single character' bit 

2) Intermediate: parameter input is a single word and the number of vowels and consonants need to be counted
        function countConsonantsAndVowels(word) {};

Equivalence Partitioning:

    Partitions:

    Valid Inputs:

    All Letters: Words containing only alphabetic characters, regardless of case (e.g., 'hello', 'WORLD')

    Invalid Inputs:

    Contains Non-Alphabetic Characters: Words containing numbers or special characters (e.g., 'hello1', 'world!')
    Empty String: A string with no characters (e.g., '')

    Test Cases:

    Valid Inputs:

    countConsonantsAndVowels('hello') should return { vowels: 2, consonants: 3 }

    countConsonantsAndVowels('WORLD') should return { vowels: 1, consonants: 4 }
    Invalid Inputs:

    countConsonantsAndVowels('hello1') should return 'Not a valid input, please enter a single word'
    countConsonantsAndVowels('') should return 'Not a valid input, please enter a single word'
    countConsonantsAndVowels('hello!') should return 'Not a valid input, please enter a single word'

Boundary Value Analysis:

    Test Cases:

    Lower Boundary Test Case:

    countConsonantsAndVowels('a') should return { vowels: 1, consonants: 0 } (single vowel)
    countConsonantsAndVowels('b') should return { vowels: 0, consonants: 1 } (single consonant)

    Upper Boundary Test Case:

    countConsonantsAndVowels('abcdefghijklmnopqrstuvwxyz') should return { vowels: 5, consonants: 21 } (complete alphabet, only letters)

    Invalid Boundary Test Cases:

    countConsonantsAndVowels('a1') should return 'Not a valid input, please enter a single word'
    countConsonantsAndVowels('abc!') should return 'Not a valid input, please enter a single word'

Decision Tables:

| Input              | Is Alphabetic? | Is Non-Empty? | Output                                          |
|--------------------|----------------|---------------|-------------------------------------------------|
| 'hello'            | Yes            | Yes           | { vowels: 2, consonants: 3 }                    |
| 'WORLD'            | Yes            | Yes           | { vowels: 1, consonants: 4 }                    |
| 'hello1'           | No             | Yes           | Not a valid input, please enter a single word   |
| 'hello!'           | No             | Yes           | Not a valid input, please enter a single word   |
| ''                 | -              | No            | Not a valid input, please enter a single word   |
| 'abcdefghijklmnopqrstuvwxyz' | Yes | Yes | { vowels: 5, consonants: 21 }                   |
| 'a1'               | No             | Yes           | Not a valid input, please enter a single word   |