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

let radio = document.getElementsByName("Product");
let check;
let check2;
let button1 = document.getElementById("b1");
let button2 = document.getElementById("b2");
let payMethod = document.getElementsByName("Payment")
let container = document.getElementById("text1")
let container2 = document.getElementById("text2")

function selectedChoise(){
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            check = radio[i].value;
            if (check == "Mug") {
                container2.innerHTML = '<h2>You have selected a mug with custom image and text</h2>';
            }else if (check == "Book") {
                container2.innerHTML = '<h2>You have selected an ilustration book</h2>';
            }else if (check == "Draw") {
                container2.innerHTML = '<h2>You have selected a personalized draw</h2>';
            }else if (check == "Pic") {
                container2.innerHTML = '<h2>You have selected an image with custom text</h2>';
            }else{
                container2.innerHTML = '<h2>You have to select a valid option</h2>';
            }
            console.log(check);
        }
    }
}
function selectedChoise2(){
    for (let i = 0; i < payMethod.length; i++) {
        if (payMethod[i].checked) {
            check2 = payMethod[i].value;
            console.log(check2);
            if (check2 == "Transfer") {
                container.innerHTML = '<h2>You have to select wired transfer as your payment method</h2>';
            }
            else if (check2 == "Ccard") {
                container.innerHTML = '<h2>You have to select credit card as your payment method</h2>';
            }
            else if (check2 == "Mp") {
                container.innerHTML = '<h2>You have to select Mercado Pago as your payment method</h2>';
            }else{
                container.innerHTML = '<h2>You have to select a valid option</h2>';
            }
        }
    }
}
button1.onclick = selectedChoise;
button2.onclick = selectedChoise2;  

