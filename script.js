const form = document.getElementById("rating")
const submitted = document.getElementById("submitted")


const input = document.querySelectorAll("input")
const label = document.querySelectorAll("label")

for(i=0; i<input.length; i++){
    input[i].addEventListener("click", (e) => {
        document.getElementById("rating-value").textContent = e.target.value;
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    form.style.display = 'none'
    submitted.style.display = 'block'
})