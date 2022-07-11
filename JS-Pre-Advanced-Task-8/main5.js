`use strict`;
const input = document.querySelector(".cenzor-input");
const add = document.querySelector(".btn-add");
const reset = document.querySelector(".btn-reset");
const textarea = document.querySelector(".cenzor-text");
const badWord = document.querySelector(".cenzor-words");
const cenzor = document.querySelector(".btn-cenzor");
input.addEventListener("focus", () => {
    input.classList.add("focus");
    input.classList.remove("error");
    input.placeholder = "word here..!";
});
input.addEventListener("blur", () => {
    input.classList.remove("focus");
});
textarea.addEventListener("focus", () => {
    textarea.classList.add("focus");
    textarea.classList.remove("error");
    textarea.placeholder = "text here..";
});
textarea.addEventListener("blur", () => {
    textarea.classList.remove("focus");
});
add.addEventListener("click", () => {
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
cenzor.addEventListener("click", () => {
    let list = badWord.textContent?.split(", ");
    let text = textarea.value;
    console.log(textarea.value);
    if (text) {
        for (let i = 0; i < list?.length; i++) {
            let bad = list[i];
            while (text.includes(bad)) {
                let word = "";
                for (let j = 0; j < bad?.length; j++) {
                    word += "*";
                }
                textarea.value = text.replace(bad, word);
            }
        }
    }
    else {
        textarea.classList.remove("focus");
        textarea.classList.add("error");
        textarea.placeholder = "Please write a text!";
    }
    console.log(textarea.value);
});
