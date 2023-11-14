class Pessoa{
    _registro = 0
    constructor (nome, idade,materia){
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
    }
    setarRegistro (novoRegistro){
        if (typeof novoRegistro == "number") {
            this.registro = novoRegistro
        } 
    }

 //get é usado para enviar dados de um formulário no caso para a class 
 //pode ser tambem implementado para obter dados de alguma forma específica

    get registro(){
        return this._registro
    }

 //Set é uma estrutura de dados que representa uma coleção de valores únicos
 //o que significa que cada valor pode aparecer apenas uma vez
 //o set tambem pode armazenar valores exclusivos e fornecer métodos
 // para manipular esses valores de forma eficiente

    set registro (x){
        if (typeof x == "number"){
            this._registro = x
        }
    }
}

 //Aqui eu estou usando a herança em JavaScript, a herança é um conceito que permite a um objeto 
 //herdar propriedades e métodos de outro objeto. Isso é feito por meio de uma maneira que
 //consegue estabelecer relações entre objetos.
class Aluno extends Pessoa{
    constructor (nome, idade, materia, id){
        super (nome, idade, materia)
        this.id = id
    }
}

//let uma palavra-chave em JavaScript utilizada para demonstrar variáveis com ela é possivel introduzir 
//características específicas lembrando que se for usar algo escrito temos que usar as ASPAS (" ")
//que é uma forma de declarar variáveis ou informações em JavaScript.

let p1 = new Aluno ("Andrade", 13, "profissionalizante", 1843623882)
let p2 = new Aluno ("Luiz", 17, "informatica", 8367382921)
let p3 = new Aluno ("Roberto", 15, "farmacologia", 9372914861)
let p4 = new Aluno ("Joaõ", 21, "radiologia", 2018305072)
let p5 = new Aluno ("Marcelo", 19, "enfermagem", 6271917393)

p1.registro = 43048823
p2.registro = 34916304
p3.registro = 71553816
p4.registro = 41223731
p5.registro = 82242943

console.log(`nome ${p1.nome} idade ${p1.idade} materia escolhida ${p1.materia} id da matricula ${p1.id} numero de registro ${p1.registro}`)
console.log(`nome ${p2.nome} idade ${p2.idade} materia escolhida ${p2.materia} id da matricula ${p2.id} numero de registro ${p2.registro}`)
console.log(`nome ${p3.nome} idade ${p3.idade} materia escolhida ${p3.materia} id da matricula ${p3.id} numero de registro ${p3.registro}`)
console.log(`nome ${p4.nome} idade ${p4.idade} materia escolhida ${p4.materia} id da matricula ${p4.id} numero de registro ${p4.registro}`)
console.log(`nome ${p5.nome} idade ${p5.idade} materia escolhida ${p5.materia} id da matricula ${p5.id} numero de registro ${p5.registro}`)