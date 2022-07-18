class User {
    _login;
    _password;
    _email;
    constructor(_login, _password, _email) {
        this._login = _login;
        this._password = _password;
        this._email = _email;
    }
    set login(login) {
        this._login = login;
    }
    set password(password) {
        this.password = password;
    }
    set email(email) {
        this.email = email;
    }
    get login() {
        return this._login;
    }
    get password() {
        return this._password;
    }
    get email() {
        return this._email;
    }
}
const userLogin = document.querySelector('.user-login');
const userPass = document.querySelector('.user-password');
const userEmail = document.querySelector('.user-email');
const addBtn = document.querySelector('.user-btn');
const edBtn = document.querySelector('.user-edit-btn');
const userList = document.querySelector('.user-list');
const form = document.forms[0];
let login;
let pass;
let email;
let userMass = [];
let check = true;
let userIndex;
userLogin.addEventListener("input", function (event) { checkValid(event, login); });
userPass.addEventListener("input", function (event) { checkValid(event, pass); });
userEmail.addEventListener("input", function (event) { checkValid(event, email); });
for (let i = 0; i < form.length - 2; i++) {
    form[i].addEventListener("click", function (event) {
        event.target.classList.add("focus");
    });
    form[i].addEventListener("blur", function (event) {
        event.target.classList.remove("focus");
    });
}
function checkValid(event, elm) {
    login = (/^\w{4,16}$/i).test(userLogin.value);
    pass = (/^[a-z|0-9|\.|_|-]{4,16}$/i).test(userPass.value);
    email = (/\w+@[a-zA-Z_]+?\.[a-zA-Z]{1,5}/).test(userEmail.value);
    if (elm) {
        event.target.classList.add("focus");
        event.target.classList.remove("error");
        check = true;
    }
    else {
        event.target.classList.add("error");
        event.target.classList.remove("focus");
    }
}
function addUser() {
    let user = new User(userLogin.value, userPass.value, userEmail.value);
    userMass.push(user);
}
function render() {
    userList.innerHTML = "";
    for (let i = 0; i < userMass.length; i++) {
        let row = document.createElement("tr");
        row.innerHTML = `
          <td>${i + 1}</td>
          <td>${userMass[i].login}</td>
          <td>${userMass[i].password}</td>
          <td>${userMass[i].email}</td>
          <td><input type='button' class = 'edit-btn btn'  name = 'edit' value = 'Edit'></td>
          <td><input type='button' class = 'delete-btn btn'  name = 'delete' value = 'Delete'></td>`;
        userList.append(row);
    }
}
addBtn.addEventListener("click", function () {
    if (login && pass && email && check) {
        addUser();
        render();
        form.reset();
        check = false;
    }
});
function deleteUser(event) {
    let index = +event.target.parentElement.parentElement.firstElementChild.textContent - 1;
    userMass.splice(index, 1);
    render();
}
function editUser(event) {
    userIndex = +event.target.parentElement.parentElement.firstElementChild.textContent - 1;
    userLogin.value = userMass[userIndex].login;
    userPass.value = userMass[userIndex].password;
    userEmail.value = userMass[userIndex].email;
    edBtn.hidden = false;
    addBtn.hidden = true;
}
userList.addEventListener('click', function (event) {
    if (event.target.classList.contains('edit-btn')) {
        editUser(event);
    }
    else if (event.target.classList.contains('delete-btn')) {
        deleteUser(event);
    }
});
edBtn.addEventListener('click', function (event) {
    if (login && pass && email) {
        let user = new User(userLogin.value, userPass.value, userEmail.value);
        userMass[userIndex] = user;
        render();
        form.reset();
        edBtn.hidden = true;
        addBtn.hidden = false;
        check = false;
    }
});
