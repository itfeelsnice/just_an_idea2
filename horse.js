
let btn2 = document.querySelector("#btn2");
let a1 = document.querySelector("#a1");

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
    }
});

