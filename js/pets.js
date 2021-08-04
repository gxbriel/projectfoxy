


//checking to see if metamask in installed

const AdoptButton = document.getElementById('adopt');
const AdobtText = document.getElementById('approve');




function idnft() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("idnft");
  filter = input.value.toUpperCase();
  table = document.getElementById("fnft");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
function rarity() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("rarity");
  filter = input.value.toUpperCase();
  table = document.getElementById("fnft");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

async function getPetsowner() {
   
    pagetarget = $('#pagetarget').val();
    rowtarget = $('#rowtarget').val();
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
	const account = accounts[0];
    getPets = await FoxyNFTContract.methods.tokens(account,pagetarget,rowtarget).call().then();
	var Allpets= getPets;
if(getPets.length >=10){
	   
  $('#loading').modal('show');
   }

     $("#viewall").empty();
    
	let playerContainer = document.getElementById('viewall');
    
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
    
	
    
	
    num=0;
   for (var i = 0; i < getPets.length; i++) {
       imagepets = await FoxyNFTContract.methods.PetView(getPets[i]).call().then();
      const now = Date.now(); 
	const claimtime =imagepets["PetStaminatime"] * 1000;
	
	num=num+1;
       
    playerContainer.innerHTML += '<tr><td><input type="checkbox" value="'+imagepets["id"]+'" name="fnftid[]"><br><img src=\"../pet/'+imagepets["PetIMG"]+'.png\"width="50" height="auto"><br>#'+imagepets["id"]+'</td><td class="text-left"> Rarity: '+intpets(imagepets["PetIntelligence"])+' '+rarity(imagepets["PetRarity"])+'<br>Level: '+imagepets["Petlevel"]+'<br>Experience: '+imagepets["PetXP"]+'<br>Stamina: '+imagepets["PetStamina"]+'<br></td><td data-countdown='+imagepets["PetDeath"]*1000+'></td><td><div data-countdown='+imagepets["PetStaminatime"]*1000+'></div></td><td><button onClick="feedpet('+imagepets["id"]+')\" class="btn btn-success btn-sm my-1">Feed</button><br><button onClick="buystamina('+imagepets["id"]+')\" class="btn btn-warning btn-sm my-1">Stamina</button><br><button onClick="buyexp('+imagepets["id"]+')\" class="btn btn-secondary btn-sm my-1">Buy Exp</button></td></tr>';
}
   
   
   
    
    function sortTable(f,n){
	var rows = $('#fnft tbody  tr').get();

	rows.sort(function(a, b) {

		var A = getVal(a);
		var B = getVal(b);

		if(A < B) {
			return -1*f;
		}
		if(A > B) {
			return 1*f;
		}
		return 0;
	});

	function getVal(elm){
		var v = $(elm).children('td').eq(n).text().toUpperCase();
		if($.isNumeric(v)){
			v = parseInt(v,10);
		}
		return v;
	}

	$.each(rows, function(index, row) {
		$('#fnft').children('tbody').append(row);
	});
}
var f_sl = 1;
var f_nm = 1;
$("#shield").click(function(){
    f_sl *= -1;
    var n = $(this).prevAll().length;
    sortTable(f_sl,n);
});
$("#timeofdeath").click(function(){
    f_nm *= -1;
    var n = $(this).prevAll().length;
    sortTable(f_nm,n);
});

$("#claimreward").click(function(){
    f_nm *= -1;
    var n = $(this).prevAll().length;
    sortTable(f_nm,n);
}); 
    
    $("#checkAll").click(function(){
    $('input:checkbox').not(this).prop('checked', this.checked);
});
  
    
	$('[data-countdown]').each(function() {
  var $this = $(this), finalDate = $(this).data('countdown');
  $this.countdown(finalDate, function(event) {
    $this.html(event.strftime('%D day%!D %H:%M:%S'));
  });
});
    

if(num==getPets.length){
	  
    $('#loading').modal('hide');
   }
	
	
	

}


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
    AdobtText.innerHTML = "Approve";
    AdoptButton.addEventListener('click', () => {
          Approve();
         
      })
    }
  else {
  approveState = true;
  AdobtText.innerHTML = "Adopt Pet";
  } 
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
 
  const address = await web3.eth.getAccounts();
  FoxyNFTContract.methods.AdoptPet().send({
    from: address[0],
  }).on('confirmation', (confirmationNumber) => {
      if (confirmationNumber === 2) {
        $("#viewall").empty();
       getPetsowner();
          getAccount();
     
        toastr.success('Adopt New Foxy NFT Success!!!');
      }
    })
  console.log("Adopted");
}



