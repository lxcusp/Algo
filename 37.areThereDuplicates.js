function areThereDuplicates_frequencyCounter() {
    let collection = {}
    for(let val in arguments){
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
        if(collection[key] > 1) return true
    }
    return false
}

function areThereDuplicates_multiplePointers(...args){
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
        if(args[start] === args[next]){
            return true
        }
        start++;
        next++;
    }
    return false;
}

function areThereDuplicates_oneLiner(){
    return new Set(arguments).size !== arguments.length;
}






// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number
// of arguments, and checks whether there are any duplicates among the arguments 
// passed in.  You can solve this using the frequency counter pattern OR the multiple
// pointers pattern.

// Examples:
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 

// Restrictions:
// Time - O(n)
// Space - O(n)

// Bonus:
// Time - O(n log n)
// Space - O(1)