import { user, logUser } from "./utils.mjs";
import fs from "fs";

const data = JSON.parse(fs.readFileSync("./data.json"));

function changeUser(newUserData, i) {
  if (i >= 0 && i < data.length) {
    data[i] = { ...data[i], ...newUserData };
    fs.writeFileSync("./data.json", JSON.stringify(data));
    console.log("Користувач оновлений:", data[i]);
  } else {
    console.log("Невірний індекс .");
  }
}

console.log(data, "data");

function main(a, b) {
  return a + b;
}

console.log(main(10, 15));
