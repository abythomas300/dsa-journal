class Laptop {
  // initializing variables for a particular object
  constructor(brand, model, price, color) {
    this.b = brand  
    this.m = model
    this.p = price
    this.c = color
  }
  boot(productNo) {  // productNo is an argument passed during the boot() function call by object 
    console.log("Booting system")
    console.log(this.b)
    console.log(`System info--> \n Brand:${this.b} \n Model details: ${this.m} \n Price: ${this.p} Color: ${this.c}`)
    console.log("Product number -->", productNo)
  }
}



// creating 3 objects from the 'Laptop class'
const laptop1 = new Laptop("Lenovo", "LOQ v7.4", 150000, "Militiary Green")
const laptop2 = new Laptop("HP", "Victus", 75500, "Space Grey")
const laptop3 = new Laptop("HP", "15s", 47000, "Rare Silver")

// function invoke (with arguments)
laptop1.boot(1)
laptop2.boot(2)
laptop3.boot(3)
