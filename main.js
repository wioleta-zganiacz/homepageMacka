const firstName = "Maciek";
const age = 32;

console.log(
  `Hej cieszę się,że zagościłeś na mojej stronie. Nazywam się ${firstName} i mam ${age} lata.`
);

const heading = document.querySelector('.main__heading--js');

heading.innerHTML = `Witaj Drogi odwiedzający, nazywam się ${firstName} i mam ${age} lata.`;



function greet(age, firstName) {
  console.log(
    `Witaj Drogi odwiedzający, nazywam się ${firstName} i mam ${age} lata.`
  );
}

function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;

}

function helloWorld() {
  console.log(`Witaj świecie`)
}

helloWorld();

createContent(`.week-summary__description--js`, `Witaj świecie!`); 


const deathStar = {
  diameter: 120000,
  fire: (target) => {
    console.log(`${target} destroyed`)
  },
  isOperating: true,
  levels: 357,
  name: `Death Star`,
  population: 10000,
  isLightOn: true,
  commander: {
    name: `Darth Vader`,
    age: 44,
  }
}

deathStar.fire(`Rebel ship`)

const humanOne = {
  name: `Maciek`,
  age: 32 ,
  address: {
    street: `Warszawska`,
    city: `Białystok`,
  }
}

const humanTwo = {
  name: `Stefan`,
  age: 35,
  address:  humanOne.address,
};

//console.log(humanOne);
//console.log(humanTwo);

//humanOne.age = 35;

//console.log(humanOne);
//console.log(humanTwo);


if(humanOne.age > humanTwo.age) {
  console.log('Human One jest starszy');
}

if(humanOne.age === humanTwo.age) {
  console.log('Są tego samego wieku');
}

if(humanOne.age < humanTwo.age) {
  console.log('Human Two jest starszy');
}

if(age > humanTwo.age) {
  console.log('Human one jest starszy');
}

if(false) {
  console.log('to sie nie wykona')
}

if(true) {
  console.log('to sie wykona');
}

if((humanTwo.age === 35) || humanTwo.pet ) {
  console.log('to sie wykona, bo OR musi miec tylko jedna zmienna true');
}

if(!false) {
  console.log('to jest przyklad na wykonanie NOT!'); 
}

if(!('Java' == 'JavaScript')) {
  console.log('JavaScript to nie to samo to Java')
}

if(humanOne.age > humanTwo.age) {
  console.log('Human one jest starszy');
}else{
  console.log('Human Two jest starszy lub sa w tym samym wieku');
}

if(humanOne.age > humanTwo.age) {
  console.log('Human One jest starszy'); 
}else if(humanOne.age === humanTwo.age) {
  console.log('Są równolatkami');
}else{
  console.log('human Two jest starszy od reszty');
}


if(1 > 2) {
  console.log('Jeden jest wieksze od dwóch');
}else if(1 < 2 ) {
  console.log('Jeden jest mniejsze od dwóch');
}else{
  console.log('Równanie jest niepoprawne');
}

const myNumber = 7;
switch(myNumber) {
  case 7:
console.log('jestem siódemką');
  break;

  case 9:
    console.log('jestem dziewiątką');
    break;

    default:
    console.log('jestem czymś innym');
}


(32 > 20) ? console.log('to prawda'):console.log('to nie prawda');

const result = (32 > 20) ? age : false;
console.log(result); 

const result2 = ( humanOne.age > humanTwo.age) ? age : false;
console.log(result2);
