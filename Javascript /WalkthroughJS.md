<details>
  <summary>What is Node.js?</summary>
  <p>Node.js is an open-source, cross-platform JavaScript runtime environment. It allows developers to run JavaScript on the server side, outside of a browser.</p>
</details>

<details>
  <summary>Key Features of Node.js:</summary>
  <p>
    <ul>
      <li><strong>Event-driven and Asynchronous:</strong> Non-blocking I/O makes it ideal for handling multiple requests simultaneously.</li>
      <li><strong>Single-threaded but Scalable:</strong> Uses a single thread with event looping to handle many connections.</li>
      <li><strong>Fast Execution:</strong> Built on V8, it compiles JavaScript directly into machine code for speed.</li>
      <li><strong>NPM (Node Package Manager):</strong> A huge library of open-source packages to accelerate development.</li>
      <li><strong>Cross-platform:</strong> Works on Windows, Linux, and macOS.</li>
    </ul>
  </p>
</details>

<details>
  <summary>What is V8?</summary>
  <p>V8 is Google’s open-source JavaScript engine, written in C++. It powers Google Chrome and many other applications, including Node.js. V8 is responsible for executing JavaScript code by converting it directly into machine code, which makes it extremely fast.</p>
</details>

<details>
  <summary>What is libuv?</summary>
  <p>libuv is a multi-platform support library with a focus on asynchronous I/O. It provides the event loop and all the asynchronous behaviors of Node.js, including file system operations, DNS, network, child processes, pipes, signal handling, polling, and streaming.</p>
</details>

<details>
  <summary>What is the Temporal Dead Zone (TDZ) in JavaScript?</summary>
  <p>The Temporal Dead Zone (TDZ) in JavaScript refers to the period of time during which a variable is declared using <code>let</code> or <code>const</code> but has not yet been initialized. During this time, any attempt to access the variable will result in a ReferenceError. The TDZ starts from the beginning of the block where the variable is declared and ends when the variable is initialized with a value. This behavior helps prevent the use of variables before they are properly initialized, which can lead to bugs and unpredictable behavior in the code.</p>
</details>

<details>
  <summary>What is Lexical Scoping in JavaScript?</summary>
  <p>Lexical scoping, also known as static scoping, is a convention used in JavaScript to determine the scope of a variable based on its position within the source code. In lexical scoping, a variable defined inside a function is only accessible within that function and any nested functions. This means that the scope of a variable is determined by the structure of the code and the location where the variable is declared, rather than the runtime context. Lexical scoping helps in maintaining the modularity and predictability of the code by ensuring that variables are only accessible within their defined scope.</p>
</details>

<details>
  <summary>What are undefined and null in JavaScript?</summary>
  <p>In JavaScript, <code>undefined</code> and <code>null</code> are two distinct types that represent the absence of a value.

  <strong>undefined:</strong> A variable is automatically assigned the value <code>undefined</code> when it is declared but not initialized. It indicates that a variable has been declared but has not yet been assigned a value. For example:
  <pre><code>let a;
  console.log(a); // Output: undefined</code></pre>

  <strong>null:</strong> <code>null</code> is an assignment value that can be explicitly set to indicate that a variable has no value. It is often used to signify that a variable should be empty. For example:
  <pre><code>let b = null;
  console.log(b); // Output: null</code></pre>

  While both <code>undefined</code> and <code>null</code> represent the absence of a value, they are used in different contexts and have different meanings. <code>undefined</code> is typically used by the JavaScript engine, whereas <code>null</code> is used by programmers to indicate an intentional absence of value.</p>
</details>

