# await-promise

## Install

```sh
npm i --save await-promise
```

## Example

```js
import await from 'await-promise';

function timer(name, time) {
	return new Promise(function(success, fail) {
		setTimeout(() => success(name), time*1000);
	});
}

function *myAsyncFunction(a, b, c) {
	yield timer(a, 3);
	yield timer(b, 1);
	yield timer(c, 2);
}

await(myAsyncFunction('Please', 'hit', 'me!')).then(console.log);
// [ 'Please', 'hit', 'me!' ]
```
