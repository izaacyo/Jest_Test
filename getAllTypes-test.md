# Test Cases

## **getAllComputerTypes()**

Returns an array of different computer types.

- Parameters: none
- Return: Returns an array of different computer types. If no types are found, returns an empty array. The type is added to the result array only once.

### Test 1 : Returns array of computer types from computers.json

```js
computerStorage.getAllComputerTypes();
```

returns

```json
["minitower", "laptop"]
```

### Test 2 : Returns empty array if no computer types were found

Test Data:

```json
{
  "id": 1,
  "manufacturer": "BMI",
  "type": "",
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

returns

```js
[];
```
