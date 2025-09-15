function calculate() {
  let num1 = document.getElementById('num1').value.trim();
  let num2 = document.getElementById('num2').value.trim();
  let operation = document.getElementById('operation').value;
  let result = 0;

  // --- Validation checks ---
  if (num1 === "" || isNaN(num1)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="#">Only number allow & fill 1st box</a>'
    });
    document.getElementById("num1").focus();
    return;
  }

  if (num2 === "" || isNaN(num2)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="#">Only number allow & fill 2nd box</a>'
    });
    document.getElementById("num2").focus();
    return;
  }

  if (operation === "Select Option") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="#">Select Option</a>'
    });
    document.getElementById("operation").focus();
    return;
  }

  // --- Convert to number after validation ---
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  // --- Perform calculation ---
  if (operation === 'add') {
    result = num1 + num2;
  } else if (operation === 'sub') {
    result = num1 - num2;
  } else if (operation === 'mul') {
    result = num1 * num2;
  } else if (operation === 'div') {
    if (num2 === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Cannot divided by Zero</a>'
      });
      document.getElementById("num2").focus();
      return;
    }
    result = num1 / num2;
  }

  document.getElementById('result').value = result;

  const resultBox = document.getElementById('result');
  resultBox.value = result;

// --- Change text color based on positive/negative ---
  if (result < 0) {
    resultBox.style.color = "red";
    resultBox.style.fontWeight = "bold";
  } else if (result > 0) {
    resultBox.style.color = "green";
    resultBox.style.fontWeight = "bold";
  } else {
    resultBox.style.color = "blue"; // default for zero
    resultBox.style.fontWeight = "normal";
  }
}

function clearForm() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("operation").selectedIndex = 0;
  const resultBox = document.getElementById("result");
  resultBox.value = "0";
  resultBox.style.color = "black";
  resultBox.style.fontWeight = "normal";
  document.getElementById("num1").focus();
}