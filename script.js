// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Clase de bares, los 3 bares disponibles, y los respectivos menus con entrada, plato principal, guarnicion, postre y las funciones que ponen en marcha y cierran el proceso de reserva

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

class Bares {
  constructor(nombre, mesas, bebidas, entradas, platoPrincipal, postres, precios) {
    this.nombre = nombre;
    this.mesasDisponibles = mesas
    this.bebidas = bebidas;
    this.entradas = entradas;
    this.platoPrincipal = platoPrincipal;
    this.postres = postres;
    this.precios = {
      bebidas: {},
      entradas: {},
      platoPrincipal: {},
      postres: {}
    };
  }
  asignarPrecioBebidas(opcion, precios) {
    this.precios["bebidas"][opcion] = precios;
  }
  asignarPrecioEntradas(opcion, precios) {
    this.precios["entradas"][opcion] = precios;
  }
  asignarPrecioPlatoPrincipal(opcion, precios) {
    this.precios["platoPrincipal"][opcion] = precios;
  }
  asignarPrecioPostre(opcion, precios) {
    this.precios["postres"][opcion] = precios;
  }
}


const bar1 = new Bares("Cochera Bar", 40,
  "Elige qué vas a tomar:\n1. Pinta $800 (Elegirás la variedad en el bar)\n2. Gaseosa/agua saborizada $500 \n3. Trago $1000 (Elegirás el trago en el bar)",
  "Elige tu entrada:\n1. Papas con cheddar y panceta $1200\n2. Rabas $1500 \n3. Papas clásicas $1200\n4. Ninguno",
  "Elige tu plato principal:\n1. Hamburguesa $2000 (Elegirás la variedad en el bar)\n2. Lomito $2200 (Elegirás la variedad en el bar)\n3. Pizzas $1800 (Elegirás la variedad en el bar)\n4. Plato gourmet $2500 (Elegirás la variedad en el bar)",
  "Elige tu postre:\n1. Chocotorta $1000 \n2. Cheesecake $1100 \n3. Flan $1200 \n4. Helado $800 \n5. Ninguno",);
bar1.asignarPrecioBebidas(1, 800);
bar1.asignarPrecioBebidas(2, 500);
bar1.asignarPrecioBebidas(3, 1000);
bar1.asignarPrecioEntradas(1, 1200);
bar1.asignarPrecioEntradas(2, 1500);
bar1.asignarPrecioEntradas(3, 1200);
bar1.asignarPrecioEntradas(4, 0);
bar1.asignarPrecioPlatoPrincipal(1, 2000);
bar1.asignarPrecioPlatoPrincipal(2, 2200);
bar1.asignarPrecioPlatoPrincipal(3, 1800);
bar1.asignarPrecioPlatoPrincipal(4, 2500);
bar1.asignarPrecioPlatoPrincipal(5, 0);
bar1.asignarPrecioPostre(1, 1000);
bar1.asignarPrecioPostre(2, 1100);
bar1.asignarPrecioPostre(3, 1200);
bar1.asignarPrecioPostre(4, 800);
bar1.asignarPrecioPostre(5, 0);


const bar2 = new Bares("Santa Calma", 50,
  "Elige qué vas a tomar:\n1. Pinta $1000 (Elegirás la variedad en el bar)\n2. Gaseosa/agua saborizada $700 \n3. Trago $1200 (Elegirás el trago en el bar)",
  "Elige tu entrada:\n1. Papas con cheddar y panceta $1400\n2. Rabas $1700 \n3. Papas clásicas $1400\n4. Ninguno",
  "Elige tu plato principal:\n1. Hamburguesa $2200 (Elegirás la variedad en el bar)\n2. Lomito $2400 (Elegirás la variedad en el bar)\n3. Pizzas $2000 (Elegirás la variedad en el bar)\n4. Plato gourmet $2700 (Elegirás la variedad en el bar)",
  "Elige tu postre:\n1. Chocotorta $1200 \n2. Cheesecake $1300 \n3. Flan $1400 \n4. Helado $1000 \n5. Ninguno",);