<details>
  <summary>What are primitive and non-primitive data types in JavaScript?</summary>
  <p>In JavaScript, data types can be categorized into two main types: primitive and non-primitive (or reference) data types.

  <strong>Primitive Data Types:</strong> These are the most basic data types in JavaScript and include:
  <ul>
    <li><code>String</code>: Represents textual data. Example: <code>let str = "Hello";</code></li>
    <li><code>Number</code>: Represents numeric data. Example: <code>let num = 42;</code></li>
    <li><code>Boolean</code>: Represents true or false values. Example: <code>let isTrue = true;</code></li>
    <li><code>Undefined</code>: Represents a variable that has been declared but not initialized. Example: <code>let a;</code></li>
    <li><code>Null</code>: Represents an intentional absence of value. Example: <code>let b = null;</code></li>
    <li><code>Symbol</code>: Represents a unique and immutable value. Example: <code>let sym = Symbol('sym');</code></li>
    <li><code>BigInt</code>: Represents integers with arbitrary precision. Example: <code>let bigInt = 123n;</code></li>
  </ul>

  <strong>Non-Primitive Data Types:</strong> These are also known as reference data types and include:
  <ul>
    <li><code>Object</code>: Represents a collection of properties. Example: <code>let obj = { name: "John", age: 30 };</code></li>
    <li><code>Array</code>: Represents an ordered list of values. Example: <code>let arr = [1, 2, 3];</code></li>
    <li><code>Function</code>: Represents a block of code designed to perform a particular task. Example: <code>function greet() { console.log("Hello"); }</code></li>
  </ul>

  Primitive data types are immutable, meaning their values cannot be changed once created. Non-primitive data types, on the other hand, are mutable and can have their properties or elements modified. Additionally, primitive data types are stored directly in the memory location, whereas non-primitive data types are stored as references to the memory location.</p>
</details>

<details>
  <summary>What are undefined and null in JavaScript?</summary>
  <p>In JavaScript, <code>undefined</code> and <code>null</code> are two distinct types that represent the absence of a value.

  <strong>undefined:</strong> A variable is automatically assigned the value <code>undefined</code> when it is declared but not initialized. It indicates that a variable has been declared but has not yet been assigned a value. For example:
  <pre><code>let a;
  console.log(a); // Output: undefined</code></pre>

  <strong>null:</strong> <code>null</code> is an assignment value that can be explicitly set to indicate that a variable has no value. It is often used to signify that a variable should be empty. For example:
  <pre><code>let b = null;
  console.log(b); // Output: null</code></pre>

  While both <code>undefined</code> and <code>null</code> represent the absence of a value, they are used in different contexts and have different meanings. <code>undefined</code> is typically used by the JavaScript engine, whereas <code>null</code> is used by programmers to indicate an intentional absence of value.</p>
</details>

<details>
  <summary>What is the difference between var and let in JavaScript?</summary>
  <p>In JavaScript, <code>var</code> and <code>let</code> are used to declare variables, but they have different behaviors.

  When JavaScript code is executed, it goes through two phases: the creation phase and the execution phase. During the creation phase, the JavaScript engine scans the code and allocates memory for variables and functions. This is known as hoisting.

  <strong>var:</strong> Variables declared with <code>var</code> are hoisted to the top of their containing function or global scope. During the creation phase, they are initialized with <code>undefined</code>. This means that you can reference a <code>var</code> variable before its declaration without causing an error, but it will have the value <code>undefined</code> until the execution phase assigns it a value. For example:
  <pre><code>console.log(a); // Output: undefined
  var a = 10;
  console.log(a); // Output: 10</code></pre>

  <strong>let:</strong> Variables declared with <code>let</code> are also hoisted, but they are not initialized. Instead, they are placed in a "temporal dead zone" (TDZ) from the start of the block until the declaration is encountered. Accessing a <code>let</code> variable before its declaration will result in a ReferenceError. For example:
  <pre><code>console.log(b); // ReferenceError: Cannot access 'b' before initialization
  let b = 20;
  console.log(b); // Output: 20</code></pre>

  In summary, <code>var</code> is function-scoped and initialized with <code>undefined</code> during the creation phase, while <code>let</code> is block-scoped and not initialized until the execution phase, resulting in a ReferenceError if accessed before declaration.</p>
</details>

