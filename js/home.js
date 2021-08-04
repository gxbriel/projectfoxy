

async function burnmc() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
burn = await FoxyContract.methods.balanceOf("0x000000000000000000000000000000000000dead").call().then();
	gettotalSupply = await FoxyContract.methods.totalSupply().call().then();
	var supply= gettotalSupply/1e9;
	var total =String(supply).replace(/(.)(?=(\d{3})+$)/g,'$1,'); 
	var foxyburn= burn/1e9;
	var circulating=supply-foxyburn;
	var marketcap=circulating*pricebnb;
	var marketcaps=marketcap.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
	var circulatings=circulating.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
	var foxyburns =foxyburn.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
	
	$("#totalburn").html(foxyburns+' Foxy');
	$("#pricefoxy").html('$ '+pricebnb.toFixed(4));
	$("#foxytotal").html(total+' Foxy');
	$("#circulation").html(circulatings+' Foxy');
	$("#marketcap").html('$ '+marketcaps);
    
}




async function getNFTfoxysupply() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    getNFTupply = await FoxyNFTContract.methods.totalSupply().call().then();
	var nftsupply= getNFTupply;
	
	document.getElementById("nfttotal").innerHTML =nftsupply+' FNFT';
    console.log(getNFTupply);
	

}


window.onload = function () {
    pricefoxy();
    getNFTfoxysupply();
	burnmc();
    getAccount();
   
	
};
setInterval(pricefoxy, 10000);
setInterval(getNFTfoxysupply, 10000);
setInterval(burnmc, 10000);
