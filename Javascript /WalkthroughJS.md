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
<details>
  <summary style="color: blue;">What are the different types of functions in JavaScript?</summary>
  <p style="color: green;">JavaScript supports various types of functions, each with its own syntax and use cases. Here are some of the main types:

<strong>1. Normal Function:</strong> A standard function declaration that can be called by its name.

  <pre><code>
  function greet() {
    console.log("Hello, World!");
  }
  greet(); // Output: Hello, World!
  </code></pre>

<strong>2. Function with Return Type and Parameters:</strong> A function that takes parameters and returns a value.

  <pre><code>
  function add(a, b) {
    return a + b;
  }
  let sum = add(5, 3);
  console.log(sum); // Output: 8
  </code></pre>

<strong>3. Anonymous Function:</strong> A function without a name, often used as an argument to other functions or assigned to a variable.

  <pre><code>
  let anonFunc = function() {
    console.log("I am anonymous!");
  };
  anonFunc(); // Output: I am anonymous!
  </code></pre>

<strong>4. Function Expression:</strong> A function defined within an expression, typically assigned to a variable.

  <pre><code>
  let multiply = function(a, b) {
    return a * b;
  };
  console.log(multiply(4, 5)); // Output: 20
  </code></pre>

<strong>5. Self-Invoking Function:</strong> A function that is invoked immediately after it is defined. Also known as an Immediately Invoked Function Expression (IIFE).

  <pre><code>
  (function() {
    console.log("I am self-invoking!");
  })(); // Output: I am self-invoking!
  </code></pre>

<strong>Comparison Table:</strong>

  <table>
    <tr>
      <th>Function Type</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
    <tr>
      <td>Normal Function</td>
      <td>A standard function declaration</td>
      <td><pre><code>function greet() { ... }</code></pre></td>
    </tr>
    <tr>
      <td>Function with Return Type and Parameters</td>
      <td>A function that takes parameters and returns a value</td>
      <td><pre><code>function add(a, b) { ... }</code></pre></td>
    </tr>
    <tr>
      <td>Anonymous Function</td>
      <td>A function without a name</td>
      <td><pre><code>let anonFunc = function() { ... }</code></pre></td>
    </tr>
    <tr>
      <td>Function Expression</td>
      <td>A function defined within an expression</td>
      <td><pre><code>let multiply = function(a, b) { ... }</code></pre></td>
    </tr>
    <tr>
      <td>Self-Invoking Function</td>
      <td>A function that is invoked immediately after it is defined</td>
      <td><pre><code>(function() { ... })();</code></pre></td>
    </tr>
  </table>

In summary, JavaScript provides various types of functions to suit different programming needs, from standard function declarations to anonymous and self-invoking functions.</p>

</details>
<p style="color: green;">In JavaScript, an object method is a function that is a property of an object. Methods are used to perform actions on the object and can access and modify the object's properties.

<strong>Example of an Object with Methods:</strong>

<pre><code>
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
  greet: function() {
    console.log("Hello, " + this.firstName);
  }
};

console.log(person.fullName()); // Output: John Doe
person.greet(); // Output: Hello, John
</code></pre>

<strong>Key Points about Object Methods:</strong>

<ul>
  <li>Methods are functions stored as object properties.</li>
  <li>Methods can access and modify the object's properties using the <code>this</code> keyword.</li>
  <li>Methods can be added to an object at any time, even after the object is created.</li>
</ul>

<strong>Adding Methods to an Object:</strong>

<pre><code>
const car = {
  brand: "Toyota",
  model: "Corolla"
};

car.start = function() {
  console.log(this.brand + " " + this.model + " is starting.");
};

car.start(); // Output: Toyota Corolla is starting.
</code></pre>

<strong>Using the <code>this</code> Keyword:</strong>

<p>The <code>this</code> keyword refers to the object from which the method was called. It allows methods to access and modify the object's properties.</p>

<strong>Example:</strong>

<pre><code>
const book = {
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
  getDetails: function() {
    return this.title + " by " + this.author;
  }
};

console.log(book.getDetails()); // Output: JavaScript: The Good Parts by Douglas Crockford
</code></pre>

In summary, object methods in JavaScript are functions that are properties of objects. They allow objects to perform actions and interact with their own properties using the <code>this</code> keyword.</p>

