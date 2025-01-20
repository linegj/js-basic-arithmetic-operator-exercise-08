# Exercise 6: Using `Arithmetic Operators`

### Task: How to fork a repository on GitHub.com

1. Click on the **Fork** icon at the top right corner of the repository page on GitHub.com.

2. On the next screen, click the green **Create fork** button to create your own copy of the original repository.

3. Once the fork is created, click the green **Code** button and select **Open with GitHub Desktop**.

4. In GitHub Desktop, clone the repository by choosing a **Local Path** where you want to store a copy on your computer. When prompted about how you plan to use this fork, select **For my own purposes**.


## JavaScript Task:
1. In this exercise, the HTML and CSS are provided to you as `index.html` and `css/style.css`.  
   **Note:** You should not modify the `css/style.css` file; focus only on the JavaScript functionality.


2. Link to the external JavaScript file `js/script.js` from the provided HTML.
     ```html
   <script src="js/script.js"></script>
   ```
3. Ensure `"use strict"` is at the top of your `script`.

4. Declare and initialize variables `subtotal`, `discount`, and `shipping`, and assign them initial values.

5. Use the `-=` operator to deduct a `discount` from the `subtotal`.

6. Calculate the `total` cost as: `subtotal + shipping`.

7. Use `document.getElementById` to access the `subtotal`, `shipping`, and `total` spans in the HTML and update the HTML to display the updated `subtotal`, `shipping`, and `total` prices.

8. Open Go Live in your VS Code editor and check that the content has been updated.