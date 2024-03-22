
const check = () => {  
    const userInput = document.getElementById('text-input').value;
    const userInputTest = document.getElementById('text-input').value.toLowerCase().replace(/[^a-z0-9]/ig, '')       
    if (userInputTest === '') {
        document.getElementById('result').textContent = `please input text`

    } else {    
      const reversedInput = userInputTest.split('').reverse().join('')
      if (userInputTest === reversedInput) {
        document.getElementById('result').textContent = `${userInput} is a palindrome`
      } else {
        document.getElementById('result').textContent = `${userInput} is not a palindrome`
      }
    }
}
document.getElementById('check-btn').addEventListener('click', check )