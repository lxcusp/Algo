function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
    for(let i = 0; i < num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSumFinal = Math.max(maxSum, tempSum)
    }
    return maxSumFinal
}


maxSubarraySum([2,6,5,3,2,6,7,8,4,3,7,4,3],3)
//first: add 2+6+5 stored in tempSum = 13;
//second: start from where num is: 3. then sliding the window in line10: tempSum = 13 - 2 + 3 = 14
