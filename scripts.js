function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

const cartBTNs = document.getElementsByClassName("call-btn");
// console.log(cartBTNs);

for (const cartButton of cartBTNs) {
  cartButton.addEventListener("click", function () {
    const cartTitle = cartButton.parentNode.parentNode.children[2].innerText;
    const cartNum = cartButton.parentNode.parentNode.children[3].innerText;
    const currentTime = new Date().toLocaleTimeString();
    console.log(currentTime);

    const cartContainer = getElement("card-container");
    const newCart = document.createElement("div");
    newCart.innerHTML = `
    <div  class="flex justify-between items-center p-3 bg-[#FAFAFA]">
              <div class="gap-8">
                <h1 class="font-bold text-xl">${cartTitle}</h1>
                <p class="text-lg text-gray-300">${cartNum}</p>
              </div>
              <p class="time text-2xl">${currentTime}</p>
            </div> `;

    const Coin = getElement("coin-num").innerText;
    if (Coin < 20) {
      alert("Sorry,You don't have enough coins to proceed this call.😥");
    } else {
      cartContainer.append(newCart);
      alert(`Calling to ${cartNum}`);
      const currentCoin = Number(Coin) - 20;
      getElement("coin-num").innerText = currentCoin;
    }

    // console.log(currentCoin);
  });
}

getElement("clear-btn").addEventListener("click", function () {
  const cartContainer = getElement("card-container");
  cartContainer.innerHTML = "";
});

const heartBTNs = document.getElementsByClassName("heart-icon");
for (const heartBtn of heartBTNs) {
  heartBtn.addEventListener("click", function () {
    const heart = getElement("heart-num").innerText;
    const currentHeart = Number(heart) + 1;
    getElement("heart-num").innerText = currentHeart;
  });
}

const coppyBtns = document.getElementsByClassName("copy-btn");
for (const copyBtn of coppyBtns) {
  copyBtn.addEventListener("click", function () {
    alert("Copied to clipboard!");
    const copyNum = getElement("copy-num").innerText;
    const currentCopy = Number(copyNum) + 1;
    getElement("copy-num").innerText = currentCopy;
    const cartNum = copyBtn.parentNode.parentNode.children[3].innerText;
    navigator.clipboard.writeText(cartNum);
  });
}