<details>
Var goes to global scope and Let and const goes to script or local scope.
</details>

<p style="color: green;">In JavaScript, hoisting is a behavior in which variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code.

<strong>Variable Hoisting:</strong>

<ul>
  <li>Variables declared with <code>var</code> are hoisted to the top of their function or global scope and initialized with <code>undefined</code>.</li>
  <li>Variables declared with <code>let</code> and <code>const</code> are also hoisted to the top of their block scope, but they are not initialized. Accessing them before the declaration results in a ReferenceError.</li>
</ul>
<pre><code>
// Example with var
console.log(a); // Output: undefined
var a = 10;
console.log(a); // Output: 10

// Example with let
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); // Output: 20
</code></pre>

<strong>Function Hoisting:</strong>

<ul>
  <li>Function declarations are hoisted to the top of their containing scope, allowing you to call the function before its declaration.</li>
  <li>Function expressions are not hoisted. If you try to call a function expression before it is defined, you will get a TypeError.</li>
</ul>
<pre><code>
// Function declaration
greet(); // Output: Hello, World!
function greet() {
  console.log("Hello, World!");
}

// Function expression
sayHello(); // TypeError: sayHello is not a function
var sayHello = function() {
console.log("Hello!");
};
</code></pre>

In summary, hoisting in JavaScript allows you to use variables and functions before they are declared, but the behavior differs between <code>var</code>, <code>let</code>, <code>const</code>, and function expressions. Understanding hoisting helps you write more predictable and bug-free code.</p>

<p style="color: green;">In JavaScript, hoisting is a behavior in which variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code.

<strong>Variable Hoisting:</strong>

<ul>
  <li>Variables declared with <code>var</code> are hoisted to the top of their function or global scope and initialized with <code>undefined</code>.</li>
  <li>Variables declared with <code>let</code> and <code>const</code> are also hoisted to the top of their block scope, but they are not initialized. Accessing them before the declaration results in a ReferenceError.</li>
</ul>
<pre><code>
// Example with var
console.log(a); // Output: undefined
var a = 10;
console.log(a); // Output: 10

// Example with let
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); // Output: 20
</code></pre>

<strong>Function Hoisting:</strong>

<ul>
  <li>Function declarations are hoisted to the top of their containing scope, allowing you to call the function before its declaration.</li>
  <li>Function expressions are not hoisted. If you try to call a function expression before it is defined, you will get a TypeError.</li>
</ul>
<pre><code>
// Function declaration
greet(); // Output: Hello, World!
function greet() {
  console.log("Hello, World!");
}

// Function expression
sayHello(); // TypeError: sayHello is not a function
var sayHello = function() {
console.log("Hello!");
};
</code></pre>

In summary, hoisting in JavaScript allows you to use variables and functions before they are declared, but the behavior differs between <code>var</code>, <code>let</code>, <code>const</code>, and function expressions. Understanding hoisting helps you write more predictable and bug-free code.</p>

<p style="color: green;">In JavaScript, hoisting is a behavior in which variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code.

<strong>Variable Hoisting:</strong>

<ul>
  <li>Variables declared with <code>var</code> are hoisted to the top of their function or global scope and initialized with <code>undefined</code>.</li>
  <li>Variables declared with <code>let</code> and <code>const</code> are also hoisted to the top of their block scope, but they are not initialized. Accessing them before the declaration results in a ReferenceError.</li>
</ul>
<pre><code>
// Example with var
console.log(a); // Output: undefined
var a = 10;
console.log(a); // Output: 10

// Example with let
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); // Output: 20
</code></pre>

<strong>Function Hoisting:</strong>

<ul>
  <li>Function declarations are hoisted to the top of their containing scope, allowing you to call the function before its declaration.</li>
  <li>Function expressions are not hoisted. If you try to call a function expression before it is defined, you will get a TypeError.</li>
</ul>
<pre><code>
// Function declaration
greet(); // Output: Hello, World!
function greet() {
  console.log("Hello, World!");
}

// Function expression
sayHello(); // TypeError: sayHello is not a function
var sayHello = function() {
console.log("Hello!");
};
</code></pre>

<strong>Additional Points:</strong>

