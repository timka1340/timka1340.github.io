function vivodText(){
	let text = document.getElementById(`text`).value;
	localStorage.setItem(`text`,text)
	drawText();
}
	function drawText(){

	let text = localStorage.getItem(`text`);
	let stored_text = document.getElementById(`stored_text`);
	stored_text.innerText = text;
	
	
	function register(){
let login = document.getElementById(`name`);

let email = document.getElementById(`email`);

let pass = document.getElementById(`passwold`);
	}
	
	function check_login(){
	 if(document.getElementById(`name`).value.length <   4){
		 document.getElementById(`pomilka`).innerHTML = `закороткий логін`;
		 setTimeout(function(){
			  document.getElementById(`pomilka`).innerHTML = ``;
	},1000)}}