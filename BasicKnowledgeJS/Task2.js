function first_non_repeating_letter(s){
    var str = s;
    var repeat = false;
    var num = "";
    str = str.toLowerCase();
    for (let i = 0; i<str.length; i++){
        repeat = false;
        for (let j = 0; j<str.length; j++){
            if ( i == j ){
                continue;
            }
            if (str[i] == str[j] && i != j){
                repeat = true;
            }
        }
        if (!repeat){
            num = i;
            break;
        }
    }
    if (num == ''){
        console.log(num)    
    }
    else {
        console.log(s[num])
    }
    return num;
}

first_non_repeating_letter('stress');
first_non_repeating_letter('sTreSS');