
async function killpet(Petkill) {
	var forxp=$('#petsxp').val();
  const address = await web3.eth.getAccounts();
  FoxyNFTContract.methods.KillPets(Petkill,forxp).send({
    from: address[0]
  });
  console.log("Killed")
 }



window.onload = function () {
	getAccount();
	
	
};