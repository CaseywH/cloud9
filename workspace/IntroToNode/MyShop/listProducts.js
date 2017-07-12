var faker = require("faker");

console.log("====================");
console.log("Welcome To My Shop!!");
console.log("====================");


function fakeProducts(num){
    for (var i = 0; i < num; i++) {
       var product = faker.commerce.productName();
        var price = faker.commerce.price();
        console.log(product + ": " + "$" + price);
    }
}

fakeProducts(15);





