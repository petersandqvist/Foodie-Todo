
 //användare klickar på Lägg till knappen.
 //om det är någon text i input fältet så ska det läggas till todo list
 document.getElementById("add").addEventListener("click", function(){
 	var value = document.getElementById("item").value;
 	if (value) {
 		addItemTodo(value);
 		document.getElementById("item").value = '';
 	}
 });
 	

function taBortItem(){
	var item = this.parentNode.parentNode;
	var parent = item.parentNode; 

	parent.removeChild(item);
	
}

function klaraItem (){
	var item = this.parentNode.parentNode;
	var parent = item.parentNode;
	var id = parent.id;

//kollar om item ska läggas till completed list eller läggas till igen till todo list
	var vilketItem = (id === "todo") ? document.getElementById("completed"):document.getElementById("todo");

	parent.removeChild(item);
	vilketItem.insertBefore(item, vilketItem.childNodes[0]);
}

//lägger till nytt i todolistan
function addItemTodo(text){
	var list = document.getElementById("todo");


	var item = document.createElement("li");
	item.innerText = text;


	var buttons = document.createElement("div");
	buttons.classList.add("buttons");


	var remove = document.createElement("button");
	remove.innerHTML= "Ta bort";
	remove.classList.add("remove");



	//click event för remove item
	remove.addEventListener("click", taBortItem);

	var	complete = document.createElement("button");
	complete.innerHTML= "Slutför/Ångra";
	complete.classList.add("complete");

	//click event för utförda items
	complete.addEventListener("click", klaraItem);


	buttons.appendChild(remove);
	buttons.appendChild(complete);
	item.appendChild(buttons);

	list.insertBefore(item, list.childNodes[0]);
}


