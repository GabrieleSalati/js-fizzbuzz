// DOM ELEMENT

const ul = document.querySelector("grid")

// CICLO

console.log("loop-start")

for (let i = 0; i <= 100; i++) {

    // Stampa dei multipli di 3

    if (i % 3 == 0) {
        grid.innerHTML += `<li class="box box3x">Fizz</li>`
    }

    // Stampa dei multipli di 5

    else if (i % 5 == 0) {
        grid.innerHTML += `<li class="box box5x">Buzz</li>`
    }

    // Stampa dei rimanenti numeri

    else {
        grid.innerHTML += `<li class="box boxNx">element ${i}</li>`
    }

}

console.log("loop-end")