function validarform()
{		

	var Socio=document.getElementById("Tipodesocio").value;
	var Nom=document.getElementById("NombreAp").value;
	var dni=document.getElementById("tudni").value;
	var tel=document.getElementById("tutel").value;
	var rad=document.getElementById("Preferenciaeste").value;
	

	console.log(Socio);
	console.log(Nom);
	console.log(dni);
	console.log(tel);
	console.log(rad);


	if(Socio=="")
	{
		console.log("Socio:", Socio);
		alert("Selecione tipo de socio");
		return false;
	}
	if(Nom=="")
	{
		console.log("Nombre y apellido:", Nom);
		alert("Campo nombre y apellido vacio");
		return false;
	}

	if(dni=="")
	{
		console.log("DNI:", dni);
		alert("El campo DNI esta vacio");
		return false;
	}
	
	if(tel=="")
	{
		console.log("Telefono:", tel);
		alert("El campo Telefono esta vacio");
		return false;
	}
	
	if(rad=="")
	{
		console.log("Localizacion:", rad);
		alert("El campo Localidad esta vacio");
		return false;
	}
	validar()

	return false;

};


function validar(){
	var contenido=document.getElementById("tuemail").value;
	var conte=contenido.split("@");
	if(!conte[1] || conte[0]=="")
	{
		alert(' correo no valido no tiene @');
	}
	else
	{	
		var cont=conte[1].split(".");
		if(!cont[1])
		{
			alert('correo no valido no tiene "." ');
		}
	}
	
};
