function convert(from, temperature){

    if (from === "c"){
        return temperature * (9/5) + 32;
    }else{
        return (temperature - 32) * (5/9);
    }

}

console.log(convert("c", 23));
console.log(convert("f", 73.4));