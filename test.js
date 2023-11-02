function addNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    return randomNumber;
}

const button = document.querySelector('button');
button.addEventListener('click', () => {
    const randomNumber = generateRandomNumber();
    console.log(randomNumber);
});

// test 2 //