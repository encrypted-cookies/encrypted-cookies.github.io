let searchbar = document.querySelector('.search-bar');
let searchContainer = document.querySelector('.search-container');
let container = document.querySelector('.container');

//search site
searchbar.onclick = ()=>{
    if(searchContainer.style.display === 'flex'){
        searchContainer.style.display='none';
    }else{
        searchContainer.style.display='flex';
    }
}

let subjectName = container.querySelectorAll('.name');
let subject = new URLSearchParams(location.search).get('subject');
subjectName.forEach((name)=>name.textContent = subject)



let url = `questionbank/${subject.toLowerCase()}.json`;
let question = document.querySelector('.question');

//getting questions from json file
async function getQuestion(){
    let response = await fetch(url);
    let data = await response.json()
    let obj = data;
    return obj;
}

//h3 =question text, n = question number, p = question,  ul = options, li = option, btn = button
async function extractQuestionData(h3, n, p, options, button){
    let data = await getQuestion();
    let examKeys =  Object.keys(data.exams);
    let randomExam = examKeys[Math.floor(Math.random() * examKeys.length)];
    let questNum = `Question ${Number(n)+1}`;
    let question = data.exams[randomExam][n]['question'];
    let opts = [];

    //sending to display through params
    h3.textContent=questNum;
    p.textContent=question;

    for(let i = 0; i < 4; i++){
        //DISPLAY OPTIONS
        let option = data.exams[randomExam][n]['options'][i];
        opts.push(option);
        let abcd = ['A', 'B', 'C', 'D'];
        options[i].textContent = `${abcd[i]}) \u00A0  ${opts[i]}`;
    }

    for(let i = 0; i < 2; i++){
        //DISPLAY  BUTTONS
        button[0].textContent='Show Answer';
        button[1].textContent='Share Question';
    }
    
}

//creating the display ten function
function displayTen(){
        for(let j  = 0; j < 10; j++){
            let questionBox = document.querySelector('.questionbox');
            let container = document.createElement('div');
            container.classList.add('question-container');
            let h3 =  document.createElement('h3');
            h3.classList.add('question-number');
            let p = document.createElement('p');
            p.classList.add('question');
            let h4 = document.createElement('h4');
            h4.classList.add('options');
            let ul = document.createElement('ul');
            ul.classList.add('options')
            let li1 = document.createElement('li'); 
            let li2 = document.createElement('li'); 
            let li3 = document.createElement('li'); 
            let li4 = document.createElement('li'); 
            let options = [li1, li2, li3, li4]
            let buttons = document.createElement('buttons');
            let btn1 = document.createElement('button');  
            let btn2 = document.createElement('button');
            let button = [btn1, btn2];

            extractQuestionData(h3, j, p, options, button)
            p.textContent='text45666666666666666666666666'
            li1.textContent='abe'
            li2.textContent='abe'
            li3.textContent='abe'
            li4.textContent='abe'

            // append
            questionBox.appendChild(container);
            container.appendChild(h3);
            container.appendChild(p)
            container.appendChild(h4)
            container.appendChild(ul)
            ul.appendChild(li1)
            ul.appendChild(li2)
            ul.appendChild(li3)
            ul.appendChild(li4)
            container.appendChild(buttons)
            buttons.appendChild(btn1)
            buttons.appendChild(btn2)
        }
}
//calling the display 10 function
displayTen();

