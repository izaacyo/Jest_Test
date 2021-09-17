"use strict";

const ComputerStorage = require("../ComputerStorage")
const data = require("../computers.json");

describe("Constructor", () => {
    test("Object created", () => {
        const computerStorage = new ComputerStorage(data);
        expect(computerStorage.computers).toEqual(data);
    });

    test("Missing parameter throws an exception", () => {
        expect(() => new ComputerStorage()).toThrow("data storage missing");
    });
});

describe("Test getById", () => {
    const computerStorage = new ComputerStorage(data);
    test("Returns computer object with matching id", () => {
        expect(computerStorage.getById(1)).toEqual({
            id: 1,
            manufacturer: "BMI",
            type: "minitower",
            accessories: ["keyboard", "display", "mouse"],
            price: 250,
            software: [
                {
                    name: "Writer",
                    price: 123
                },
                {
                    name: "Solitaire",
                    price: 10
                }
            ]
        });
    });

    test("Returns null when no id matches", () => {
        expect(computerStorage.getById(50)).toBe(null);
    });
    test("Throws exception if parameter is missing", () => {
        expect(() => computerStorage.getById()).toThrow("missing parameter");
    });
});



describe("Test getAllIdsByManufacturer", () => {
    const computerStorage = new ComputerStorage(data);
    describe("Get array of id where value match computer manufacturer", () => {
        const testValues = [
            // value, expectedResult
            ["BMI", [1, 3]],
            ["CERA", [2]],
        ];

        test.each(testValues)("Value '%s' returns %s", (value, expectedResult) => {
            expect(computerStorage.getAllIdsByManufacturer(value)).toEqual(expectedResult);
        });
    });

    test("Return null if there is no match", () => {
        expect(computerStorage.getAllIdsByManufacturer("Apple")).toBe(null);
    });

    test("Return null if parameter is missing", () => {
        expect(computerStorage.getAllIdsByManufacturer()).toBe(null);
    });
});



describe("Test getAllComputerTypes", () => {
    test("Returns array of computer types from default computers.json", () => {
        const computerStorage = new ComputerStorage(data);
        expect(computerStorage.getAllComputerTypes()).toEqual([
            "minitower",
            "laptop",
        ]);
    });

    test("Returns an empty array if no computer types found", () => {
        const computerStorage = new ComputerStorage([

            {
                id: 1,
                manufacturer: "BMI",
                type: "",
                accessories: ["keyboard", "display", "mouse"],
                price: 250,
                software: [
                    {
                        name: "Writer",
                        price: 123
                    },
                    {
                        name: "Solitaire",
                        price: 10
                    }
                ]
            },
        ]);

        expect(computerStorage.getAllComputerTypes()).toEqual([]);
    });

});

describe("Test getAllComputersByType", () => {
    const computerStorage = new ComputerStorage(data);

    test("Returns an array of computer object", () => {
        expect(computerStorage.getAllComputersByType("minitower")).toEqual([
            {
                id: 1,
                manufacturer: "BMI",
                type: "minitower",
                accessories: ["keyboard", "display", "mouse"],
                price: 250,
                software: [
                    {
                        name: "Writer",
                        price: 123
                    },
                    {
                        name: "Solitaire",
                        price: 10
                    }
                ]
            },
        ]);
    });

    test("Returns empty array if type not found", () => {
        expect(computerStorage.getAllComputersByType("quantum computer")).toEqual([]);
    });

    test("Throws exception for missing parameter", () => {
        expect(() => computerStorage.getAllComputersByType()).toThrow(
            "missing parameter"
        );
    });
});


describe("Test hasAccessories", () => {
    const computerStorage = new ComputerStorage(data);
    describe("Returns true if the computer has accessories, otherwise returns false", () => {
        const testValues = [
            // value, expectedResult
            [1, true],
            [2, true],
            [3, false],
        ];

        test.each(testValues)(
            "computers %s returns Boolean %s",
            (value, expectedResult) => {
                expect(computerStorage.hasAccessories(value)).toBe(expectedResult);
            }
        );
    });

    test("Returns false if parameter is missing", () => {
        expect(computerStorage.hasAccessories()).toBe(false);
    });
});



describe("Test getComputerAccessories", () => {
    const computerStorage = new ComputerStorage(data);

    test("Get from default db with parameter id equal to 1", () => {
        expect(computerStorage.getComputerAccessories(1)).toEqual(["keyboard", "display", "mouse"]);
    });

    test("Get from default db with parameter id of 2", () => {
        expect(computerStorage.getComputerAccessories(2)).toEqual(["mouse"]);
    });

    test("Returns empty array if id does not match", () => {
        expect(computerStorage.getComputerAccessories(50)).toEqual([]);
    });

    test("Returns empty array if id does not exist", () => {
        expect(computerStorage.getComputerAccessories()).toEqual([]);
    });
});


describe("Test getPriceWithoutSoftware", () => {
    const computerStorage = new ComputerStorage(data);

    test("get price of the computer without the price of software with an id of 1", () => {
        expect(computerStorage.getPriceWithoutSoftware(1)).toEqual(250);
    });

    test("if no computer with the given number is found throws an exeption", () => {
        expect(() => computerStorage.getPriceWithoutSoftware(4)).toThrow(
            "nothing found with given id"
        );
    });
});


describe("Test getTotalPrice", () => {
    const computerStorage = new ComputerStorage(data);
    describe("Returns total price of computer including software", () => {
        const testValues = [
            // value, expectedReturn
            [1, 383],
            [2, 380],
            [3, 150]
        ];

        test.each(testValues)("Computer %s returns %s", (value, expectedResult) => {
            expect(computerStorage.getTotalPrice(value)).toEqual(expectedResult);
        });
    });

    test("Throws exception if no computer with matching id found", () => {
        expect(() => computerStorage.getTotalPrice(30)).toThrow(
            "nothing found at the given id"
        );
    });

    test("Throws exception for missing parameter", () => {
        expect(() => computerStorage.getTotalPrice()).toThrow("missing parameter");
    });
});



describe("Test getPriceOfTheSoftware", () => {
    const computerStorage = new ComputerStorage(data);
    describe("Returns the total price of software. If no software is found returns 0", () => {
        const testValues = [
            // value, expectedReturn
            [1, 133],
            [2, 30],
            [3, 0]
        ];

        test.each(testValues)("Computer %s returns %s", (value, expectedResult) => {
            expect(computerStorage.getPriceOfTheSoftware(value)).toEqual(expectedResult);
        });
    });

    test("Throws exception if no computer with matching id found", () => {
        expect(() => computerStorage.getPriceOfTheSoftware(30)).toThrow(
            "nothing found at the given id"
        );
    });

    test("Throws exception for missing parameter", () => {
        expect(() => computerStorage.getPriceOfTheSoftware()).toThrow(
            "missing parameter"
        );
    });
});