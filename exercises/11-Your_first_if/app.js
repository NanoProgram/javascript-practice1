let total = prompt('How many km are left to go?');

// Your code below:
function kmToGo(total) {
    let result;
    if (total > 100) {
        result = "We still have a bit of driving left to go";
    } else if (total > 50 && total <= 100) {
        result = "We'll be there in 5 minutes";
    } else {
        result = "I'm parking. I'll see you right now";
    }
    return result;
}

console.log(kmToGo(total));