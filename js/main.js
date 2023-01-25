// DOM ELEMENT

const ul = document.querySelector("grid")

// CICLO

console.log("loop-start")

for (let i = 0; i <= 100; i++) {
    grid.innerHTML += `<li class="box box--${i}">element ${i}</li>`
}

console.log("loop-end")