// javascript start here
function fun(){

	var x = document.getElementById('animal').value;
	localStorage.setItem('item1',x);
	
	
	
var	y = document.getElementById('animal2').value;
	localStorage.setItem('item2',y);
	var a =  document.getElementById('animal3').value;
	 localStorage.setItem('item3',a);
	var b = document.getElementById('adjective').value;
	localStorage.setItem('item4',b);
	
	var z = document.getElementById('verb').value;
	localStorage.setItem('item5',z);
	
	var c = document.getElementById('number').value;
	localStorage.setItem('item6',c);
	

	 if(document.getElementById('yes').checked){
	   var d =	document.getElementById('yes').value;
	   localStorage.setItem('item7',d);
	}
	 else if(document.getElementById('no').checked)
	 {
	  var d = 	document.getElementById('no').value;
	  localStorage.setItem('item7',d);
	 }
	 else{
	 	d = "Yes";
	 	localStorage.setItem('item7',d);
	 }

	// if(document.getElementById('no').checked){
	// 	document.getElementById('n7').innerHTML = 'No';
	// }
	// else{
	// 	document.getElementById('n7').innerHTML = 'Yes';
	// }
	
	

	 var e = document.getElementById('speed').value;
	 localStorage.setItem('item8',e);
	 var f = document.getElementById('quote').value;
	 localStorage.setItem('item9',f);
	 var g = document.getElementById('message').value;
	 localStorage.setItem('item10',g);

	// var a = document.getElementById('a').value;
	// var st;
	// var b =	localStorage.setItem('st',a);

}

function getIn(){

 for(var i=0; i<8;i++){
	document.getElementsByClassName('n1')[i].innerHTML =	localStorage.getItem("item1");
}
for(var i=0; i<9;i++){
	document.getElementsByClassName('n2')[i].innerHTML =	localStorage.getItem("item2");
}
document.getElementById('n3').innerHTML = localStorage.getItem("item3");
document.getElementById('n4').innerHTML = localStorage.getItem("item4");
for(var i=0; i<3;i++){
	document.getElementsByClassName('n5')[i].innerHTML =	localStorage.getItem("item5");
}
document.getElementById('n6').innerHTML = localStorage.getItem("item6");
document.getElementById('n7').innerHTML = localStorage.getItem("item7");
document.getElementById('n8').innerHTML = localStorage.getItem("item8");
document.getElementById('n9').innerHTML = localStorage.getItem("item9");
document.getElementById('n10').innerHTML = localStorage.getItem("item10");
}