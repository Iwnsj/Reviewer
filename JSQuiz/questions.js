// ============================================
//  JAVASCRIPT QUIZ — 30 QUESTIONS DATA
// ============================================

const QUESTIONS = [
    // ===== 1–6: Variables & Scope =====
    {
        category: 'Variables & Scope',
        type: 'code',
        difficulty: 'easy',
        question: 'What will be logged to the console?',
        code: `var x = 10;\nif (true) {\n  var x = 20;\n}\nconsole.log(x);`,
        options: ['<code>10</code>', '<code>20</code>', '<code>undefined</code>', '<code>ReferenceError</code>'],
        answer: 1,
        explanation: 'var is function-scoped, not block-scoped. The var x inside the if block overwrites the outer x, so console.log(x) prints 20.'
    },
    {
        category: 'Variables & Scope',
        type: 'code',
        difficulty: 'easy',
        question: 'What will be logged to the console?',
        code: `let a = 5;\nif (true) {\n  let a = 99;\n}\nconsole.log(a);`,
        options: ['<code>5</code>', '<code>99</code>', '<code>undefined</code>', '<code>ReferenceError</code>'],
        answer: 0,
        explanation: 'let is block-scoped. The let a = 99 inside the if block is a separate variable from the outer a. The outer a remains 5.'
    },
    {
        category: 'Variables & Scope',
        type: 'concept',
        difficulty: 'easy',
        question: 'Which keyword declares a variable that cannot be reassigned after initialization?',
        options: ['<code>var</code>', '<code>let</code>', '<code>const</code>', '<code>static</code>'],
        answer: 2,
        explanation: 'const creates a binding that cannot be reassigned. However, the value itself (e.g. an object or array) can still be mutated — only the binding is constant.'
    },
    // ===== 4–6: Type Coercion =====
    {
        category: 'Type Coercion',
        type: 'code',
        difficulty: 'medium',
        question: 'What is the output of this code?',
        code: `console.log("5" + 3);\nconsole.log("5" - 3);`,
        options: [
            '<code>"53"</code> and <code>2</code>',
            '<code>8</code> and <code>2</code>',
            '<code>"53"</code> and <code>"53"</code>',
            '<code>8</code> and <code>"53"</code>'
        ],
        answer: 0,
        explanation: 'The + operator with a string triggers string concatenation: "5" + 3 = "53". The - operator only works with numbers, so "5" is coerced to 5: 5 - 3 = 2.'
    },
    {
        category: 'Type Coercion',
        type: 'code',
        difficulty: 'medium',
        question: 'What does this expression evaluate to?',
        code: `console.log(typeof null);`,
        options: ['<code>"null"</code>', '<code>"undefined"</code>', '<code>"object"</code>', '<code>"boolean"</code>'],
        answer: 2,
        explanation: 'typeof null returns "object". This is a well-known historical bug in JavaScript that dates back to the first version of the language and has been preserved for backward compatibility.'
    },
    {
        category: 'Type Coercion',
        type: 'code',
        difficulty: 'medium',
        question: 'What will this code output?',
        code: `console.log(0 == false);\nconsole.log(0 === false);`,
        options: [
            '<code>true</code> and <code>true</code>',
            '<code>true</code> and <code>false</code>',
            '<code>false</code> and <code>false</code>',
            '<code>false</code> and <code>true</code>'
        ],
        answer: 1,
        explanation: '== (loose equality) performs type coercion: false is converted to 0, so 0 == 0 is true. === (strict equality) checks both value and type: 0 is a number but false is a boolean, so it returns false.'
    },
    // ===== 7–10: Functions =====
    {
        category: 'Functions',
        type: 'concept',
        difficulty: 'easy',
        question: 'What is the key difference between a function declaration and a function expression?',
        options: [
            'Function declarations run faster',
            'Function declarations are hoisted, function expressions are not',
            'Function expressions can take parameters, declarations cannot',
            'There is no difference'
        ],
        answer: 1,
        explanation: 'Function declarations are hoisted to the top of their scope, meaning you can call them before the declaration appears in code. Function expressions are not hoisted — they behave like regular variable assignments.'
    },
    {
        category: 'Functions',
        type: 'code',
        difficulty: 'medium',
        question: 'What will be logged?',
        code: `function greet(name = "World") {\n  return "Hello, " + name + "!";\n}\nconsole.log(greet());\nconsole.log(greet("JavaScript"));`,
        options: [
            '<code>"Hello, World!"</code> and <code>"Hello, JavaScript!"</code>',
            '<code>"Hello, undefined!"</code> and <code>"Hello, JavaScript!"</code>',
            '<code>Error</code> — missing argument',
            '<code>"Hello, !"</code> and <code>"Hello, JavaScript!"</code>'
        ],
        answer: 0,
        explanation: 'ES6 default parameters allow you to set a fallback value. When greet() is called without arguments, name defaults to "World". When called with "JavaScript", it overrides the default.'
    },
    {
        category: 'Functions',
        type: 'code',
        difficulty: 'hard',
        question: 'What does this code print?',
        code: `const add = (a, b) => a + b;\nconst multiply = (a, b) => a * b;\n\nfunction apply(fn, x, y) {\n  return fn(x, y);\n}\n\nconsole.log(apply(add, 3, 4));\nconsole.log(apply(multiply, 3, 4));`,
        options: [
            '<code>7</code> and <code>12</code>',
            '<code>12</code> and <code>7</code>',
            '<code>NaN</code> and <code>NaN</code>',
            '<code>Error</code> — functions can\'t be passed as arguments'
        ],
        answer: 0,
        explanation: 'Functions are first-class citizens in JavaScript — they can be passed as arguments. apply(add, 3, 4) calls add(3, 4) = 7, and apply(multiply, 3, 4) calls multiply(3, 4) = 12.'
    },
    {
        category: 'Functions',
        type: 'code',
        difficulty: 'hard',
        question: 'What will this immediately invoked function expression (IIFE) output?',
        code: `(function() {\n  var x = 10;\n  console.log(x);\n})();\n\nconsole.log(typeof x);`,
        options: [
            '<code>10</code> and <code>"number"</code>',
            '<code>10</code> and <code>"undefined"</code>',
            '<code>undefined</code> and <code>"undefined"</code>',
            '<code>10</code> and <code>ReferenceError</code>'
        ],
        answer: 1,
        explanation: 'The IIFE creates its own function scope. var x = 10 is scoped inside the IIFE, so console.log(x) prints 10. Outside, x is not defined, and typeof returns "undefined" for undeclared variables (instead of throwing an error).'
    },
    // ===== 11–14: Arrays =====
    {
        category: 'Arrays',
        type: 'code',
        difficulty: 'easy',
        question: 'What is the output?',
        code: `const arr = [1, 2, 3, 4, 5];\nconsole.log(arr.length);\nconsole.log(arr[arr.length - 1]);`,
        options: [
            '<code>5</code> and <code>5</code>',
            '<code>5</code> and <code>4</code>',
            '<code>4</code> and <code>5</code>',
            '<code>5</code> and <code>undefined</code>'
        ],
        answer: 0,
        explanation: 'arr.length is 5 (five elements). arr[arr.length - 1] is arr[4], which is 5 — the last element. This is a common pattern to access the last element of an array.'
    },
    {
        category: 'Arrays',
        type: 'code',
        difficulty: 'medium',
        question: 'What does this code output?',
        code: `const nums = [1, 2, 3, 4];\nconst doubled = nums.map(n => n * 2);\nconsole.log(doubled);\nconsole.log(nums);`,
        options: [
            '<code>[2,4,6,8]</code> and <code>[2,4,6,8]</code>',
            '<code>[2,4,6,8]</code> and <code>[1,2,3,4]</code>',
            '<code>[1,2,3,4]</code> and <code>[2,4,6,8]</code>',
            '<code>Error</code> — map is not a function'
        ],
        answer: 1,
        explanation: 'Array.map() returns a NEW array with each element transformed by the callback. It does NOT mutate the original array. So doubled is [2,4,6,8] while nums remains [1,2,3,4].'
    },
    {
        category: 'Arrays',
        type: 'code',
        difficulty: 'medium',
        question: 'What will be logged?',
        code: `const colors = ["red", "green", "blue"];\ncolors.push("yellow");\ncolors.shift();\nconsole.log(colors);`,
        options: [
            '<code>["green", "blue", "yellow"]</code>',
            '<code>["red", "green", "blue"]</code>',
            '<code>["green", "blue"]</code>',
            '<code>["red", "green", "blue", "yellow"]</code>'
        ],
        answer: 0,
        explanation: 'push("yellow") adds to the end → ["red","green","blue","yellow"]. shift() removes the first element ("red") → ["green","blue","yellow"].'
    },
    {
        category: 'Arrays',
        type: 'code',
        difficulty: 'medium',
        question: 'What does this code output?',
        code: `const numbers = [5, 12, 8, 130, 44];\nconst found = numbers.find(n => n > 10);\nconsole.log(found);`,
        options: ['<code>[12, 130, 44]</code>', '<code>12</code>', '<code>130</code>', '<code>true</code>'],
        answer: 1,
        explanation: 'Array.find() returns the FIRST element that satisfies the condition. 12 is the first number greater than 10. Unlike filter() which returns all matches, find() returns just the first one.'
    },
    // ===== 15–18: Objects =====
    {
        category: 'Objects',
        type: 'code',
        difficulty: 'medium',
        question: 'What will this code log?',
        code: `const person = {\n  name: "Alice",\n  age: 25,\n  greet() {\n    return "Hi, I'm " + this.name;\n  }\n};\n\nconsole.log(person.greet());\nconsole.log(person["age"]);`,
        options: [
            '<code>"Hi, I\'m Alice"</code> and <code>25</code>',
            '<code>"Hi, I\'m undefined"</code> and <code>25</code>',
            '<code>Error</code> — invalid method syntax',
            '<code>"Hi, I\'m Alice"</code> and <code>undefined</code>'
        ],
        answer: 0,
        explanation: 'In a method called on an object, this refers to the object itself. person.greet() accesses this.name = "Alice". Bracket notation person["age"] is equivalent to person.age = 25.'
    },
    {
        category: 'Objects',
        type: 'code',
        difficulty: 'medium',
        question: 'What is the output?',
        code: `const obj = { a: 1, b: 2, c: 3 };\nconst keys = Object.keys(obj);\nconst values = Object.values(obj);\n\nconsole.log(keys);\nconsole.log(values);`,
        options: [
            '<code>["a","b","c"]</code> and <code>[1,2,3]</code>',
            '<code>[1,2,3]</code> and <code>["a","b","c"]</code>',
            '<code>{a,b,c}</code> and <code>{1,2,3}</code>',
            '<code>["a:1","b:2","c:3"]</code> and <code>undefined</code>'
        ],
        answer: 0,
        explanation: 'Object.keys() returns an array of the object\'s own property names. Object.values() returns an array of the object\'s own property values. Both return arrays, not objects.'
    },
    {
        category: 'Objects',
        type: 'code',
        difficulty: 'hard',
        question: 'What does this code output?',
        code: `const a = { x: 1, y: 2 };\nconst b = a;\nb.x = 99;\n\nconsole.log(a.x);\nconsole.log(b.x);`,
        options: [
            '<code>1</code> and <code>99</code>',
            '<code>99</code> and <code>99</code>',
            '<code>99</code> and <code>1</code>',
            '<code>1</code> and <code>1</code>'
        ],
        answer: 1,
        explanation: 'Objects are assigned by reference in JavaScript. const b = a does NOT create a copy — both a and b point to the same object in memory. Changing b.x also changes a.x. To create a copy, use spread: const b = {...a}.'
    },
    {
        category: 'Objects',
        type: 'code',
        difficulty: 'medium',
        question: 'What will be logged?',
        code: `const { name, age, city = "Unknown" } = {\n  name: "Bob",\n  age: 30\n};\n\nconsole.log(name, age, city);`,
        options: [
            '<code>"Bob" 30 "Unknown"</code>',
            '<code>"Bob" 30 undefined</code>',
            '<code>Error</code> — city doesn\'t exist',
            '<code>undefined undefined "Unknown"</code>'
        ],
        answer: 0,
        explanation: 'Destructuring with a default value: city = "Unknown" provides a fallback when the property is missing from the object. name and age are extracted normally. city defaults to "Unknown" since it\'s not in the source object.'
    },
    // ===== 19–21: ES6+ Features =====
    {
        category: 'ES6+',
        type: 'code',
        difficulty: 'easy',
        question: 'What will this template literal produce?',
        code: 'const lang = "JavaScript";\nconst year = 2026;\nconsole.log(`Learning ${lang} in ${year}!`);',
        options: [
            '<code>"Learning JavaScript in 2026!"</code>',
            '<code>"Learning ${lang} in ${year}!"</code>',
            '<code>Error</code> — invalid syntax',
            '<code>"Learning " + lang + " in " + year + "!"</code>'
        ],
        answer: 0,
        explanation: 'Template literals (backtick strings) allow embedded expressions using ${...}. The variables are interpolated directly into the string, making it cleaner than string concatenation.'
    },
    {
        category: 'ES6+',
        type: 'code',
        difficulty: 'medium',
        question: 'What is the output?',
        code: `const arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconst merged = [...arr1, ...arr2];\n\nconsole.log(merged);\nconsole.log(arr1);`,
        options: [
            '<code>[1,2,3,4,5,6]</code> and <code>[1,2,3]</code>',
            '<code>[1,2,3,4,5,6]</code> and <code>[1,2,3,4,5,6]</code>',
            '<code>[[1,2,3],[4,5,6]]</code> and <code>[1,2,3]</code>',
            '<code>Error</code>'
        ],
        answer: 0,
        explanation: 'The spread operator (...) unpacks array elements. [...arr1, ...arr2] creates a new array with all elements from both arrays. The original arrays are not modified.'
    },
    {
        category: 'ES6+',
        type: 'code',
        difficulty: 'hard',
        question: 'What will this code output?',
        code: `const [first, ...rest] = [10, 20, 30, 40];\nconsole.log(first);\nconsole.log(rest);`,
        options: [
            '<code>10</code> and <code>[20, 30, 40]</code>',
            '<code>[10]</code> and <code>[20, 30, 40]</code>',
            '<code>10</code> and <code>20</code>',
            '<code>10</code> and <code>[30, 40]</code>'
        ],
        answer: 0,
        explanation: 'Array destructuring with rest syntax: first gets the first element (10), and ...rest collects all remaining elements into a new array [20, 30, 40]. The rest element must always be the last one.'
    },
    // ===== 22–24: Closures & Scope =====
    {
        category: 'Closures',
        type: 'code',
        difficulty: 'hard',
        question: 'What does this code print?',
        code: `function counter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}\n\nconst inc = counter();\nconsole.log(inc());\nconsole.log(inc());\nconsole.log(inc());`,
        options: [
            '<code>1</code>, <code>1</code>, <code>1</code>',
            '<code>1</code>, <code>2</code>, <code>3</code>',
            '<code>0</code>, <code>1</code>, <code>2</code>',
            '<code>undefined</code>, <code>undefined</code>, <code>undefined</code>'
        ],
        answer: 1,
        explanation: 'This demonstrates closures. The inner function "closes over" the count variable. Each call to inc() increments and returns the count. The variable persists between calls because the closure maintains a reference to it.'
    },
    {
        category: 'Closures',
        type: 'code',
        difficulty: 'hard',
        question: 'What will be logged after 1 second?',
        code: `for (var i = 0; i < 3; i++) {\n  setTimeout(function() {\n    console.log(i);\n  }, 1000);\n}`,
        options: [
            '<code>0</code>, <code>1</code>, <code>2</code>',
            '<code>3</code>, <code>3</code>, <code>3</code>',
            '<code>2</code>, <code>2</code>, <code>2</code>',
            '<code>undefined</code>, <code>undefined</code>, <code>undefined</code>'
        ],
        answer: 1,
        explanation: 'var is function-scoped, so there\'s only one i shared by all callbacks. By the time setTimeout fires (after 1 second), the loop has finished and i is 3. All three callbacks log 3. Using let instead of var would fix this because let creates a new binding for each iteration.'
    },
    {
        category: 'Closures',
        type: 'concept',
        difficulty: 'medium',
        question: 'What is a closure in JavaScript?',
        options: [
            'A way to close a browser window using JavaScript',
            'A function that has access to variables from its outer (enclosing) scope, even after the outer function has returned',
            'A method to prevent variables from being modified',
            'A special syntax for immediately invoking a function'
        ],
        answer: 1,
        explanation: 'A closure is formed when an inner function retains access to the variables of its enclosing function\'s scope, even after the outer function has finished executing. This is fundamental to patterns like data privacy, callbacks, and factory functions.'
    },
    // ===== 25–27: Promises & Async =====
    {
        category: 'Async',
        type: 'code',
        difficulty: 'medium',
        question: 'What is the order of the console output?',
        code: `console.log("A");\n\nsetTimeout(() => {\n  console.log("B");\n}, 0);\n\nconsole.log("C");`,
        options: [
            '<code>A</code>, <code>B</code>, <code>C</code>',
            '<code>A</code>, <code>C</code>, <code>B</code>',
            '<code>B</code>, <code>A</code>, <code>C</code>',
            '<code>C</code>, <code>A</code>, <code>B</code>'
        ],
        answer: 1,
        explanation: 'Even with a 0ms delay, setTimeout is asynchronous and goes to the task queue. The event loop first finishes all synchronous code (A, then C), then processes the task queue (B). This demonstrates JavaScript\'s event loop.'
    },
    {
        category: 'Async',
        type: 'code',
        difficulty: 'hard',
        question: 'What does this async/await code output?',
        code: `async function fetchData() {\n  return "Hello";\n}\n\nfetchData().then(data => {\n  console.log(data);\n});\n\nconsole.log("World");`,
        options: [
            '<code>"Hello"</code> then <code>"World"</code>',
            '<code>"World"</code> then <code>"Hello"</code>',
            '<code>"Hello World"</code>',
            '<code>"World"</code> only'
        ],
        answer: 1,
        explanation: 'An async function always returns a Promise. fetchData().then() schedules the callback to run after the current synchronous code. So "World" is logged first (synchronous), then "Hello" is logged when the promise resolves (microtask).'
    },
    {
        category: 'Async',
        type: 'concept',
        difficulty: 'medium',
        question: 'Which method is used to handle errors in a Promise chain?',
        options: [
            '<code>.then()</code>',
            '<code>.catch()</code>',
            '<code>.finally()</code>',
            '<code>.error()</code>'
        ],
        answer: 1,
        explanation: '.catch() handles rejected promises or errors thrown inside .then() callbacks. .then() handles resolved values, .finally() runs regardless of success or failure, and .error() does not exist in the Promise API.'
    },
    // ===== 28–30: DOM & Miscellaneous =====
    {
        category: 'DOM',
        type: 'concept',
        difficulty: 'easy',
        question: 'Which method selects a single element by its CSS selector?',
        options: [
            '<code>document.getElementById()</code>',
            '<code>document.querySelector()</code>',
            '<code>document.querySelectorAll()</code>',
            '<code>document.getElement()</code>'
        ],
        answer: 1,
        explanation: 'document.querySelector() returns the first element matching a CSS selector. getElementById() only works with IDs (not general CSS selectors). querySelectorAll() returns ALL matching elements as a NodeList. getElement() doesn\'t exist.'
    },
    {
        category: 'DOM',
        type: 'concept',
        difficulty: 'medium',
        question: 'What is event bubbling in the DOM?',
        options: [
            'Events are dispatched only to the target element',
            'Events propagate from the target element UP through its ancestors',
            'Events propagate from the document root DOWN to the target element',
            'Events are dispatched to all elements simultaneously'
        ],
        answer: 1,
        explanation: 'Event bubbling means that when an event occurs on an element, it first runs handlers on that element, then on its parent, then on its grandparent, and so on up the DOM tree. The opposite (top-down) is called event capturing.'
    },
    {
        category: 'Error Handling',
        type: 'code',
        difficulty: 'medium',
        question: 'What will this code output?',
        code: `try {\n  let result = undefined.property;\n  console.log(result);\n} catch (error) {\n  console.log("Caught:", error.name);\n} finally {\n  console.log("Done");\n}`,
        options: [
            '<code>undefined</code> then <code>"Done"</code>',
            '<code>"Caught: TypeError"</code> then <code>"Done"</code>',
            '<code>"Caught: ReferenceError"</code> then <code>"Done"</code>',
            '<code>"Done"</code> only'
        ],
        answer: 1,
        explanation: 'Accessing a property of undefined throws a TypeError. The catch block catches it and logs "Caught: TypeError". The finally block ALWAYS executes regardless of whether an error occurred, so "Done" is logged next.'
    }
];
