/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");

const lengthTextParagraph = document.getElementById("length-text");
const volumeTextParagraph = document.getElementById("volume-text");
const massTextParagraph = document.getElementById("mass-text");

convertBtn.addEventListener("click", convertUnitAndRender);

function convertUnitAndRender() {
  const inputValue = Number(inputEl.value);

  const feetValue = (inputValue * 3.281).toFixed(3);
  const gallonValue = (inputValue * 0.264).toFixed(3);
  const poundValue = (inputValue * 2.204).toFixed(3);

  const metersValue = (inputValue / 3.281).toFixed(3);
  const litersValue = (inputValue / 0.264).toFixed(3);
  const kilogramValue = (inputValue / 2.204).toFixed(3);

  // Rendering the converted units
  lengthTextParagraph.textContent = `${inputValue} meters = ${feetValue} feet | ${inputValue} feet = ${metersValue} meters`;

  volumeTextParagraph.textContent = `${inputValue} liters = ${gallonValue} gallons | ${inputValue} gallons = ${litersValue} liters`;

  massTextParagraph.textContent = `${inputValue} kilos = ${poundValue} pounds | ${inputValue} pounds = ${kilogramValue} kilos`;
}
