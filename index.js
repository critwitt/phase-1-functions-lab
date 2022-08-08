// Code your solution in this file!
function distanceFromHqInBlocks(num) {
    const dist = Math.abs(num-42);
    return dist
}

function distanceFromHqInFeet(num) {
    const dist = Math.abs(num-42)*264;
    return dist
}

function distanceTravelledInFeet(block1, block2) {
    const dist = Math.abs(block1-block2)*264;
    return dist
}

function calculatesFarePrice(start, destination) {
    const dist = Math.abs(start-destination)*264
    if (dist < 400) {
        return 0
    }
    else if (dist < 2000) {
        const fare = (dist - 400)*.02;
        return fare
    }
    else if (dist < 2500) {
        const fare = 25;
        return fare
    }
    else {
        return "cannot travel that far"
    }
}