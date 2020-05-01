import showWelcome from "./showWelcome.js";
import getLoginName from "./getLoginName.js";

showWelcome()

if (!localStorage.getItem('name')){
    getLoginName()
}

const container =  document.querySelector('.container')
if (container){
    container.addEventListener('click', (event) => {
        if (event.target.classList.contains('loginButton')) {
            getLoginName()
            showWelcome()
        }
        if (event.target.classList.contains('resetButton')) {
            localStorage.removeItem('name')
            showWelcome()
        }
    })
}
