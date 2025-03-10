/*
  Objects can be thought of as key/value storage, like a dictionary or a 'lookup'.

  You have a variable called COUNTRY_CURRENCY_CODES which is an array of arrays.
  Each inner array contains a country code and its currency code.

  Write a function called createLookup that
    - takes COUNTRY_CURRENCY_CODES as an argument (remember, it's an array of arrays)
    - returns a new object where the keys are the country codes and the values are the currency codes
    Hint: you'll need to use bracket notation to add new key/value pairs to the object
*/

const COUNTRY_CURRENCY_CODES = [
  ["GB", "GBP"],
  ["DE", "EUR"],
  ["NG", "NGN"],
  ["MX", "MXN"],
];

function createLookup(countryCurrencyCodes) {
  
  // return countryCurrencyCodes.reduce((acc, cv) => (acc[cv[0]] = cv[1], acc), {});
  
  // With each loop of the reduce the current value is inserted into the accumulator acc[cv[0]] = cv[1]
  // , acc is returning the accumulator once the loop ends
  // { } initialises the accumulator as an empty object
  // ^ o_O complicated

  return Object.fromEntries(countryCurrencyCodes);
}

// console.log(createLookup(COUNTRY_CURRENCY_CODES))
// {
//   GB: "GBP",
//   DE: "EUR",
//   NG: "NGN",
//   MX: "MXN",
// }


/* ======= TESTS - DO NOT MODIFY =====
- To run the tests for this exercise, run `npm test -- --testPathPattern 2-currency-code-lookup.js`
- To run all exercises/tests in the mandatory folder, run `npm test`
- (Reminder: You must have run `npm install` one time before this will work!)
*/

test("creates country currency code lookup", () => {
  expect(createLookup(COUNTRY_CURRENCY_CODES)).toEqual({
    GB: "GBP",
    DE: "EUR",
    NG: "NGN",
    MX: "MXN",
  });
});