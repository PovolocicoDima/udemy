function isValidWalk(walk) {
  if (walk.length < 10 || walk.length > 10) {
    return false;
  }

  const result = [];
  let x = 0;
  let y = 0;

  for (let i = 0; i < walk.length; i++) {
    const currentWay = walk[i];
    if (currentWay == "n") {
      y += 1;
      //   console.log(x, y);
    }
    if (currentWay == "s") {
      y -= 1;
      //   console.log(x, y);
    }
    if (currentWay == "w") {
      x -= 1;
    }
    if (currentWay == "e") {
      x += 1;
    }
  }

  if (x == 0 && y == 0) {
    return true;
  } else {
    return false;
  }
}
