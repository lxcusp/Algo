function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    console.log(i + 1);
    return i + 1;
}

countUniqueValues([1,3,3,5,8,8,8,8,10,21,32,33]) //8