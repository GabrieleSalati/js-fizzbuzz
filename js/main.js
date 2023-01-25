// DOM ELEMENT

const element = document.querySelector("grid")

// CICLO

console.log("loop-start")

for (let i = 0; i <= 100; i++) {
    element.innerHTML = <li class="box box--${i}">element ${i}</li>
}