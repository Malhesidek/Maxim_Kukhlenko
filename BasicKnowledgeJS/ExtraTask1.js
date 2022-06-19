function nextBigger(num){
    let arr = num.toString().split('');
    arr = arr.map(Number);

    for (let i = arr.length - 1; i >=0;  i--){
        for(let j = i - 1; j >= 0; j--){
            if(arr[i] > arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                console.log(arr.join(""));
                return arr;
            }
        }
        return -1;
    }
    
}

nextBigger(12);
nextBigger(513);
nextBigger(2017);