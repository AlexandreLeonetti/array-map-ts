#  array map typescript

> map objects and keys into a new array using typescript. 

## Install

```sh
npm install @leonetti/array-map-ts
```

## Usage

```js
import {mapToArray} from '@leonetti/array-map-ts';

 const obj = {
    key1 : 'value1',
    key2 : 'value2'
  };
  console.log(mapArray(obj, (key, value) => key + ' ' + value));

```
