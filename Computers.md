# End assignment

## Task: Create and test a ComputerStorage class

Create a class for computer data. Data storage is passed to the constractor as a parameter. Use the following json object as default storage

### **datastorage.json**

```json
[
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
  },
  {
    "id": 2,
    "manufacturer": "CERA",
    "type": "laptop",
    "accessories": ["mouse"],
    "price": 350,
    "software": [
      {
        "name": "Writer",
        "price": 10
      },
      {
        "name": "Counter",
        "price": 20
      }
    ]
  },
  {
    "id": 3,
    "manufacturer": "BMI",
    "type": "laptop",
    "accessories": [],
    "price": 150,
    "software": []
  }
]
```

## Create a class ComputerStorage

## Constructor

### **constructor(jsonData)**

The data storage json object is passed as a parameter to the constructor. If the parameter is missing, constructor throws an error `'data storage missing'`.

## Methods

### **getById(id)**

Method searches the datastorage for an object with given key. Key is unique.

- Parameters: id of the computer
- Return: returns the computer object matching the id or null if there is no match
- if parameter is missing, throws an exception `'parameter missing'`

### **getAllIdsByManufacturer(value)**

Returns all ids of the computers matching the value of manufacturer

- Parameters: value of the property to be searched
- Return: Returns an array of computer id where the computers manufacturer matches the given value. If there is no match or parameter is missing, an empty array is returned.

### **getAllComputerTypes()**

Returns an array of different computer types.

- Parameters: none
- Return: Returns an array of different computer types. If no types are found, returns an empty array. The type is added to the result array only once.

### **getAllComputersByType(type)**

Returns an array of computer objects of given type

- Parameters: type of the computer to be searched
- Returns an array of computer objects of given type. If no computer of given type is found, returns an empty array.
- If a parameter type is missing, an exeption **'missing parameter'** is thrown.

### **hasAccessories(id)**

- Parameters: id of the computer
- Return: returns true if the computer has accessories else returns false. If parameter id is missing false is returned

### **GetComputerAccessories(id)**

Returns an array of computer accessories. If none found, returns an empty array.

- Parameters: id of the computer
- Return: returns accessories as an array

### **getPriceWithoutSoftware(id)**

Returns the price with out software

- Parameters: id of the computer
- Return: The price of the computer not including the price of the software
- if no computer with the given number is found throws an exeption `nothing found with given id`

### **getTotalPrice(id)**

Returns the total price of computer including the total price of the software

- Parameters: id of the computer
- Return: The price of the computer including the total price of the software
- if no computer with the given number is found throws an exeption `nothing found with given id`

### **getPriceOfTheSoftware(id)**

Returns the total price of software bunled with the computer

- Parameters: id of the computer to be searched
- Return: the total price of software. If no software is found returns 0
- if no computer with the given number is found throws an exeption `nothing found with given id`

## Create a folder for the testproject

- the name of the folder should include your name
- use **datastorage.json** as a data source
- create **package.json**
  - **`npm init -y`**
- install **jest** as development dependency
  - **`npm install jest --save-dev`**
- create folder **tests** for tests
- edit the test script in the **package.json**

## Design test cases in separate .md -file

## Implement all tests and test them to fail

## Implement corresponding methods

## Test the project until all tests pass

## Submit the project folder

Submit your project folder acording to instructions given separately.
Remove the `node_modules` folder before submitting.
The project folder should include `package.json` file
