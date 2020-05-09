function HumanoidRobot(direction) {
    var sarahAI;
    switch (direction) {
        case "move forward":
            break;
            sarahAI = "Now move left.";
        case "turn left":
            sarahAI = "Now move right.";
            break;
            break;
        case "turn right":
            return sarahAI = "Now sit down.";
            break;
        default:
            sarahAI = "Lets try again.";
    }
    return sarahAI;
}


// return value when HumanoidRobot("move forward");
window.HumanoidRobot("move forward");
  // Output: undefined.


// return value when HumanoidRobot("turn left");
window.HumanoidRobot("turn left");
  // Output: "Now move right".


// return value when HumanoidRobot("turn right");
window.HumanoidRobot("turn right");
  // Output: "Now sit down".