<ul>
  <li><strong>For functions:</strong> Being able to use a variable's value in its scope before the line it is declared. ("Value hoisting")</li>
  <li><strong>For var:</strong> Being able to reference a variable in its scope before the line it is declared, without throwing a ReferenceError, but the value is always undefined. ("Declaration hoisting")</li>
  <li><strong>For let, const, and class:</strong> The declaration of the variable causes behavior changes in its scope before the line in which it is declared.</li>
</ul>

In summary, hoisting in JavaScript allows you to use variables and functions before they are declared, but the behavior differs between <code>var</code>, <code>let</code>, <code>const</code>, and function expressions. Understanding hoisting helps you write more predictable and bug-free code.</p>

<details>
  <summary style="color: blue;">How does the JavaScript engine work while performing a function?</summary>
  <p style="color: green;">When the JavaScript engine executes a function, it goes through several steps to ensure the function runs correctly. Here is an overview of how the JavaScript engine works while performing a function:

<strong>1. Parsing:</strong>

  <p>The JavaScript engine first parses the code to understand its structure and syntax. During this phase, it converts the code into an Abstract Syntax Tree (AST), which represents the hierarchical structure of the code.</p>

<strong>2. Compilation:</strong>

  <p>After parsing, the JavaScript engine compiles the AST into bytecode or machine code. Modern JavaScript engines, like Google's V8, use Just-In-Time (JIT) compilation to optimize the code during execution.</p>

<strong>3. Execution Context Creation:</strong>

  <p>When a function is called, the JavaScript engine creates an execution context for that function. The execution context contains information about the function's scope, including variables, arguments, and the <code>this</code> keyword.</p>

<strong>4. Hoisting:</strong>

  <p>During the creation phase of the execution context, the JavaScript engine hoists variable and function declarations to the top of their scope. This means that variables declared with <code>var</code> are initialized with <code>undefined</code>, while <code>let</code> and <code>const</code> declarations are not initialized until their actual declaration is encountered.</p>

<strong>5. Execution:</strong>

  <p>After setting up the execution context and hoisting declarations, the JavaScript engine begins executing the function's code line by line. It evaluates expressions, executes statements, and calls other functions as needed.</p>

<strong>6. Garbage Collection:</strong>

  <p>Once the function has finished executing, the JavaScript engine performs garbage collection to free up memory that is no longer needed. This includes cleaning up variables and objects that are no longer referenced.</p>

<strong>Example:</strong>

  <pre><code>
  function example(a, b) {
    var sum = a + b;
    return sum;
  }

  console.log(example(5, 3)); // Output: 8
  </code></pre>

<strong>Steps in Detail:</strong>

  <ul>
    <li><strong>Parsing:</strong> The engine parses the <code>example</code> function and converts it into an AST.</li>
    <li><strong>Compilation:</strong> The AST is compiled into bytecode or machine code.</li>
    <li><strong>Execution Context Creation:</strong> When <code>example(5, 3)</code> is called, an execution context is created with <code>a</code> and <code>b</code> set to 5 and 3, respectively.</li>
    <li><strong>Hoisting:</strong> The <code>var sum</code> declaration is hoisted to the top of the function scope and initialized with <code>undefined</code>.</li>
    <li><strong>Execution:</strong> The engine executes the code, calculates <code>a + b</code>, assigns the result to <code>sum</code>, and returns <code>sum</code>.</li>
    <li><strong>Garbage Collection:</strong> After the function execution is complete, the engine performs garbage collection to free up memory.</li>
  </ul>

In summary, the JavaScript engine goes through parsing, compilation, execution context creation, hoisting, execution, and garbage collection to perform a function. Understanding these steps helps developers write more efficient and optimized code.</p>

</details>
<details>
  <summary style="color: blue;">What are lexical scope, scope chaining, and closures in JavaScript?</summary>
  <p style="color: green;">In JavaScript, lexical scope, scope chaining, and closures are fundamental concepts that help manage the accessibility of variables and functions.

<strong>1. Lexical Scope:</strong>

  <p>Lexical scope, also known as static scope, refers to the scope of a variable being determined by its position within the source code. In lexical scoping, a variable defined inside a function is only accessible within that function and any nested functions.</p>
  <pre><code>
  function outer() {
    let outerVar = 'I am outside!';
    
    function inner() {
      console.log(outerVar); // Output: I am outside!
    }
    
    inner();
  }
  
  outer();
  </code></pre>

