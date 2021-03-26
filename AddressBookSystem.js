class contact
{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    get firstName() { return this.firstName; }
    set firstName(firstName) { this.firstName = firstName; }

    get lastName() { return this.lastName; }
    set lastName(lastName) { this.lastName = lastName; }

    get address() { return this.address; }
    set address(address) { this.address = address; }

    get city() { return this.city; }
    set city(city) { this.city = city; }

    get state() { return this.state; }
    set state(state) { this.state = state; }

    get zip() { return this.zip; }
    set zip(zip) { this.zip = zip; }

    get phoneNumber() { return this.phoneNumber; }
    set phoneNumber(phoneNumber) { this.phoneNumber = phoneNumber; }

    get email() { return this.email; }
    set email(email) { this.email = email; }
    
    constructor(...params)
    {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.email = params[6];
        this.phoneNumber = params[7];
        
    }

    toString()
    {
            return "AddressBook Conatct \n[ "+
            "First Name = "+ this.firstName +
            ", Last Name = "+ this.lastName+
            ", Address = "+ this.address +
            ", City = "+ this.city +
            ", State = "+ this.state +
            ", Zip = "+ this.zip +
            ", Email ID = "+ this.email + 
            ", Phone Number = "+ this.phoneNumber +" ] ";
    }
}

let newConatct = new contact("Sanket","More","Dhule","Dhule","MH",424405,"sanket@123",1234567890);
console.log(newConatct.toString());

newConatct.firstName = "bobby";
newConatct.lastName = "kapoor";
newConatct.address = "Miraaar";
newConatct.city = "Miramar";
newConatct.state = "Goa";
newConatct.zip = "874521";
newConatct.email = "bobby@123";
newConatct.phoneNumber = 87542198;

console.log(newConatct.toString());
