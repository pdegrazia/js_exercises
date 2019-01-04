var book = new Object(null);

book.author = "Dickens";

console.log(book.author);

var book = {author: "Coe", title: "The Rotters Club"};

console.log(book.author);

for (var p in book){
    console.log(p + ": " + book[p]);
}

console.log(book.valueOf());