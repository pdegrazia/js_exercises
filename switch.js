function day_of_the_week(day){

    switch(day){
        case 1: return("Monday");
            break;
        case 2: return("Tuesday");
            break;
        default: return("Invalid!");
    }

}

console.log(day_of_the_week(1));
day_of_the_week(2);
console.log(day_of_the_week(10));