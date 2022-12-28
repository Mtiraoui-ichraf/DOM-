/* declaration du button (-) */
var BtnMin = document.querySelectorAll('.min')
console.log(BtnMin)


/* declaration du button (+) */
var PlusBtn = document.querySelectorAll('.plus')
console.log(PlusBtn)


/* declaration input de quantité */
var qte = document.querySelectorAll('.qte')
console.log(qte[0].value)
console.log(typeof (+qte[0].value))

/* declaration input total */
var tatl = document.querySelector('.totaux')
console.log (tatl)
console.log(+tatl.value)


/* declaration input price */
var price = document.querySelectorAll('.price')
console.log(+price[0].value)


/* declaration button delete */
var delt = document.querySelectorAll('.Remov')

/* declaration icon heart */
var heart = document.querySelectorAll('.Heart')


/* fonction d'incrimentation  */
for (let i = 0; i < PlusBtn.length; i++) {
    PlusBtn[i].addEventListener('click' , () => {
        +qte[i].value ++ ,
        tatl.value = +tatl.value + (+(price[i].value))
    })   
}

/* fonction de décrémentation  */
for (let i = 0; i < BtnMin.length; i++) {
    BtnMin[i].addEventListener('click' , ()=> {
        if (+qte[i].value > 0) {
            +qte[i].value --
            tatl.value = +tatl.value - (+(price[i].value))
        }
        
    })
    
}


for (let i = 0; i < delt.length; i++) {
    delt[i].addEventListener('click' , ()=>{
        delt[i].parentElement.remove()
        tatl.value = +tatl.value - (+qte[i].value * +(price[i].value))
    })
    
}

for (let i = 0; i < heart.length; i++) {
    heart[i].addEventListener('click' , ()=>{
    
    if ((heart[i].style.backgroundColor) != "red") {
        heart[i].style.backgroundColor = "red";
    } else {
        heart[i].style.backgroundColor = "white";
    } 
    }) 
}

