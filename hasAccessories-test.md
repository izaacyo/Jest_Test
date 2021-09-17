# Test Cases

## **hasAccessories(id)**

- Parameters: id of the computer
- Return: returns true if the computer has accessories else returns false. If parameter id is missing false is returned

### Test 1 : Returns true if the computer has accessories

Test data

```js
[
  // value, expectedResult
  [1, true],
  [2, true],
  [3, false],
];
```

### Test 2 : Returns false if parameter is missing

```js
computerStorage.hasAccessories();
```
