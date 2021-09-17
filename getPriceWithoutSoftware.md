# Test Cases

## **getPriceWithoutSoftware(id)**

Returns the price without software

- Parameters: id of the computer
- Return: The price of the computer not including the price of the software
- if no computer with the given number is found throws an exeption `nothing found with given id`

### Test 1 : Returns price of computer without software

```js
computerStorage.getPriceWithoutExtras(1);
```

return

```js
250;
```

### Test 2 : Throws exception if no computer with matching id found

```js
computerStorage.getPriceWithoutExtras(50);
```

Test exception `nothing found with given id`