bar2.asignarPrecioBebidas(1, 1000);
bar2.asignarPrecioBebidas(2, 700);
bar2.asignarPrecioBebidas(3, 1200);
bar2.asignarPrecioEntradas(1, 1400);
bar2.asignarPrecioEntradas(2, 1700);
bar2.asignarPrecioEntradas(3, 1400);
bar2.asignarPrecioEntradas(4, 0);
bar2.asignarPrecioPlatoPrincipal(1, 2200);
bar2.asignarPrecioPlatoPrincipal(2, 2400);
bar2.asignarPrecioPlatoPrincipal(3, 2000);
bar2.asignarPrecioPlatoPrincipal(4, 2700);
bar2.asignarPrecioPlatoPrincipal(5, 0);
bar2.asignarPrecioPostre(1, 1200);
bar2.asignarPrecioPostre(2, 1300);
bar2.asignarPrecioPostre(3, 1400);
bar2.asignarPrecioPostre(4, 1000);
bar2.asignarPrecioPostre(5, 0);

const bar3 = new Bares("Random Bar", 35,
  "Elige qué vas a tomar:\n1. Pinta $700 (Elegirás la variedad en el bar)\n2. Gaseosa/agua saborizada $400 \n3. Trago $900 (Elegirás el trago en el bar)",
  "Elige tu entrada:\n1. Papas con cheddar y panceta $1100\n2. Rabas $1400 \n3. Papas clásicas $1100\n4. Ninguno",
  "Elige tu plato principal:\n1. Hamburguesa $1900 (Elegirás la variedad en el bar)\n2. Lomito $2100 (Elegirás la variedad en el bar)\n3. Pizzas $1700 (Elegirás la variedad en el bar)\n4. Plato gourmet $2400 (Elegirás la variedad en el bar)",
  "Elige tu postre:\n1. Chocotorta $1000 \n2. Cheesecake $1200 \n3. Flan $1300 \n4. Helado $900 \n5. Ninguno",);
bar3.asignarPrecioBebidas(1, 700);
bar3.asignarPrecioBebidas(2, 400);
bar3.asignarPrecioBebidas(3, 900);
bar3.asignarPrecioEntradas(1, 1100);
bar3.asignarPrecioEntradas(2, 1400);
bar3.asignarPrecioEntradas(3, 1100);
bar3.asignarPrecioEntradas(4, 0);
bar3.asignarPrecioPlatoPrincipal(1, 1900);
bar3.asignarPrecioPlatoPrincipal(2, 2100);
bar3.asignarPrecioPlatoPrincipal(3, 1700);
bar3.asignarPrecioPlatoPrincipal(4, 2400);
bar3.asignarPrecioPlatoPrincipal(5, 0);
bar3.asignarPrecioPostre(1, 1000);
bar3.asignarPrecioPostre(2, 1200);
bar3.asignarPrecioPostre(3, 1300);
bar3.asignarPrecioPostre(4, 900);
bar3.asignarPrecioPostre(5, 0);

alert("Bienvenido a Saboreando Córdoba. En el menú podrás elegir entre reservar en un bar o hacer un pedido y retirar por el punto de compra (no se realizan deliverys)");

let opcionElegida = parseInt(prompt("Saboreando Cordoba \n1. Compra de bebidas \n2. Reservas"));

function obtenerCatalogo() {
  catalogoCompras.forEach(function (categoria) {
    categoria.productos.forEach(function (producto) {
      console.log("ID: " + producto.ID + ", Nombre: " + producto.nombre + ", Precio: $" + producto.precio)
    })
    console.log("--------------------------------------")
  })
}

