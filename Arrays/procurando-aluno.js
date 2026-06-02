const alunos = ["João","Juliana", "Ana", "Caio"];

const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(alunos) {
    if(listaDeAlunosEMedias[0]. includes(alunos)){
        const [alunos, medias]  = listaDeAlunosEMedias

        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice]
        console.log('${aluno} tem a media $(mediaDoAluno).');
    }else{
        console.log ('Aluno não esta cadastrado!');

    }  
}

exibeNomeENota("rafael");