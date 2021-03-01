# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is object destructuring?

  Your answer:
  Object destructuring is using the key to call a value from an object and set it equal to a variable so that the entire object calling process does not need to occur every time the value needs to be called.  Especially useful if a deep nested value within an object is going to be called a number of times.

  Researched answer:
  Object destructuring unpacks a value from an object and assigns it to a variable.


2. What are React lifecycle methods? Provide three examples.

  Your answer:
  React lifecycle methods are methods that occur during the different lifestyle phases of react applications.  construction(), render(), and setState() are all lifecycle methods.


  Researched answer:
  React lifecycle methods are the methods that get called during the three lifecycle phases of components.  The lifecycle phases are mounting, updating , and unmounting.  Three methods include construction(), render(), and componentDidMount().


3. What is the difference between a class and an object?

  Your answer:
  An object is a specific instance of a class. Classes serve as the blueprint to create predefined objects. Classes have no values within them.

  Researched answer:
  Classes are a template for creating objects.  They can be assigned values and methods that are given to objects created using the class.


4. What is the difference between a HTML div and a span?

  Your answer:
  div is a container that displays content on a webpage.  A span is similar, but contains different predefines stylistic features.

  Researched answer:
  Span is used for small amounts of in-line code, while div is used for larger amounts of block-line code.


5. What is a React Fragment (or <>) and why would you want to use it?

  Your answer:
  <> defines the area of a react section.  Necessary if you want to display multiple sections in a react app.

  Researched answer:
  React fragments are not rendered to the DOM so they allow you to group a list of children without creating extra nodes in the DOM. Faster and less memory usage than creating a wrapper div since it does not create a new node in the DOM.


6. What does it mean to create a responsive UI? What are three options for creating responsive design?

  Your answer:
  Responsive UI changes what the user sees as the user interacts with the webpage without the user having to refresh the webpage.  React, and any other javascript library that uses a virtual dom would be good options for creating responsive design.  PHP would also work.

  Researched answer:
  Responsive UI is when the user interface of a website adjusts to fit different screen sizes and user experiences.  The three core principles are a fluid grid system, fluid image use, and media queries.


7. What are props in React?

  Your answer:
  Props allow variables defined in the main App.js file to be called within external components.  They allow for the flow of data back and forth between the App.js file and the components.

  Researched answer:
  Props are arguments passed into components.  Props also allow you to pass data from one component to another.


8. What is `this` in JavaScript?

  Your answer:
  `this` is necessary when calling variables and methods defined within the same react app they are created.  It tells the decoder where to look for the variables and methods called.

  Researched answer:
  Used to call global objects.


9. STRETCH: What is a ternary operator in JavaScript?

  Your answer:
  A ternary operator in JavaScript is a shortcut to replace an if/else statement. It checks if something is true or false and then does one thing or another depending on the response. It is structured like this: Thing that is checked if true or false ?  if true do _ : if false do _ .

  Researched answer:
  Also known as a conditional operator , it takes in three arguments.  A condition, an expression to execute if the condition is truthy, and an expression to run if the condition is falsy.


10. STRETCH: What is an anonymous function in JavaScript?

  Your answer:
  An Anonymous function is a function without a name. They exist in specific built-in functions and can be called using `function`.

  Researched answer:
  Functions stored in variables do not need names.  These are called anonymous functions.


## Looking Ahead: Terms for Next Week
- Ruby
  Ruby is an object oriented programming language.  It is dynamic and open-source.  It's a server side programming language, and has a simple style that makes it easy to read and write.
- Object oriented programming
  Object oriented programming was created to solve the problem of large complex code bases filled with dependencies that are difficult to edit without creating errors.  It makes it easier to create programs that consist of a connection of a number of small parts, as opposed to one large unmanageable piece of code.
- RSpec
  Rspec is a testing tool for Ruby.  It is designed with Behavior Driven Development in mind, which like Test Driven Development, has the tests written before the program.
- Instance variable
  An instance variable is a variable defined in a class, but outside of constructors, methods, or blocks.  It is created when an object is instantiated, and is usable by all constructors, methods, and blocks.  It is specific to each instance of the class, hence the name.
- Ruby blocks
  Ruby blocks are anonymous functions that can be passed into methods.  Enclosed in a do-end statement or in {}.  Arguments in blocks are defined using ||.
- Ruby hashes
  A ruby hash is like an array except instead of indices each value is indexed by an arbitrary value similar to objects.  It is a collection of key-value pairs.
