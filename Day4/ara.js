let array = [
    {
        id: 1,
        name: 'Haroon',
        class: '10A',
        rollNumber: 101,
        grade: 'A',
        marks: {
            math: 95,
            science: 90,
            english: 88
        }
    },
    {
        id: 2,
        name: 'Liam',
        class: '10B',
        rollNumber: 102,
        grade: 'B',
        marks: {
            math: 85,
            science: 80,
            english: 82
        }
    },
    {
        id: 3,
        name: 'Emma',
        class: '10A',
        rollNumber: 103,
        grade: 'A',
        marks: {
            math: 92,
            science: 94,
            english: 89
        }
    }
];


console.table(array);
for(let i=0; i<array.length; i++){
    console.table(array[i].marks);
}