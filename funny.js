
let inp1 = document.querySelector("#inp1");
let inp2 = document.querySelector("#inp2");
let btn1 = document.querySelector("#btn1");
let h1 = document.querySelector("#h1");

function check1(){
    let a = inp1.value.trim();
    let b = inp2.value.trim()
    if (a.length >= 8 && b.length >= 8){
        window.location.href = "horse.html";
    }else if(a.length === 0 && b.length === 0){
        h1.textContent = `both boxes are empty`
    }else if(a.length < 8 && b.length >= 8){
        h1.textContent = `the first box needs to have more than 8 characters`
    }else if(b.length < 8 && a.length >= 8){
        h1.textContent = `the second box needs to have more than 8 characters`
    }else if (a.length < 8 && b.length < 8){
        h1.textContent = `both boxes need more characters`
    }
}

btn1.addEventListener("click", () =>{
    check1();
});




