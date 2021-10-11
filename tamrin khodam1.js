let max = 100;   //(prompt("Enter m:"));
let step = 0;
let max1 = 12

if (isNaN(max)) {
    console.log("Game Over");

    }
    console.log("You can geuss a number" + step + "times.");
    for (let i = 0; i < step; i++) {
        let userGeuss = 25; //(prompt("Enter your geuss"));
        if (isNaN(userGeuss)) {
            console.log("Game Over");
            break;
        }
        console.log("step" + (i + 1));
        if (computerGuess > userGeuss) {
            console.log("More than" + userGeuss);
        } else if (computerGuess < userGeuss) {
            console.log("Less than" + userGeuss);
        } else {
            console.log("You Win");
            break;
        }
        if (i === step - 1); {
            console.log("Game Over");
            break;
        }
    }
}

// let max = number(prompt(" Enter your number"));
// let step = 0;

// if (isNaN(max)) {
//     console.log("Game Over");
// } else {
//     let computerGuess = Math.floor(Math.round) * max + 1;
//     while(max / 2 != 0) {
//     max = parseInt(max / 2);
//     step += 1;
// }
// console.log("You can guess a number" + step + "times.");

//     for( let i = 0; i < step; i++) {
//         let userGeuss = number(prompt("Enter your guess"));
//         if(isNaN (userGeuss)){
//         console.log("Game Over");
//         break;
//     }


// }


















