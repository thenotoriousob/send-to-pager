// javascript

const pagerDisplayEl = document.getElementById("pager-display");
const phoneDisplayEl = document.getElementById("phone-display");
const keypadBtns = document.getElementsByClassName("phone-btn");
const resetBtn = document.getElementById("reset-btn");
const sendBtn = document.getElementById("send-btn");
const audio = new Audio("assets/pager.wav");

for (let i = 0; i < keypadBtns.length; i++) {
    keypadBtns[i].addEventListener("click", function() {
        phoneDisplayEl.textContent += keypadBtns[i].textContent;
    })
}

resetBtn.addEventListener("click", function() {
    pagerDisplayEl.textContent = "";
    phoneDisplayEl.textContent = "";
})

sendBtn.addEventListener("click", function() {

    if (!phoneDisplayEl.textContent) {
        return;
    }

    setTimeout(function() {
        pagerDisplayEl.textContent = phoneDisplayEl.textContent;
        audio.play();
    }, 2000);

});