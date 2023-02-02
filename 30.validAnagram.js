function validAnagram (first, second) {
    if(first.length !== second.length) {
        return false;
    }
    const lookup = {}
    for(let i = 0; i < first.length; i++){
        let letter = first[i];
        //if letter exists, increment, otherwise set to 1;
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
        console.log(lookup);
    }

    for(let i = 0; i < second.length; i++){
        let letter = second[i];
        //if cannot find letter or that letter is now zero, then it's not an anagram.
        if(!lookup[letter]){
            return false;
        } else {
            lookup[letter] -= 1;
        }
        console.log(lookup)
    }
    return true;
}

validAnagram('anagram', 'nagaram')

{ a: 1 }
{ a: 1, n: 1 }
{ a: 2, n: 1 }
{ a: 2, n: 1, g: 1 }
{ a: 2, n: 1, g: 1, r: 1 }
{ a: 3, n: 1, g: 1, r: 1 }
{ a: 3, n: 1, g: 1, r: 1, m: 1 }

{ a: 3, n: 0, g: 1, r: 1, m: 1 }
{ a: 2, n: 0, g: 1, r: 1, m: 1 }
{ a: 2, n: 0, g: 0, r: 1, m: 1 }
{ a: 1, n: 0, g: 0, r: 1, m: 1 }
{ a: 1, n: 0, g: 0, r: 0, m: 1 }
{ a: 0, n: 0, g: 0, r: 0, m: 1 }
{ a: 0, n: 0, g: 0, r: 0, m: 0 }