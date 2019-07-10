'use strict'

// const Password = 'ADMIN_PASSWORD'

// console.log(Password);

// var message = prompt('Enter Password');

// if (message.toLowerCase() == "ADMIN_PASSWORD") {

//     alert("Добро пожаловать!");

//   }

// const message = 'ADMIN_PASSWORD'

// var response = prompt("Login", message) 

// if (confirm("Добро пожаловать!")) {

//     txt = "You pressed OK!";

//   } else {

//     txt = "You pressed Cancel!";

//   }

// if (top.location.search=="") { 

//    const pass = prompt('Введите пароль'); 

//     if (pass=='ADMIN_PASSWORD') 

//      alert('Добро пожаловать!') 

//       else  alert('Доступ запрещен, неверный пароль!')}

      

let attemptsLeft = 1;
const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
var password; 
do {
password = prompt("Введите пароль"); 
  if (password === ('qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd')){
    alert('Добро пожаловать!')
    // break
  }
    alert("Неверный пароль, у вас осталось n попыток");
  attemptsLeft ++
}
while(attemptsLeft<= 3)
// while ( password !== 'qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'  ) 

alert('У вас закончились попытки, аккаунт заблокирован!')
