const body = document.body;
const toggleBtn = document.getElementById('toggle-theme');

//Check Local Storage for saved theme
const savedTheme = localStorage.getItem('theme');
if(savedTheme){
    body.classList.add(savedTheme);
}

//Button click -> toggle theme
toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');

    //save the current theme in local storage
    if(body.classList.contains('dark')){
        localStorage.setItem('theme', 'dark');
    }
    else{
        localStorage.setItem('theme', '');
    }
});

