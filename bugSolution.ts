function greeter(person: string) {
    return "Hello, " + person;
}

function greetMultiple(people: string[]) {
    people.forEach(person => console.log(greeter(person)));
}

let user = ["Jane User", "John Smith"];

greetMultiple(user); // Correctly greets each person in the array.