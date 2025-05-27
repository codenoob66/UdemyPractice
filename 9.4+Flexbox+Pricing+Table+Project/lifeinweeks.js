function lifeInWeeks(age) {
    let targetAge = 90 - age;
    let x = targetAge * 365;
    let y = targetAge * 52;
    let z = targetAge * 12;

    console.log(`You have ${x} days, ${y} weeks, and ${z} months left.`)
}


lifeInWeeks(56)