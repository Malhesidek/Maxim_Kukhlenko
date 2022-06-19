function friends(str){
    str = str.toUpperCase();
    str = str.split(";");
    var temp, res = '';
    for (let i in str){       
        str[i] = str[i].split(":");
    }
    for (let i = 0; i<str.length; i++){
        temp = str[i][0];
        str[i][0] = str[i][1];
        str[i][1] = temp;
    }
    str = str.sort();
    for (i in str){
        res += '('+str[i][0]+', '+str[i][1]+')';
    }
    console.log(res);
    return res;
}

s = "Fired:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
friends(s);