<strong>2. Scope Chaining:</strong>

  <p>Scope chaining refers to the process of resolving variable names in nested functions. When a variable is referenced, the JavaScript engine looks for the variable in the current scope. If it is not found, it moves up to the next outer scope, and so on, until it reaches the global scope.</p>
  <pre><code>
  function first() {
    let firstVar = 'First';
    
    function second() {
      let secondVar = 'Second';
      
      function third() {
        let thirdVar = 'Third';
        console.log(firstVar); // Output: First
        console.log(secondVar); // Output: Second
        console.log(thirdVar); // Output: Third
      }
      
      third();
    }
    
    second();
  }
  
  first();
  </code></pre>

<strong>3. Closures:</strong>

  <p>A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope. Closures are created whenever a function is defined inside another function, allowing the inner function to access the outer function's variables.</p>
  <pre><code>
  function makeCounter() {
    let count = 0;
    
    return function() {
      count++;
      return count;
    };
  }
  
  const counter = makeCounter();
  console.log(counter()); // Output: 1
  console.log(counter()); // Output: 2
  console.log(counter()); // Output: 3
  </code></pre>

<strong>Comparison Table:</strong>

  <table>
    <tr>
      <th>Concept</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
    <tr>
      <td>Lexical Scope</td>
      <td>Scope determined by the position in the source code</td>
      <td><pre><code>function outer() { ... }</code></pre></td>
    </tr>
    <tr>
      <td>Scope Chaining</td>
      <td>Process of resolving variable names in nested functions</td>
      <td><pre><code>function first() { ... }</code></pre></td>
    </tr>
    <tr>
      <td>Closures</td>
      <td>Function retaining access to its lexical scope</td>
      <td><pre><code>function makeCounter() { ... }</code></pre></td>
    </tr>
  </table>

In summary, lexical scope determines the scope of variables based on their position in the code, scope chaining resolves variable names in nested functions, and closures allow functions to retain access to their lexical scope even when executed outside that scope. Understanding these concepts is crucial for writing effective and efficient JavaScript code.</p>

</details>
<details>
  <summary style="color: blue;">What are Higher-Order Functions (HOF) and callbacks in JavaScript?</summary>
  <p style="color: green;">In JavaScript, Higher-Order Functions (HOF) and callbacks are powerful concepts that allow for more flexible and reusable code.

  <strong>1. Higher-Order Functions (HOF):</strong>
  <p>A Higher-Order Function is a function that either takes one or more functions as arguments, returns a function, or both. HOFs allow for more abstract and reusable code by enabling functions to be passed around as values.</p>
  <pre><code>
  // Example of a Higher-Order Function
  function higherOrderFunction(callback) {
    const message = "Hello, World!";
    callback(message);
  }

  function printMessage(msg) {
    console.log(msg);
  }

  higherOrderFunction(printMessage); // Output: Hello, World!
  </code></pre>

  <strong>2. Callbacks:</strong>
  <p>A callback is a function that is passed as an argument to another function and is executed after some operation has been completed. Callbacks are commonly used for asynchronous operations, such as handling events or making API requests.</p>
  <pre><code>
  // Example of a Callback Function
  function fetchData(callback) {
    setTimeout(() => {
      const data = { name: "John", age: 30 };
      callback(data);
    }, 2000);
  }

  function handleData(data) {
    console.log("Data received:", data);
  }

  fetchData(handleData); // Output after 2 seconds: Data received: { name: "John", age: 30 }
  </code></pre>

  <strong>Comparison Table:</strong>
  <table>
    <tr>
      <th>Concept</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
    <tr>
      <td>Higher-Order Function (HOF)</td>
      <td>A function that takes one or more functions as arguments, returns a function, or both</td>
      <td><pre><code>function higherOrderFunction(callback) { ... }</code></pre></td>
    </tr>
    <tr>
      <td>Callback</td>
      <td>A function passed as an argument to another function and executed after some operation</td>
      <td><pre><code>function fetchData(callback) { ... }</code></pre></td>
    </tr>
  </table>

  In summary, Higher-Order Functions (HOF) and callbacks are essential concepts in JavaScript that enable more flexible and reusable code. HOFs allow functions to be passed around as values, while callbacks are used to handle asynchronous operations and events.</p>
