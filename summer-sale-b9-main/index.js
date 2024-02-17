let totalPriceSum = 0;
let countTitle = 1;
const cards = document.querySelectorAll(".card");

for (const card of cards) {
    card.addEventListener("click", function(){
        const title = card.querySelector("h3").innerText;
        const price = parseFloat(card.querySelector("span").innerText.split(" ")[1]);
        const titleContainer = document.getElementById("title-container");
        const P = document.createElement("p")
        P.innerText = countTitle +". "+ title;
        titleContainer.appendChild(P);
        countTitle ++;
        totalPriceSum += price;
        console.log(totalPriceSum);
        const totalPriceAdd = document.getElementById("totalPrice");
        totalPriceAdd.innerText = totalPriceSum.toFixed(2);
    })
}
const btn = document.getElementById("apply-btn")
btn.addEventListener("click", function(){
    const copunElement = document.getElementById("input-field").value;
    const copun = copunElement.toUpperCase().split(" ").join("");
    console.log(copun);

    if(totalPriceSum > 200){
        if (copun === "SELL200") {
            alert("copen is valid")

        }else{
            alert("copun is invalid")
        }

    }else{
        alert("at last 200$ abobe koren bahi!")
    }
})


