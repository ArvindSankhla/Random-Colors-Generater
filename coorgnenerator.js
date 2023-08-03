const getColor = () => {
  const getRandomNumber = Math.floor(Math.random() * 16777215);
  const getRandomColor = "#" + getRandomNumber.toString(16);
  document.body.style.backgroundColor = getRandomColor;
  document.getElementById("color-code").innerText = getRandomColor;
};

getColor();
