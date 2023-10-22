let person = {
    name: 'John',
    address: {
        country:'United States',
        city:'san Francisco'
    }
}

// let updated = {...person, name:'Bob', age:34}
//If assign value like that then update both attributes
// updated.address.city = 'New York';

//To prevent above issue we can
let updated = {
  ...person,
  name: "Bob",
  age: 34,
  address: {
    ...person.address,
    city: "New York",
  }
};
console.log("updated", updated);
console.log("person", person);