function checkedpet(){
     var searchIDs = $("input[name='fnftid[]']:checked").map(function(){
        
      return $(this).val();
        
    });
    selectedpet=searchIDs.get();
    
    console.log(searchIDs.get());
    
}


async function  feedallpet() {
    
    checkedpet();
    
  $('#loading').modal('show');
  const address = await web3.eth.getAccounts();
    idfood= $("#foodtoken").val();
  FoxyNFTContract.methods.feedAll(selectedpet,idfood).send({
    from: address[0],
  }).on('confirmation', (confirmationNumber) => {
      if (confirmationNumber === 2) {
        $("#viewall").empty();
       getPetsowner();
       	$('#loading').modal('hide');
        toastr.success('Feed All FNFT Success!!!');
      }
    })
  console.log("Feed all pet");
}
async function  shieldallpet() {
    
    checkedpet();
    
  $('#loading').modal('show');
  const address = await web3.eth.getAccounts();
    idfood= $("#foodtoken").val();
  FoxyNFTContract.methods.buyshieldAll(selectedpet).send({
    from: address[0],
  }).on('confirmation', (confirmationNumber) => {
      if (confirmationNumber === 2) {
        $("#viewall").empty();
       getPetsowner();
       	$('#loading').modal('hide');
        toastr.success('Feed All FNFT Success!!!');
      }
    })
  console.log("Feed all pet");
}
async function  healallpet() {
    
    checkedpet();
    
  $('#loading').modal('show');
  const address = await web3.eth.getAccounts();
    idfood= $("#foodtoken").val();
  FoxyNFTContract.methods.healAll(selectedpet).send({
    from: address[0],
  }).on('confirmation', (confirmationNumber) => {
      if (confirmationNumber === 2) {
        $("#viewall").empty();
       getPetsowner();
       	$('#loading').modal('hide');
        toastr.success('Feed All FNFT Success!!!');
      }
    })
  console.log("Feed all pet");
}
async function  feedpet(petid) {
    
  $('#loading').modal('show');
  const address = await web3.eth.getAccounts();
    idfood= $("#foodtoken").val();
  FoxyNFTContract.methods.feedPet(idfood,petid).send({
    from: address[0],

  }).on('confirmation', (confirmationNumber) => {
      if (confirmationNumber === 2) {
        $("#viewall").empty();
       getPetsowner();
          getAccount();
       	$('#loading').modal('hide');
        toastr.success('Feed  FNFT Success!!!');
      }
    })
  console.log("Feed all pet");
}
async function  buystamina(petid) {
    
 
  const address = await web3.eth.getAccounts();
   
  FoxyNFTContract.methods.buystamina(petid).send({
    from: address[0],
  }).on('confirmation', (confirmationNumber) => {
      if (confirmationNumber === 2) {
        $("#viewall").empty();
       getPetsowner();
          getAccount();
       
        toastr.success('Buy stamina success!!');
      }
    })
  
}

async function  buyexp(petid) {
    
 
  const address = await web3.eth.getAccounts();
   
  FoxyNFTContract.methods.buyexp(petid).send({
    from: address[0],
  }).on('confirmation', (confirmationNumber) => {
      if (confirmationNumber === 2) {
        $("#viewall").empty();
       getPetsowner();
          getAccount();
       
        toastr.success('Buy exp success!!');
      }
    })
  
}



async function  buystaminaall() {
    checkedpet();
 
  const address = await web3.eth.getAccounts();
    idfood= $("#foodtoken").val();
  FoxyNFTContract.methods.buystaminaAll(selectedpet).send({
    from: address[0],
  }).on('confirmation', (confirmationNumber) => {
      if (confirmationNumber === 2) {
        $("#viewall").empty();
       getPetsowner();
        getAccount();
      
        toastr.success('Fill All Stamina Success!!!');
      }
    })
  console.log("Feed all pet");
}

window.onload = function () {
   getAccount();
    getPetsowner();
	checkIfApproved();
	
	
};