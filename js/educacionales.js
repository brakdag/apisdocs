 ;
$(document).ready(function(){

	var f = new Date();
	var fecha = f.getFullYear()+ "-" +(f.getMonth() +1) + "-" + f.getDate();
	var urlq = "http://www.educacionales.diariouno.com.ar/educacionales/api/mensaje/buscar?fecha="+ fecha
	
	$.get(urlq,function(data){
		for(var i in data)
		{
			if (data[i].establecimiento.departamento == "San Rafael")
			{
				if((data[i].establecimiento.numero == "114") || (data[i].establecimiento.numero == "124" ) || (data[i].establecimiento.numero == "117"))
					$("#educ").append("<strong>"+ data[i].detalle + "</strong>"); 
				else
					$("#educ").append("<p>"+ data[i].detalle + "</p>"); 
				
			}
		}
		
		console.log("avisos:"  + data.length);
		console.log(data);
	});
});