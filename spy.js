/*  Sudo Code: Part 1
    1. Create function that returns the full vault combination. 
    2.Create 3 variables inside func, one for each number of vault combination, using math operators.
    3. Use string interpolation to create variable that combines the three number variables to make full combination. 
    4. return the new variable so combination populates when function is called 

   Sudo Code: Part 2
    1. Create function that changes initial prompt *Have to figure this part out (Think I need on-click for button I think)
    2. create response prompts/questions
    3. get user input (from input box html) *Have to figure out (think I need the getID Thingy)
    4. change default prompt to return response based on input *Have to figure this out
        a. Return custom message explaining the mission 
        b. ask If they accept Mission 
        c. return vault code with function created in part one.
*/

/* Resources Used: 
    1. https://www.shecodes.io/athena/11529-how-to-change-h1-elements-based-on-if-else-statements-with-javascript
    2. https://www.w3schools.com/js/js_htmldom_html.asp

*/

const vaultCombination = () => { //arrow func

    const num1 = 5 * 2; // var using multiplication problem to assign value of 10
    const num2 = (90 - 80) * 4; //var using (order of op, subtraction, and multiplication) to assign value of 40
    const num3 = 117 % 78; // var using modulus to get remainder 39 and assign as vale

    const fullCombo = `${num1} - ${num2} - ${num3}`; //string interpolation to combine nums.
    return fullCombo;
};

console.log(vaultCombination()); // <-- used to confirm func1 working 

const spyFunction = () => { 
    const spyInputVal = document.getElementById("spyInput").value.trim();
    const updateDisplayText = document.querySelector('.displayText');

    if (spyInputVal === '') {  
        updateDisplayText.innerHTML = 'Invalid Entry'; //if statement used to handle blank entries 
        return; // Exits is statement
    }

    //if else statement handles message after spy is welcomed 
    //toLowerCase was used to account for capitalization differences 
    //or used to handle the even user enters yes/no instead of Accept/Decline
    if (spyInputVal.toLowerCase() === 'accept' || spyInputVal.toLowerCase() === 'yes') {    
        updateDisplayText.innerHTML = `Excellent! Here is the secret combination: ${vaultCombination()}. 
            An agent will meet you at the Continental Hotel tomorrow at 6:00 pm.`;
    } else if (spyInputVal.toLowerCase() === 'decline' || spyInputVal.toLowerCase() === 'no') {
        updateDisplayText.innerHTML = `I asked as a courtesy, declining is not an option in this business! 
        The secret combination is ${vaultCombination()}. An agent will meet you at the Continental Hotel at 11:11 pm. 
        Don't be late.`;
    } else { 
        updateDisplayText.innerHTML = `Welcome back, Agent ${spyInputVal}. 
            You have been chosen to "open" an important vault to retrieve an artifact. 
            Do you accept this mission? (Accept/Decline)`;  
    }
    spyInput.value = ''; //resets the input box --> I had to use chatters for this one.
};