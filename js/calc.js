
function checklvl(){
var level= $('#lvl').val();
var fak=Math.pow(level,2);
 var exp=fak*100;

var intleigence=$('#intel').val();
var rarity=$('#rarity').val();
var cornrwd=1;
var conhp=100;
var conatk=20;
var universal=intleigence*rarity*level;
var reward =Math.trunc(Math.sqrt(universal*cornrwd));
var hp =Math.trunc(Math.sqrt(universal*conhp));
var atk =Math.trunc(Math.sqrt(universal*conatk));
var shield=reward/2;
var feed=reward*3;
    
$("#expval").html(exp);
$("#atkval").html(atk);
$("#hpval").html(hp);
$("#rewardval").html(reward+' Foxy');
$("#shieldval").html(shield+' Foxy');
$("#healval").html(reward+' Foxy');
$("#feedval").html(feed+' Foxy');
}




