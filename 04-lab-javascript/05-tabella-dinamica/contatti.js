const datiTabella = [{
    "Autore": "Gino Pino",
    "Email": "ginopino@blogtw.com",
    "Argomenti": "HTML, CSS, JS"
},
{
    "Autore": "Cippa Lippa",
    "Email": "cippalippa@blogtw.com",
    "Argomenti": "PHP"
}]

function stringaToID(stringa){
    return stringa.toLowerCase().replace(/[^a-zA-Z]/g, "");
}

class Table {

    constructor() {
        this.dic = {};
    }

    createDOM(tag){
        var main = document.querySelector(tag);
        
        var tag = `
        <section>
            <h2>Autori del Blog</h2>
            <table>
                <tr>
                    <th id="autore">Autore</th><th id="email">Email</th><th id="argomenti">Argomenti</th>
                </tr>
                <tr>
                    <th id="ginopino">${this.dic["Autore"]}</th><td headers="email ginopino">${this.dic["Email"]}</td><td headers="argomenti ginopino">${this.dic["Argomenti"]}</td>
                </tr>
            </table>
        </section>
        `;
    }
}


