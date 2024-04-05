const btn = document.getElementById("genCode");
let r, g, b, rgbColor, rHex, gHex, bHex, hexCode, hexColor;

const toHexColor = (num) => {
  // function to convert given number to hexadecimal number code
  hexCode = parseInt(num).toString(16);
  if (hexCode.length == 1) {
    return "0" + hexCode;
  } else {
    return hexCode;
  }
};

btn.onclick = () => {
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

  console.log(rgbColor, hexColor);
};
