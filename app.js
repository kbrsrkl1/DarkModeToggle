const inputEl = document.querySelector(".input")

const bodyEl = document.querySelector("body")

console.log(inputEl.checked)

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody()

function updateBody(){
    if(inputEl.checked){
        bodyEl.style.background = "black"
    }else{
        bodyEl.style.background = "white";
    }
}

inputEl.addEventListener("change" , () => {
    updateBody();
    updateLocalStorage()
})

function updateLocalStorage(){
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}