<details>
  <summary>What is "use strict" in JavaScript?</summary>
  <p><code>"use strict"</code> is a directive introduced in ECMAScript 5 that enables strict mode in JavaScript. Strict mode is a way to opt in to a restricted variant of JavaScript, which helps catch common coding mistakes and "unsafe" actions, such as defining global variables. It can be applied to an entire script or to individual functions.

  <strong>Benefits of using "use strict":</strong>
  <ul>
    <li>Eliminates some JavaScript silent errors by changing them to throw errors.</li>
    <li>Fixes mistakes that make it difficult for JavaScript engines to perform optimizations, leading to faster code execution.</li>
    <li>Prohibits some syntax likely to be defined in future versions of ECMAScript.</li>
  </ul>

  <strong>Examples of strict mode behavior:</strong>
  <pre><code>
  // Without strict mode
  x = 10; // This will not throw an error
  console.log(x); // Output: 10

  // With strict mode
  "use strict";
  y = 20; // This will throw a ReferenceError: y is not defined
  console.log(y);
  </code></pre>

  <strong>How to enable strict mode:</strong>
  <pre><code>
  // For an entire script
  "use strict";
  // Your code here

  // For a specific function
  function myFunction() {
    "use strict";
    // Function code here
  }
  </code></pre>

  In summary, <code>"use strict"</code> helps improve the quality of your code by catching common errors and preventing the use of unsafe features.</p>
</details>

<details>
  <summary style="color: blue;">What is the "typeof" operator in JavaScript?</summary>
  <p style="color: green;">The <code>typeof</code> operator in JavaScript is used to determine the type of a given variable or expression. It returns a string indicating the type of the operand. The <code>typeof</code> operator is useful for debugging and ensuring that variables are of the expected type.

  <strong>Examples of using the "typeof" operator:</strong>
  <pre><code>
  console.log(typeof 42); // Output: "number"
  console.log(typeof 'hello'); // Output: "string"
  console.log(typeof true); // Output: "boolean"
  console.log(typeof undefined); // Output: "undefined"
  console.log(typeof null); // Output: "object" (this is a known quirk in JavaScript)
  console.log(typeof { name: 'John' }); // Output: "object"
  console.log(typeof function() {}); // Output: "function"
  console.log(typeof Symbol('symbol')); // Output: "symbol"
  console.log(typeof 123n); // Output: "bigint"
  </code></pre>

  <strong>Special cases:</strong>
  <ul>
    <li><code>typeof null</code> returns "object". This is a known issue in JavaScript and is considered a bug, but it has been retained for backward compatibility.</li>
    <li><code>typeof NaN</code> returns "number". NaN stands for "Not-a-Number", but it is still considered a numeric type.</li>
  </ul>

  In summary, the <code>typeof</code> operator is a simple and effective way to check the type of a variable or expression in JavaScript.</p>
