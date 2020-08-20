///////          Created Object "DRINKS"

let drinks = [
    {
    name:"Old Fashioned",
    image: "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg", 
    style: "stirred", 
    ingredients: "2 ounces of Whiskey, 1/2 ounce of simple syrup, 2 dashes of 'Angostura Bitters'. Stir 20 times. Serve on ice. Garnish with orange twist. The oldest recipe for this drink appears in George Kappeler's Modern American Drinks, published in 1895."
},
{
    name:"Daiquiri", 
    image:"https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg", 
    style: "shaken",
    ingredients:"2 ounces of Rum, 3/4 ounce of fresh lime juice, 3/4 ounce of simple syrup. Shake and strain, serve up in a coupe. Garnish with a lime wheel. Named after the mining town in Cuba and championed by an American ex-pat engineer by the name of Jennings Cox in the early 1900's."
},
{   name:"Martini",
    image:"https://www.thecocktaildb.com/images/media/drink/71t8581504353095.jpg",
    style:"stirred",
    ingredients:"2 ounces of Gin, 1 ounce of dry vermouth, 2 dashes of orange bitters. Stir 20 times, serve up in a coupe. Garnish with a lemon twist or olives. French or dry vermouth arrived in the United States in 1870's, and it was only natural that bartenders would start using this product as a subsitute for sweet or italian vermouth."
},
{ name:"Collins",
    image:"https://www.thecocktaildb.com/images/media/drink/qystvv1439907682.jpg",
    style: "highball",
    ingredients:"2 ounces of Gin, 3/4 ounce of fresh lemon juice, 3/4 ounce of simple syrup. Shake and strain over ice in highball, top with club soda. First appeared in print in Jerry Thomas' Bartender Guide in 1876."
},
{   name:"Manhattan",
    image: "https://www.thecocktaildb.com/images/media/drink/hz7p4t1589575281.jpg",
    style:"stirred",
    ingredients:"2 ounces of whiskey, 1 ounce of sweet vermouth, 2 dashes of 'Angostura Bitters'. Stir 20 times, serve up in a coupe or on the rocks. Garnish with Luxardo cherry. First appeared in print in Harry Johnson's Bartender's manual in 1882."
}
];
console.log(drinks[0].name)
// making score an element, then changing score to integer with innerHTML
let score = document.querySelector(".score")
let currentScore = parseInt(score.innerHTML)
let greenButton = document.querySelectorAll(".button-green")
// Loops through all the green buttons, and adds event listener "click", 
// and then we added a helper function too addScore(+10). 
for(let i=0;i < greenButton.length;i++){
greenButton[i].addEventListener("click", addScore)
}
function addScore (){
    console.log(this)
    currentScore += 10
    score.innerHTML= currentScore
    if(currentScore ===50){
        alert('Congratulations, you passed!')
    }
}
function deductScore (){
    console.log(this)
    currentScore -= 10
    score.innerHTML= currentScore
}
function resetScore () {
    console.log(this)
    currentScore = 0
    score.innerHTML=currentScore
}
// Loops through all the red buttons, and adds event listener "click"
// and then we add helper function "deduct score" that will deduct 10 points
let redButton = document.querySelectorAll(".button-red")
for(let i=0;i<redButton.length;i++) {
    redButton[i].addEventListener("click",deductScore)
}

let cardContainers = document.querySelectorAll(".cards") // This then becomes an array.
console.log(cardContainers)

function cardListener(){
    console.log(this.childNodes[0])
    

    // childNodes[1]is the front of the card
    // childNodes[0] is the back of the card
    // if the front of the card is showing, then the back card display is none.
    // if the back of the card is showing, then the front display is none.
  if (this.childNodes[1].style.display == "block") { 
  this.childNodes[0].style.display = "block";
  this.childNodes[1].style.display= "none"
  // childNodes[1] will now be off
  } 
  else {
        // childNodes[0] will now be off
        this.childNodes[0].style.display = "none";
        this.childNodes[1].style.display = 'block'
    }
  }
 


// this refers to the specific card that its attached to.
//Created a loop, that will create DIVs for the front and back card.
for (let i =0;i<cardContainers.length;i++){
    let cardFront = document.createElement('div')
    let cardInformation = document.createTextNode(drinks[i].name)
    let cardBack = document.createElement('div')
    let cardBackInformation = document.createTextNode(drinks[i].ingredients)
    cardBack.appendChild(cardBackInformation)
    cardContainers[i].appendChild(cardBack)
    cardBack.style.height= "100%"
    cardBack.style.display= "none"
    // Here were are adding images to front 'front' of the div.
    // We are using string interpolation to go through the drink array:"image"
    // and adding backgroundImages
    // Here we are styling the images and position.
    cardFront.style.backgroundImage = `url(${drinks[i].image})`
    cardFront.style.backgroundSize = "cover"
    cardFront.style.height= "100%"
    cardFront.style.backgroundPosition= "center"
    cardFront.style.display= "block"
    cardFront.appendChild(cardInformation)
    cardContainers[i].appendChild(cardFront) // cardContainers need [i] because it is an array.
    cardContainers[i].addEventListener("click", cardListener)
}

