function pairs(arr, n){
    var array = [];
    var num = 0;
    for (let i = 0; i<arr.length; i++){
        for (let j = i+1; j<arr.length; j++){
            if ((arr[i] + arr[j]) == n){
                num++;
            }
        }
    }
    console.log(num);
    return num;
}

pairs([1, 3, 6, 2, 2, 0, 4, 5], 5);
