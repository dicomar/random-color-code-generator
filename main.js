const btn = document.getElementById("btnGenerateCode");
const hexCode = document.getElementById("hexCode");
const rgbCode = document.getElementById("rgbCode");
const colorDisplay = document.getElementById('colorDisplay')

let r, g, b, rgbColor, rHex, gHex, bHex, hex, hexColor;

const toHexColor = (num) => {
  // function to convert given number to hexadecimal number code
  hex = parseInt(num).toString(16);
  if (hex.length == 1) {
    return "0" + hex;
  } else {
    return hex;
  }
};

btnGenerateCode.onclick = () => {
  /* randomly generating red, green and blue value, then converting 
  the value to hexadecimal number code */
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);

  rHex = toHexColor(r);
  gHex = toHexColor(g);
  bHex = toHexColor(b);

  rgbColor = `rgb(${r}, ${g}, ${b})`;
  hexColor = `#${rHex}${gHex}${bHex}`;

  rgbCode.innerText = rgbColor;
  hexCode.innerText = hexColor;

  colorDisplay.style.backgroundColor = hexColor

  console.log(rgbColor, hexColor);
};
