
// setTimeout


const body = document.querySelector("body")
const snakeField = document.createElement("div")
snakeField.setAttribute("id", "snakeField");
body.append(snakeField)


function createDiv() {
    console.log("test");
    for (i=0; i <100; i++) {
        let div = document.createElement("div");
        div.className ="item"
        div.addEventListener("mouseover", (event) => {
            event.target.style.background ="orange"
            setTimeout(()=> {
                event.target.style.background = ""
            }, 500)
        })
        snakeField.append(div)  
    }
   
}

createDiv()     
   let timeVar = setTimeout(() => {
        div.addEventListener("mouseout", (event) => event.target.style.background ="")
    },200)