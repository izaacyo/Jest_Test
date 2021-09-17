"use strict";

module.exports = class ComputerStorage {

    constructor(data) {
        if (!data) throw new Error("data storage missing");
        this.computers = data
    }

    getById(id) {
        if (!id) throw new Error("missing parameter");
        const find = this.computers.find((computer) => computer.id === id);
        return find ? find : null
    }

    getAllIdsByManufacturer(value) {
        if (!value) return null;
        let result = [];
        this.computers.forEach((computer) => {
            if (computer.manufacturer.toLowerCase().includes(value.toLowerCase())) {
                result.push(computer.id)
            }
        })
        return result.length ? result : null
    }

    getAllComputerTypes() {
        let result = [];
        this.computers.forEach((computer) => {
            if (computer.type && !result.includes(computer.type))
                result.push(computer.type)
        });
        return result
    }

    getAllComputersByType(type) {
        if (!type) throw new Error("missing parameter");

        let result = [];
        this.computers.forEach((computer) => {
            if (computer.type === type)
                result.push(computer)
        })
        return result
    }

    hasAccessories(id) {
        if (!id) return false;

        const accessory = this.computers
            .filter((computer) => computer.id === id)
            .map((computer) => computer.accessories?.length);
        return Boolean(accessory[0])
    }


    getComputerAccessories(id) {

        const found = [];
        for (let computer of this.computers) {
            if (computer.id === id && computer.accessories.length > 0) {
                return computer.accessories;
            }
        }
        return found;
    }


    getPriceWithoutSoftware(id) {
        for (let computer of this.computers) {
            if (computer.id === id) {
                return computer.price;
            }
        }
        throw new Error("nothing found with given id");
    }


    getTotalPrice(id) {
        if (!id) throw new Error("missing parameter")

        for (let computer of this.computers) {
            if (computer.id === id) {
                let sum = computer.price
                if ("software" in computer) {
                    computer.software.forEach((soft) => (sum += soft.price))
                }
                return sum
            }
        }
        throw new Error("nothing found at the given id")
    }


    getPriceOfTheSoftware(id) {
        if (!id) throw new Error("missing parameter")
        for (let computer of this.computers) {
            if (computer.id === id) {
                let sum = 0;
                if ("software" in computer) {
                    computer.software.forEach((soft) => (sum += soft.price))
                }
                return sum
            }
        }
        throw new Error("nothing found at the given id")
    }

}