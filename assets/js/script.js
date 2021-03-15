// var database = [
//     {
//         username: "Biggie",
//         password: "21savage"
//     },

//     {
//         username: "Bigolo",
//         password: "kawhi"
//     },

//     {
//         username: "lebron",
//         password: "23"
//     }
// ];

// var newsFeed = [
//     {
//         username: "Lombardi Lenny",
//         timeline: "Superbowl 55 in the bag"
//     },
//     {
//         username: "Abimbola Cole",
//         timeline: "LBJ is the goat"   
//     }
// ];

// var userNamePrompt = prompt("what the fuck is your username?");
// var passwordPrompt = prompt("what the fuck is your password?");

// function isUserValid(username, password) {
//     for (var i = 0; i < database.length; i ++){
//         if(database[i].username === username && 
//             database[i].password === password) {
//             return true;
//         }
//     }
//     return false;
// }


// function signIn(username, password) {
// //    console.log(isUserValid(username, passwordPrompt));
//     if (isUserValid(username, password)) {
//         console.log(newsFeed);
//     } else {
//         alert("sorry wrong username or password")
//     }
// }

// signIn(userNamePrompt, passwordPrompt);

// LOOPS 
// var todos = [
//     "fuck bitches",
//     "make money",
//     "fuck some more bitches",
//     "chase a bag",
//     "never chase a bitch"
// ];

// var todosLength = todos.length;
// for (var i=0; i < todosLength; i++) {
//     console.log(todos[i]);
// }

// todos.forEach(function(todo, i) {
//     console.log(todo, i);
// })

// var counterOne = 10;
// while (counterOne > 0) {
//     console.log(counterOne);
//     counterOne--;
// }

// var counterTwo = 10
// do {
//     console.log(counterTwo);
//     counterTwo--;
// } while (counterTwo > 0);