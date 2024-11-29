const student = {
    name: "Avish",
    age: 26,
    enrolled: true,
    courses: ["WebDev", "Algo", "JavaScript"],

    displayInfo: function() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Courses: ${this.courses}`);
        
    }
};

console.log("Name:", student.name);
console.log("Age:", student.age);

student.displayInfo();

let jsonString = JSON.stringify(student);
console.log(jsonString);

let jsonObj = JSON.parse(jsonString);
console.log(jsonObj);

