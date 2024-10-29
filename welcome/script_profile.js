document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("btn-details");
    const extraDetails = document.getElementById("extra-details")
    button.addEventListener("click", () => {
        extraDetails.classList.toggle("hidden")
        button.textContent = extraDetails.classList.contains("hidden")
        ? "View more details"
        : "Ocult details";
    });
});