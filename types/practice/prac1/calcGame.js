"use strict";
function game(calc) {
    var result = 0;
    if (calc[0]) {
        result += calc[2] / 2;
    }
    result = calc[1] && !calc[0] ?
        result + calc[2] * 2 : result * 2;
    return result;
}
// [ metade, dobro, numero];
var calc = game([true, true, 1]);
console.log(calc);
