
// CHALLENGE 1: Declare EIGHT Variables

const fullName = "Noluthando Molui"; // String. Chose const because the full name should never be reassigned.
let age = 25; // Number. Chose let because age increases over time and can be updated.
const enjoysJavaScript = true; // Boolean. Chose const because this preference value remains static.
const favoriteTemperature = 23.5; // Number (float). Chose const because this reference temperature is fixed.
const notANumberValue = Number("hello"); // Number (NaN). Chose const as the invalid conversion result is constant.
const infinityValue = 1 / 0; // Number (Infinity). Chose const because mathematical infinity is constant.
const maxSafeInteger = Number.MAX_SAFE_INTEGER; // Number (Safe Integer limit). Chose const as a built-in static constant.
let userProfile = null; // Null. Chose let because this variable is placeholder-initialized for later assignment.

/**
 * INTERVIEW REFLECTION — CHALLENGE 1:
 * 1. Difference between var and let: `var` is function-scoped and hoisted with `undefined`, risking bugs and leakage. `let` is block-scoped and resides in the Temporal Dead Zone until initialized.
 * 2. Why default to const: Defaulting to `const` signals immutability and prevents accidental reassignments, making code safer and easier to maintain.
 * 3. Why usrNm is bad: `usrNm` uses obscure abbreviations. It should be renamed to `userName`. Clear names act as living documentation in professional codebases.
 */


// CHALLENGE 2: Explain typeof and its surprises

console.log("--- CHALLENGE 2: typeof Outputs ---");
console.log(typeof fullName);
console.log(typeof age);
console.log(typeof enjoysJavaScript);
console.log(typeof favoriteTemperature);
console.log(typeof notANumberValue);
console.log(typeof infinityValue);
console.log(typeof maxSafeInteger);
console.log(typeof userProfile);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof NaN);
console.log(typeof "42");
console.log(typeof (typeof 42));
console.log(typeof [1, 2, 3]);
console.log(typeof function() {});

/**
 * INTERVIEW REFLECTION — CHALLENGE 2:
 * Why typeof NaN is "number" and typeof null is "object": `typeof NaN` returning "number" is intentional per the IEEE 754 standard. `typeof null` returning "object" is a historic bug from JavaScript's creation in 1995 due to type tags, preserved for backward compatibility.
 */


// CHALLENGE 3: Convert string to number, five ways


// Starting values given by the interviewer
let a = "123";
let b = "3.14";
let c = "hello";
let d = "42abc";
let e = "";
let f = 0;
let g = null;
let h = undefined;

// Let's test them using one sample value (like "42abc") to see how each method works:
let val = "42abc";

console.log("Original value:", val);

// 1. Number() - Converts the whole thing. If it has letters, it fails and returns NaN.
console.log("Number():", Number(val)); 

// 2. parseInt() - Reads from left to right and stops at the first non-number (returns 42).
console.log("parseInt():", parseInt(val)); 

// 3. parseFloat() - Reads decimals from left to right (e.g. "3.14px" becomes 3.14).
console.log("parseFloat():", parseFloat(val)); 

// 4. Boolean() - Checks if the value is truthy or falsy.
console.log("Boolean():", Boolean(val)); 

// 5. String() - Converts whatever it is into a standard text string.
console.log("String():", String(val));

// CHALLENGE 4: Coercion Expressions


console.log("--- CHALLENGE 4: Coercion Expressions ---");
console.log("1:", "5" + 3, typeof ("5" + 3)); // "53", string (concatenation)
console.log("2:", "5" - 3, typeof ("5" - 3)); // 2, number (subtraction coerces string)
console.log("3:", "5" * "2", typeof ("5" * "2")); // 10, number (multiplication coerces both)
console.log("4:", true + 1, typeof (true + 1)); // 2, number (true coerces to 1)
console.log("5:", true + "1", typeof (true + "1")); // "true1", string (concatenation)
console.log("6:", false + null, typeof (false + null)); // 0, number (0 + 0)
console.log("7:", null + undefined, typeof (null + undefined)); // NaN, number (0 + NaN)
console.log("8:", 1 / 0, typeof (1 / 0)); // Infinity, number
console.log("9:", 0 / 0, typeof (0 / 0)); // NaN, number
console.log("10:", [] + [], typeof ([] + [])); // "", string ([] toString() is "")
console.log("11:", [1] + [2], typeof ([1] + [2])); // "12", string ("1" + "2")


// ==========================================
// CHALLENGE 5: Code Review of Junior Code
// ==========================================

/**
 * EIGHT ISSUES FOUND IN JUNIOR CODE:
 * 1. Use of `var` instead of block-scoped `const`/`let`.
 * 2. Storing numerical data as strings (`userAge`, `scoreAdjustment`, `salary`).
 * 3. Implicit string concatenation in score addition ("85.510").
 * 4. Fragile reliance on implicit subtraction for retirement math.
 * 5. String concatenation when summing age and score ("2585.5").
 * 6. Storing boolean state as string `"false"`.
 * 7. Flawed boolean casting: `Boolean("false")` evaluates to `true` because non-empty strings are truthy.
 * 8. Lack of input sanitization for form string data.
 */

