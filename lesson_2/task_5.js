/**
 * Функция складывает параметры.
 */
function test_sum(a, b) {
    return a + b;
}

/**
 * Функция из параметра "а" вычитает "b".
 */
function test_sub(a, b) {
    return a - b;
}

/**
 * Функция делит параметр "a" на "b".
 */
function test_div(a, b) {
    return a / b;
}

/**
 * Функция умножает параметры.
 */
function test_mul(a, b) {
    return a * b;
}

/**
 * Функция принимает 2 числа и выполняет над ними указанную операцию
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation возможные варианты: "+", "-", "*", "/"
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return test_sum(arg1, arg2);
        case "-":
            return test_sub(arg1, arg2);
        case "/":
            return test_div(arg1, arg2);
        case "*":
            return test_mul(arg1, arg2);
    }
}
console.log(mathOperation(6, 2, "+"));
console.log(mathOperation(6, 2, "-"));
console.log(mathOperation(6, 2, "/"));
console.log(mathOperation(6, 2, "*"));
