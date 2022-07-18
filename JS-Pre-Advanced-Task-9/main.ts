/* Завдання 1:
Потрібно реалізувати функціонал як на відео UserList, а саме:

1. При кліку на кнопку Add user запускаєте функцію addUser() яка робить наступне:
— Стягуєте дані з полів і формує об’єкт.
— Цей об’єкт пушитю в масив.
— Поля зачищає.
— Запускаєм функцію render() яка генерую всю інфу в таблицю відносно вашого масиву.

2. При кліку на кнопку Delete запускаєте функцію deleteUser() яка робить наступне:
— Дізнаєтеся в якому рядку ви клікнули(тобто індекс).
— По цьому індексу видаляємо елемент з масиву.
— Запускаєм заново функцію render().

3. При кліку на кнопку Edit запускаєте функцію editUser() яка робить наступне:
— Дізнаєтеся в якому рядку ви клікнули(тобто індекс).
— По цьому індексу витягуємо конкретрний елемент(тобто об’єкт) з масиву.
— З об’єкт достаємо дані і передаємо в форму(тобто у value інпутів).
— Запам’ятовуємо даний індекс в змінну userIndex.
— Показуємо кнопку Edit user і приховуємо Add user.

4. При кліку на кнопку Edit User запускаєте функцію saveEditUser() яка робить наступне:
— Стягуєте дані з полів і формує об’єкт через клас.
— Цей об’єкт додається на місце старого об’єкту через userIndex.
— Поля зачищає.
— Запускаєм функцію render() яка генерую всю інфу в таблицю відносно вашого масиву. */

/* Creating variables and DOM elements */
class User {
    constructor(
        private _login: string,
        private _password: string,
        private _email: string
    ) {}
    public set login(login: string) {
        this._login = login;
    }
    public set password(password: string) {
        this.password = password;
    }
    public set email(email: string) {
        this.email = email;
    }
    public get login(): string {
        return this._login;
    }
    public get password(): string {
        return this._password;
    }
    public get email(): string {
        return this._email;
    }
}
const userLogin: HTMLInputElement = document.querySelector('.user-login');
const userPass: HTMLInputElement = document.querySelector('.user-password');
const userEmail: HTMLInputElement = document.querySelector('.user-email');
const addBtn: HTMLButtonElement = document.querySelector('.user-btn');
const edBtn: HTMLButtonElement = document.querySelector('.user-edit-btn');
const userList: HTMLTableElement = document.querySelector('.user-list');
const form:HTMLFormElement = document.forms[0];
let login:boolean;
let pass:boolean;
let email:boolean;
let userMass: Array<User> = [];
let check:boolean = true;
let userIndex:number;

/* Check validation form and add style */
userLogin.addEventListener("input",function (event:MouseEvent):void{ checkValid(event, login);});
userPass.addEventListener("input",function (event:MouseEvent):void{ checkValid(event, pass);});
userEmail.addEventListener("input",function (event:MouseEvent):void{ checkValid(event, email);});

for(let i:number=0;i<form.length-2;i++){
    form[i].addEventListener("click", function (event:MouseEvent):void{
      (event.target as HTMLInputElement).classList.add("focus");
    })
    form[i].addEventListener("blur",function (event:MouseEvent):void{
        (event.target as HTMLInputElement).classList.remove("focus"); 
      });
}

function checkValid(event:MouseEvent, elm:boolean):void{
    login = (/^\w{4,16}$/i).test(userLogin.value);
    pass = (/^[a-z|0-9|\.|_|-]{4,16}$/i).test(userPass.value);
    email = (/\w+@[a-zA-Z_]+?\.[a-zA-Z]{1,5}/).test(userEmail.value);
    if(elm){
        (event.target as HTMLInputElement).classList.add("focus");
        (event.target as HTMLInputElement).classList.remove("error"); 
        check = true;
    }else{
        (event.target as HTMLInputElement).classList.add("error");
        (event.target as HTMLInputElement).classList.remove("focus");  
    }
}

/* Add new user and create in table */
function addUser():void{
let user: User = new User(userLogin.value,userPass.value,userEmail.value)
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
addBtn.addEventListener("click", function ():void{
    if(login && pass && email && check){
    addUser();
    render();
    form.reset();
    check = false;
    }
});

/* Delete user in table */
function deleteUser(event:MouseEvent):void{
  let index:number = +(event.target as HTMLTableElement).parentElement.parentElement.firstElementChild.textContent - 1;
  userMass.splice(index, 1);
  render();
}
/* Add new input value and change button */
function editUser(event: MouseEvent) {
    userIndex = +(event.target as HTMLInputElement).parentElement.parentElement.firstElementChild.textContent - 1;
    userLogin.value = userMass[userIndex].login;
    userPass.value = userMass[userIndex].password;
    userEmail.value = userMass[userIndex].email;
    edBtn.hidden = false;
    addBtn.hidden = true;
}
/* Edit and Delete button */
userList.addEventListener('click', function(event:MouseEvent):void{
    if((event.target as HTMLButtonElement).classList.contains('edit-btn')){
        editUser(event);
    }
    else if((event.target as HTMLButtonElement).classList.contains('delete-btn')){
        deleteUser(event);
    }
})
/*  Change value in Table */
edBtn.addEventListener('click',function(event:MouseEvent):void{
    if(login && pass && email){
    let user: User = new User(userLogin.value,userPass.value,userEmail.value)
    userMass[userIndex] = user;
    render();
    form.reset();
    edBtn.hidden = true;
    addBtn.hidden = false;
    check = false;
    }
})