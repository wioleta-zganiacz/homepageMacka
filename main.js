const firstName = "Maciek";
const age = 32;

console.log(
  `Hej cieszę się,że zagościłeś na mojej stronie. Nazywam się ${firstName} i mam ${age} lata.`
);

const heading = document.querySelector('.main__heading--js');

heading.innerHTML = `Witaj Drogi odwiedzający, nazwyam się ${firstName} i mam ${age} lata.`;



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
  age: 32,
  address: {
    street: `Warszawska`,
    city: `Białystok`,
  }
}

const humanTwo = {
  name: `Stefan`,
  age: humanOne.age,
  address: humanOne.address,
};

console.log(humanOne);
console.log(humanTwo);

humanOne.age = 35;

console.log(humanOne);
console.log(humanTwo);