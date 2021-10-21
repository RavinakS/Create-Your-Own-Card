const Joi = require('joi');

const test1 = Joi.object({
    userName: Joi.string().alphanum().min(3).max(15).required(),
    email: Joi.string().email().required(),
    phoneNum: Joi.string().length(10).pattern(/^\d+$/).required(),
    Dob: Joi.date().raw()
})

// function termAndConditions(t_and_c){
//     if(t_and_c === true){
//         return 'excepted';
//     }else if(t_and_c === false){
//         return "notExcepted";
//     }else{
//         return "invalid";
//     }
// }

module.exports = {test1}




// function isNumExist(password){
//     let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//     var index = 0;
//     var checker = 0
//     for(index; index<password.length; index++){
//         try{
//             var paswrdNum = parseInt(password[index], 10);
//             if(numbers.includes(paswrdNum)){
//                 checker ++;
//             }
//         }catch{
//             continue;
//         }
//     }

//     if(checker > 0){
//         return true;
//     }else{
//         return false;
//     }
// }

// function isCharExist(password){
//     let characters = 'abcdefghijklmnopqrstuvwxyz';
//     char = 0;
//     countChar = 0;
//     for(char; char<password.length; char++){
//         if(characters.includes(password[char])){
//             countChar = countChar + 1;
//         }
//     }
//     if(countChar>=6){
//         return true;
//     }else{
//         return false;
//     }
// }

// function passwordValidation(password){
//     if(password.includes("@") || password.includes("#")){
//         containNum = isNumExist(password);
//         if(containNum === true){
//             containChar = isCharExist(password);
//             if(containChar === true){
//                 console.log('You are logged in successfully');
//                 return 'valid';
//             }else{
//                 console.log("Password should have minimum 6 characters");
//                 return 'unvalid';
//             }
//         }else{
//             console.log("Atleas password should contain one number.");
//             return 'unvalid';
//         }
//     }else{
//         console.log("Atleas password should contain one special character.");
//         return 'unvalid';
//     }
// }
