//Define a function called introduction that defines a parameter, name, and returns the phrase: "Hi, my name is ${name}."


function introduction(name) {
    return (`Hi, my name is ${name}.`);
}


function introductionWithLanguage(name = "Josh", language = "Ember.js") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
console.log(introductionWithLanguage("Josh", "Ember.js"));

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}