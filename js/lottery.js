

const calculateSale = (listPrice, discount) => {
  listPrice = parseFloat(listPrice);
  discount  = parseFloat(discount);
  return (listPrice - ( listPrice * discount / 100 )).toFixed(2); // Sale price
}

async function getlastround() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    searchround = await lotteryContract.methods.lotteryid().call().then();
    $('#searchround').val(searchround-2);
}
 
async function getround() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    viewround = await lotteryContract.methods.lotteryid().call().then();
    nextround=viewround-1;
    lastround=nextround-1;
  $("#round").html('Round '+nextround);
    console.log(nextround);
     
     lastsearch = $('#searchround').val();
    
   
    detaillotrry = await lotteryContract.methods.Lotteryround(lastsearch).call().then();
    pastreward=detaillotrry["totalreward"]/1e9;
    pastround=detaillotrry["round"];
    winner1=detaillotrry["winer1"];
    winner2=detaillotrry["winer2"];
    winner3=detaillotrry["winer3"];
    
    $('#searchround').val(pastround);
    
    reward1=pastreward-calculateSale(pastreward,50);
    reward2=pastreward-calculateSale(pastreward,30);
    reward3=pastreward-calculateSale(pastreward,20);
	
     $("#pastround").html('Round '+pastround);
     $("#pastreward").html(pastreward+' Foxy');
    
     $("#winner1").html('#'+winner1);
     $("#winner2").html('#'+winner2);
     $("#winner3").html('#'+winner3);
    
    $("#reward1").html(reward1.toFixed(2)+' Foxy');
    $("#reward2").html(reward2.toFixed(2)+' Foxy');
    $("#reward3").html(reward3.toFixed(2)+' Foxy');
    
    ownerpet1 = await FoxyNFTContract.methods.ownerOf(winner1).call().then();
    ownerpet2 = await FoxyNFTContract.methods.ownerOf(winner2).call().then();
    ownerpet3 = await FoxyNFTContract.methods.ownerOf(winner3).call().then();
    
    if(accounts[0].toUpperCase()==ownerpet1.toUpperCase()){
         $("#claim1").show();
        $("#claim1").attr('onClick', 'claimreward('+lastsearch+',1,'+winner1+');');
        
    }else {$("#claim1").hide();}
    if(accounts[0].toUpperCase()==ownerpet2.toUpperCase()){
         $("#claim2").show();
         $("#claim2").attr('onClick', 'claimreward('+lastsearch+',2,'+winner2+');');
        
    }else {$("#claim2").hide();}
    if(accounts[0].toUpperCase()==ownerpet3.toUpperCase()){
         $("#claim3").show();
         $("#claim3").attr('onClick', 'claimreward('+lastsearch+',3,'+winner3+');'); 
       
    }else {$("#claim3").hide();}
   
}

async function getpool() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    poolreward = await lotteryContract.methods.viewpol().call().then();
    poolreward2=poolreward/1e9;
    
     $("#nextreward").html(poolreward2+' Foxy');
  
    console.log(poolreward);
    
}

async function nextroll() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    nexrolltime = await lotteryContract.methods.nextroll().call().then();
   a= Date.now(); 
   b=nexrolltime*1000;
	
    
    $('#nextroll').countdown(b, function(event) {
  $(this).html(event.strftime('%H Hour%!H %M:%S'));
});
  
  if(a>b){
	   $("#nextroll").hide();
	   $("#rolltoday").show();
  }
    console.log(nexrolltime);
    
}

async function  rolllottery() {
     $('#loading').modal('show');
  const address = await web3.eth.getAccounts();
  lotteryContract.methods.rollottery().send({
    from: address[0],
  }).on('confirmation', (confirmationNumber) => {
      if (confirmationNumber === 2) {
        getAccount();
       	$('#loading').modal('hide');
        toastr.success('Whois the winner???');
      }
    })
  console.log("Winner");
}


async function  claimreward(pool,winner,petid) {
     $('#loading').modal('show');
  const address = await web3.eth.getAccounts();
  lotteryContract.methods.claimLottery(pool,winner,petid).send({
    from: address[0],
  }).on('confirmation', (confirmationNumber) => {
      if (confirmationNumber === 2) {
        getAccount();
       	$('#loading').modal('hide');
        toastr.success('Claim lottery Success!!!');
      }
    })
  console.log("reward claimed");
}

window.onload = function () {
     getAccount();
   getlastround();
   getround();
   getpool();
   nextroll();
   
	
}