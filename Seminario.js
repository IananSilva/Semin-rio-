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

    get registro(){
        return this._registro
    }
    set registro (x){
        if (typeof x == "number"){
            this._registro = x
        }
    }
}


class Aluno extends Pessoa{
    constructor (nome, idade, materia, id){
        super (nome, idade, materia)
        this.id = id
    }
}

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