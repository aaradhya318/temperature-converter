function convertTemperature() {
    let value = document.getElementById("value").value;
    let unitFrom = document.getElementById("unit-from").value;
    let unitTo = document.getElementById("unit-to").value;
    let result = document.getElementById("result");
    
    if (value === "") {
        result.textContent = "Result: Please enter a temperature.";
        return;
    }
    
    value = parseFloat(value);
    
    // Celsius conversion logic
    if (unitFrom === "Celsius") {
        if (unitTo === "Fahrenheit") {
            value = (value * 9/5) + 32;
        } else if (unitTo === "Kelvin") {
            value = value + 273.15;
        }
    }
    
    // Fahrenheit conversion logic
    if (unitFrom === "Fahrenheit") {
        if (unitTo === "Celsius") {
            value = (value - 32) * 5/9;
        } else if (unitTo === "Kelvin") {
            value = (value - 32) * 5/9 + 273.15;
        }
    }
    
    // Kelvin conversion logic
    if (unitFrom === "Kelvin") {
        if (unitTo === "Celsius") {
            value = value - 273.15;
        } else if (unitTo === "Fahrenheit") {
            value = (value - 273.15) * 9/5 + 32;
        }
    }
    
    result.textContent = "Result: " + value.toFixed(2) + " " + unitTo;
}