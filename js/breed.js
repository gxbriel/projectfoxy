 function intpets(intpet){
	  if(intpet==1){
		 var intpet ="Crazy";
		 }else if(intpet==2){
			 var intpet ="Normal";
		 }else if(intpet==3){
				  var intpet ="Smart";
				  }else if(intpet==4){
				  var intpet ="Genius";
				  }
		return intpet;
	}
    function rarity(raritypet){
	  if(raritypet==1){
		 var raritypet ="Common";
		 }else if(raritypet==2){
			 var raritypet ="Rare";
		 }else if(raritypet==3){
				  var raritypet ="Epic";
				  }else if(raritypet==4){
				  var raritypet ="Legendary";
				  }
		return raritypet;
	}
    


async function parent1() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
	const account = accounts[0];
    ownpets = $('#parent1').val();
     imagepets = await FoxyNFTContract.methods.PetView(ownpets).call().then();
    const now = Date.now(); 
       const shield=imagepets["Petshield"]*1000;
       if(now<=shield){
           shieldimage='shield';
       }else{
          shieldimage='no_image'; 
       }
     $("#viewparent1").empty();
    let ownContainer = document.getElementById('viewparent1');
    
     ownContainer.innerHTML += '<div class="col-md-6"><div class="info-box"><div><div class="d-flex justify-content-center"><div>'+intpets(imagepets["PetIntelligence"])+' '+rarity(imagepets["PetRarity"])+' #'+imagepets["id"]+'</div></div><img src="../pet/'+imagepets["PetIMG"]+'.png" class="img-fluid"><div class="row text-center"><div  class="col-md-12">Cost:'+imagepets["PetIntelligence"]/2*100+'</div></div></div></div></div>';
}

async function parent2() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
	const account = accounts[0];
    ownpets = $('#parent2').val();
     imagepets = await FoxyNFTContract.methods.PetView(ownpets).call().then();
    const now = Date.now(); 
       const shield=imagepets["Petshield"]*1000;
       if(now<=shield){
           shieldimage='shield';
       }else{
          shieldimage='no_image'; 
       }
     $("#viewparent2").empty();
    let ownContainer = document.getElementById('viewparent2');
    
     ownContainer.innerHTML += '<div class="col-md-6"><div class="info-box"><div><div class="d-flex justify-content-center"><div>'+intpets(imagepets["PetIntelligence"])+' '+rarity(imagepets["PetRarity"])+' #'+imagepets["id"]+'</div></div><img src="../pet/'+imagepets["PetIMG"]+'.png" class="img-fluid"><div class="row text-center"><div  class="col-md-12">Cost:'+imagepets["PetIntelligence"]/2*100+'</div></div></div></div></div>';
}


async function  breeding() {
    
  $('#loading').modal('show');
  const address = await web3.eth.getAccounts();
    parent1id= $("#parent1").val();
    parent2id= $("#parent2").val();
    
  FoxyNFTContract.methods.Breeding(parent1id,parent2id).send({
    from: address[0],
  }).on('confirmation', (confirmationNumber) => {
      if (confirmationNumber === 2) {
       
       getPetsowner();
          
        getAccount();
        
       	$('#loading').modal('hide');
        toastr.success('Breed Success!!!');
      }
    })
  
}

window.onload = function () {
   getAccount();
	
};