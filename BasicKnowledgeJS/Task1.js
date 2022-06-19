function filter_list(arr){
    for (let i = 0; i<arr.length; i = i+1){
        if (typeof arr[i] == 'number'){
            continue;
        }
        else if (typeof arr[i] == 'string' || typeof arr[i] == 'symbol'){
            delete arr[i];
        }
    }
    arr = arr.filter(element => element !== null);
    console.log(arr);
    return arr;
}

filter_list([1,2,'a','b']);
filter_list([1,'a','b',0,15]);
filter_list([1,2,'aasf','1','123',123]);
