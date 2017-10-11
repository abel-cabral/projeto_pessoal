(function life() {
    var name, age, now = new Date();
    age = now.getFullYear() - 1991;

    if (age < 26) {
        name = "Juracer";
    } else {
        name = "Abel";
    }    
    alert("I am " + name);  
})();
