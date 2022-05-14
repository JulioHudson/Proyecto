const products = []

class Product {
    constructor (id,name,description,price,instock,imgScr){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.instock = instock;
        this.imgScr = imgScr;
    }   
}

const id0001 = new Product("0001","Blue Moon","2022 diary with our famous cat Luna, seeing the moon reflected in the water",1300,80,"./images/merchan/agendas/blueagendas.jpg");
const id0002 = new Product("0002","Ballons","2022 diary with Luna having a balloon adventure",1300,80,"./images/merchan/agendas/pinkagendas.jpg");
const id0003 = new Product("0003","Bitacoras","A story to play, read and color",750,50,"./images/merchan/books/bitacoras-front.jpg");
const id0004 = new Product("0004","El escritor de exitos","Compilation of my adventures with art and drawing",500,50,"./images/merchan/books/escritor-front.jpg");
const id0005 = new Product("0005","Garabatos","Compilation of stories, characters, jokes and reflections",900,50,"./images/merchan/books/garabatos-front.jpg");
const id0006 = new Product("0006","Garabatos 2","Second installment of our successful book, with new stories and characters",900,50,"./images/merchan/books/garabatos2-front.jpg");
const id0007 = new Product("0007","Luna","My story with an amazing kitty named Luna",800,50,"./images/merchan/books/luna-front.jpg");
const id0008 = new Product("0008","Supercat Luna","Logbook with Luna dressing like a superhero",700,70,"./images/merchan/logbooks/logbookfront-01.jpg");
const id0009 = new Product("0009","Luna with dark background","Logbook with Luna making funny faces",700,70,"./images/merchan/logbooks/logbookfront-02.jpg");
const id0010 = new Product("0010","101 Lunas","The one hundred and one Lunas logbook",700,70,"./images/merchan/logbooks/logbookfront-03.jpg");
const id0011 = new Product("0011","Luna with dark background","Mug with Luna making funny faces",1200,100,"./images/merchan/mugs/mug-01.jpg");
const id0012 = new Product("0012","101 Lunas","The one hundred and one Lunas mug",1200,100,"./images/merchan/mugs/mug-02.jpg");
const id0013 = new Product("0013","Dreaming in the clouds","Mug with Luna dreaming in the clouds",1200,100,"./images/merchan/mugs/mug-03.jpg");
const id0014 = new Product("0014","Curious Luna","Mug",1200,100,"./images/merchan/mugs/mug-04.jpg");

products.push(id0001,id0002,id0003,id0004,id0005,id0006,id0007,id0008,id0009,id0011,id0012,id0013,id0014);

console.log(products);

/* const payments = [30,20,0]

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

 */