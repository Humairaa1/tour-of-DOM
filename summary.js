console.log('outside HTML')

const allLiTag = document.getElementsByTagName('li');
console.log(allLiTag);

const allClasses = document.getElementsByClassName('paragraphTag');
console.log(allClasses);

const id = document.getElementById('section-1');
console.log(id);

id.style.color= 'red';
id.style.backgroundColor='skyBlue';
id.style.padding='20px';

//added a li in dynamic way
const addLi = document.getElementById('section-2');

const createLi = document.createElement('li');

createLi.innerText = 'added new li';
addLi.appendChild(createLi);
createLi.style.backgroundColor = 'yellow';

//added a section (different way)
const addSection = document.getElementById('main-section');

const section = document.createElement('section');
section.innerHTML=`
<h1>new added heading</h1>
<li>DOM</li>
<li>HTML</li>
<li>CSS</li>
`
addSection.appendChild(section);