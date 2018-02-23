// Main coinbase account from metamask
var coinbase;
// Ether Balance of coinbase account
var etherBalance;
// Token Contract Interface
var myTokenContract;
// Token Balance
var myTokenBalance;
// Token Total Supply
var myTokenTotalSupply;
// Token Symbol
var myTokenSymbol;

// Web3 start function, It will run when the web page is loaded
function startWeb3() {

  coinbase = web3.eth.coinbase;

  getBalance(coinbase);
  document.getElementById("coinbase").innerHTML = coinbase;

  myTokenContract = web3.eth.contract(myTokenABI).at(myTokenAddress);

  getTokenBalance(coinbase);

  getTokenSymbol();

}

// Get the Ether balance of the coinbase account from the metamask
function getBalance(address) {
  return web3.eth.getBalance(address, function (error, result) {
    if (!error) {
		document.getElementById("etherBalance").innerHTML = web3.fromWei(result, 'ether');
		etherBalance = web3.fromWei(result, 'ether');
    } else {
      	console.error(error);
    }
  })
}

// Get the token balance of the coinbase account from the metamask
function getTokenBalance(address) {
  return myTokenContract.balanceOf(address, function (error, result) {
    if (!error) {
		document.getElementById("myTokenBalance").innerHTML = web3.fromWei(result, 'ether');
		myTokenBalance = result;
    } else {
      	console.error(error);
    }
  })
}

// Get the token symbol of the token contract
function getTokenSymbol() {
  return myTokenContract.symbol(function (error, result) {
    if (!error) {
		document.getElementById("myTokenSymbol").innerHTML = result;
		myTokenSymbol = result;
    } else {
      	console.error(error);
    }
  })
}




