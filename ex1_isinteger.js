function is_integer(number){
    if(Number.isInteger(number)){
        return true;
    }else{
        return false;
    }
}

//console.log(typeof(1));
console.log(is_integer(1));
console.log(is_integer(1.1));