`use strict`;
const input = document.querySelector(".cenzor-input");
const add = document.querySelector(".btn-add");
const reset = document.querySelector(".btn-reset");
const textarea = document.querySelector(".cenzor-text");
const badWord = document.querySelector(".cenzor-words");
const cenzor = document.querySelector(".btn-cenzor");
input.addEventListener("focus", function () {
    input.placeholder = "word here..!";
    addFocus(event);
});
input.addEventListener("blur", function (event) { removeFocus(event); });
textarea.addEventListener("focus", function (event) {
    textarea.placeholder = "text here..";
    addFocus(event);
});
textarea.addEventListener("blur", function (event) { removeFocus(event); });
function addFocus(event) {
    event.target.classList.add("focus");
    event.target.classList.remove("error");
}
function removeFocus(event) {
    event.target.classList.remove("focus");
}
add.addEventListener("click", function () {
    if (!input.value) {
        input.placeholder = "Please write a word!";
        input.classList.remove("focus");
        input.classList.add("error");
    }
    else {
        if (!badWord.textContent) {
            badWord.textContent += input.value;
        }
        else {
            badWord.textContent += ", " + input.value;
        }
        input.value = "";
    }
});
reset.addEventListener("click", () => {
    badWord.textContent = "";
    textarea.value = "";
});
cenzor.addEventListener("click", function () {
    let list = badWord.textContent?.split(", ");
    let text = textarea.value;
    if (text) {
        for (let i = 0; i < list?.length; i++) {
            let bad = list[i];
            while (text.includes(bad)) {
                let word = "";
                for (let j = 0; j < bad?.length; j++) {
                    word += "*";
                }
                text = text.replace(bad, word);
            }
            textarea.value = text;
        }
    }
    else {
        textarea.classList.remove("focus");
        textarea.classList.add("error");
        textarea.placeholder = "Please write a text!";
    }
});
