function diamond(number) {

  for (let i = 1; i <= number; i++) { //rows
    var space = "";
    for (let k = 1; k <= number - i; k++) { //space
      space += " ";
    }
    for (let j = 1; j <= i * 2 - 1; j++) { //cols
      space += "*";
    }
    for (let k = i + 1; k <= number; k++) { //space
      space += " ";
    }
    console.log(space);
  }

  for (let i = number - 1; i >= 1; i--) { //rows
    var s = "";
    for (let k = 1; k <= number - i; k++) { //space
      s += " ";
    }
    for (let j = 1; j <= i * 2 - 1; j++) { //cols
      s += "*";
    }
    for (let k = i + 1; k <= number; k++) { //space
      s += " ";
    }
    console.log(s);
  }
}
diamond(5);
