function findMatching(drivers, name) {
    return drivers.filter(function(driverName) { 
        return driverName.toLowerCase() === name.toLowerCase(); 
    });
}

function fuzzyMatch(drivers, firstLetters) {
    let lengthOfName = firstLetters.length;
    return drivers.filter(function(driverName) {
        return driverName.slice(0, lengthOfName) === firstLetters;
    });
}

function matchName(drivers, name) {
    return drivers.filter(function(driver) {
        return driver.name.toLowerCase() === name.toLowerCase();
    });
}