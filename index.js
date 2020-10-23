'use strict';
console.log('Funguju!');

let zvolenyDen;
/* proměnnou deklarujeme mimo funkci, aby proměnná zůstala "zapamatovaná" i po provedení funkce */
const onDayClick = (event) => {
  if (zvolenyDen != null) {
    zvolenyDen.classList.remove('active');
  }
  zvolenyDen = event.currentTarget;
  zvolenyDen.classList.add('active');

  const svatekMa = zvolenyDen.querySelector('.svatek').innerHTML;
  document.querySelector('#dnes').innerHTML = svatekMa;
};
/* if (zvolenyDen !== undefined)

nebo 

if (zvolenyDen != null) - jeden z mála případů, kdy se použije nerovná se jen s jedním =, znamená to "když se zvolenyDen nerovná null nebo undefined"
 */
/* .currentTarget - identifies the current target for the event, as the event traverses the DOM. It always refers to the element to which the event handler has been attached, as opposed to Event.target, which identifies the element on which the event occurred and which may be its descendant. */
const policka = document.querySelectorAll('.kalendar td:not(.jiny-mesic)');
console.log(policka);
/* td:not(.jiny-mesic) - negace, vybírám td, bez třídy "jiny-mesic" */

for (let i = 0; i < policka.length; i++) {
  const aktualniPolicko = policka[i];
  aktualniPolicko.addEventListener('click', onDayClick);
}
