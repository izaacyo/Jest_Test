# Test Cases

## **getAllComputersByType(type)**

Returns an array of computer objects of given type

- Parameters: type of the computer to be searched
- Returns an array of computer objects of given type. If no computer of given type is found, returns an empty array.
- If a parameter type is missing, an exeption **'missing parameter'** is thrown.

### Test 1 : Returns array of computer object

```js
computerStorage.getAllComputersByType("minitower");
```

returns

```json
{
  "id": 1,
  "manufacturer": "BMI",
  "type": "minitower",
  "accessories": ["keyboard", "display", "mouse"],
  "price": 250,
  "software": [
    {
      "name": "Writer",
      "price": 123
    },
    {
      "name": "Solitaire",
      "price": 10
    }
  ]
}
```

### Test 2 : Returns empty array if type not found

```js
computerStorage.getAllComputersByType("quantum computer");
```

returns

```js
[];
```

### Test 3 : Throws exception if parameter is missing

```js
computerStorage.getAllComputersByType();
```

Test excepetion **'missing parameter'**
