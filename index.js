let classe = ""
class ficha {
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }
    ataque(){
        switch(this.type){
            case "guerreiro":
                classe = "espada"
                break

            case "mago":
                classe = "magia"
                break

            case "monge":
                classe = "artes marciais"
                break

            case "ninja":
                classe = "shuriken"
                break

            case "ladrao":
                classe = "faca"
                break

            case "arqueiro":
                classe = "acor e flecha"
                break

            
        }
    }
}  
let player1 = new ficha("Maycon", 18, "guerreiro")
let player2 = new ficha("Eduarda", 41, "mago")
let player3 = new ficha("daniel", 22, "arqueiro")

player1.ataque()
console.log(`O ${player1.type} ${player1.name} atacou usando ${classe}`)

player2.ataque()
console.log(`O ${player2.type} ${player2.name} atacou usando ${classe}`)

player3.ataque()
console.log(`O ${player3.type} ${player3.name} atacou usando ${classe}`)