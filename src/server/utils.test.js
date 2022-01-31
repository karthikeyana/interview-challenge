const search = require('./utils');
const items = require('./items');

test('basic search',()=>{
    let result = [  {
        id: 1001,
        name: 'Kale Caesar Pasta, Turmeric Satay Broccoli & Lemon Cashew Greens',
        dietaries: ['v', 've', 'df', 'gf', 'n!'],
      }]
    let input = 'Kale Caesar';
    expect(search(items,input)).toEqual(result);
})


test('search with special character',()=>{
    let result = [  {
        id: 1003,
        name: 'Dill & Swiss Chard Potato Cakes, Summer Tabbouleh & Roasted Roots',
        dietaries: ['gf', 'df', 'v', 've', 'n!'],
      }]
    let input = 'Dill & Swiss';
    expect(search(items,input)).toEqual(result);
})


