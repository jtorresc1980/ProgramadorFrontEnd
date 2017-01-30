		function addChar()
		{
			var cadena=",";

			//creo un array cuyos elementos accederan a las propiedades del formulario
			var elem=[];
			document.getElementById("ordenar").style.visibility = "visible";
			elem[1] = document.getElementById("numerar");
			elem[2] = document.getElementById("display");
			
			if(elem[1].value == null || elem[1].value == ''){
				alert("Ingrese un valor valido");
				elem[1].value = '';
			}
			else{
				if(elem[2].value == null || elem[2].value==''){
					elem[2].value = elem[1].value;
				}else{
					elem[2].value = elem[2].value+cadena+elem[1].value;
				}		
			}

		}

		//Funcion que ordena en un array auxiliar los numeros ingresados
		function orden(input){
			var elem=[];

			//creamos una cadena que contenga los numeros ingresados
			var cadena = input.value;
			//convertimos a array esa cadena
			var numeros=cadena.split(",");
			//declaro una variable array para almacenar valores no repetidos
			var distinct_numeros=[];

			//eliminamos elementos duplicados y guardo el resultado en el array: distinct_numeros
			for(var i=0;i<numeros.length;i++){
				var str=numeros[i];
				if(distinct_numeros.indexOf(str)==-1){
					distinct_numeros.push(str);
				}
			}
			//ordenamos el nuevo array distinct_numeros
			distinct_numeros.sort();

			//Asignamos el resultado al input oculto para poder mostrarlo de alli con la funcion mostrar 
			//agregandole espacios entre elementos del array sin repetidos (distinct_numeros)
			elem[1] = document.getElementById("display");
			elem[1].value=distinct_numeros.join(' ');

			//Muestro u oculto botones segun corresponde al proceso
			document.getElementById("visualizar").style.visibility = "visible";
			document.getElementById("agregar").style.visibility = "hidden";
			document.getElementById("numerar").style.visibility = "hidden";
			document.getElementById("ordenar").style.visibility = "hidden";

		}

		function mostrar(){
			var elem=[];
			elem[0] = document.getElementById("display");

			if(elem[0]==null){
				//Mostramos el resultado
				document.getElementById("demo").innerHTML = "No hay elementos";
			}
			else{
				//Mostramos el resultado
				document.getElementById("demo").innerHTML = elem[0].value;
				}
			document.getElementById("visualizar").style.visibility = "hidden";
			document.getElementById("demo").style.visibility = "visible";
		}

		function cargar() {
			//Oculto botones que aun no se usarán
			document.getElementById("agregar").style.visibility = "hidden";
			document.getElementById("numerar").style.visibility = "hidden";
			document.getElementById("ordenar").style.visibility = "hidden";
			document.getElementById("visualizar").style.visibility = "hidden";
			document.getElementById("demo").style.visibility = "hidden";
			//document.getElementById("agregar").style.visibility = "block";
		}
		function empezar(){

			//creo un array cuyos elementos accederan a las propiedades del formulario
			var elem=[];
			
			
			//le asigno a cada elemento del array un objeto del formulario(botones) invocados por Id del mismo
			/*elem[0] = document.getElementById("agregar");
			elem[1] = document.getElementById("ordenar");
			elem[2] = document.getElementById("visualizar");
			elem[3] = document.getElementById("iniciar");
			elem[4] = document.getElementById("display");
			elem[5] = document.getElementById("numerar");*/

			//Oculto botones que aun no se usarán
			document.getElementById("agregar").style.visibility = "visible";
			document.getElementById("numerar").style.visibility = "visible";
			//inicializo el valor de los campos ocultos
			document.getElementById("display").value = '';
			document.getElementById("demo").innerHTML = '';
			document.getElementById("demo").style.visibility = "hidden";

			//elem[0].disabled=false;
			///elem[1].disabled=true;
			///elem[2].disabled=true;
			//elem[3].disabled=true;
			//elem[4].value = '';
		}