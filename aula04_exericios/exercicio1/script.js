class Computador{

    // static count = 0;
    constructor (processador, memoria, armazenamento, fonte){
        this.processador = processador;
        this.memoria = memoria;
        this.armazenamento = armazenamento;
        this.fonte = fonte;
        // Computador.count++;
    }

    display() {
        return this.processador + ", " + this.memoria + ", " + this.armazenamento + ", "
         + this.fonte;
    }

    ligar(){
        
    }

    desligar(){

    }
}

let computador01 = new Computador("intel Pentium D", "2 gigas", "1 tera", "450 w");
let computador02 = new Computador("AMD Ryzen 7 5800x", "16 gigas", "1 tera", "800 w");
let computador03 = new Computador("intel Core i9", "42 gigas", "1 tera", "1000 w");
computador01.display();

let computador01Map = new Map(Object.entries(computador01));
let computador02Map = new Map(Object.entries(computador02));
let computador03Map = new Map(Object.entries(computador03));



function createTable(map) {
    let table = document.createElement('table');
    
    for (let [key, value] of map) {

        let row = document.createElement('tr');
        let keyCell = document.createElement('td');
        let valueCell = document.createElement('td');
        keyCell.textContent = key + ':';
        valueCell.textContent = value;
        row.appendChild(keyCell);
        row.appendChild(valueCell);
        table.appendChild(row);

    }
    return table;
}

document.body.appendChild(createTable(computador01Map));
document.body.appendChild(document.createElement('br'));
document.body.appendChild(createTable(computador02Map));
document.body.appendChild(document.createElement('br'));
document.body.appendChild(createTable(computador03Map));
