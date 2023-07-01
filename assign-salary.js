class Employee{
    constructor(companyId, departmentId, firstName, lastName, emailId, age, salary){
        this.companyId=companyId;
        this.departmentId=departmentId;
        this.firstName=firstName;
        this.lastName=lastName;
        this.emailId=emailId;
        this.age=age;
        this.salary=salary;
    }
    calculateBonus(){
        var bonus=(this.salary*0.20);
        return bonus;
    }
}

class Manager extends Employee{
    constructor(companyId,departmentId,firstName,lastName,emailId,age,salary,subordinates){
        super(companyId,departmentId,firstName,lastName,emailId,age,salary);
        this.subordinates=subordinates;
    }
    calculateBonus(){
        var bonus=this.salary*0.1+this.subordinates*1000;
        return bonus;
    }
}

class Engineer extends Employee{
    constructor(companyId,departmentId,firstName,lastName,emailId,age,salary,projectsCompleted){
        super(companyId,departmentId,firstName,lastName,emailId,age,salary);
        this.projectsCompleted=projectsCompleted;
    }
    calculateBonus(){
        var bonus=this.salary*0.1 + this.projectsCompleted*500
    }
}

let engineer=new Engineer("cts1375", "Devops05", "yogesh", "R","yogeshragu1@gmail.com", 27, 40000, 10);
console.log(engineer.calculateBonus(5))