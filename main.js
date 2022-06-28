//ejercicio #2

const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const d = document.getElementById('d');
const menor = document.getElementById("menor");
const mayor = document.getElementById('mayor');
const btnResultado = document.getElementById('btn-resultado');
const btnCalcular = document.getElementById('btn-calcular');
const btnagregar = document.getElementById('btn-agregar');
const campo = document.getElementById('campo');
let may;
let men;
    
    btnResultado.addEventListener('click', () => {
		if(a.value == b.value || a.value == c.value || a.value == d.value 
			|| b.value == c.value || b.value == d.value || c.value == d.value){
			alert("Hay números iguales, vuelve a ingresar valores");
			limpiar();
		}else{
			if(a.value > b.value && a.value > c.value && a.value > d.value){
				may = a.value;
			} else{
				if(b.value > a.value && b.value > c.value && b.value > d.value){
					may = b.value;
				}else{
					if(c.value > a.value && c.value > b.value && c.value > d.value){
						may = c.value;
					}else{
						may = d.value;
					}
				}
			}
			if(a.value < b.value && a.value < c.value && a.value < d.value){
				men = a.value;
			}else{
				if(b.value < a.value && b.value < c.value && b.value < d.value){
					men = b.value;
				}else{
					if(c.value < a.value && c.value < b.value && c.value < d.value){
						men = c.value;
					}else{
						men = d.value;
					}
				}
			}

			mayor.innerHTML = may;
			menor.innerHTML = men;
		}
    });

//ejercicio #1
	
	const materiaF = document.getElementById('materiaF');
	const materia = document.getElementById('materia');
	const valor = document.getElementById('valor');
	const valorF = document.getElementById('valorF');
	const total = document.getElementById('total');
	let suma = 0;
	let materiasV = [];

	btnagregar.addEventListener('click', () => {
		materiasV.push([materia.value, valor.value]);
		suma += parseInt(valor.value);
		lista.innerHTML = '';
		let stringTabla = `
		<thead>            
			<tr>
		 	 <th scope="col">Materia</th>
		 	 <th scope="col">Valor</th>
			</tr>
	  	</thead>`;
		
		  for (const dato of materiasV) {
			let fila = `
			<tbody>
				<tr>
			  		<td id="materiaF">`;
			fila += dato[0];
			fila += `
					</td>
                    <td id="valorF">
			`;
			fila += dato[1];
			fila += `
					</td>
				</tr>
		    </tbody>`;
			stringTabla += fila;
			
			let lista = document.getElementById('lista');
			lista.innerHTML = stringTabla;
			limpiar();
		}

			
        	
			
		  
	});

	btnCalcular.addEventListener('click', () => {
		let papeleria = parseInt(20000);
		let carnet = parseInt(8000);
		let dct = parseFloat(0.2);
		let totalDct = suma * dct; 
		let totalMaterias = totalDct + papeleria + carnet;
		console.log(suma)
		console.log(totalDct)

       	total.innerText = totalMaterias;

                
	  
});

function limpiar(){
	a.value = "";
	b.value = "";
	c.value = "";
	d.value = "";
	materia.value ="";
	valor.value = ""; 
} 





