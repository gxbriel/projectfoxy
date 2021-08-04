


async function getallpet() {
    
    $(function(){
    var $select = $("#level");
    for (i=1;i<=100;i++){
        $select.append($('<option></option>').val(i).html(i))
    }
});
    
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
      levelpet=imagepets["Petlevel"];
    
     ownContainer.innerHTML += '<div class="col-md-3"><div class="info-box"><div><div class="d-flex justify-content-center"><div>Power: '+power+'</div></div><img src="../pet/'+imagepets["PetIMG"]+'.png" class="img-fluid"><div class="row text-center"><div class="col-md-12">#:'+imagepets["id"]+'</div><div class="col-md-12">Stamina:'+imagepets["PetStamina"]+'</div></div></div></div></div>';
    
   
}


    
  async function  battlereaddy() {
      
    rarity = $('#rarity').val();
    int = $('#int').val();
    petlevel = $('#level').val();
     getPetsTarget = await FoxyNFTContract.methods.battleready(petlevel,int,rarity).call().then();
    
     
   
 
    $("#targetview").empty();
    
	let targetContainer = document.getElementById('targetview');

   for (var i = 0; i < getPetsTarget.length; i++) {
       targetpet = await FoxyNFTContract.methods.PetView(getPetsTarget[i]).call().then();
     power = await FoxyNFTContract.methods.PVEchance(getPetsTarget[i]).call().then();
     reward = await FoxyNFTContract.methods.CalcReward(getPetsTarget[i]).call().then();
     rewards=reward/1e9;
       
    targetContainer.innerHTML += '<div class="col-4 col-md-2"><div class="info-box"><div><div class="d-flex justify-content-center"><div>#'+targetpet["id"]+'</div></div><img src="../pet/'+targetpet["PetIMG"]+'.png" class="img-fluid"><div class="col-12"><div>Power:'+power+'</div><div>Reward:'+rewards+'</div><button class="btn btn-sm btn-warning btn-block" onClick="PVPbattle('+targetpet["id"]+')" >Attack</button></div></div></div></div>';
}
 }
    

  //  console.log(imagepets);
	


          
async function  PVPbattle(attack) {
    
  
  const address = await web3.eth.getAccounts();
    petatk= $("#ownpet").val();
  FoxyNFTContract.methods.PVPbattle(petatk,attack).send({
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