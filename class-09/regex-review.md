# Regex Review

## 3. isNum

```js
// solution A
const isNum = (input) => /[0-9]/.test(input);

// solution B
const isNum = (input) => {
  let regex = /\d/;
  return regex.test(input);
};

// solution C
const isNum = (input) => /\d/.test(input);
```

## 5. isCapitalized

```js
// solution A
const isCapitalized = (str) => [...str.matchAll(/\b[A-Z]\w*\b/g)].map(items => items[0]);

// solution B
const isCapitalized = (str) => {
  let r = /[A-Z][a-zA-Z]*/g;
  // return r.test(str);
  let results = str.match(r);
  return results || [];
};

// solution C
const isCapitalized = str => {
  // Solution code here...
  let matchedWords = [];
  if (str.match(/\b[A-Z][A-Za-z]+\b/g)) {
    matchedWords = str.match(/\b[A-Z][A-Za-z]+\b/g);
  }
  return matchedWords
};

```

## 6. Cities that start with A-J

```js
// solution A
const citiesAtoJ = (arr) => {
  return arr.filter(x => (/^[A-J]/).test(x));

};

// solution B
const citiesAtoJ = (arr) => arr.filter(item => /^[A-J]/g.test(item));

// solution C
const citiesAtoJ = (arr) => {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    let regex = /^[A-J]/g;
    if (regex.test(arr[i])) {
      array.push(arr[i]);
    }
  }
  return array;
};

```
