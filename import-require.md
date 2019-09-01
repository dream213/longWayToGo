### 两点不同
---
1. **CommonJS** 模块输出的是一个值的拷贝， **ES6** 模块输出的是值的引用。
> JS 引擎对脚本静态分析的时候，遇到模块加载命令import，就会生成一个**只读引用**——重新赋值报错。等到脚本真正执行时，再根据这个**只读引用**，到被加载的那个模块里面去取值。

2. **CommonJS** 模块运行时加载，**ES6** 模块时编译时输出接口。
> CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成，导致完全没办法在编译时做“静态优化”。

> ES6 模块不是对象，而是通过export命令显式指定输出的代码，再通过import命令输入。

For Example : 

```js
// CommonJS模块
let { stat, exists, readFile } = require('fs');

// 等同于
let _fs = require('fs');
let stat = _fs.stat;
let exists = _fs.exists;
let readfile = _fs.readfile;
```
> 上面代码的实质是整体加载fs模块（即加载fs的所有方法），生成一个对象（_fs），然后再从这个对象上面读取 3 个方法。这种加载称为**运行时加载**。

```js
import { stat, exists, readFile } from 'fs';
```
> 上面代码的实质是从fs模块加载 3 个方法，其他方法不加载。这种加载称为**编译时加载**或者**静态加载**。