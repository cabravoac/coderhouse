const mostrarConsultas = () => {
    const busquedaClima = JSON.parse(localStorage.getItem("busquedaClima")) || []
    const historial = document.getElementById("historialConsulta")

    busquedaClima.forEach(element => {
        const tr = document.createElement("tr")
        tr.innerHTML = `<th>${element.ciudad}</th>
                        <th>${element.temp} ºC</th>
                        <th>${element.fecha}</th>`
        historial.append(tr)
    })

}

function show() {
    const buttonElement = document.querySelector('.showConsultas');    
    const textElement = document.querySelector('.showConsultas span');    

    const showTabla = document.querySelector('.table');

    buttonElement.addEventListener('click', () => {
        showTabla.classList.add('tableON');
        textElement.innerHTML = `Ocultar historial de consultas`
        const resultado = textElement.innerHTML
        hide(resultado);

    });    
    
}

function hide(resultado) {

    if(resultado = true) {

        const buttonElement = document.querySelector('.showConsultas');    
        const textElement = document.querySelector('.showConsultas span');    
    
        const showTabla = document.querySelector('.table');
    

        buttonElement.addEventListener('click', () => {
            showTabla.classList.remove('tableON');
            textElement.innerHTML = `Ver historial de consultas`

            show(); 
        });    
    
    }
       
}


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

    /*
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
    */

    const ciudadInput = document.getElementById('ciudadInput');
    const buttonElement = document.querySelector('.action');    
    const busquedaClima = JSON.parse(localStorage.getItem("busquedaClima")) || []

 
    buttonElement.addEventListener('click', async () => {
        const nombreCiudad = ciudadInput.value.toUpperCase();
        const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${nombreCiudad}&appid=5f1280cf69ab9a9a13a3461bea4cb795&units=metric&lang=es`)
        const datosClima = await response.json()
        
console.log(datosClima)

        if (datosClima.cod != "404") {

            
            console.log(datosClima)

            Swal.fire({
                icon: 'info',

                title: `<strong>${nombreCiudad}</strong><br>
                Temperatura: ${datosClima.main.temp}ºC
                Humedad: ${datosClima.main.humidity}%
                Viento a: ${datosClima.wind.speed} km/h`,
                showCloseButton: true,
                showCancelButton: false,
                focusConfirm: false,
                confirmButtonText:
                  '<i class="fa fa-thumbs-up"></i>Consultar otra ciudad',
                confirmButtonAriaLabel: 'Consultar otra ciudad',
              })
              busquedaClima.push(({ciudad:datosClima.name,
                temp:datosClima.main.temp, 
                fecha:new Date().toLocaleDateString()}
                ))
              localStorage.setItem("busquedaClima", JSON.stringify(busquedaClima))

        } else {
            Swal.fire({
                title: `La ciudad ingresada no existe`,
                icon: 'error',
                showCloseButton: true,
                showCancelButton: false,
                focusConfirm: false,
                confirmButtonText:
                  '<i class="fa fa-thumbs-up"></i>Intentar de nuevo',
                confirmButtonAriaLabel: 'Intentar de nuevo',
              })
        }
    });
    
}

function mayus(e) {
    e.value = e.value.toUpperCase();
}

consultaClima();
mostrarConsultas();
show();
mayus(e);



/*
function insertarDatosClima(nombreUsuario, ciudad, clima) {
    const contenedorDatos = document.getElementById("swal2-title")
    const tarjetaDatos = document.createElement("strong")
    tarjetaDatos.innerHTML = `Hola, ${nombreUsuario}. La temperatura en ${ciudad.nombre} es de ${clima.temperatura} grados con vientos de ${clima.velocidadViento} km/h`
    contenedorDatos.append(tarjetaDatos)
    console.log(contenedorDatos)
}
*/