</details>
<details>
  <summary style="color: blue;">What is the map method in JavaScript?</summary>
  <p style="color: green;">The <code>map</code> method in JavaScript is an array method that creates a new array populated with the results of calling a provided function on every element in the calling array. It is commonly used for transforming or processing array elements.

  <strong>Syntax:</strong>
  <pre><code>
  array.map(function(currentValue, index, array) {
    // Return element for new array
  });
  </code></pre>

  <strong>Parameters:</strong>
  <ul>
    <li><code>currentValue</code>: The current element being processed in the array.</li>
    <li><code>index</code> (optional): The index of the current element being processed in the array.</li>
    <li><code>array</code> (optional): The array <code>map</code> was called upon.</li>
  </ul>

  <strong>Example:</strong>
  <pre><code>
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map(function(num) {
    return num * 2;
  });
  console.log(doubled); // Output: [2, 4, 6, 8, 10]
  </code></pre>

  <strong>Arrow Function Example:</strong>
  <pre><code>
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map(num => num * 2);
  console.log(doubled); // Output: [2, 4, 6, 8, 10]
  </code></pre>

  <strong>Comparison Table:</strong>
  <table>
    <tr>
      <th>Feature</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
    <tr>
      <td>Transformation</td>
      <td>Transforms each element in the array</td>
      <td><pre><code>array.map(num => num * 2)</code></pre></td>
    </tr>
    <tr>
      <td>Returns</td>
      <td>New array with transformed elements</td>
      <td><pre><code>[2, 4, 6, 8, 10]</code></pre></td>
    </tr>
    <tr>
      <td>Original Array</td>
      <td>Does not modify the original array</td>
      <td><pre><code>[1, 2, 3, 4, 5]</code></pre></td>
    </tr>
  </table>

  In summary, the <code>map</code> method in JavaScript is a powerful tool for transforming arrays by applying a function to each element and returning a new array with the transformed elements. It is commonly used for data processing and manipulation.</p>
</details>

<details>
  <summary style="color: blue;">What is the filter method in JavaScript?</summary>
  <p style="color: green;">The <code>filter</code> method in JavaScript is an array method that creates a new array with all elements that pass the test implemented by the provided function. It is commonly used to filter out elements from an array based on certain criteria.

  <strong>Syntax:</strong>
  <pre><code>
  array.filter(function(element, index, array) {
    // Return true to keep the element, false otherwise
  });
  </code></pre>

  <strong>Parameters:</strong>
  <ul>
    <li><code>element</code>: The current element being processed in the array.</li>
    <li><code>index</code> (optional): The index of the current element being processed in the array.</li>
    <li><code>array</code> (optional): The array <code>filter</code> was called upon.</li>
  </ul>

  <strong>Example:</strong>
  <pre><code>
  const numbers = [1, 2, 3, 4, 5];
  const evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
  });
  console.log(evenNumbers); // Output: [2, 4]
  </code></pre>

  <strong>Arrow Function Example:</strong>
  <pre><code>
  const numbers = [1, 2, 3, 4, 5];
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  console.log(evenNumbers); // Output: [2, 4]
  </code></pre>

  <strong>Comparison Table:</strong>
  <table>
    <tr>
      <th>Feature</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
    <tr>
      <td>Filtering</td>
      <td>Filters elements based on a condition</td>
      <td><pre><code>array.filter(num => num % 2 === 0)</code></pre></td>
    </tr>
    <tr>
      <td>Returns</td>
      <td>New array with filtered elements</td>
      <td><pre><code>[2, 4]</code></pre></td>
    </tr>
    <tr>
      <td>Original Array</td>
      <td>Does not modify the original array</td>
      <td><pre><code>[1, 2, 3, 4, 5]</code></pre></td>
    </tr>
  </table>

  In summary, the <code>filter</code> method in JavaScript is a powerful tool for creating a new array with elements that meet certain criteria. It is commonly used for data processing and manipulation, allowing you to easily filter out unwanted elements from an array.</p>
</details>