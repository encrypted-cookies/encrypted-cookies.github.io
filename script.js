let appName = document.querySelector('.app-name');
let navMenu = document.querySelector('.navbar-icon');
let createAcc = document.querySelector('.create-account');
let searchbar = document.querySelector('.search-bar');
let searchContainer = document.querySelector('.search-container');

appName.onclick = ()=>{
    location.reload()
}

createAcc.onclick = ()=>{
    window.open('register/login.html', '_blank', 'noopener,noreferrer')
}

navMenu.onclick = ()=>{
    document.querySelector('.nav').classList.toggle('active');
}

searchbar.onclick = ()=>{
    if(searchContainer.style.display === 'flex'){
        searchContainer.style.display='none';
    }else{
        searchContainer.style.display='flex';
    }
}


let subjects = document.querySelector('.subjects');
subjects.querySelectorAll('a').forEach((anchor)=>{
    anchor.onclick = ()=>{
        let  subject = anchor.textContent;
        location.href='pastquestions/pastquest.html?subject='+subject;
    }
})