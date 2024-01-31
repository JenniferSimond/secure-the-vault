/* 
    1. Create function that returns the full vault combination. 
    2. Create three variables, one for each number of vault combination, using math operators.
    3. Use string interpolation to create variable that combines the three number variables to make full combination. 
    4. return the new variable so combination populates when function is called 
    5. create alert that calls the vaultCombination function.
*/
const vaultCombination = () => { //arrow func

    let num1 = 5 * 2; // variable using multiplication problem to assign value of 10
    let num2 = (90 - 80) * 4; //variable using order of operations to assign value of 40
    let num3 = 117 % 78; // variable using modulus to assign value of 39

    let fullCombo = `${num1} -${num2} -${num3}`; // string interpolation to combine numbers. 
    return fullCombo;
};

//variable that holds message to recipient.
let combinationRecipient = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"

//alert that returns message and calls function with combination
alert(`${combinationRecipient}  \n ${vaultCombination()}!!!`);

//tbe \n is used to put the combination on a new line. 

   
 console.log(vaultCombination()); // <-- used to check that function is working 