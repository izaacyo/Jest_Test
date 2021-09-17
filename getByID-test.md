# Test Cases

## **getById(id)**

Method searches the datastorage for an object with given key. Key is unique.

- Parameters: id of the computer
- Return: returns the computer object matching the id or null if there is no match
- if parameter is missing, throws an exception `'parameter missing'`

### Test 1 : Returns object with matching id

```js
computerStorage.getById(1);
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

### Test 2 : Returns null when no id matches

```js
computerStorage.getById(50);
```

returns

```js
null;
```

### Test 3 : Throws exception if parameter is missing

```js
computerStorage.getById();
```

Test exception 'missing parameter'
