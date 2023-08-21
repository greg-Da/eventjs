let footer = document.getElementsByTagName("footer")[0]
let countClick = 1
footer.addEventListener("click", function(){ 
    console.log("clique " + countClick)
    countClick++
})

document.getElementsByClassName("navbar-toggler")[0].addEventListener("click", function(){
    document.getElementById("navbarHeader").classList.toggle("collapse")
})

let firstCard = document.getElementsByClassName("card")[0]
let cardFirstBtn = firstCard.getElementsByClassName("btn-outline-secondary")[0]
cardFirstBtn.addEventListener("click", function(){
    firstCard.style.color = "red"
})


let secondCard = document.getElementsByClassName("card")[1]
let cardSecondBtn = secondCard.getElementsByClassName("btn-outline-secondary")[0]
cardSecondBtn.addEventListener("click", function(){
    if(secondCard.style.color == "green"){
        secondCard.style.color = ""
    }else{
        secondCard.style.color = "green"
    }
})


let cdn = document.getElementsByTagName("link")[0]
document.getElementsByTagName("header")[0].addEventListener("dblclick", function(){
    if(cdn.disabled === true){
        cdn.disabled = false
    }else{
        cdn.disabled = true
    }
})

let cards = document.getElementsByClassName("card")
for(let loop = 0;loop < cards.length; loop++){
    let card = cards[loop]
    let cardBtnView = cards[loop].getElementsByClassName("btn-success")[0]

    cardBtnView.addEventListener("mouseover", function(){
        if(card.getElementsByTagName("p")[0].style.display === "none"){
            card.getElementsByTagName("p")[0].style.display = "block"
            card.getElementsByTagName("img")[0].style.width = "100%"
        }else{
            card.getElementsByTagName("p")[0].style.display = "none"
            card.getElementsByTagName("img")[0].style.width = "20%"
        }
    })

}

let forwardBtn = document.querySelector("div.container p .btn-secondary")
forwardBtn.addEventListener("click", function(){
    let colCards = document.querySelectorAll(".album .container .row .col-md-4")

    document.querySelector(".album .container .row").insertBefore(colCards[5], colCards[0])
})

let backBtn = document.querySelector("div.container p .btn-primary")
backBtn.addEventListener("click", function(event){
    event.preventDefault()
    let colCards = document.querySelectorAll(".album .container .row .col-md-4")

    document.querySelector(".album .container .row").insertBefore(colCards[0], colCards[5].nextSibling)
})