/*****************************************************************************/
/*****************************************************************************/
/************************Ejercicio del cajero automático**********************/
/*****************************************************************************/
/*****************************************************************************/
/*El siguiente ejercicio tiene como objetivo realizar un simulador de un cajero bancario, 
donde el usuario pueda registrarse, realizar movimientos y saber su saldo. El procedimiento 
seria el siguiente: el cajero pedirá su número de cedula, nombre y el primer deposito, 
en caso que no exista, en caso contrario debe de poder hacer movimientos como depósitos 
y retiros de su cuenta, al mismo tiempo debe de tener actualizado el saldo. Además, el 
programa debe de realizar:
ü Registro de varios usuarios.
ü Realizar varios movimientos. (ingresos y retiros)
ü Saber el saldo por cada usuario.
ü El total de saldos, mostrando el de cada cliente.
ü Validar que los retiros no sean superiores al depósito que tiene.
Recuerden realizar el ejercicio solo son vectores.*/

//////////////////////////////////////////VECTORES////////////////////////////////////////////

    var numcedula;
    numcedula=new Array(14);
    numcedula[0]=0;
    numcedula[1]=1;
    numcedula[2]=2;
    numcedula[3]=3;
    numcedula[4]=4;
    numcedula[5]=5;
    numcedula[6]=6;
    numcedula[7]=7;
    numcedula[8]=8;
    numcedula[9]=9;
    numcedula[10]=10;



    var nombres
    nombres=new Array(14);
    nombres[0]='Pedro';
    nombres[1]='Carlos';
    nombres[2]='Juan';
    nombres[3]='Veronica';
    nombres[4]='Ismael';
    nombres[5]='Jorge';
    nombres[6]='Camilo';
    nombres[7]='Luisa';
    nombres[8]='Guillermo';
    nombres[9]='Salome';
    nombres[10]='Katerine';


    var saldo;
    saldo=new Array(14);
    saldo[0]=20000;
    saldo[1]=30000;
    saldo[2]=40000;
    saldo[3]=50000;
    saldo[4]=60000;
    saldo[5]=70000;
    saldo[6]=80000;
    saldo[7]=90000;
    saldo[8]=100000;
    saldo[9]=110000;
    saldo[10]=120000;



//función que sirve para registrar los usuarios que aún no tienen cuenta
    function RegistrarUsuario(){

    var k;
    k=prompt('Ingrese su número de cédula: ','');
    k=parseInt(k);
    if(isNaN(k)) {
        alert('La cédula debe ser tipo numérico')
    }
    if(numcedula[k]==null || numcedula[k].length==0){
        numcedula[k]=k;
        nombres[k]=prompt('Por favor ingresa tu nombre','');
        if (nombres[k]==null || nombres[k]==0) {
            alert('Debes ingresar un nombre válido.');
            numcedula[k]=null;
            nombres[k]=null;
        }
        else {
            saldo[k]=prompt('¿Cual es la cantidad de dinero que va a depositar?','');
            if (saldo[k]==null || saldo[k]<=0) {
                alert('Por el momento su cuenta no cumple con los parámetros establecidos, vuelve a intentarlo');
                numcedula[k]=null;
                nombres[k]=null;
                saldo[k]=null;
            }
            else{
                alert('Ha sido creada tu cuenta con éxito');
            }
        }
    } 
    else{
        alert('La cédula ingresada ya esta en el sistema por favor verifica e intentalo nuevamente')
    }

}



