// ----- Primitives -----

// TypeScript doesn’t use “types on the left”-style declarations
// like int x = 0; Type annotations will always go after
// the thing being typed.
let myName: string = "Topi";
const myNumber: number = 50;

// No type annotation needed, is infered as 'boolean'
var isStudying = true;


// ----- Functions -----

// Parameter type annotation
const greet = (name: string) => {
  console.log(`Hello, ${name.toUpperCase()}!!`);
}

// Would be a runtime error if executed!
greet(42); // Argument of type 'number' is not assignable
           // to parameter of type 'string'.

// Return type annotation
const getFavoriteNumber = (): number => {
  return 26;
}

function getFavoriteLetter(): string {
  return 'z';
}

// No type annotations here, but TypeScript can spot the bug
const names = ["Alice", "Bob", "Eve"];

// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUppercase());
  // Property 'toUppercase' does not exist on type 'string'.
  // Did you mean 'toUpperCase'?
});



// ----- Object Types -----

// The parameter's type annotation is an object type
const bar = (x: { flip: () => any; }) => {
  return x.flip();
}

bar({ flip: () => "flipped" });
