/*eslint-env browser*/

var prodField = {
    SKU: 0,
    PRODUCT: 1,
    QUANTITY: 2,
    COST: 3
};

function setInventory(inventory) {
    "use strict";
    localStorage.setItem("inventory", JSON.stringify(inventory));
}

function getInventory() {
    "use strict";
    var inventory = JSON.parse(localStorage.getItem("inventory"));
    
    // If inventory is not stored in localStorage, create it with a default value.
    if (inventory === null) {
        inventory = [[2233, "Hat",     12,  14.99],
                     [3223, "Socks",   36,   9.99],
                     [4824, "Shirt",   10,  15.99],
                     [6343, "Jeans",   22,  39.99],
                     [9382, "Jacket",   5,  49.99]];
        setInventory(inventory);
    }
    return inventory;
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

function viewInventory(inventory) {
    "use strict";
    
    // Sort by comparing sku numbers
    inventory.sort(function (a, b) {
        return a[prodField.SKU] - b[prodField.SKU];
    });
    
    var i, output;
    for (i = 0; i < inventory.length; i += 1) {
        output =  String(inventory[i][prodField.SKU]) + " ";
        output += " ";
        output += inventory[i][prodField.PRODUCT];
        output += " ";
        output += "(" + inventory[i][prodField.QUANTITY] + ")";
        output += " ";
        output += "$" + String(inventory[i][prodField.COST]);
        window.console.log(output);
    }
}

function promptUserInteger(promptMessage) {
    "use strict";
    var input, value;
    
    input = window.prompt(promptMessage);
    value = parseInt(input, 10);
    
    while (isNaN(value)) {
        window.console.log("'" + input + "' is not valid. Please enter a number.");
        input = window.prompt(promptMessage);
        value = parseInt(input, 10);
    }
    return value;
}

function updateInventory(inventory) {
    "use strict";
    var sku, product, qty;
    
    sku = promptUserInteger("Enter an sku");
    
    // Search the inventory for the requested sku
    product = inventory.filter(function (elem) {
        return elem[prodField.SKU] === sku;
    }).pop();
    
    if (product) {
        qty = promptUserInteger("Enter a new quantity");
        
        // Update the inventory.
        inventory[inventory.indexOf(product)][prodField.QUANTITY] = qty;
        // Write back updated inventory to localStorage.
        setInventory(inventory);
    } else {
        window.console.log("sku " + sku + " does not exist in the inventory!");
    }
}

function main() {
    "use strict";

    var inventory, command;
    inventory = getInventory();
    
    displayTitle();
    
    for(;;) {
        command = window.prompt("Enter command");
        
        // Exit program on 'exit' command or cancel.
        if (command === null || command === "exit") {
            break;
        }
        
        if (command === "view") {
            window.console.log("Command: " + command);
            viewInventory(inventory);
        } else if (command === "update") {
            window.console.log("Command: " + command);
            updateInventory(inventory);
        } else {
            window.console.log("Invalid command: " + command);
        }
        window.console.log("");
    }
    
    // Write back inventory on exit.
    setInventory(inventory);
    
    window.console.log("Exiting the Product Inventory Management System");
}
main();