# Form Validator
Simple form validation project using vanilla-TypeScript and Sass as part of Traversy Media's project list.

## Project Preview
![](form-validator.gif)

## How to Install
- `git clone` this repo
- No hard dependencies required to run so no need for `npm/yarn` installs. 
- Just open the `index.html` file or use server of your choice.
- Note: If modifying the file, and you have TS already installed, you can just call `tsc --watch` in the root project directory to compile your js into appropriate dir.
- I'd recommend using the VSCode Sass Plugin as well.  

## Project Notes
- Just working to get things center aligned vertically and horizontally is as easy as making the parent container a flex container. Then setting both align items and justify content to center, but in addition to doing so, making sure that the height of the thing we want vertically centered to have a height set to the full height we'd want to center within. 
    - This woud look look like this:
    ```css
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    ```
    - I don't know why I keep finding this perplexing. 
- If you want to position something absolute within another element that parent element has to be relative. 

- Traversy prefers convention of having eventlisteners lower in the code file.

- Regular expressions have a `.test` method: The [**`test()`**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) method executes a search for a match between a regular expression and a specified string. Returns true or false.