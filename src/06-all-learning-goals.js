// const weeklySalesDataExample = [
//     {date: '2023-09-25', sales: [{item: 'Apple', quantity: 30, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}]},
//     {date: '2023-09-26', sales: [{item: 'Apple', quantity: 20, price: 1}, {item: 'Banana', quantity: 25, price: 0.5}]},
//     {date: '2023-09-27', sales: [{item: 'Apple', quantity: 25, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}, {item: 'Cherry', quantity: 15, price: 2}]},
//     {date: '2023-09-28', sales: [{item: 'Apple', quantity: 20, price: 1}, {item: 'Banana', quantity: 30, price: 0.5}, {item: 'Cherry', quantity: 10, price: 2}]},
//     {date: '2023-09-29', sales: [{item: 'Apple', quantity: 10, price: 1}, {item: 'Banana', quantity: 35, price: 0.5}, {item: 'Cherry', quantity: 20, price: 2}]},
//     {date: '2023-09-30', sales: [{item: 'Apple', quantity: 15, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}, {item: 'Cherry', quantity: 25, price: 2}]},
//     {date: '2023-10-01', sales: [{item: 'Apple', quantity: 40, price: 1}, {item: 'Banana', quantity: 15, price: 0.5}, {item: 'Cherry', quantity: 20, price: 2}]},
//     {date: '2023-10-02', sales: [{item: 'Apple', quantity: 30, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}, {item: 'Cherry', quantity: 15, price: 2}]},
//     {date: '2023-10-03', sales: [{item: 'Apple', quantity: 25, price: 1}, {item: 'Banana', quantity: 25, price: 0.5}, {item: 'Cherry', quantity: 20, price: 2}]},
//     {date: '2023-10-04', sales: [{item: 'Apple', quantity: 35, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}, {item: 'Cherry', quantity: 15, price: 2}]},
//     {date: '2023-10-05', sales: [{item: 'Apple', quantity: 20, price: 1}, {item: 'Banana', quantity: 30, price: 0.5}, {item: 'Cherry', quantity: 10, price: 2}]},
//     {date: '2023-10-06', sales: [{item: 'Apple', quantity: 15, price: 1}, {item: 'Banana', quantity: 25, price: 0.5}, {item: 'Cherry', quantity: 25, price: 2}]},
//     {date: '2023-10-07', sales: [{item: 'Apple', quantity: 40, price: 1}, {item: 'Banana', quantity: 15, price: 0.5}, {item: 'Cherry', quantity: 20, price: 2}]},
//     {date: '2023-10-08', sales: [{item: 'Apple', quantity: 30, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}, {item: 'Cherry', quantity: 15, price: 2}]},
//     {date: '2023-10-09', sales: [{item: 'Apple', quantity: 25, price: 1}, {item: 'Banana', quantity: 25, price: 0.5}, {item: 'Cherry', quantity: 20, price: 2}]},
//     {date: '2023-10-10', sales: [{item: 'Apple', quantity: 35, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}, {item: 'Cherry', quantity: 15, price: 2}]},
//     {date: '2023-10-11', sales: [{item: 'Apple', quantity: 20, price: 1}, {item: 'Banana', quantity: 30, price: 0.5}, {item: 'Cherry', quantity: 10, price: 2}]},
//     {date: '2023-10-12', sales: [{item: 'Apple', quantity: 15, price: 1}, {item: 'Banana', quantity: 25, price: 0.5}, {item: 'Cherry', quantity: 25, price: 2}]},
//     {date: '2023-10-13', sales: [{item: 'Apple', quantity: 40, price: 1}, {item: 'Banana', quantity: 15, price: 0.5}, {item: 'Cherry', quantity: 20, price: 2}]},
//     {date: '2023-10-14', sales: [{item: 'Apple', quantity: 30, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}, {item: 'Cherry', quantity: 15, price: 2}]}
// ];


/**
 * This function generates a sales report for a given week.
 *
 * @param {array} salesData - An array of objects, each representing a day's sales.
 * Each object contains a date, and an array of items sold with their quantities and prices.
 * @returns {object} - An object containing total sales, bestselling item, and the day with the highest sales.
 *
 * Usage:
 * const weeklySalesData = [
 *     {date: '2023-09-25', sales: [{item: 'Apple', quantity: 30, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}]},
 *     {date: '2023-09-26', sales: [{item: 'Apple', quantity: 20, price: 1}, {item: 'Banana', quantity: 25, price: 0.5}]},
 *     // ... other days
 * ];
 * const report = generateSalesReport(weeklySalesData);
 * console.log(report);
 * // Outputs { totalSales: 55, bestSellingItem: 'Banana', highestSalesDay: {date: '2023-09-26', totalSales: 30} }
 */

