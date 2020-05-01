import showWelcome from "./showWelcome.js";

export default function getLoginName() {
    let userName = localStorage.getItem('name')
if (!userName) {
    do{
        userName = prompt('Please, enter username:','')
        if (userName === null){
            localStorage.removeItem('name')
            break
        }
        if (userName.length <= 2) {
            alert("Username must contain more the 2 simbols!")
        }
        localStorage.setItem('name', userName)
    }while (userName.length <= 2)
        showWelcome()
}else {
    alert('You are already logged in!')
 }
}
