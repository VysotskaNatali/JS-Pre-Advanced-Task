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

/* Form Style */ 
input.addEventListener("focus", function (): void {
  input.placeholder = "word here..!";
  addFocus(event);
});
input.addEventListener("blur", function (event): void { removeFocus(event);});

textarea.addEventListener("focus", function (event): void {
  textarea.placeholder = "text here..";
  addFocus(event);
});
textarea.addEventListener("blur", function (event): void {removeFocus(event);});

function addFocus(event): void {
  event.target.classList.add("focus");
  event.target.classList.remove("error");
}

function removeFocus(event): void {
  event.target.classList.remove("focus");
}

/* Add BED words */
add.addEventListener("click", function (): void {
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

/* Reset words */
reset.addEventListener("click", (): void => {
  badWord.textContent = "";
  textarea.value = "";
});

/* Prohibited words */
cenzor.addEventListener("click", function (): void {
  let list: any = badWord.textContent?.split(", ");
  let text: string = textarea.value;
   if (text) {
    for (let i: number = 0; i < list?.length; i++) {
      let bad: string = list[i];
      while (text.includes(bad)) {
        let word: string = "";
        for (let j: number = 0; j < bad?.length; j++) {
          word += "*";
        }
        text = text.replace(bad, word);
      }
      textarea.value = text;
    }
  } else {
    textarea.classList.remove("focus");
    textarea.classList.add("error");
    textarea.placeholder = "Please write a text!";
  }
});


