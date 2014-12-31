var greet = function(name, drunk) {
    if (typeof name !== "string"){
        throw new Error("name should be string")
    }
    if (drunk){
        return "hello " + name + " , you look sexy";
    } else {
        return "hello " + name;
    }
}

module.exports = greet
