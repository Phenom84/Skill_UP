const greetingsText = document.querySelector('.greetings')

export default function showWelcome () {
    let localStorageKey = localStorage.getItem('name')
    if(localStorageKey && greetingsText) {
        greetingsText.innerHTML = `Welcome ${localStorageKey}!`
    } else if (greetingsText) {
        greetingsText.innerHTML = `Hello Guest!`
    }
}
