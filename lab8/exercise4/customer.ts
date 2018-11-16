export class Customer {
    private firstName: string;
    private lastName: string;
    private age: number;

    public greeter(){
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }

    public getAge(){
        console.log(`Age ${this.age}`);
    }
    
    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}