// A standard JavaScript object
const user = {
  name: "Alex",
  age: 28,
  isAdmin: true
};

// Convert to a minified JSON string
const jsonString = JSON.stringify(user);

console.log(jsonString);
// Output: {"name":"Alex","age":28,"isAdmin":true}
