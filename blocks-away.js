const changeDirection = function(current, turn) {
  if (turn === "right") {
    if (current === "") {
      return "east";
    } else if (current === "east") {
      return "south";
    } else if (current === "west") {
      return "north";
    } else if (current === "north") {
      return "east";
    } else if (current === "south") {
      return "west";
    }
  } else if (turn === "left") {
    if (current === "") {
      return "north";
    } else if (current === "east") {
      return "north";
    } else if (current === "west") {
      return "south";
    } else if (current === "north") {
      return "west";
    } else if (current === "south") {
      return "east";
    }
  }
};

const blocksAway = function(directions) {
  let direction = "";
  let x = 0;
  let y = 0;
  for (let i = 0; i < directions.length; i++) {
    direction = changeDirection(direction, directions[i]);
    i++;
    switch (direction) {
    case "south":
      y -= directions[i];
      break;
    case "east":
      x += directions[i];
      break;
    case "north":
      y += directions[i];
      break;
    case "west":
      x -= directions[i];
      break;
    }
  }
  const end = {
    east: x,
    north: y
  };
  return end;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
