const container = document.getElementById("mainContainer");
const input = document.getElementById("input");

container.addEventListener("click", calculatorFn);

function calculatorFn(event) {
  event.preventDefault();

  if (event.target.classList.contains("btn")) {
    let value = event.target.value;

    if (value === "AC") {
      input.value = "";
    } else if (value === "c") {
      input.value = input.value.slice(0, -1);
    } else if (value === "=") {
      input.value = eval(input.value) || "0";
    } else {
      const lastChar = input.value.slice(-1);

      if (
        ["+", "-", "*", "/", "%"].includes(value) &&
        ["+", "-", "*", "/", "%"].includes(lastChar)
      ) {
        input.value = input.value.slice(0, -1) + value;
      } else {
        input.value += value;
      }
    }
  }
}
