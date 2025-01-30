"use strict";

// ## JavaScript Task:



// 4. Declare and initialize variables `subtotal`, `discount`, and `shipping`, and assign them initial values.

let subtotal = 150;
let discount = 30;
let shipping = 49;


// 5. Use the `-=` operator to deduct a `discount` from the `subtotal`.

subtotal -= discount;

// 6. Calculate the `total` cost as: `subtotal + shipping`.

let total = subtotal + shipping;

// 7. Use `document.getElementById` to access the `subtotal`, `shipping`, and `total` spans in the HTML and update the HTML to display the updated `subtotal`, `shipping`, and `total` prices.

document.getElementById("subtotal").textContent = subtotal;
document.getElementById("shipping").textContent = shipping;
document.getElementById("total").textContent = total;

// 8. Open Go Live in your VS Code editor and check that the content has been updated.