const catalogoCompras = [
  {
    categoria: "Cervezas",
    productos: [
      { ID: 10, nombre: "Brahama", precio: 1500 },
      { ID: 11, nombre: "Quilmes", precio: 1500 },
      { ID: 12, nombre: "Andes", precio: 1700 },
      { ID: 13, nombre: "Stella", precio: 1800 },
      { ID: 14, nombre: "Budweiser", precio: 1400 },
      { ID: 15, nombre: "Iguana", precio: 1100 },
      { ID: 16, nombre: "Heineken", precio: 1700 },
      { ID: 17, nombre: "Patagonia", precio: 1900 },
      { ID: 18, nombre: "Ninguno", precio: 0 }
    ]
  },
  {
    categoria: "Latas de Cerveza",
    productos: [
      { ID: 20, nombre: "Lata de Brahama", precio: 500 },
      { ID: 21, nombre: "Lata de Quilmes", precio: 500 },
      { ID: 22, nombre: "Lata de Andes", precio: 600 },
      { ID: 23, nombre: "Lata de Stella", precio: 600 },
      { ID: 24, nombre: "Lata de Budweiser", precio: 400 },
      { ID: 25, nombre: "Lata de Iguana", precio: 300 },
      { ID: 26, nombre: "Lata de Heineken", precio: 500 },
      { ID: 27, nombre: "Lata de Patagonia", precio: 700 },
      { ID: 28, nombre: "Ninguno", precio: 0 }
    ]
  },
  {
    categoria: "Licores",
    productos: [
      { ID: 30, nombre: "Jagermeister", precio: 4500 },
      { ID: 31, nombre: "Amarula", precio: 7050 },
      { ID: 32, nombre: "Sheridan's", precio: 6600 },
      { ID: 33, nombre: "Cusenier", precio: 2100 },
      { ID: 34, nombre: "Baileys", precio: 7300 },
      { ID: 35, nombre: "Granadina", precio: 1200 },
      { ID: 36, nombre: "Ninguno", precio: 0 }
    ]
  },
  {
    categoria: "Destiladas",
    productos: [
      { ID: 40, nombre: "Gin tanqueray", precio: 8000 },
      { ID: 41, nombre: "Gin Bombay", precio: 8900 },
      { ID: 42, nombre: "Whiskey Johny Walker", precio: 9500 },
      { ID: 43, nombre: "Fernet Branca", precio: 600 },
      { ID: 44, nombre: "Vodka Smirnoff", precio: 2800 },
      { ID: 45, nombre: "Vodka Skyy", precio: 3500 },
      { ID: 46, nombre: "Ninguno", precio: 0 }
    ]
  },
  {
    categoria: "Vinos",
    productos: [
      { ID: 50, nombre: "Santa Julia blanco dulce", precio: 2000 },
      { ID: 51, nombre: " Santa Julia Malbec", precio: 2000 },
      { ID: 52, nombre: "Estancia Mendoza", precio: 600 },
      { ID: 53, nombre: "Cordero con Piel de Lobo", precio: 1100 },
      { ID: 54, nombre: "Las Perdices", precio: 2500 },
      { ID: 55, nombre: "Ninguno", precio: 0 }
    ]
  },
  {
    categoria: "Energizantes",
    productos: [
      { ID: 60, nombre: "Redbull", precio: 700 },
      { ID: 61, nombre: "Speed", precio: 400 },
      { ID: 62, nombre: "Monster", precio: 700 },
      { ID: 63, nombre: "Ninguno", precio: 0 }
    ]
  },
  {
    categoria: "Bebidas sin alcohol",
    productos: [
      { ID: 74, nombre: "Linea Coca retornable 2 Lt", precio: 500 },
      { ID: 75, nombre: "Coca retornable 2.5 Lt", precio: 600 },
      { ID: 76, nombre: "Linea Pepsi 2.25", precio: 500 },
      { ID: 77, nombre: "Ninguno", precio: 0 }
    ]
  },
];

