


async function getallpet() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
	const account = accounts[0];
   
     allpet = await FoxyNFTContract.methods.tokens(account,1,100).call().then();
   const allpets =allpet;
const ownpet = document.querySelector('#ownpet');
allpets.forEach(function(allid) {
  const option = document.createElement('option');
  option.setAttribute('value', allid);
  option.text = '#'+allid;
  ownpet.appendChild(option);
})
    
     
   
}





async function getPetsowner() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
	const account = accounts[0];
    ownpets = $('#ownpet').val();
     imagepets = await FoxyNFTContract.methods.PetView(ownpets).call().then();
     power = await FoxyNFTContract.methods.PVEchance(ownpets).call().then();
     reward = await FoxyNFTContract.methods.CalcReward(ownpets).call().then();
     rewards=reward/1e9;

    
     $("#selectedpet").empty();
    let ownContainer = document.getElementById('selectedpet');
    
    
     ownContainer.innerHTML += '<div class="col-md-3"><div class="info-box"><div><div class="d-flex justify-content-center"><div>Power: '+power+'</div></div><img src="../pet/'+imagepets["PetIMG"]+'.png" class="img-fluid"><div class="row text-center"><div class="col-md-12">#:'+imagepets["id"]+'</div><div class="col-md-12">Stamina:'+imagepets["PetStamina"]+'</div></div></div></div></div>';
    
     battlereaddy();
   
}


    
 async function  battlereaddy() {
     
   var monster=Math.floor((Math.random() * 3) + 1);
 
    $("#targetview").empty();
    
	let targetContainer = document.getElementById('targetview');

  
       
    targetContainer.innerHTML += '<div class=" col-md-3"><div class="info-box"><div><div class="d-flex justify-content-center"><img src="../pve/'+monster+'.png" class="img-fluid"></div><div class="col-md-12"><div class="row"><div class="col-md-12 d-flex justify-content-center">Power: '+power+'</div><div class="col-md-12 d-flex justify-content-center">Reward: '+rewards+'</div></div><button onClick="PVEbattle()" class="btn btn-sm btn-warning btn-block" >Attack</button></div></div></div></div>';
                 

 }
    

  //  console.log(imagepets);
	


          
async function  PVEbattle() {
    
  
  const address = await web3.eth.getAccounts();
    petatk= $("#ownpet").val();
  FoxyNFTContract.methods.PVEbattle(petatk).send({
    from: address[0],
  }).on('confirmation', (confirmationNumber) => {
      if (confirmationNumber === 2) {
        
        toastr.success('Attack #'+target+' Success!!!');
      }
    }).on('receipt', function(receipt){
      getPetsowner();
    var dice1=receipt.events.battleresult.returnValues.diceattacker;
    var dice2=receipt.events.battleresult.returnValues.dicetarget;
    var winreward=receipt.events.battleresult.returnValues.pvereward;
    var exp=receipt.events.battleresult.returnValues.exp;
    var winloss=receipt.events.battleresult.returnValues.pveresult;
    var reward=winreward/1e9;
      
      
      
    $("#dataresult").empty();
	let resultContainer = document.getElementById('dataresult');
      
      if(winloss=='lost'){
      $("#imgresult").attr("src","../dist/img/failed.png");
      resultContainer.innerHTML +='<div ><b >Your Result</b></div><div ><b >'+dice1+'</b></div><div ><b >Oponent Result</b></div><div ><b >'+dice2+'</b></div><div ><b >EXP</b></div><div ><b >'+exp+'</b></div>';
      }else{
          $("#imgresult").attr("src","../dist/img/win.png");
         resultContainer.innerHTML +=' <div ><h5>'+reward+' Foxy</h5></div><div ><b >Your Result</b></div><div ><b >'+dice1+'</b></div><div ><b >Oponent Result</b></div><div ><b >'+dice2+'</b></div><div ><b >EXP</b></div><div ><b >'+exp+'</b></div>';  
      }
  
      console.log(winreward);
     
     $('#result').modal('show');
  });
}



window.onload = function () {
   getAccount();
   getallpet();
  
};