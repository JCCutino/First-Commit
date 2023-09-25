function añadir(value) {
    
if ( document.getElementById('display').value == 'Error' || document.getElementById('display').value == 'undefined') {
    document.getElementById('display').value = ''; 
    document.getElementById('display').value += value;
} else {
    document.getElementById('display').value += value;
}
    
    
}

function borrar() {
    document.getElementById('display').value = '';
}

function calcular(){
    if ( document.getElementById('display').value == 'Error' || document.getElementById('display').value == 'undefined') {
        document.getElementById('display').value = ''; 
    } else {
        try {
            const resultado = eval(document.getElementById('display').value);
            document.getElementById('display').value = resultado;
        } catch (error) {
            document.getElementById('display').value = 'Error';
        }
    }
   
}
