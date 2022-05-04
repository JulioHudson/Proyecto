const products = []

class Product {
    constructor (name,type,price){
        this.name = name;
        this.type = type;
        this.price = price;
    }   
}

const mug = new Product("Mug","Marchandice",300);
const book = new Product("Book","Marchandice",250);
const draw = new Product("Draw","Marchandice",500);
const pic = new Product("Picture","Marchandice",400);

products.push(mug,book,draw,pic);

const payments = [30,20,0]

let msg1 = "Wich product would you like tu buy?" + "\n" +
           "1 - Mug with custom image and text" + "\n" +
           "2 - Ilustration book" + "\n" +
           "3 - Personalized draw" + "\n" +
           "4 - Select image with custom text" + "\n";

let menu1 = () => parseInt(prompt(msg1));
let product = menu1(); 

if (product < 1 || product > 4 || isNaN(product)) {
    alert("La opcion seleccionada es incorrecta");
    product = menu1(); 
}

let msg = "wich payment method do you want to use" + "\n" +
           "1 - Wired transfer" + "\n" +
           "2 - Credit card" + "\n" +
           "3 - Mercadopago" + "\n";

let menu = () => parseInt(prompt(msg));
let result = menu();

if (result < 1 || result > 3 || isNaN(result)) {
    alert("La opcion seleccionada es incorrecta");
    result = menu(); 
}


function discount(price,percent) {
    return price - ((price * percent) / 100);
}
console.log(products[product-1])
let productName = products[product-1].name;
let paymentDisc = payments[result-1];
let productPrice = products[product-1].price;



alert("El producto " + productName + " tiene un descuento de " + paymentDisc + " siendo el precio final de " + discount(productPrice,paymentDisc));

