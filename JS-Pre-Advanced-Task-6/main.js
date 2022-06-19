// Потрібно розробити форму для реєстрації, логінування а також блок профайлу.
// Всі дані проходять через localStorage. Основні пункти що має працювати.
// — При реєстрації дані попадають в localStorage. Перед добавленням нового користувача провіряємо 
// чи нема у нас вже користувача з такою поштою, якщо є то не добавляти його. 
// Всі дані мають валідуватися регулярними виразами.
// — При логінуванні перевіряти чи всі поля заповнені і чи правильний логін та пароль, 
// якщо щось не так виводити відповідне повідомлення. Всі дані беруться з localStorage.
// — Якщо правильний логін та пароль то перейти на блок профайлу.
// — При натисканні на Sign Out переходимо назад на блок Sign In.

"use strict";
const getS = (selector) => document.querySelector(selector);
const formSingIn = document.forms.form1;
const formSingUP = document.forms.form2;
let usersList;

/* SHOW SING UP */
getS(".singIn__singUp").addEventListener("click", function () {
  getS(".singIn").classList.add("hidden");
  getS(".singUp").classList.remove("hidden");
  location.reload();
});

/*show placeholder text*/
function placeholder(form) {
  for (let i = 0; i < form.length - 1; i++) {
    form[i].addEventListener("input", function () {
      this.previousElementSibling.classList.remove("hidden");
      this.style.paddingTop = "15px";
      if (this.value == "") {
        this.previousElementSibling.classList.add("hidden");
        this.style.paddingTop = "1px";
      }
    });
  }
}placeholder(formSingUP);

/*add focus style*/
function focus(form) {
  for (let i = 0; i < form.length - 1; i++) {
    form[i].addEventListener("focus", function () {
      this.classList.add("focus");
      getS(".singIn__alert").classList.add("hidden");
    });
    form[i].addEventListener("blur", function () {
      this.classList.remove("focus");
    });
  }
}focus(formSingUP);

/* add check style */
function check(){
  for (let i = 0; i < formSingUP.length - 1; i++) {
    formSingUP[i].classList.add("check");
    formSingUP[i].classList.remove("focus");
    formSingUP[i].previousElementSibling.previousElementSibling.classList.remove("hidden");
  }
}

/* set  user local Storage */
function setUser() {
  let newUser = {};
  newUser.firstN = formSingUP[0].value;
  newUser.lastN = formSingUP[1].value;
  newUser.email = formSingUP[2].value;
  newUser.password = formSingUP[3].value;
  localStorage.setItem(localStorage.length, JSON.stringify(newUser));
}

/* Get user local Storage*/
function getUser() {
  usersList = [];
  for (let i = 0; i < localStorage.length; i++) {
    let user = JSON.parse(localStorage.getItem(i));
    usersList.push(user);
  }
}

/* Check Form Style */
function checkStyle() {
  check()
  if (!checkValid()) {
    formSingUP[2].previousElementSibling.previousElementSibling.classList.add("hidden");
    getS(".singUp__alert").classList.remove("hidden");
    formSingUP[2].nextElementSibling.classList.remove("hidden");
    formSingUP[2].classList.add("error");
    formSingUP[2].classList.remove("check");
  }
}

/* check valid*/
function checkValid() {
  if (
    /^\w{4,20}$/.test(formSingUP[0].value) &&
    /^\w{4,20}$/.test(formSingUP[1].value) &&
    /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/.test(formSingUP[2].value) &&
    /^[\w_\-.]{4,16}$/.test(formSingUP[3].value) &&
    checkStorageEmail()
  ) {
    return true;
  } else {
    return false;
  }
}
/* check Local Storage Email */
function checkStorageEmail() {
  getUser();
  for (let i = 0; i < usersList.length; i++) {
    if (formSingUP[2].value === usersList[i].email) {
      return false;
    }
  }
  return true;
}

/* button push to Local Storege*/
getS(".singUp__btn").addEventListener("click", function () {
  checkStyle();
  if (checkValid() && checkStorageEmail()) {
    setUser();
    location.reload();
  }
});
/* Repit check email*/
getS(".singUp__email").addEventListener("input", function () {
  if (checkValid()) {
    event.target.classList.remove("error");
    event.target.classList.remove("focus");
    event.target.classList.add("check");
    event.target.previousElementSibling.previousElementSibling.classList.remove("hidden");
    getS(".singUp__alert").classList.add("hidden");
    event.target.nextElementSibling.classList.add("hidden");
  } else if (!formSingUP[3].value == " ") {
    event.target.classList.remove("focus");
    event.target.classList.remove("check");
    event.target.classList.add("error");
    event.target.previousElementSibling.previousElementSibling.classList.add("hidden");
    event.target.nextElementSibling.classList.remove("hidden");
    getS(".singUp__alert").classList.remove("hidden");
  }
});

/* SHOW SING IN*/
getS(".singUp__singIn").addEventListener("click", function () {
  getS(".singUp").classList.add("hidden");
  getS(".singIn").classList.remove("hidden");
  placeholder(formSingIn);
  focus(formSingIn);
});

/*SHOW PROFILE*/
getS(".singIn__btn").addEventListener("click", function () {
  if (localStorage.length && userProfil()) {
    getS(".singIn").classList.add("hidden");
    getS(".profil").classList.remove("hidden");
    userProfil();
  } else {
    getS(".singIn__alert").classList.remove("hidden");
    formSingIn[1].classList.add("error");
  }
});

/* User Profil */
function userProfil() {
  getUser();
  for (let i = 0; i < usersList.length; i++) {
    if (formSingIn[0].value === usersList[i].email &&
        formSingIn[1].value === usersList[i].password) {
      getS(".profil__name").textContent =`${usersList[i].firstN} ` + " " + `${usersList[i].lastN}`;
      getS(".profil__email").textContent = `${usersList[i].email} `;
      return true;
    } else {
      getS(".singIn__alert").textContent = "Incorrect email or password";
    }
  }
  return false;
}

/* profil button */
getS(".profil__btn").addEventListener("click", () => location.reload());
