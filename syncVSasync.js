
//Synchronous
alert("I will block the execution of next code 😁")

console.log("I'm blocked from the above code 😥")


//Asynchronous
setTimeout(() => {
    console.log("I will run in the future")
}, 2000)

console.log("Hurrah! I'm not blocked from the above code. 😀")