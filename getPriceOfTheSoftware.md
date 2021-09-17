# Test Cases

## **getPriceOfTheSoftware(id)**

Returns the total price of software bunled with the computer

- Parameters: id of the computer to be searched
- Return: the total price of software. If no software is found returns 0
- if no computer with the given number is found throws an exeption `nothing found with given id`

### Test 1 : Returns total price of software. If no software returns 0

Test data:

```json
[
  // value, expectedReturn
  [1, 140],
  [2, 30],
  [3, 0]
]
```

### Test 2 : Throws exception if no computer with matching id found

```js
computerStorage.getPriceOfTheSoftware(30);
```

Test exception `nothing found with given id`

### Test 3 : Throws exception for missing parameter

```js
computerStorage.getPriceOfTheSoftware();
```

Test exception `missing parameter`
