//EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO
//1,
/* a. undefined (indefinida)
b. null (nula)
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9
 */
//2.
//Ficará impresso:  SUBI NUM ÔNIBUS EM MIRROCOS 27

//EXERCÍCIOS DE ESCRITA DE CÓDIGO
//1.
const nomeUsuario = prompt("Qual seu nome?")
const email = prompt("Qual seu email?")
console.log(`O e-mail ${ email } foi cadastrado com sucesso. Seja bem-vindo(a), ${ nomeUsuario }`) 

//2.
const comidaFavorita = ["churrasco", "strogonoff", "feijoada", "farofa", "lasanha"]
console.log(comidaFavorita)
console.log(`Essas são as minhas comidas preferidas: `, comidaFavorita)

const comidaPreferidaUsuario = prompt("Qual sua comida preferida?")
comidaFavorita.splice(2,0)
let i = 0
comidaFavorita[i+1] = comidaPreferidaUsuario
console.log(comidaFavorita)

//3.
const listaDetarefas = []
const tarefaUsuario1 = prompt("Irei perguntar 3 tarefas que precisa realizar hoje, diga a primeira?")
const tarefaUsuario2 = prompt("Diga a segunda tarefa!")
const tarefaUsuario3 = prompt("Diga a terceira e última tarefa!")
listaDetarefas.push(tarefaUsuario1, tarefaUsuario2, tarefaUsuario3)
    console.log(listaDetarefas)
const tarefaRealizada = Number(prompt("Qual tarefa você já realizou, 0, 1 ou 2?"))
listaDetarefas.splice(tarefaRealizada,1)
console.log(listaDetarefas)

