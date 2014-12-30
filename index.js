var greet = function(name, drunk) {
    if (drunk){
        if(name)
            return "hello " + name + " , you look sexy"
    } else {
        if (name)
            return "hello " + name;
    }
    return "No name provided"
}

module.exports = greet
