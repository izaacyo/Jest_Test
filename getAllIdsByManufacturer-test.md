# Test Cases

## **getAllIdsByManufacturer(value)**

Returns all ids of the computers matching the value of manufacturer

Parameters: value of the property to be searched
Return: Returns an array of computer id where the computers manufacturer matches the given value. If there is no match or parameter is missing, an empty array is returned.

### Test 1 : Return array of id where value match computer manufacturer

Test values

```js
[
  // value, expectedResult
  ["BMI", [1, 3]],
  ["CERA", [2]],
];
```

### Test 2 : Returns null if there is no match

```js
computerStorage.getAllIdsByManufacturer("Apple");
```

returns

```js
null;
```

### Test 3 : Returns null if parameter is missing

```js
computerStorage.getAllIdsByManufacturer();
```

returns

```js
null;
```
