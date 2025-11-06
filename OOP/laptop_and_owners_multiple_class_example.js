class Laptop {
  // initializing variables for a particular object
  constructor(brand, model, price, color) {
    this.b = brand  
    this.m = model
    this.p = price
    this.c = color
  }
  boot(productNo) {  // productNo is an argument passed during the boot() function call by object 
    console.log(`System info--> \n Brand:${this.b} \n Model details: ${this.m} \n Price: ${this.p} Color: ${this.c}`)
    console.log(`Product number -->", ${productNo} \n`)
  }
}

class Person {
  constructor(gender, age, nationality){
    this.gender = gender,
    this.age  = age, 
    this.nationality = nationality  
  }
  greet(name){
    const vowelList = ['a','e','i','o','u'] 
    // determining what article to use infront of laptop brand name
    const article = vowelList.includes(this.laptop.b.charAt(0).toLowerCase())? "an": "a"
    // printing messages
    console.log(`Owner Info--> \n Hi. My name is ${name.split(" ")[0]}`, )  // scrapping first name
    console.log(`A ${this.age} years old ${this.nationality} ${this.gender}.`)
    console.log(`I own ${article} ${this.laptop.b} laptop \n`)
  }
}

// creating 2 objects from the 'Laptop' class
const laptop1 = new Laptop("Lenovo", "LOQ v7.4", 150000, "Militiary Green")
const laptop2 = new Laptop("HP", "Victus", 75500, "Space Grey")

// function invoke (with arguments)
laptop1.boot(1)
laptop2.boot(2)

// creating 2 objects from the 'Person' class
const person1 = new Person("female", 21, "british")
person1.laptop = laptop1
const person2 = new Person("female", 26, "indian")
person2.laptop = laptop2

// function invoke
person1.greet("Millie Bobby Brown")
person2.greet("Alaya Jacob Stevens")
