let student = {
    student1 : {
        name : 'Haroon',
        age : 24,
    },
    student2 : {
        name : 'alexa',
        age : 22
    },
    student3 : {
        name : 'jhon',
        age : 23
    }
}

console.table ( student.student2.name)
console.table( student.student3['age'])
console.table(student)