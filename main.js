function consultaClima() {
    const ciudades = [
        {
            nombre: "CDMX",
            abreviatura: "CDMX",
        },
        {
            nombre: "Bruselas",
            abreviatura: "BRU",
        },
        {
            nombre: "Tokio",
            abreviatura: "TK",
        },
        {
            nombre: "Vancouver",
            abreviatura: "VAN",
        },
        {
            nombre: "Chicago",
            abreviatura: "CHI",
        }
    ];

    const datosClima = {
        CDMX: {
            temperatura: 20,
            velocidadViento: 150,
        },
        BRU: {
            temperatura: 25,
            velocidadViento: 120,
        },
        TK: {
            temperatura: 28,
            velocidadViento: 100,
        },
        VAN: {
            temperatura: 18,
            velocidadViento: 80,
        },
        CHI: {
            temperatura: 30,
            velocidadViento: 200,
        }
    };


    const nombreInput = document.getElementById('nombreInput');
    const ciudadInput = document.getElementById('ciudadInput');
    const buttonElement = document.querySelector('.action');    

 
    buttonElement.addEventListener('click', () => {
        let nombreUsuario = nombreInput.value.toUpperCase();
        let abreviaturaIngresada = ciudadInput.value.toUpperCase();

        if (abreviaturaIngresada in datosClima) {
            const ciudad = ciudades.find(ciudad => ciudad.abreviatura === abreviaturaIngresada);
            const clima = datosClima[abreviaturaIngresada];

    
            Swal.fire({
                title: '<strong></strong>',
                icon: 'info',
                showCloseButton: true,
                showCancelButton: false,
                focusConfirm: false,
                confirmButtonText:
                  '<i class="fa fa-thumbs-up"></i>Consultar otra ciudad',
                confirmButtonAriaLabel: 'Consultar otra ciudad',
              })

              insertarDatosClima(nombreUsuario, ciudad, clima);


            console.log("ciudad");
            console.log("clima");

        } else {

            Swal.fire({
                title: '<strong>La abreviatura de la ciudad ingresada no es válida. Por favor, ingresa una de las siguientes opciones: CDMX, BRU, TK, VAN, CHI.</strong>',
                icon: 'error',
                showCloseButton: true,
                showCancelButton: false,
                focusConfirm: false,
                confirmButtonText:
                  '<i class="fa fa-thumbs-up"></i>Intentar de nuevo',
                confirmButtonAriaLabel: 'Intentar de nuevo',
              })

            insertarDatosClima(nombreUsuario, ciudad, clima);        

        }
    });
    
}

consultaClima();



function insertarDatosClima(nombreUsuario, ciudad, clima) {
    const contenedorDatos = document.getElementById("swal2-title")
    const tarjetaDatos = document.createElement("strong")
    tarjetaDatos.innerHTML = `Hola, ${nombreUsuario}. La temperatura en ${ciudad.nombre} es de ${clima.temperatura} grados con vientos de ${clima.velocidadViento} km/h`
    contenedorDatos.append(tarjetaDatos)
    console.log(contenedorDatos)
}
