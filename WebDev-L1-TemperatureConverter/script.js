const fahrenheitInput = document.getElementById("fahrenheit");
const celsiusInput = document.getElementById("celsius");

const convertButton = document.getElementById("convert");
const convertButton2 = document.getElementById("convert2");

const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");

// Fahrenheit to Celsius
convertButton.addEventListener("click", function () {

const fahrenheit = Number(fahrenheitInput.value);

if (fahrenheitInput.value === "") {
result1.textContent = "Please enter a temperature.";
return;
}

const celsius = (fahrenheit - 32) * 5 / 9;

result1.textContent = `${celsius.toFixed(2)} °C`;
});

// Celsius to Fahrenheit
convertButton2.addEventListener("click", function () {

const celsius = Number(celsiusInput.value);

if (celsiusInput.value === "") {
result2.textContent = "Please enter a temperature.";
return;
}

const fahrenheit = (celsius * 9 / 5) + 32;

result2.textContent = `${fahrenheit.toFixed(2)} °F`;
});
