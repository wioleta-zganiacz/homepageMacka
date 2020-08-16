const firstName = "Maciek";
const age = 32;

console.log(
  `Hej cieszę się,że zagościłeś na mojej stronie. Nazywam się ${firstName} i mam ${age} lata.`
);

const heading = document.querySelector('.main__heading--js');

heading.innerHTML = `Witaj Drogi odwiedzający, nazwyam się ${firstName} i mam ${age} lata.`;

const emptyParagraph = document.querySelector('.week-summary__description--js');

emptyParagraph.innerHTML = `Nawet uzuepłniłem treść JSem, WOW!`;