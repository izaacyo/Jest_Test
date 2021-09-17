# Test Cases

## **GetComputerAccessories(id)**

Returns an array of computer accessories. If none found, returns an empty array.

- Parameters: id of the computer
- Return: returns accessories as an array

### Test 1 : Get from default db with parameter id equal to 1

```js
computerStorage.getComputerAccessories(1);
```

Returns

```json
["keyboard", "display", "mouse"]
```

### Test 2 : Get from default db with parameter id equal to 2

```js
computerStorage.getComputerAccessories(2);
```

returns

```json
["mouse"]
```

### Test 3 : Returns empty array if id does not match

```js
computerStorage.getComputerAccessories(50);
```

returns

```json
[];
```

### Test 4 : Returns empty array if id does not exist

```js
computerStorage.getComputerAccessories();
```

returns

```json
[];
```