</details>
<details>
  <summary style="color: blue;">What are template literals in JavaScript?</summary>
  <p style="color: green;">Template literals are a feature in JavaScript introduced in ES6 (ECMAScript 2015) that allow for easier and more readable string interpolation, multi-line strings, and embedded expressions. Template literals are enclosed by backticks (<code>`</code>) instead of single or double quotes.

  <strong>Key features of template literals:</strong>
  <ul>
    <li><strong>String Interpolation:</strong> Template literals allow for embedding expressions within strings using the <code>${expression}</code> syntax. This makes it easier to create dynamic strings. For example:
    <pre><code>
    const name = 'John';
    const greeting = `Hello, ${name}!`;
    console.log(greeting); // Output: Hello, John!
    </code></pre></li>

    <li><strong>Multi-line Strings:</strong> Template literals can span multiple lines without the need for concatenation or escape characters. For example:
    <pre><code>
    const multiLineString = `This is a string
    that spans multiple
    lines.`;
    console.log(multiLineString);
    </code></pre></li>

    <li><strong>Embedded Expressions:</strong> You can embed any valid JavaScript expression within a template literal. For example:
    <pre><code>
    const a = 5;
    const b = 10;
    console.log(`The sum of a and b is ${a + b}.`); // Output: The sum of a and b is 15.
    </code></pre></li>
  </ul>

  <strong>Tagged Templates:</strong> Template literals also support tagged templates, which allow you to parse template literals with a function. For example:
  <pre><code>
  function tag(strings, ...values) {
    console.log(strings);
    console.log(values);
    return 'Tagged template';
  }
  const result = tag`Hello, ${name}!`;
  console.log(result); // Output: Tagged template
  </code></pre>

  In summary, template literals provide a more powerful and flexible way to work with strings in JavaScript, making code easier to read and write.</p>
</details>
<details>
  <summary style="color: blue;">What is the type of null in JavaScript?</summary>
  <p style="color: green;">In JavaScript, the <code>typeof</code> operator returns "object" when applied to <code>null</code>. This is a well-known quirk in JavaScript and is considered a bug in the language, but it has been retained for backward compatibility.

  <strong>Example:</strong>
  <pre><code>
  console.log(typeof null); // Output: "object"
  </code></pre>

  <strong>Explanation:</strong>
  <p>The reason <code>typeof null</code> returns "object" is due to the way JavaScript was originally designed. In the first implementation of JavaScript, values were represented as a type tag and a value. The type tag for objects was 0. <code>null</code> was represented as the NULL pointer (0x00), which also had the type tag of 0, leading to <code>typeof null</code> returning "object".</p>

  <p>Despite this quirk, <code>null</code> is not an object. It is a primitive value that represents the intentional absence of any object value. To check for <code>null</code> values, it is recommended to use strict equality (<code>===</code>) instead of <code>typeof</code>:</p>
  <pre><code>
  const value = null;
  console.log(value === null); // Output: true
  </code></pre>

  In summary, while <code>typeof null</code> returns "object" due to a historical quirk, <code>null</code> is actually a primitive value representing the absence of any object value.</p>
</details>
<details>
  <summary style="color: blue;">What are the different types of operators in JavaScript?</summary>
  <p style="color: green;">JavaScript provides a variety of operators that can be used to perform different operations on values. These operators can be categorized into several types:

  <strong>1. Arithmetic Operators:</strong> Used to perform arithmetic calculations.
  <ul>
    <li><code>+</code> (Addition): Adds two numbers. Example: <code>5 + 3</code></li>
    <li><code>-</code> (Subtraction): Subtracts one number from another. Example: <code>5 - 3</code></li>
    <li><code>*</code> (Multiplication): Multiplies two numbers. Example: <code>5 * 3</code></li>
    <li><code>/</code> (Division): Divides one number by another. Example: <code>5 / 3</code></li>
    <li><code>%</code> (Modulus): Returns the remainder of a division. Example: <code>5 % 3</code></li>
    <li><code>**</code> (Exponentiation): Raises the first operand to the power of the second operand. Example: <code>5 ** 3</code></li>
  </ul>

  <strong>2. Comparison Operators:</strong> Used to compare two values.
  <ul>
    <li><code>==</code> (Equal to): Checks if two values are equal. Example: <code>5 == '5'</code></li>
    <li><code>===</code> (Strict equal to): Checks if two values are equal and of the same type. Example: <code>5 === 5</code></li>
    <li><code>!=</code> (Not equal to): Checks if two values are not equal. Example: <code>5 != '5'</code></li>
    <li><code>!==</code> (Strict not equal to): Checks if two values are not equal and not of the same type. Example: <code>5 !== '5'</code></li>
    <li><code>></code> (Greater than): Checks if the left operand is greater than the right operand. Example: <code>5 > 3</code></li>
    <li><code><</code> (Less than): Checks if the left operand is less than the right operand. Example: <code>5 < 3</code></li>
    <li><code>>=</code> (Greater than or equal to): Checks if the left operand is greater than or equal to the right operand. Example: <code>5 >= 3</code></li>
    <li><code><=</code> (Less than or equal to): Checks if the left operand is less than or equal to the right operand. Example: <code>5 <= 3</code></li>
  </ul>

  <strong>3. Logical Operators:</strong> Used to perform logical operations.
  <ul>
    <li><code>&&</code> (Logical AND): Returns true if both operands are true. Example: <code>true && false</code></li>
    <li><code>||</code> (Logical OR): Returns true if at least one operand is true. Example: <code>true || false</code></li>
    <li><code>!</code> (Logical NOT): Returns true if the operand is false. Example: <code>!true</code></li>
  </ul>

  <strong>4. Assignment Operators:</strong> Used to assign values to variables.
  <ul>
    <li><code>=</code> (Assignment): Assigns the value of the right operand to the left operand. Example: <code>x = 5</code></li>
    <li><code>+=</code> (Addition assignment): Adds the right operand to the left operand and assigns the result to the left operand. Example: <code>x += 5</code></li>
    <li><code>-=</code> (Subtraction assignment): Subtracts the right operand from the left operand and assigns the result to the left operand. Example: <code>x -= 5</code></li>
    <li><code>*=</code> (Multiplication assignment): Multiplies the left operand by the right operand and assigns the result to the left operand. Example: <code>x *= 5</code></li>
    <li><code>/=</code> (Division assignment): Divides the left operand by the right operand and assigns the result to the left operand. Example: <code>x /= 5</code></li>
    <li><code>%=</code> (Modulus assignment): Takes the modulus using the two operands and assigns the result to the left operand. Example: <code>x %= 5</code></li>
  </ul>

  <strong>5. Conditional (Ternary) Operator:</strong> Used to assign a value to a variable based on a condition.
  <ul>
    <li><code>condition ? value1 : value2</code>: If the condition is true, the operator returns the value of <code>value1</code>; otherwise, it returns the value of <code>value2</code>. Example: <code>let result = (x > 10) ? 'Greater' : 'Smaller';</code></li>
  </ul>

  In summary, JavaScript provides a wide range of operators that allow you to perform various operations on values, making it a powerful and flexible language.</p>
</details>
<details>
  <summary style="color: blue;">What are the push, pop, slice, and splice methods in JavaScript?</summary>
  <p style="color: green;">In JavaScript, arrays come with several built-in methods that allow you to manipulate their elements. Four commonly used methods are <code>push</code>, <code>pop</code>, <code>slice</code>, and <code>splice</code>.

  <strong>1. push:</strong> Adds one or more elements to the end of an array and returns the new length of the array.
  <pre><code>
  let arr = [1, 2, 3];
  arr.push(4);
  console.log(arr); // Output: [1, 2, 3, 4]
  </code></pre>

  <strong>2. pop:</strong> Removes the last element from an array and returns that element. This method changes the length of the array.
  <pre><code>
  let arr = [1, 2, 3];
  let lastElement = arr.pop();
  console.log(arr); // Output: [1, 2, 3]
  console.log(lastElement); // Output: 3
  </code></pre>

  <strong>3. slice:</strong> Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.
  <pre><code>
  let arr = [1, 2, 3, 4, 5];
  let slicedArr = arr.slice(1, 3);
  console.log(slicedArr); // Output: [2, 3]
  console.log(arr); // Output: [1, 2, 3, 4, 5]
  </code></pre>

  <strong>4. splice:</strong> Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. This method modifies the original array.
  <pre><code>
  let arr = [1, 2, 3, 4, 5];
  let removedElements = arr.splice(2, 2, 'a', 'b');
  console.log(arr); // Output: [1, 2, 'a', 'b', 5]
  console.log(removedElements); // Output: [3, 4]
  </code></pre>

  <strong>Comparison Table:</strong>
  <table>
    <tr>
      <th>Method</th>
      <th>Description</th>
      <th>Modifies Original Array</th>
      <th>Returns</th>
    </tr>
    <tr>
      <td><code>push</code></td>
      <td>Adds one or more elements to the end of an array</td>
      <td>Yes</td>
      <td>New length of the array</td>
    </tr>
    <tr>
      <td><code>pop</code></td>
      <td>Removes the last element from an array</td>
      <td>Yes</td>
      <td>The removed element</td>
    </tr>
    <tr>
      <td><code>slice</code></td>
      <td>Returns a shallow copy of a portion of an array</td>
      <td>No</td>
      <td>A new array containing the extracted elements</td>
    </tr>
    <tr>
      <td><code>splice</code></td>
      <td>Changes the contents of an array by removing/replacing elements</td>
      <td>Yes</td>
      <td>An array containing the removed elements</td>
    </tr>
  </table>

  In summary, <code>push</code>, <code>pop</code>, <code>slice</code>, and <code>splice</code> are powerful array methods in JavaScript that allow you to manipulate arrays in various ways, each with its own specific use case.</p>
</details>
<details>
  <summary style="color: blue;">What are the different types of loops in JavaScript?</summary>
  <p style="color: green;">JavaScript provides several types of loops that allow you to execute a block of code multiple times. The main types of loops are <code>for</code>, <code>while</code>, <code>do-while</code>, <code>for-in</code>, and <code>for-of</code>.

  <strong>1. for Loop:</strong> Used to execute a block of code a specific number of times.
  <pre><code>
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  // Output: 0 1 2 3 4
  </code></pre>

  <strong>2. while Loop:</strong> Used to execute a block of code as long as a specified condition is true.
  <pre><code>
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
  // Output: 0 1 2 3 4
  </code></pre>

  <strong>3. do-while Loop:</strong> Similar to the <code>while</code> loop, but it executes the block of code once before checking the condition.
  <pre><code>
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i < 5);
  // Output: 0 1 2 3 4
  </code></pre>

  <strong>4. for-in Loop:</strong> Used to iterate over the enumerable properties of an object.
  <pre><code>
  const obj = { a: 1, b: 2, c: 3 };
  for (let key in obj) {
    console.log(key, obj[key]);
  }
  // Output: a 1
  //         b 2
  //         c 3
  </code></pre>

  <strong>5. for-of Loop:</strong> Used to iterate over the values of an iterable object (like an array, string, or Map).
  <pre><code>
  const arr = [1, 2, 3, 4, 5];
  for (let value of arr) {
    console.log(value);
  }
  // Output: 1 2 3 4 5
  </code></pre>

  <strong>Comparison Table:</strong>
  <table>
    <tr>
      <th>Loop Type</th>
      <th>Description</th>
      <th>Use Case</th>
    </tr>
    <tr>
      <td><code>for</code></td>
      <td>Executes a block of code a specific number of times</td>
      <td>When the number of iterations is known</td>
    </tr>
    <tr>
      <td><code>while</code></td>
      <td>Executes a block of code as long as a specified condition is true</td>
      <td>When the number of iterations is not known</td>
    </tr>
    <tr>
      <td><code>do-while</code></td>
      <td>Executes a block of code once before checking the condition</td>
      <td>When the block of code needs to be executed at least once</td>
    </tr>
    <tr>
      <td><code>for-in</code></td>
      <td>Iterates over the enumerable properties of an object</td>
      <td>When iterating over object properties</td>
    </tr>
    <tr>
      <td><code>for-of</code></td>
      <td>Iterates over the values of an iterable object</td>
      <td>When iterating over array or iterable values</td>
    </tr>
  </table>
</p>
</details>
<details>
  <summary style="color: blue;">What is the difference between for...of and for...in loops in JavaScript?</summary>
  <p style="color: green;">In JavaScript, both <code>for...of</code> and <code>for...in</code> loops are used to iterate over elements, but they serve different purposes and work with different types of data.

  <strong>for...in Loop:</strong>
  <ul>
    <li>Used to iterate over the enumerable properties of an object.</li>
    <li>Iterates over the keys (property names) of an object.</li>
    <li>Can be used with objects and arrays, but primarily intended for objects.</li>
  </ul>
  <pre><code>
  const obj = { a: 1, b: 2, c: 3 };
  for (let key in obj) {
    console.log(key, obj[key]);
  }
  // Output: a 1
  //         b 2
  //         c 3
  </code></pre>

  <strong>for...of Loop:</strong>
  <ul>
    <li>Used to iterate over the values of an iterable object (like an array, string, or Map).</li>
    <li>Iterates over the values of an iterable object.</li>
    <li>Cannot be used with objects unless they implement the iterable protocol.</li>
  </ul>
  <pre><code>
  const arr = [1, 2, 3, 4, 5];
  for (let value of arr) {
    console.log(value);
  }
  // Output: 1 2 3 4 5
  </code></pre>

  <strong>Comparison Table:</strong>
  <table>
    <tr>
      <th>Feature</th>
      <th>for...in</th>
      <th>for...of</th>
    </tr>
    <tr>
      <td>Purpose</td>
      <td>Iterates over the enumerable properties of an object</td>
      <td>Iterates over the values of an iterable object</td>
    </tr>
    <tr>
      <td>Iterates Over</td>
      <td>Keys (property names)</td>
      <td>Values</td>
    </tr>
    <tr>
      <td>Use Case</td>
      <td>When iterating over object properties</td>
      <td>When iterating over array or iterable values</td>
    </tr>
    <tr>
      <td>Works With</td>
      <td>Objects and arrays (primarily objects)</td>
      <td>Arrays, strings, Maps, Sets, and other iterables</td>
    </tr>
  </table>

  In summary, <code>for...in</code> is used to iterate over the keys of an object, while <code>for...of</code> is used to iterate over the values of an iterable object. Understanding the differences between these loops helps you choose the right one for your specific use case.</p>
</details>