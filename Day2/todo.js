let todolist=[];
let value;
while(value === 'Quit')
{
 value = prompt("Enter what you want");

if(value ==='Add'){
 let whatvalue = prompt("Enter taks name");
 todolist.push(whatvalue);
}
else if(value ==='Delete'){
    todolist.pop();
}
else if (value === 'list'){
    console.log(todolist);
}
}