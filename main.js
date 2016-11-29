


function myFunction() {
	if(x = document.getElementById("myCheck").checked){
		document.getElementById("matratt").innerHTML = clickVeg();
	}

	else{
		document.getElementById("matratt").innerHTML = clickMeat() 

		}
	}

 var myArr = ["Fisksoppa", "Hummer", "Kebab", "Hamburgare", "Surströming", "Harstek", "Pizza","Falafel", "Grönsakssoppa", "Pannkakor", "Sojakorv", 
 "Haloumi", "Köttfärspaj", "Korvstroganoff", "Oxfilé", "Röda Linser"];


 var myArr2 = ["Falafel", "Grönsakssoppa", "Pannkakor", "Sojakorv", "Haloumi", "Röda Linser"];


function clickMeat() {

	var meatMat = myArr[Math.floor(Math.random() * myArr.length)];
	return meatMat;
   

}

function clickVeg() {
	
    var vegMat = myArr2[Math.floor(Math.random() * myArr2.length)];
   	return vegMat;

    
}








