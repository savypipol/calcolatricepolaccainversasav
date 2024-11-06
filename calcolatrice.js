class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    size(){
        return this.items.length;
    }
    clear() {
        this.items = [];
    }
}

const stackkkk = new Stack();
let numerocorrente = ""; // variabile per accumulare il numero corrente

// Inizializza la calcolatrice (richiamo in html)
function calc_inizia() {
    let display = document.getElementById("display");
    display.innerText = "0"; // Display 0 di default
}

// Aggiorna il display con il valore passato come argomento (valore)
function updateDisplay(valore) {
    document.getElementById("display").innerText = valore;
}

// Funzione per aggiungere una cifra al numero corrente (es- 675)
function insertNum(numero) {
    numerocorrente += numero.toString(); // concatena il numero alla stringa corrente
    updateDisplay(numerocorrente); // mostra il numero corrente
}

// Funzione per confermare il numero e aggiungerlo allo stack
function confirmNumber() {
    if (numerocorrente !== ""){ //diverso da ""//
        stackkkk.push(parseFloat(numerocorrente)); // Parsefloat Converte numerocorrente da stringa in numero e lo inserisce nello stack
        numerocorrente = ""; // Reset della variabile per il prossimo numero
        updateDisplay("0"); // Resetta il display a 0
    }
}

// operazione principale
function insertOperator(operatore) {
    confirmNumber(); // Conferma il numero corrente prima di calcolare

    if (stackkkk.size() < 2) { // Controlla che ci siano almeno 2 numeri nello stack altrimenti non è una calcolatrice polacca inversa
        updateDisplay("ERRORE");
        stackkkk.clear();
        return;
    }

    let b = stackkkk.pop();
    let a = stackkkk.pop();
    let result;

    switch (operatore) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
        default:
            updateDisplay("ERRORE");
            return;
    }

    stackkkk.push(result); //aggiunge result nello stack
    updateDisplay(result); //aggriona il display
}

// Gestisce il tasto AC per svuotare tutto
function calc_pulisci() {
    stackkkk.clear(); //funzione della classe per pulire
    numerocorrente = "";
    updateDisplay("0");
}

// aggiunge gli eventi per i numeri
document.getElementById("button_0").addEventListener("click", () => { insertNum(0); });
document.getElementById("button_1").addEventListener("click", () => { insertNum(1); });
document.getElementById("button_2").addEventListener("click", () => { insertNum(2); });
document.getElementById("button_3").addEventListener("click", () => { insertNum(3); });
document.getElementById("button_4").addEventListener("click", () => { insertNum(4); });
document.getElementById("button_5").addEventListener("click", () => { insertNum(5); });
document.getElementById("button_6").addEventListener("click", () => { insertNum(6); });
document.getElementById("button_7").addEventListener("click", () => { insertNum(7); });
document.getElementById("button_8").addEventListener("click", () => { insertNum(8); });
document.getElementById("button_9").addEventListener("click", () => { insertNum(9); });

// aggiunge gli eventi per gli operatori
document.getElementById("button_+").addEventListener("click", () => { insertOperator('+'); });
document.getElementById("button_-").addEventListener("click", () => { insertOperator('-'); });
document.getElementById("button_*").addEventListener("click", () => { insertOperator('*'); });
document.getElementById("button_/").addEventListener("click", () => { insertOperator('/'); });

// pulsante AC per svuotare tutto
document.getElementById("button_AC").addEventListener("click", () => { calc_pulisci(); });

// Aggiunge l'evento per il tasto di conferma
document.getElementById("button_conf").addEventListener("click", () => { confirmNumber(); });



