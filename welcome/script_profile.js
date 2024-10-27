document.addEventListener("DOMcontentLoaded", () => {
    const button = document.getElementById("btn-detail");
    const extraDetails = document.getElementById("extra-details")
    button.addEventListener("click", () => {
        extraDetails.classList.toggle("hidden")
        button.textContent = extraDetails.classList.contains("hidden")
        ? "View more details"
        : "Ocult details";
    });
});