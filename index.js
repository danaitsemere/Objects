//1

function Employee(name, position, salary) {
  this.name = name;
  this.position = position;
  this.salary = salary;
}


let employees = [
  new Employee("Danait", "Product Manager", 30000),
  new Employee("Berhe", "Researcher", 25000),
  new Employee("Hagosa", "Data Analayst", 45000),
  new Employee("Dawit", "Tester", 65000),
  new Employee("Daniel", "Software developer", 32000)
];


employees.forEach(employee => {
  if (employee.position === "software developer") {
    employee.salary += employee.salary * 0.1;
  }
});

employees.forEach(employee => {
  console.log(`Name: ${employee.name}, Position: ${employee.position}, Salary: ${employee.salary}`);
});





//2
function ourProducts(products) {
  return products.filter(p => p.inStock).sort((a, b) => a.price - b.price);
}


const products = [
  { name: "Laptop", price: 1000, inStock: false },
  { name: "Phone", price: 600, inStock: true },
  { name: "Tablet", price: 300, inStock: false },
  { name: "Monitor", price: 200, inStock: true },
  { name: "Mouse", price: 25, inStock: false }
];

console.log(ourProducts(products));

//3
const grades = {
  Mizer: [56, 89, 92],
  Selam: [65, 75, 80],
  Akberet: [29, 28, 48]
};

function results(grades) {
  for (const student in grades) {
    const scores = grades[student];
    const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    const result = average > 70 ? "Pass" : "Fail";
    console.log(`${student}: Average Score = ${average}, ${result}`);
  }
}

results(grades);


//4

function User(username, email, isActive) {
  this.username = username;
  this.email = email;
  this.isActive = isActive;
}

const users = [
  new User("danaboy", "danaboy@gmail.com.com", false),
  new User("yoyo", "yoyo@gmail.com.org", true),
  new User("brhe 70", "berhe@gmail.com", false),
  new User("baba", "baba@email.com", true),
  new User("mana", "mana@gmail.com", false),
  new User("yasa", "yasa@gmail.com", true),
];

console.log("our active Users are:");

for (let i = 0; i < users.length; i++) {

  if (users[i].isActive) {
    console.log(users[i].username);
  }
}



//5

const destinations = [
  { name: "Nairobi", distance: 100, budgetRequired: 100 },
  { name: "Adis Abeba", distance: 150, budgetRequired: 150 },
  { name: "Mekelle", distance: 400, budgetRequired: 500 },
  { name: "Mombasa", distance: 450, budgetRequired: 550 },
  { name: "Shire", distance: 345, budgetRequired: 345 }
];
function passengerDestinations(maximumDistance, maximumBudget) {
  let meetedRequirements= [];


  destinations.forEach(destination => {
    if (destination.distance <= maximumDistance && destination.budgetRequired <= maximumBudget) {
      meetedRequirements.push(destination.name);
    }
  });


  return meetedRequirements.length > 0 ? meetedRequirements : "No destinations available under your budget and distance";
}


console.log(passengerDestinations(350, 400));





