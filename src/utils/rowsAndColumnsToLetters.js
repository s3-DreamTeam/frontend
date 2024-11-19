// Function to convert column number to letters (e.g., 1 -> A, 27 -> AA)
export default function RowsAndColumnsToArray(columns, rows) {
    // Function to convert column number to letters (e.g., 1 -> A, 27 -> AA)

    let IDs = [];
    function columnToLetter(column) {
        let result = '';
        while (column > 0) {
            column--; // Adjust for zero-indexed letters
            result = String.fromCharCode((column % 26) + 65) + result;
            column = Math.floor(column / 26);
        }
        return result;
    }

    // Loop through rows and columns
    for (let row = 1; row <= rows; row++) {
        for (let col = 1; col <= columns; col++) {
            // Print the column letter and row number
            let columnLetter = columnToLetter(col);
            console.log(`${columnLetter}${row}`);
            const slotID = `${columnLetter}${row}`;
            IDs.push(slotID);
        }
    }
    return IDs;
}