function generateSalesReport(salesData) {
    let items = [];

    let totalSales = 0;

    let highestSalesDay = 0;
    let date = '';

    for (let day of salesData) {
        let dailySales = 0;

        // MAKE AN ARRAY OF OBJECTS CONTAINING EACH ITEM AND THE QUANTITY SOLD
        for (let sale of day.sales) {
            // check if the sale item is in the items array
            let checkArray = obj => obj.name === sale.item;
            if (items.some(checkArray)) {
                // if sale item is in the items array already just update quantity
                for (let array in items) {
                    if (items[array].name === sale.item) {
                        items[array].quantity += sale.quantity;
                    }
                }
            }
            else {
                // if sale item is a new item, add item name and quantity to items array
                items.push({
                    name: sale.item,
                    quantity: sale.quantity,
                })
            }

            // ADD NUMBER OF SALES FOR EACH DAY TO TOTAL SALES
            totalSales += sale.quantity * sale.price;

            dailySales += sale.quantity * sale.price;
        }

        if (dailySales > highestSalesDay) {
            highestSalesDay = dailySales;
            date = day.date;
        }
    }

    // FIND THE BESTSELLING ITEM
    let bestQuantity = 0;
    let bestSellingItem;

    items.forEach((item) => {
        if (item.quantity > bestQuantity) {
            bestQuantity = item.quantity;
            bestSellingItem = item.name;
        }
    });

    return {
        totalSales: totalSales,
        bestSellingItem: bestSellingItem,
        highestSalesDay: {date, totalSales:highestSalesDay}
    };
}

console.log(generateSalesReport([
    {date: '2023-09-25', sales: [{item: 'Apple', quantity: 30, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}]},
    {date: '2023-09-26', sales: [{item: 'Apple', quantity: 20, price: 1}, {item: 'Banana', quantity: 25, price: 0.5}]},
    {date: '2023-09-27', sales: [{item: 'Apple', quantity: 25, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}, {item: 'Cherry', quantity: 15, price: 2}]},
    {date: '2023-09-28', sales: [{item: 'Apple', quantity: 20, price: 1}, {item: 'Banana', quantity: 30, price: 0.5}, {item: 'Cherry', quantity: 10, price: 2}]},
    {date: '2023-09-29', sales: [{item: 'Apple', quantity: 10, price: 1}, {item: 'Banana', quantity: 35, price: 0.5}, {item: 'Cherry', quantity: 20, price: 2}]},
    {date: '2023-09-30', sales: [{item: 'Apple', quantity: 15, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}, {item: 'Cherry', quantity: 25, price: 2}]},
    {date: '2023-10-01', sales: [{item: 'Apple', quantity: 40, price: 1}, {item: 'Banana', quantity: 15, price: 0.5}, {item: 'Cherry', quantity: 20, price: 2}]},
    {date: '2023-10-02', sales: [{item: 'Apple', quantity: 30, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}, {item: 'Cherry', quantity: 15, price: 2}]},
    {date: '2023-10-03', sales: [{item: 'Apple', quantity: 25, price: 1}, {item: 'Banana', quantity: 25, price: 0.5}, {item: 'Cherry', quantity: 20, price: 2}]},
    {date: '2023-10-04', sales: [{item: 'Apple', quantity: 35, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}, {item: 'Cherry', quantity: 15, price: 2}]},
    {date: '2023-10-05', sales: [{item: 'Apple', quantity: 20, price: 1}, {item: 'Banana', quantity: 30, price: 0.5}, {item: 'Cherry', quantity: 10, price: 2}]},
    {date: '2023-10-06', sales: [{item: 'Apple', quantity: 15, price: 1}, {item: 'Banana', quantity: 25, price: 0.5}, {item: 'Cherry', quantity: 25, price: 2}]},
    {date: '2023-10-07', sales: [{item: 'Apple', quantity: 40, price: 1}, {item: 'Banana', quantity: 15, price: 0.5}, {item: 'Cherry', quantity: 20, price: 2}]},
    {date: '2023-10-08', sales: [{item: 'Apple', quantity: 30, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}, {item: 'Cherry', quantity: 15, price: 2}]},
    {date: '2023-10-09', sales: [{item: 'Apple', quantity: 25, price: 1}, {item: 'Banana', quantity: 25, price: 0.5}, {item: 'Cherry', quantity: 20, price: 2}]},
    {date: '2023-10-10', sales: [{item: 'Apple', quantity: 35, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}, {item: 'Cherry', quantity: 15, price: 2}]},
    {date: '2023-10-11', sales: [{item: 'Apple', quantity: 20, price: 1}, {item: 'Banana', quantity: 30, price: 0.5}, {item: 'Cherry', quantity: 10, price: 2}]},
    {date: '2023-10-12', sales: [{item: 'Apple', quantity: 15, price: 1}, {item: 'Banana', quantity: 25, price: 0.5}, {item: 'Cherry', quantity: 25, price: 2}]},
    {date: '2023-10-13', sales: [{item: 'Apple', quantity: 40, price: 1}, {item: 'Banana', quantity: 15, price: 0.5}, {item: 'Cherry', quantity: 20, price: 2}]},
    {date: '2023-10-14', sales: [{item: 'Apple', quantity: 30, price: 1}, {item: 'Banana', quantity: 20, price: 0.5}, {item: 'Cherry', quantity: 15, price: 2}]}
]))

