const celtofah = (x) => {
  let fah = Math.round((x * 9) / 5 + 32);
  // return fah;
  // console.log(fah);
  return fah;
};
const fahtocel = (x) => {
  let cel = Math.round((x - 32) / 1.8);
  return cel;
};
const cal = () => {
  let userinput = document.getElementById("num");
  // console.log(userinput.value);
  let temp = document.getElementById("choose");
  let valuetemp = temp.value;
  let result;
  // console.log(valuetemp);
  if (valuetemp == "cel") {
    result = celtofah(userinput.value);
    // console.log(result);
    document.getElementById("res").innerHTML = `  ${result} Degree F`;
  } else {
    result = fahtocel(userinput.value);
    // console.log(result);
    document.getElementById("res").innerHTML = `   ${result} Degree C`;
  }
};
const submit = document.getElementById("bt");

submit.addEventListener("click", cal);
