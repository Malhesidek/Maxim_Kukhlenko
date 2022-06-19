function digital_root(num){
    var last = 0;
    var res = 0;
    while (num>0){
        last = num%10;
        num -= last;
        num /=10;
        res += last;   
    }
    if (res > 9){
        return digital_root(res); 
    }
    else {
        console.log(res);
        return res;
    }
}

digital_root(16);
digital_root(942);
digital_root(132189);
digital_root(493193);