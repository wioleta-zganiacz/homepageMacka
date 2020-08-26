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

createContent(`.week-summary__description--js`, `Witaj świecie!`);