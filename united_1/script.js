let name = "Jhon";
const age = "17"

function saudation(){
    alert("Hellow, welcome our website");
}

const buttonChange = document.getElementById("buttonChange");
buttonChange.addEventListener("click", function(){
    const   title = document.querySelector("h1");
    title.textContent = "DOM Modification"
})

const mybotton = document.getElementById("button");
mybotton.addEventListener("click", function(){
    alert("Button clicked")
});