if (opcionElegida === 1) {
  confirm("Bienvenido al sector compras. A continuacion podras hacer tu pedido, ver el catalogo, entre otras opciones.")
  const eleccionCompras = parseInt(prompt("¿Qué deseas hacer? \n1. Ver todos los precios del catálogo \n2. Buscar una bebida en particular \n3. Filtrar por categoría \n4. Hacer un pedido (Uno de nuestros vendedores del local se comunicara y tomara tu compra, o podes ver los precios del catalogo y solamente hacer el pedido cuando nos comuniquemos)"))

  if (eleccionCompras === 1) {
    obtenerCatalogo()
  } else if (eleccionCompras === 2) {
    let nombreProducto = prompt("Escriba en el buscador la bebida que desea encontrar. Asegúrese de escribir el nombre de manera correcta y sin obviar ninguna letra, de lo contrario el buscador dará resultado negativo")
    let bebidaBuscada
    catalogoCompras.forEach(categoria => {
      categoria.productos.forEach(producto => {
        if (producto.nombre === nombreProducto) {
          bebidaBuscada = producto;
        }
      })
    })
    if (bebidaBuscada) {
      alert("Bebida encontrada: " + bebidaBuscada.nombre + ", Precio: $" + bebidaBuscada.precio)
    } else {
      alert("Bebida no encontrada")
    }
  } else if (eleccionCompras === 3) {
    let CategoriaABuscar = prompt("Ingrese la categoría que desea ver \n1.Cervezas \n2.Latas de Cerveza \n3.Licores \n4.Destiladas \n5.Vinos \n6.Energizantes \n7.Bebidas sin Alcohol");
    let categoriaBuscada = catalogoCompras.find(categoria => categoria.categoria === CategoriaABuscar)
    if (categoriaBuscada) {
      console.log("Categoría encontrada: " + categoriaBuscada.categoria)
      console.log("Productos:")
      categoriaBuscada.productos.forEach(producto => {
        console.log("Nombre: " + producto.nombre + ", Precio: $" + producto.precio)
      })
    } else {
      console.log("Categoría no encontrada");
    }
  } else if (eleccionCompras === 4) {
    let nombreCliente = prompt("Ingrese su nombre")
    let telefonoCliente = prompt("Ingrese su numero de telefono")
    console.log("En los proximos minutos nos comunicaremos contigo " + nombreCliente + " al numero " + telefonoCliente + "." + " Gracias por elegirnos!")
  }
} else if (opcionElegida === 2) {
  confirm("Bienvenido al sector reservas. A continuacion podras hacer tu reserva en uno de los bares de nuestro sitio.")
  let bares = parseInt(prompt("A continuacion elige un bar y procederemos con la reserva de la mesa:\n1. Cochera Bar\n2. Santa Calma\n3. Random Bar"))

  let barElegido;
  let cuentaTotal = 0;
  const mesasDisponibles = bar1.mesasDisponibles;
  let mensajeMostrado = false;

  for (let i = 0; i < mesasDisponibles; i++) {
    if (!mensajeMostrado) {
      alert("Puede proceder con la reserva");
      mensajeMostrado = true;
    }
  }

  if (!mensajeMostrado) {
    alert("No hay mesas disponibles, intente con otro bar");
  }

  //BAR NUMERO 1
  if (bares === 1) {
    {
      barElegido = bar1;
      seleccionarBebida();
    }

    function seleccionarBebida() {
      const bebidaSeleccionada = prompt("Elige qué vas a tomar:\n1. Pinta $800 (Elegirás la variedad en el bar)\n2. Gaseosa/agua saborizada $500 \n3. Trago $1000 (Elegirás el trago en el bar)");
      const precioBebida = barElegido.precios["bebidas"][bebidaSeleccionada];
      cuentaTotal += precioBebida;
      console.log("Bebida seleccionada:", bebidaSeleccionada);
      console.log("Precio:", precioBebida);
      console.log("Cuenta Total:", cuentaTotal);
      seleccionarEntrada();
    }


    function seleccionarEntrada() {
      const entradaSeleccionada = prompt("Elige tu entrada:\n1. Papas con cheddar y panceta $1200\n2. Rabas $1500 \n3. Papas clásicas $1200\n4. Ninguno");
      const precioEntrada = barElegido.precios["entradas"][entradaSeleccionada];
      cuentaTotal += precioEntrada;
      console.log("Entrada seleccionada:", entradaSeleccionada);
      console.log("Precio:", precioEntrada);
      console.log("Cuenta Total:", cuentaTotal);
      seleccionarPlatoPrincipal();
    }


    function seleccionarPlatoPrincipal() {
      const platoPrincipalSeleccionado = prompt("Elige tu plato principal:\n1. Hamburguesa $2000 (Elegirás la variedad en el bar)\n2. Lomito $2200 (Elegirás la variedad en el bar)\n3. Pizzas $1800 (Elegirás la variedad en el bar)\n4. Plato gourmet $2500 (Elegirás la variedad en el bar)\n5. Ninguno");
      const precioPlatoPrincipal = barElegido.precios["platoPrincipal"][platoPrincipalSeleccionado];
      cuentaTotal += precioPlatoPrincipal;
      console.log("Plato Principal seleccionado:", platoPrincipalSeleccionado);
      console.log("Precio:", precioPlatoPrincipal);
      console.log("Cuenta Total:", cuentaTotal);
      seleccionarPostre();
    }

    function seleccionarPostre() {
      const postreSeleccionado = prompt("Elige tu postre:\n1. Chocotorta $1000 \n2. Cheesecake $1100 \n3. Flan $1200 \n4. Helado $800 \n5. Ninguno");
      const precioPostre = barElegido.precios["postres"][postreSeleccionado];
      cuentaTotal += precioPostre;
      console.log("Postre seleccionado:", postreSeleccionado);
      console.log("Precio:", precioPostre);
      console.log("Cuenta Total:", cuentaTotal);

      //BAR NUMERO 2

    }
  } else if (bares === 2) {
    {
      barElegido = bar2;
      seleccionarBebida();
    }

    function seleccionarBebida() {
      const bebidaSeleccionada = prompt("Elige qué vas a tomar:\n1. Pinta $1000 (Elegirás la variedad en el bar)\n2. Gaseosa/agua saborizada $700 \n3. Trago $1200 (Elegirás el trago en el bar)");
      const precioBebida = barElegido.precios["bebidas"][bebidaSeleccionada];
      cuentaTotal += precioBebida;
      console.log("Bebida seleccionada:", bebidaSeleccionada);
      console.log("Precio:", precioBebida);
      console.log("Cuenta Total:", cuentaTotal);
      seleccionarEntrada();
    }


    function seleccionarEntrada() {
      const entradaSeleccionada = prompt("Elige tu entrada:\n1. Papas con cheddar y panceta $1400\n2. Rabas $1700 \n3. Papas clásicas $1400\n4. Ninguno");
      const precioEntrada = barElegido.precios["entradas"][entradaSeleccionada];
      cuentaTotal += precioEntrada;
      console.log("Entrada seleccionada:", entradaSeleccionada);
      console.log("Precio:", precioEntrada);
      console.log("Cuenta Total:", cuentaTotal);
      seleccionarPlatoPrincipal();
    }


    function seleccionarPlatoPrincipal() {
      const platoPrincipalSeleccionado = prompt("Elige tu plato principal:\n1. Hamburguesa $2200 (Elegirás la variedad en el bar)\n2. Lomito $2400 (Elegirás la variedad en el bar)\n3. Pizzas $2000 (Elegirás la variedad en el bar)\n4. Plato gourmet $2700 (Elegirás la variedad en el bar)\n5 Ninguno");
      const precioPlatoPrincipal = barElegido.precios["platoPrincipal"][platoPrincipalSeleccionado];
      cuentaTotal += precioPlatoPrincipal;
      console.log("Plato Principal seleccionado:", platoPrincipalSeleccionado);
      console.log("Precio:", precioPlatoPrincipal);
      console.log("Cuenta Total:", cuentaTotal);
      seleccionarPostre();
    }

    function seleccionarPostre() {
      const postreSeleccionado = prompt("Elige tu postre:\n1. Chocotorta $1200 \n2. Cheesecake $1300 \n3. Flan $1400 \n4. Helado $1000 \n5. Ninguno");
      const precioPostre = barElegido.precios["postres"][postreSeleccionado];
      cuentaTotal += precioPostre;
      console.log("Postre seleccionado:", postreSeleccionado);
      console.log("Precio:", precioPostre);
      console.log("Cuenta Total:", cuentaTotal);

      //BAR NUMERO 3

    }
  } else {
    barElegido = bar3;
    seleccionarBebida();
  }

  function seleccionarBebida() {
    const bebidaSeleccionada = prompt("Elige qué vas a tomar:\n1. Pinta $700 (Elegirás la variedad en el bar)\n2. Gaseosa/agua saborizada $400 \n3. Trago $900 (Elegirás el trago en el bar)");
    const precioBebida = barElegido.precios["bebidas"][bebidaSeleccionada];
    cuentaTotal += precioBebida;
    console.log("Bebida seleccionada:", bebidaSeleccionada);
    console.log("Precio:", precioBebida);
    console.log("Cuenta Total:", cuentaTotal);
    seleccionarEntrada();
  }


  function seleccionarEntrada() {
    const entradaSeleccionada = prompt("Elige tu entrada:\n1. Papas con cheddar y panceta $1100\n2. Rabas $1400 \n3. Papas clásicas $1100\n4. Ninguno");
    const precioEntrada = barElegido.precios["entradas"][entradaSeleccionada];
    cuentaTotal += precioEntrada;
    console.log("Entrada seleccionada:", entradaSeleccionada);
    console.log("Precio:", precioEntrada);
    console.log("Cuenta Total:", cuentaTotal);
    seleccionarPlatoPrincipal();
  }


  function seleccionarPlatoPrincipal() {
    const platoPrincipalSeleccionado = prompt("Elige tu plato principal:\n1. Hamburguesa $1900 (Elegirás la variedad en el bar)\n2. Lomito $2100 (Elegirás la variedad en el bar)\n3. Pizzas $1700 (Elegirás la variedad en el bar)\n4. Plato gourmet $2400 (Elegirás la variedad en el bar)\n5 Ninguno");
    const precioPlatoPrincipal = barElegido.precios["platoPrincipal"][platoPrincipalSeleccionado];
    cuentaTotal += precioPlatoPrincipal;
    console.log("Plato Principal seleccionado:", platoPrincipalSeleccionado);
    console.log("Precio:", precioPlatoPrincipal);
    console.log("Cuenta Total:", cuentaTotal);
    seleccionarPostre();
  }

  function seleccionarPostre() {
    const postreSeleccionado = prompt("Elige tu postre:\n1. Chocotorta $1000 \n2. Cheesecake $1200 \n3. Flan $1300 \n4. Helado $900 \n5. Ninguno");
    const precioPostre = barElegido.precios["postres"][postreSeleccionado];
    cuentaTotal += precioPostre;
    console.log("Postre seleccionado:", postreSeleccionado);
    console.log("Precio:", precioPostre);
    console.log("Cuenta Total:", cuentaTotal);
  }



  datosReserva = (prompt("Ingresa tu nombre y apellido"))
  cantidadComensales = parseInt(prompt("ingresa la cantidad de comensales (1,2,3,4,5,6,etc)"))
  horarioReserva = (parseInt(prompt("ingrese la hora de reserva en formato 00:00")))

  console.log("Su reserva quedo conformada a nombre de " + datosReserva + " para " + (cantidadComensales) + " comensales " + "en el horario de las " + (horarioReserva) + "hs" + " por un total de " + "$" + cuentaTotal)

  // --------------------------------------------------------------------------------------------------------------------------------------------------------------------
}