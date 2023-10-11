/**
 * This function returns a simple object representing a book.
 *
 * @returns {object} - An object with properties: title, author, and year.
 *
 * Usage:
 * const myBook = createBook();
 * console.log(myBook.title); // Outputs the title of the book
 */
function createBook() {
    return {
        title: 'Alanna: The First Adventure',
        author: 'Tamora Pierce',
        year: 1983
    }
}


/**
 * This function finds a book by its author from a given array of books.
 *
 * @param {array} books - An array of book objects.
 * @param {string} author - The author name to search for.
 * @returns {object|null} - The book object if found, otherwise null.
 *
 * Usage:
 * const result = findBookByAuthor([{title: "Sample", author: "John Doe", year: 2020}, {title: "Here I am", author: "Peter Hansen", year: 1987}], "John Doe");
 * console.log(result); // Outputs {title: "Sample", author: "John Doe", year: 2020}
 */
function findBookByAuthor(books, author) {
    for (let book of books) {
        if (author === book.author) {
            return book;
        }
    }
    return null;
}

/**
 * This function lists all book titles published before a given year.
 *
 * @param {array} books - An array of book objects.
 * @param {number} year - The cutoff year.
 * @returns {array} - An array of book objects.
 *
 * Usage:
 * const oldBooks = getOlderBooks([{title: "A", year: 1990}, {title: "B", year: 2022}], 2000);
 * console.log(oldBooks); // Outputs {title: "A", year: 1990}
 */
function getOlderBooks(books, year) {
    const oldBooks = [];
    for (let book of books) {
        if (book.year < year) {
            oldBooks.push(book);
        }
    }
    return oldBooks;
}
