

const AdoptButton = document.getElementById('adopt');
const AdobtText = document.getElementById('approve');


AdoptButton.addEventListener('click', () => {
  //Will Start the metamask extension
  if (typeof window.ethereum === 'undefined') {alert('MetaMask is not installed!')}
  console.log(approveState);
  if (approveState === true) {
  Adopt();
  }
}); 
async function checkIfApproved() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  const amountApproved = await FoxyContract.methods.allowance(account,FoxyNFT).call().then();
  console.log(amountApproved);
  let amountApp = new BigNumber(amountApproved);
  if (amountApp.isLessThan(1e22)) {
    approveState = false;
    AdobtText.innerHTML = "Approve Foxy";
    AdoptButton.addEventListener('click', () => {
          Approve();
         
      })
    }
  else {
  approveState = true;
  AdobtText.innerHTML = "Adopt Pet";
  } 
}

async function getfoxyprice() {
    
   
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
	const account = accounts[0];
    getprice= await FoxyNFTContract.methods.autoadoptprice().call().then();
	var adoptprice= getprice/1e9;
    
    $("#foxyprice").html(adoptprice+' Foxy');
    
}

async function Approve() {
    $('#loading').modal('show');
  const address = await web3.eth.getAccounts(console.log);
  let approveValue = new BigNumber(1e36)
  FoxyContract.methods.approve(FoxyNFT, approveValue).send({
    from: address[0]
  }).on('confirmation', (confirmationNumber) => {
      if (confirmationNumber === 2) {
          checkIfApproved();
        $("#viewall").empty();
       getPetsowner();
       	$('#loading').modal('hide');
        toastr.success('Approve Success!!!');
          location.reload();
      }
    })
  console.log("Approved")
 }

async function  Adopt() {
    
  $('#loading').modal('show');
  const address = await web3.eth.getAccounts();
  FoxyNFTContract.methods.AdoptPet().send({
    from: address[0],
  }).on('confirmation', (confirmationNumber) => {
      if (confirmationNumber === 2) {
    
       getPetsowner();
          getAccount();
       	$('#loading').modal('hide');
        toastr.success('Adopt New Foxy NFT Success!!!');
      }
    })
  console.log("Adopted");
}

window.onload = function () {
   getAccount();
	checkIfApproved();
    getfoxyprice();
	
	
};