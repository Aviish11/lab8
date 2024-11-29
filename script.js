const student = {
    fname: "Avish",
    age: 26,
    enrolled: true,
    courses: ["WebDev", "Algo", "JavaScript"],

    displayInfo: function() {
        console.log(`Name: ${this.fname}, Age: ${this.age}, Courses: ${this.courses}`);
        
    }
};

console.log("Name:", student.fname);
console.log("Age:", student.age);

student.displayInfo();

let jsonString = JSON.stringify(student);
console.log(jsonString);

let jsonObj = JSON.parse(jsonString);
console.log(jsonObj);

const {fname, courses} = student;

console.log(fname);
console.log(courses);

const scores = [85, 92, 78, 90];

const [first, second] = scores;
console.log("First Score:", first);
console.log("Second Score:", second);

let clonedStudent = {...student};
console.log(clonedStudent);

clonedStudent.graduationYear = 2026;
console.log(clonedStudent.graduationYear);

