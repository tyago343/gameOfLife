var gameOfLife = {

  width: 12,
  height: 12, // dimensiones alto y ancho del tablero
  stepInterval: null, // debería ser usada para guardar referencia a una intervalo que esta siendo jugado

  createAndShowBoard: function () {

    // crea el elemento <table>
    var goltable = document.createElement("tbody");

    // Construye la Tabla HTML
    var tablehtml = '';
    for (var h=0; h<this.height; h++) {
      tablehtml += "<tr id='row+" + h + "'>";
      for (var w=0; w<this.width; w++) {
        tablehtml += "<td data-status='dead' id='" + w + "-" + h + "'></td>";
      }
      tablehtml += "</tr>";
    }
    goltable.innerHTML = tablehtml;

    // agrega la tabla a #board
    var board = document.getElementById('board');
    board.appendChild(goltable);
    // una vez que los elementos html son añadidos a la pagina le añadimos los eventos
    this.setupBoardEvents();
  },

  forEachCell: function (iteratorFunc) {
    /*
      Escribe forEachCell aquí. Vas a necesitar visitar
      cada celda en el tablero, llama la "iteratorFunc",
      y pasa a la funcion, la celda y la coordenadas x & y
      de la celda. Por ejemplo: iteratorFunc(cell, x, y)
    */
  },

  setupBoardEvents: function() {
    // cada celda del tablero tiene un id CSS en el formato "x-y"
    // donde x es la coordinada-x e y es la coordenada-y
    // usa este hecho para loopear a traves de todos los ids y asignales
    // "click" events que permite a un usuario clickear en
    // celdas para configurar el estado inicial del juego
    // antes de clickear  "Step" o "Auto-Play"

    // clickear en una celda deberia alternar la celda entre "alive" y "dead"
    // por ejemplo: una celda "alive"  este pintado de azul, y una celda "dead" puede mantenerse blanco

    // EJEMPLO PARA UNA CELDA
    // Aquí esta como tendríamos un click event en sol una celda 0-0
    // Necesitas agregar el click event en cada celda en el tablero

    var onCellClick = function (e) {

      // Pregunta para hacerte a ti mismo: Que es this en este contexto?

      // como setear el estilo de la celda cuando es clickeada
      if (this.dataset.status == 'dead') {
        this.className = 'alive';
        this.dataset.status = 'alive';
      } else {
        this.className = 'dead';
        this.dataset.status = 'dead';
      }

    };

    var cell00 = document.getElementById('0-0');
    cell00.addEventListener('click', onCellClick);
  },

  step: function () {
    // Acá es donde querés loopear a través de las celdas
    // en el tablero y determina, basado en tus vecinos,
    // si la celda debe estar viva o muerta en la siguiente
    // evolución del juego.

    // Necesitas:
    // 1. Cuenta vecinos vivos para todas las celdas
    // 2. Sete el siguiente estado de todas las celdas basado en las vecinas vivas
  },

  enableAutoPlay: function () {
    // Comienza Auto-Play corriendo la función step
    // automaticamente de forma reptida cada intervalo de tiempo fijo
  }

};

gameOfLife.createAndShowBoard();
