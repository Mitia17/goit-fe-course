const logins  = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const user = prompt('Enter Login');

if( true === logins.includes(user)) {
    alert('Login already exist');
}    
    else {
        logins.push(user);
        alert('Login was added');

    }
console.log(logins);