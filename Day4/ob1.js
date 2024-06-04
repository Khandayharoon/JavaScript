const student = {
    name : 'Haroon',
    age : 24,
    city : 'Dehli',
    marks : 94
};
console.table(student);

student.city = 'Kashmir',
student.gender = 'Male',
student.marks = 'A'

console.table(student);

delete student.gender;
console.table(student);