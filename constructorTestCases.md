# Test Cases

## **constructor(jsonData)**

The data storage json object is passed as a parameter to the constructor. If the parameter is missing, constructor throws an error `'data storage missing'`.

### Test 1: object created

```js
new ComputerStorage(jsonData);
```

Test if the objects innerfield has the same value as given as parameter. Parameter jsonData is the json array from the default `computers.json`

### Test2; missing parameter throws an exception

```js
new ComputerStorage();
```

this will throw en exception `'computer data missing'`.
