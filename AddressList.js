// factory contract address
// router contract address
// tokens from which we want to fetch the price
// herewe are using pancake swap which is working on baunance chain
 
const factoryAddress="0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73"; // googlwe factory address pancakeswap  it will be on bsc binance smart chain
const routerAddress="0x10ED43C718714eb63d5aA57B78B54704E256024E"; // Router v2 on pancake swap
const fromAddress="0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";  //BUSD
const toAddress="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";   //wbnb

module .exports={
    factoryAddress,
    routerAddress,
    fromAddress,
    toAddress
}

