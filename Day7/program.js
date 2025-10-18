document.getElementById("main").innerText = "Hi yash"
document.getElementById("main").classList.add("text-5xl", "font-bold", "text-green-500")
function updateDescription() {
    const descriptionElement = document.getElementById("description");
    descriptionElement.innerText = "This is an updated description.";
    descriptionElement.classList.add("text-lg", "text-blue-500");
    }