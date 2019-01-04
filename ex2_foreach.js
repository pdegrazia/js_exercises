function add_all(arr){
    var sum = 0;
    arr.forEach(element => {
       sum += element; 
    });

    return sum;
}

console.log(add_all([1,2,3]));