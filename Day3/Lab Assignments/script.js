const el = document.getElementById("g34910-9-4");

const hiddenDiv = document.getElementById("glass");

// ✅ Show hidden DIV on hover
el.addEventListener("mouseover", function handleMouseOver() {
  hiddenDiv.style.visibility = "visible";

  // 👇️ if you used visibility property to hide the div
  // hiddenDiv.style.visibility = 'visible';
});

// ✅ (optionally) Hide DIV on mouse out
el.addEventListener("mouseout", function handleMouseOut() {
  hiddenDiv.style.visibility = "hidden";

  // 👇️ if you used visibility property to hide the div
  // hiddenDiv.style.visibility = 'hidden';
});


const el2 = document.getElementById("g17779-5");

const hiddenDiv2 = document.getElementById("mouth");

// ✅ Show hidden DIV on hover
el2.addEventListener("mouseover", function handleMouseOver() {
  hiddenDiv2.style.visibility = "visible";

  // 👇️ if you used visibility property to hide the div
  // hiddenDiv.style.visibility = 'visible';
});

// ✅ (optionally) Hide DIV on mouse out
el2.addEventListener("mouseout", function handleMouseOut() {
  hiddenDiv2.style.visibility = "hidden";

  // 👇️ if you used visibility property to hide the div
  // hiddenDiv.style.visibility = 'hidden';
});
