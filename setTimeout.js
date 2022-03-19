const callMeAfterSecond = () => {
    console.log("Hi! Your friend called you.");
}

setTimeout(callMeAfterSecond, 1000);

setTimeout(() => {
    console.log("Hi! I'll be called after specific time")
}, 1000)