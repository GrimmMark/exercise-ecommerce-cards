const container = document.querySelector(".flex");
const database = [{ image_path: "./images/img1.png", price: "our price 9,99 only", to_buy: "Buy Now" },
{ image_path: "./images/img2.png", price: "our price 2,99 only", to_buy: "Sold" },
{ image_path: "./images/img3.png", price: "our price 99,99 only", to_buy: "Buy Now" }

];
database.forEach(function(card_item) {
   console.log(card_item.image_path); 
   console.log(card_item.price); 
   console.log(card_item.to_buy); 
});

function create_card() {

    const card_er = document.createElement("div");
    card_er.classList.add("card");
    container.appendChild(card_er);


    const picture = document.createElement("img");
    picture.src = "./images/img1.png";
    card_er.appendChild(picture);

    const text = document.createElement("h2");
    text.classList.add("price_label");
    text.innerText = "Our Price 9,99$ only";
    card_er.appendChild(text);

    const button = document.createElement("button");
    button.classList.add("shop");
    button.innerText = "Buy Now";
    card_er.appendChild(button);

};

create_card();
