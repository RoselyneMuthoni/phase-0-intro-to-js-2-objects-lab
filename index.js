// Write your solution in this file!   
const employee= {
   name: 'sam',
 streetAddress:'11 Broadway',
}
function updateEmployeeWithKeyAndValue(employee, key, value){
   const employee1 = {...employee};
   employee1[key]=value;
   return employee1; 
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    name:'sam'
    streetAddress2: '12 Broadway'
    employee[key]=value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    let newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}

