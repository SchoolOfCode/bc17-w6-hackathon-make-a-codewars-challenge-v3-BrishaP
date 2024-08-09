import {test, expect} from "vitest";
import {consonantOrVowel} from "./main.js";

//use Equivalency Partitioning, Boundary Value Analysis, and Decision Tables to plan tests

//VALID INPUTS
//expectations from single letter vowels 
    //Use the exhaustive list method from prev workshop
    //UPPERCASE LETTER VOWEL
    //LOWERCASE LETTER VOWEL
test.each([
    ['a', "Vowel"],
    ['A', "Vowel"],
    ['e', "Vowel"],
    ['E', "Vowel"],
    ['i', "Vowel"],
    ['I', "Vowel"],
    ['o', "Vowel"],
    ['O', "Vowel"],
    ['u', "Vowel"],
    ['U', "Vowel"]
])('Single letter vowels %s returns a value of %s',(letter,TypeOfLetter)=>{
    //act
    const response = consonantOrVowel(letter);
    
    //assert
    expect(response).toEqual(TypeOfLetter);

});


//Single letter consonants
    //UPPERCASE LETTER CONSONANT
    //LOWERCASE LETTER CONSONANT
    test.each([
        ['b', 'Consonant'], ['B', 'Consonant'],
        ['c', 'Consonant'], ['C', 'Consonant'],
        ['d', 'Consonant'], ['D', 'Consonant'],
        ['f', 'Consonant'], ['F', 'Consonant'],
        ['g', 'Consonant'], ['G', 'Consonant'],
        ['h', 'Consonant'], ['H', 'Consonant'],
        ['j', 'Consonant'], ['J', 'Consonant'],
        ['k', 'Consonant'], ['K', 'Consonant'],
        ['l', 'Consonant'], ['L', 'Consonant'],
        ['m', 'Consonant'], ['M', 'Consonant'],
        ['n', 'Consonant'], ['N', 'Consonant'],
        ['p', 'Consonant'], ['P', 'Consonant'],
        ['q', 'Consonant'], ['Q', 'Consonant'],
        ['r', 'Consonant'], ['R', 'Consonant'],
        ['s', 'Consonant'], ['S', 'Consonant'],
        ['t', 'Consonant'], ['T', 'Consonant'],
        ['v', 'Consonant'], ['V', 'Consonant'],
        ['w', 'Consonant'], ['W', 'Consonant'],
        ['x', 'Consonant'], ['X', 'Consonant'],
        ['y', 'Consonant'], ['Y', 'Consonant'],
        ['z', 'Consonant'], ['Z', 'Consonant']
    ])('Single letter vowels %s returns a value of %s',(letter,TypeOfLetter)=>{
        //act
        const response = consonantOrVowel(letter);
        
        //assert
        expect(response).toEqual(TypeOfLetter);
    
    });

//INVALID INPUTS
    //ALPHABETIC :not single letter string e.g "cdefg" 
    
    test('Return invalid message when a long albhabetic string is input',() => {
        expect(consonantOrVowel("abcdefg")).toEqual('Not a valid input, please enter a single letter string')
    });

    //NON-ALPHABETIC: not letters in strings e.g '1','@'

    test('Return invalid message when a non-alphabetic string is input',()=> {
        expect(consonantOrVowel('1')).toEqual('Not a valid input, please enter a single letter string')
    })

    //EMPTY STRING

    test('Return invalid message when empty string is input',()=> {
        expect(consonantOrVowel('')).toEqual('Not a valid input, please enter a single letter string')
    })

    //Two letters

q
    //multiple string in the same input