const correctedUserName = "Sarah";
let correctedUserAge = 25;
const correctedUserScore = 85.5;
let scoreAdjustmentNum = 10;
let correctedNewScore = correctedUserScore + scoreAdjustmentNum;
console.log(`New score: ${correctedNewScore}`);

const salaryNum = 50000;
const TAX_RATE_VAL = 0.15;
let calculatedTax = salaryNum * TAX_RATE_VAL;
console.log(`Tax: R${calculatedTax}`);

let yearsUntilRetirementCalc = 65 - correctedUserAge;
console.log(`Years until retirement: ${yearsUntilRetirementCalc}`);

let totalAgeAndScoreNum = correctedUserAge + correctedUserScore;
console.log(`Total Age and Score: ${totalAgeAndScoreNum}`);

let isAdminBool = false;
console.log(`Admin: ${isAdminBool}`);


// ==========================================
// CHALLENGE 6: Floating Point Precision
// ==========================================

console.log("--- CHALLENGE 6: Floating Point Precision ---");
console.log("0.1 + 0.2 =", 0.1 + 0.2);
console.log("0.3 - 0.1 =", 0.3 - 0.1);
console.log("0.1 * 3 =", 0.1 * 3);
console.log("0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3);

/**
 * INTERVIEW REFLECTION — CHALLENGE 6:
 * Binary floating-point representation (IEEE 754) cannot represent fractions like 0.1 or 0.2 perfectly, resulting in minor rounding errors (`0.30000000000000004`).
 */

let areValuesClose = Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON;
console.log("Safe comparison (0.1 + 0.2 close to 0.3):", areValuesClose);
/**
 * Number.EPSILON represents the smallest difference between representable numbers, used as a threshold for safe floating-point comparisons. Financial apps avoid this by storing currency in cents as integers.
 */


// CHALLENGE 7: Refactor Code


const unitPriceVal = Number("199.99");
let quantityVal = Number("3");
const taxRateVal = 0.15;

let subtotalCalc = unitPriceVal * quantityVal;
let taxAmountCalc = subtotalCalc * taxRateVal;
let totalAmountCalc = subtotalCalc + taxAmountCalc;

console.log(`--- CHALLENGE 7: Refactored Receipt ---`);
console.log(`Total: R${totalAmountCalc.toFixed(2)}`);


// CHALLENGE 8: Whiteboard Receipt Generator


/**
 * Variable Documentation:
 * productName (string): Item name.
 * unitPrice (number): Price per unit.
 * quantityInput (string): Raw form input string.
 * taxRate (number): VAT percentage rate (0.15).
 */
const productName = "Wireless Mechanical Keyboard";
const unitPrice = 1299.99;
const quantityInput = "2";
const taxRate = 0.15;

const quantity = Number(quantityInput);
const subtotal = unitPrice * quantity;
const tax = subtotal * taxRate;
const total = subtotal + tax;

console.log("--- CHALLENGE 8: Receipt Generator ---");
console.log(
    `Product: ${productName}\n` +
    `Unit Price: R${unitPrice.toFixed(2)}\n` +
    `Quantity: ${quantity}\n` +
    `Subtotal: R${subtotal.toFixed(2)}\n` +
    `Tax (15%): R${tax.toFixed(2)}\n` +
    `Total: R${total.toFixed(2)}`
);

const invalidQuantityInput = "abc";
const parsedInvalidQuantity = Number(invalidQuantityInput);
console.log("Edge Case Quantity ('abc') parsed as Number:", parsedInvalidQuantity);
/**
 * Edge Case: Passing "abc" returns NaN, corrupting totals. Production code must validate inputs using Number.isNaN().
 */


// ==========================================
// CHALLENGE 9: Predict Output
// ==========================================

console.log("--- CHALLENGE 9: Mystery Expressions ---");
let mystery = "10";
let count = 5;
let result = mystery / count;
console.log(typeof result); // "number"
console.log(result);        // 2

let mystery2 = "10a";
let count2 = 5;
let result2 = mystery2 / count2;
console.log(typeof result2); // "number"
console.log(result2);        // NaN
console.log(result2 + 1);    // NaN

let mystery3 = "10";
let result3 = mystery3 + 5 + 5; // "1055"
let result4 = 5 + 5 + mystery3; // "1010"
console.log(result3);
console.log(result4);


// ==========================================
// CHALLENGE 10: Final Self-Reflection
// ==========================================

/**
 * 1. Single most important thing understood about type system: JavaScript relies heavily on implicit type coercion, making explicit type management crucial to prevent silent bugs.
 * 2. typeof vs Number.isNaN: `typeof` returns a string describing primitive data type, while `Number.isNaN()` checks if a value strictly equals NaN.
 * 3. Production bug scenario: Multiplying an e-commerce string quantity (`"2"`) works via coercion, but later using `+` for cart totals triggers string concatenation (`"20050"`), corrupting finances silently.
 * 4. Implicit vs Explicit coercion: Implicit coercion happens automatically via operators (`"5" - 3`), whereas explicit coercion is manual conversion (`Number(val)`).
 * 5. Beginner analogies: Type coercion is like an overly helpful translator guessing your language; floating-point precision is like trying to measure exact fractions on a ruler with finite markings.
 */
