
let inp1 = document.querySelector("#inp1");
let inp2 = document.querySelector("#inp2");
let btn1 = document.querySelector("#btn1");
let h1 = document.querySelector("#h1");

function check1(){
    if (inp1.value.trim() !== "" && inp2.value.trim() !== ""){
        window.location.href = "horse.html";
    } else{
        h1.textContent = "you left the boxes empty or you need more letters"
    }
}

btn1.addEventListener("click", () =>{
    check1();
});




