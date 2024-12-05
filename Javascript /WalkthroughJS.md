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

