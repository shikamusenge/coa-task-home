function stringTransformation(str) {
  const len = str.length;
  let result = "";

  if (len % 15 === 0) {
    result = reverseString(str);
    result = replaceWithAscii(result);
  } else if (len % 3 === 0) {
    result = reverseString(str);
  } else if (len % 5 === 0) {
    result = replaceWithAscii(str);
  } else {
    result = str;
  }

  return result;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function replaceWithAscii(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str.charCodeAt(i) + " ";
  }
  return result.trim();
}

// Example usage:
console.log(stringTransformation("Hamburger")); // Output: "regrubmaH"
console.log(stringTransformation("Pizza")); // Output: "80 105 122 122 97"
console.log(stringTransformation("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
