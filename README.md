<p align="center"><img width="100" src="https://raw.githubusercontent.com/hiowenluke/kdo/master/doc/img/logo.png" alt="Kdo logo" /></p>


# Kdo

Kdo makes the code clear, easy to read and maintain. You can easily split long code into several small functions ([why we should do this](#why)), execute them via kdo. Kdo requires Node.js 7.6+ for async/await.
<p align="center"><img width="100%" src="https://raw.githubusercontent.com/hiowenluke/kdo/master/doc/img/demo0.jpg" /></p>
<p align="center"><img width="100%" src="https://raw.githubusercontent.com/hiowenluke/kdo/master/doc/img/demo1.jpg" /></p>

Kdo itself spreads the code into multiple small functions too to makes the code clear, easy to read and maintain. [Noapi](https://github.com/hiowenluke/noapi) (a light API framework for Node.js, easily define apis and test cases, easily I/O) is a good usage of Kdo, it is recommended to read its source code.



## Installation

```sh
npm i kdo --save
```

Test:
```sh
git clone https://github.com/hiowenluke/kdo
cd kdo
npm test
```



## Examples

See [examples](./examples) to learn more.



## Why

Why we should split long code into several small functions? Simply put, this can leads to **MURDER** which is a good thing (the answer comes from [stackOverflow](https://stackoverflow.com/questions/13256453/what-is-the-advantage-of-breaking-a-code-into-several-small-functions-in-c), by John Dibling):

* **M** - Maintainability. Smaller, simpler functions are easier to maintain.
* **U** - Understandability. Simpler functions are easier to understand.
* **R** - Reuseability. Encourages code reuse by moving common operations to a separate function.
* **D** - Debugability. It's easier to debug simple functions than complex ones.
* **E** - Extensibility. Code reuse and maintainability lead to functions that are easier to refactor in 6 months.
* **R** - Regression. Reuse and modularization lead to more effective regression testing.



There are more good articles be recommended strongly:

* [Unix principle: "Do one thing and do it well"](https://en.wikipedia.org/wiki/Unix_philosophy) — Doug McIlroy
* [Clean Code: "The first rule of functions is that they should be small"](https://medium.com/@huytrongnguyen1985/lessons-learnt-from-the-clean-code-robert-c-martin-cecbe2b09139) — Robert C. Martin
* [When is a Method, Class or Subsystem Too Big?](https://dzone.com/articles/rule-30-%E2%80%93-when-method-class-or) — Jim Bird
* [10 Tips To Keep Your Code Clean](https://medium.com/oril/10-tips-to-keep-your-code-more-clean-2fa9aafea1cf) — Ihor Sokolyk
* [“Function calls are expensive” vs. “Keep functions small”](https://stackoverflow.com/questions/11168939/function-calls-are-expensive-vs-keep-functions-small) — Tomasz Nurkiewicz
.
* [Clean Code JavaScript: "Prefer small functions over classes"](https://github.com/ryanmcdermott/clean-code-javascript) — Ryan McDermott
* [The Art of Writing Small and Plain Functions](https://dmitripavlutin.com/the-art-of-writing-small-and-plain-functions/) — Dmitri Pavlutin
* [Coding Best Practices (JavaScript) - Write small functions](https://medium.com/@janakachathuranga/coding-best-practices-javascript-write-small-functions-7d2567bd6328) — Janaka Chathuranga
* [12 tips for writing clean and scalable JavaScript](https://blog.logrocket.com/12-tips-for-writing-clean-and-scalable-javascript-3ffe30abfe20/) — Lukas Gisder-Dubé 
.
* [How point-free composition will make you a better functional programmer](https://www.freecodecamp.org/news/how-point-free-composition-will-make-you-a-better-functional-programmer-33dcb910303a/) — Cristian Salcescu
* [Node.js Coding Style Guidelines](https://medium.com/swlh/node-js-coding-style-guidelines-74a20d00c40b) — Tarun Gupta
* [Clean Code vs. Dirty Code: React Best Practices](https://americanexpress.io/clean-code-dirty-code/) — Donavon West
* [JavaScript Best Practices](https://www.devbridge.com/articles/javascript-best-practices/) — Tomas Kirda



## License

[MIT](LICENSE)

Copyright (c) 2019, Owen Luke