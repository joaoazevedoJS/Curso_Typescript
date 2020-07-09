function game(calc: [boolean, boolean, number]) {
  let result: number = 0;

  if (calc[0]) {
    result += calc[2] / 2;
  }

  result = calc[1] && !calc[0] ?
    result + calc[2] * 2 : result * 2

  return result
}

// [ metade, dobro, numero];

const calc = game([true, true, 1]);

console.log(calc)
