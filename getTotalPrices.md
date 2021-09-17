# Test Cases

## **getTotalPrice(id)**

Returns the total price of computer including the total price of the software

- Parameters: id of the computer
- Return: The price of the computer including the total price of the software
- if no computer with the given number is found throws an exeption `nothing found with given id`

### Test 1 : Returns total price of computer including software

Test data:

```json
[
  // value, expectedReturn
  [1, 383],
  [2, 380],
  [3, 150]
]
```

### Test 2 : Throws exception if no computer with matching id found

```js
computerStorage.getTotalPrice(30);
```

Test exception `nothing found with given id`

### Test 3 : Throws exception for missing parameter

```js
computerStorage.getTotalPrice();
```

Test exception `missing parameter`
