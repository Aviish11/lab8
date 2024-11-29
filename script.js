const student = {
    name: "Avish",
    age: 26,
    enrolled: true,
    courses: ["WebDev", "Algo", "JavaScript"],

    displayInfo: function() {
        return `Student Name: ${this.name}, Age: ${this.age}, Courses: ${this.courses}`;
    }
};