const Student = {
    firstName : 'Mark',
    lastName : 'Cukbin',
    age : 15,
    id : 1669,
    show : function(){
        console.log("This object contains student details");
    }
};

console.log(Student);

// with the help Dot Notatiom
console.log( Student.firstName , Student.lastName);

// calling Show function
Student.show();

// with square notation
console.log( Student["age"], Student["id"])