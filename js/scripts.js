$(document).ready(mostrarMenus);

function mostrarMenus{
	$(".flotar").mouseover(mostrarMenu);
}

function mostrarMenu{
	$(".flotar").toggleClass("visibilidad");
}