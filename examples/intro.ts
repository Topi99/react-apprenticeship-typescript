// Common error #1: sometimes, we "forget" what type
// a variable is.
const message = "Hello World!";

// Accessing the property 'toLowerCase'
// on 'message' and then calling it
message.toLowerCase(); // returns `"hello world!"`
// Calling 'message'
message(); // TypeError: message is not a function


// Common error #2: we usually use functions from
// a library and don't know what type are they expecting.
const foo = (x) => {
  return x.flip();
}

foo("Bar"); // TypeError: x.flip is not a function

foo({ flip: () => "flipped" }); // returns `"flipped"`


// Common error #3: we tend to write with typos
const announcement = "Hello World!";
 
// How quickly can you spot the typos?
announcement.toLocaleLowercase();
announcement.toLocalLowerCase();
 
// We probably meant to write this...
announcement.toLocaleLowerCase();

