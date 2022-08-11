let alunos = [];

const cadastrar = () => {

    // Obter dados
    let nome = document.getElementById('nome').value
    let nota1 = document.getElementById('nota1').value
    let nota2 = document.getElementById('nota2').value
    let alerta = document.getElementById("alert")

    // Validar 
    const situacao = validar(nome, nota1, nota2)

    alerta.innerHTML = situacao.mensagem

    // a cor do alerta 
    if(situacao.status == "ok"){
      alerta.classList.add('alert-success');

    // Criar obj 
    let obj = {
        "nome":nome,
        "nota1":nota1,
        "nota2":nota2,
        "media":media(nota1, nota2),
        "situacao":media(nota1, nota2) >= 7 ? "Aprovado(a)" : "Reprovado(a)"
    }

    // Cadastrar no vetor
    alunos.push(obj);

    reset();

    listar();

    }else{
        alerta.classList.add('alert-danger');
    }
}

    const validar = (nome, nota1, nota2) => {

        let situacao = {"mensagem":"", "status":"ok"}

        // Validar campos
       if(nome == ""){
            situacao.mensagem = "O campo nome deve ser preenchido";
            situacao.status = "falha"
      }else if(nota1 == ""){
            situacao.mensagem = "O campo primeira nota deve ser preenchido";
            situacao.status = "falha"
      }else if(nota2 == ""){
            situacao.mensagem = "O campo segunda nota deve ser preenchido";
            situacao.status = "falha"
      }else{
            situacao.mensagem = "Cadastro feito com sucesso!";
            situacao.status = "ok"
      }

      return situacao;
    }

        // Realizar a media
        const media = (nota1, nota2) => {

        let calculo = (parseFloat(nota1) + parseFloat(nota2)) / 2;
        return calculo;
    
      }
    

    const listar = () => {

        let tabela = document.getElementById('tabela');

        // Limpar tabela
        tabela.innerHTML = "";

        for(let i = 0; i < alunos.length; i++){

            // criar linha
            let linha = tabela.insertRow(-1);

            // Criar colunas 
            let colunaCodigo = linha.insertCell(0);
            let colunaNome = linha.insertCell(1);
            let colunaNota1 = linha.insertCell(2);
            let colunaNota2 = linha.insertCell(3);
            let colunaMedia = linha.insertCell(4);
            let colunaSituacao = linha.insertCell(5);

            // Valores das colunas
            colunaCodigo.innerHTML = i+1;
            colunaNome.innerHTML = alunos[i].nome;
            colunaNota1.innerHTML = alunos[i].nota1;
            colunaNota2.innerHTML = alunos[i].nota2;
            colunaMedia.innerHTML = alunos[i].media;
            colunaSituacao.innerHTML = alunos[i].situacao;
        }
    }


    // limpar campos e deixar o cursor no campo nome
    const reset = () => {

        // limpar campos
        document.getElementById('nome').value = "",
        document.getElementById('nota1').value = "",
        document.getElementById('nota2').value = "",

        // cursor no campo nome 
        document.getElementById('nome').focus();
    }

