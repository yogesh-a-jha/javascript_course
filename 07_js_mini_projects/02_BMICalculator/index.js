const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if( isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0|| height === '' || weight === '') {
        results.innerHTML = 'Please enter valid height and weight.';
        return;
    }
    else{
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        results.innerHTML = `Your BMI is ${bmi}.`;

        if (bmi < 18.5) {
            results.innerHTML += ' You are underweight.';
        } else if (bmi < 24.9) {
            results.innerHTML += ' You have a normal weight.';
        } else if (bmi < 29.9) {
            results.innerHTML += ' You are overweight.';
        } else {
            results.innerHTML += ' You are obese.';
        }
    }
});