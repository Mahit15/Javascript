// for

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 7){
        // console.log("7 is best number");
    }
    // console.log(element);
}

for(let i = 1; i <= 10; i++){
    // console.log(`Outer loop value: ${i}`);
    for(let j = 1; j <= 10; j++){
        //console.log(i + '*' + j + " = " + i * j);
    }
}

let myArr = ["rex", "fives", "cody"]

for(let i = 0; i  < myArr.length; i++){
    const element = myArr[i];
    // console.log(element);
}

// break and continue

for (let i = 1; i <= 20; i++) {
    if(i == 7){
        console.log("Detected 7");
        continue;
    }
    console.log(`Value of i is ${i}`);
    
}