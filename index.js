const ad = "Ömer";
const resitYas = 18;
const evlenecegiYas = parseInt(prompt("Evleneceği Yaş?"));

for (let yas = 0; yas < 35; yas++) {
  if (yas === 0) {
    console.log(`${ad} doğdu`);
  } else if (yas === 18) {
    console.log(`${ad} reşit oldu`);
  } else if (yas === evlenecegiYas) {
    console.log(`${ad} evlendi`);
  } else {
    console.log(`${ad} ${yas} yaşında.`);
  }
}