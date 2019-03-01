/*eslint-env browser*/

function setInventory(inventory) {
    "use strict";
    localStorage.setItem("inventory", JSON.stringify(inventory));
}

function getInventory() {
    "use strict";
    var value = JSON.parse(localStorage.getItem("inventory"));
    if (value === null) {
        value = [[1, "Keyboard",     5,  4.99],
                 [2, "Mouse",        10, 2.99],
                 [9, "Monitor",      11, 99.99],
                 [4, "Power Supply", 2,  24.99],
                 [5, "Hard Drive",   8, 49.99]];
        localStorage.setItem("inventory", JSON.stringify(value));
    }
    return value;
}

function displayTitle() {
    "use strict";
    
    window.console.log("Welcome to the Product Inventory Management System");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - View all products");
    window.console.log("update  - Update stock");
    window.console.log("exit - Exit the program");
    window.console.log("");
}

function viewInventory(arr) {
    "use strict";
    arr.sort(function (a, b) {
        return a[0] - b[0];
    });
    var i, output;
    for (i = 0; i < arr.length; i += 1) {
        output = String(arr[i][0]) + " " +
                 arr[i][1] + " " +
                 "(" + arr[i][2] + ") " +
                 "$" + String(arr[i][3]);
        window.console.log(output);
    }
}

function updateInventory(arr) {
    "use strict";
    var sku, product, qty;
    sku = parseInt(window.prompt("Enter an sku"), 10);
    product = arr.filter(function (elem) {
        return elem[0] === sku;
    })[0];
    window.console.log(product);
    if (product) {
    //if (arr.some(function (product) { return product[0] === sku; })) {
        qty = parseInt(window.prompt("Enter a new quantity"), 10);
        window.console.log(arr.indexOf(product));
        arr[arr.indexOf(product)][2] = qty;
    } else {
        window.console.log("sku " + sku + " does not exist in the inventory!");
    }
    
    //window.console.log("updateInventory()");
}

function main() {
    "use strict";

    var inventory, command;
    inventory = getInventory();
    
    displayTitle();
    
    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "view") {
                window.console.log("Command: " + command);
                viewInventory(inventory);
            } else if (command === "update") {
                window.console.log("Command: " + command);
                updateInventory(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.console.log("Invalid command: " + command);
            }
            window.console.log("");
        } else {
            break;
        }
    }
    setInventory(inventory);
}
main();