//función que sirve para que el usuario una vez este registrado pueda iniciar sesión con su número de cédula
function PrincipalUsuario(){
    var k,y ;
    k=prompt('Ingrese su número de cédula: ','');
    k=parseInt(k);
    if(isNaN(k)) {
        alert('La cédula debe ser tipo numérico')
    }else{
        if(numcedula[k]==null || numcedula[k].length==0){
            alert('La cédula ingresada no encuentra en el sistema por favor verífica e inténtalo nuevamente');
        }
        else{
            y=prompt('Por favor ingresa tu nombre','');
            if (y!=nombres[k]) {
                alert('Debes ingresar un nombre valido.');
            }
            else {
                //variable para almacenar la opcion
                var opcion;

                alert('"Bienvenido a su cajero amigo Confiar"\n MENÚ:\n (1) Consultar saldo \n (2) Depositar saldo \n (3) Retirar saldo \n (4) Salir')


                //almacenamos la opcion que se elija
                opcion=parseInt(prompt('Ingrese el número de la opción que va a realizar',''));
                //Creamos un switch
    
                switch(opcion){

        
                    case 1: alert('Tu saldo actual es: $ '+saldo[k]);
                    break;
        
                    case 2:
                    var cantidad=parseInt(prompt('¿Cuanto dinero va a depositar?',''));
                    Deposito(cantidad,k);
                    break;

                    case 3:
                    var cantidad=prompt('¿Cuanto dinero va a retirar?','');
                    Retirar(cantidad,k);
                    break;

                    case 4:
                        alert("Saliendo.");
                    break;

                    default: alert('opción no valida');
                    break;

                }
            }
        }
    }

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


 //creamos la función depositar

 function Deposito(cantidad,k){
     saldo[k]+=cantidad;
    alert('Haz depositado exitosamente $ ' +cantidad+ ' y tu saldo actual es: $ ' +saldo[k]);
 }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//creamos la función retirar

function Retirar(cantidad,k){
    //condicional para validar que el valor a retirar no supere el saldo actual

    if (cantidad<=saldo[k]) { //si esta condición se cumple se entra al condicional

        saldo[k]-=cantidad;
        alert('Haz retirado exitosamente $ '+cantidad+' y tu saldo actual es: $ '+saldo[k]);

    } 
    else if (cantidad>saldo[k]) {
        alert('No tienes saldo suficiente, tu saldo actual es: $ '+saldo[k]);
    }

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 function validar(){
    
        let kmRecorridos=document.getElementById('kmRecorridos').value;
        let Monto_fijo=document.getElementById('PrecioFijo').value;
        let Kilómetros_adicionales=document.getElementById('kmAdicionales').value;
        let Total_a_pagar=document.getElementById('total').value;
        PrecioFijo = 300000;
        kmAdicionales = 0;
        CostoAdicional = 0;
        
// Si los kilómetros recorridos estan por encima de los 300 kilómetros 
if (kmRecorridos > 300) {
    kmAdicionales = kmRecorridos-300;  //A los kilometros recorridos se resta 300 y así los kilometros que queden son los kilometros adicionales
    CostoAdicional= kmAdicionales*15000; // Se guarda el costo adicional de los kilometros en la variable CostoAdicional y se multiplica por 15000
    Factura_generada = '<b>Factura con detalles</b>';
    document.getElementById('Factura_generada').innerHTML = Factura_generada;

    var Foto= document.getElementById('Foto').value;
    Monto_fijo = PrecioFijo;
    document.getElementById('PrecioFijo').innerHTML = Monto_fijo;
    Kilómetros_adicionales = kmAdicionales;
    document.getElementById('kmAdicionales').innerHTML = Kilómetros_adicionales;
    Valor_kilómetros_adicionales= CostoAdicional;
    document.getElementById('CostoAdicional').innerHTML = Valor_kilómetros_adicionales;
    Total_a_pagar = PrecioFijo+CostoAdicional;
    document.getElementById('total').innerHTML = Total_a_pagar;

    }else /* Si los kilómetros recorridos estan por debajo de los 300 kilómetros*/{
    Factura_generada = '<b>Factura con detalles</b>';
    document.getElementById('Factura_generada').innerHTML = Factura_generada;
    Monto_fijo = PrecioFijo;
    document.getElementById('PrecioFijo').innerHTML = Monto_fijo;
    Kilómetros_adicionales = kmAdicionales;
    document.getElementById('kmAdicionales').innerHTML = Kilómetros_adicionales;
    Valor_kilómetros_adicionales= CostoAdicional;
    document.getElementById('CostoAdicional').innerHTML = Valor_kilómetros_adicionales;
    Total_a_pagar = PrecioFijo+CostoAdicional;
    document.getElementById('total').innerHTML = Total_a_pagar;

    }

}

   /* document.getElementById('resultado').innerHTML = salida;
        JOptionPane.showMessageDialog(null,"Monto fijo: $"+PrecioFijo+"\nKilómetros adicionales: "+kmAdicionales+
                "\nValor kilómetros adicionales: $"+CostoAdicional+"\nTotal a pagar: $"+(PrecioFijo+CostoAdicional));
    



    let nom=document.getElementById('nombre').value;
    let edad=document.getElementById('edad').value;
    let ciudad=document.getElementById('ciudad').value;
    let Estrato=document.getElementById('estrato').value;

    if (edad >=18 && ciudad == 'Medellin' || ciudad=='Bogota' && Estrato <=3) {
          salida = 'Tienes derecho al subsidio';
    }else{
        salida = 'No tienes derecho al subsidio';
    }
    document.getElementById('resultado').innerHTML = salida;

 }   */