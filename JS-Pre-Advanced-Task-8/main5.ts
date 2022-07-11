// Завдання 5:

// Необхідно відтворити функціонал як на відео Cenzor, а саме:
// — При кліку на ADD добавляти заборонене слово, яке відображатиметься в списку “Bad words”
// — Якщо поле для добавлення слова не заповнене виводити відповідне повідомлення
// — При кліку на Cenzor перевіряється чи є в textarea заборонене слово, якщо так його заміняє на *,
// причому на ту кількість яка довжина слова
// — Якщо textarea порожня виводити повыдолення про заповнення поля
`use strict`;
const input = document.querySelector(".cenzor-input") as HTMLInputElement;
const add = document.querySelector(".btn-add") as HTMLInputElement;
const reset = document.querySelector(".btn-reset") as HTMLInputElement;
const textarea = document.querySelector(".cenzor-text") as HTMLTextAreaElement;
const badWord = document.querySelector(".cenzor-words") as HTMLElement;
const cenzor = document.querySelector(".btn-cenzor") as HTMLInputElement;

input.addEventListener("focus", (): void => {
  input.classList.add("focus");
  input.classList.remove("error");
  input.placeholder = "word here..!";
});
input.addEventListener("blur", (): void => {
  input.classList.remove("focus");
});

textarea.addEventListener("focus", (): void => {
  textarea.classList.add("focus");
  textarea.classList.remove("error");
  textarea.placeholder = "text here..";

});
textarea.addEventListener("blur", (): void => {
  textarea.classList.remove("focus");
});

add.addEventListener("click", (): void => {
  if (!input.value) {
    input.placeholder = "Please write a word!";
    input.classList.remove("focus");
    input.classList.add("error");
  } else {
    if (!badWord.textContent) {
      badWord.textContent += input.value;
    } else {
      badWord.textContent += ", " + input.value;
    }
    input.value = "";
  }
});

reset.addEventListener("click", (): void => {
  badWord.textContent = "";
  textarea.value = "";
});

cenzor.addEventListener("click", (): void => {
  let list: any = badWord.textContent?.split(", ");
  let text: string = textarea.value;
  console.log(textarea.value);
  
  if (text) {
    for (let i: number = 0; i < list?.length; i++) {
      let bad: string = list[i];
      while (text.includes(bad)) {
        let word: string = "";
        for (let j: number = 0; j < bad?.length; j++) {
          word += "*";
        }
        textarea.value = text.replace(bad, word);
      }
    }
  }
  else{
    textarea.classList.remove("focus");
    textarea.classList.add("error");
    textarea.placeholder = "Please write a text!";

    
  }
  console.log(textarea.value);
});
