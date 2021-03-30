butt.onclick = function(){
var name = document.getElementById('name').value;
var address = document.getElementById('address').value;
var tel = document.getElementById('tel').value;
var mail = document.getElementById('mail').value;
if (name!='' && address!='' && tel!='' && mail!=''){
	document.getElementById('str1').innerHTML="Вы ввели имя: "+name;
	document.getElementById('str2').innerHTML="Вы ввели адрес: "+address;
	document.getElementById('str3').innerHTML="Вы ввели номер телефона: "+tel;
	document.getElementById('str4').innerHTML="Вы ввели почту: "+mail;
}
else {
	alert("Не все поля заполнены");
	};
}
