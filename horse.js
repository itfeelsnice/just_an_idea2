
let btn2 = document.querySelector("#btn2");
let a1 = document.querySelector("#a1");
let div1 = document.querySelector("#div1");
let btn1 = document.querySelector("#btn1");
let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let img3 = document.querySelector("#img3");

let right = 0;
let left = 0;
let moves = 0;

btn2.addEventListener("click", () =>{
    right += 40;
    left -= 40;

    let array1 = [`translateX(${right}%)`, `translateY(${right}%)`, `translateY(${left}%)`, `translateX(${left}%)`]

    let random1 = array1[Math.floor(Math.random() * array1.length)];
    console.log(random1);

    moves++;
    console.log(moves);
    btn2.style.transform = `${random1}`;
    if(moves === 6){
        btn2.textContent = `man are you sure about this?`;
    }
    if (moves === 7){
        btn2.remove();
        a1.remove();
        div1.classList.add("remain");
        div3.classList.add("remain2");
        div2.classList.add("remain3");
        btn1.classList.add("remain4");
    }
});

btn1.addEventListener("click", () =>{
    img1.classList.toggle("rotate2");
    img2.classList.toggle("rotate2");
    img3.classList.toggle("rotate2");
    if (btn1.textContent === `turn on`){
        btn1.textContent = `turn off`;
    } else if(btn1.textContent === `turn off`){
        btn1.textContent = `turn on`;
    }
});

// i started to code at 3.10 on 14.02.2026 today i will finish this project


