/*var n1 = 10
var n2 = "Teste"

if(n1 < 10){
    console.log("N1 menor que 10")
}else{
    console.log("N1 igual ou maior que 10")
}

for(var n3 = 0; n3 <=10; n3++){
    console.log("N3: " + n3)
}

var n4 = 0

while(n4 <= 10){
    console.log("N4: " + n4)
    n4++
}
*/

const express = require("express") //Importação
const app = express()// ultilização dentro da constante app

app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081")
})//8081 app

app.get("/", function(req, res){
    res.end("Node js")
})

app.get("/cadastrar/:produto", function(req, res){
    res.send("Produto: " + req.params.produto)
})

app.get("/pesquisar/:produto/:modelo", function(req, res){
    res.send("produto: " +  req.params.produto + "<br>modelo: " +  req.params.modelo)
})

app.get("/contato/:sac/:produto", function(req, res){
    res.send("sac: " + req.params.sac + "<br>produto: " + req.params.produto )
})
