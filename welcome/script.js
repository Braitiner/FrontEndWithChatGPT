//This script displays an alert when the button is clicked
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("btn-alert"); 
    button.addEventListener("click", () => { 
        alert("hello, you clicked on button");
    });
});
