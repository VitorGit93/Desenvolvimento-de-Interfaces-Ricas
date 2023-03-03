/* ATRIBUIÇÃO VIA DESESTRUTURAÇÃO */

let pessoa = {
    nome: "Vitor",
    eail: "vitor.santos9@estudante.ifms.eud.br"
}

/*
let nome = pessoa.nome;
let email = pessoa.email;
*/

let {nome, email} = pessoa;

console.log(nome);

let nomes = ["Vitor", "Santos"];

let [pessoa1, pessoa2] = nomes

function useState() {
    let state = "";
    function setState() {}
    return [state, setName];
}

const [name, setName] = useState();