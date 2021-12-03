class Computer {
    constructor(processore, disco, ram) {
        this.processore = processore;
        this.disco = disco;
        this.ram = ram;
    }
    InfoComputerConsole() {
        console.log(this.processore + " " + this.disco + " " + this.ram);
    }
    InfoComputerDOM(id) {
        let tag = document.getElementById(id);

        tag.innerHTML = `
    <p> Processore: ${this.processore}<p>
    <p> Disco: ${this.disco}<p>
    <p> Ram: ${this.ram}<p>
    `;

    }
}



var comp = new Computer("Windows", "30gb", "20gb");

comp.InfoComputerConsole();

comp.InfoComputerDOM("miopc");