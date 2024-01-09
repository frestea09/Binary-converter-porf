export function decToBinary(number : number) {
    if (!Number.isInteger(number)) {
      throw new TypeError("number harus berupa bilangan bulat");
    }
      const binaryArray = [];
  
    while (number > 0) {
      binaryArray.push(number % 2);
      number = Math.floor(number / 2);
    }
  
    binaryArray.reverse();
    return binaryArray.join("");
}

function decToOctal(number : number) {
  if (!Number.isInteger(number)) {
    throw new TypeError("number harus berupa bilangan bulat");
  }
  const octalArray = [];
  while (number > 0) {
    octalArray.push(number % 8);
    number = Math.floor(number / 8);
  }
  octalArray.reverse();
  return octalArray.join("");
}


export function convert(number : number, fromBase :number, toBase : number) {
  if (!Number.isInteger(number)) {
    throw new TypeError("number harus berupa bilangan bulat");
  }

  if (fromBase < 2 || fromBase > 16) {
    throw new Error("fromBase harus berupa bilangan antara 2 dan 16");
  }
  if (toBase < 2 || toBase > 16) {
    throw new Error("toBase harus berupa bilangan antara 2 dan 16");
  }

  const numberString = number.toString(fromBase);

  if (fromBase === 10) {
    return numberString;
  }

  let convertedNumber = "";
  for (const digit of numberString) {
    const convertedDigit = digitToBase(Number(digit), toBase);
    convertedNumber += convertedDigit;
  }

  return convertedNumber;
}

function digitToBase(digit: number , toBase : number) {
  if (digit < 0 || digit >= toBase) {
    throw new Error("digit tidak valid");
  }

  return String.fromCharCode(digit + 48);
}