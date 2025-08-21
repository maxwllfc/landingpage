function playImageSound() {
            const audio = document.getElementById('clickSound');
            if (audio) {
				audio.volume = 0.15;
                audio.play()
                    .catch(error => {
                        console.error('Erro ao tentar tocar o áudio:', error);
                    });
            }
        }

function playPhotoSound() {
            const audio = document.getElementById('clickSound2');
            if (audio) {
				audio.volume = 0.25;
                audio.play()
                    .catch(error => {
                        console.error('Erro ao tentar tocar o áudio:', error);
                    });
            }
        }

var dadosProjetos = {

    projeto1: {
        titulo: "Site para Fortes Engenharia",
        descricao: `
            Neste site, foi trabalhado uma solução para um problema real, onde foi feito uma integração de produtores de lixo e recicladores em um sistema. <br>
            Isso tudo foi feito para um trabalho de faculdade interdiciplinar (UX Design + Construção de Software Web + Banco de Dados I), em parceria com: Darlan de Assis, Lavinia Barbosa, Kaio Freitas, e Erick Seda.<br><br>
            <a href="https://www.figma.com/proto/2x16b2dSmJqKfQd6TuUNV0/Projeto-PC?node-id=0-1&t=QbiyZtCMcb0Iog5t-1" target="_blank">Link para o protótipo navegável</a><br>
            <br>
            <a href="https://www.figma.com/design/2x16b2dSmJqKfQd6TuUNV0/Projeto-PC?node-id=0-1&t=QbiyZtCMcb0Iog5t-1" target="_blank">Link para o projeto no Figma</a><br><br>
			<img src="../images/fortes_1.png" alt="Fortes Site" class="game"><img src="../images/fortes_2.png" alt="Fortes Site" class="game"><img src="../images/fortes_3.png" alt="Fortes Site" class="game"><img src="../images/fortes_4.png" alt="Fortes Site" class="game"><img src="../images/fortes_5.png" alt="Fortes Banco de Dados" class="game"><img src="../images/fortes_7.jpg" alt="Fortes WireFrame" class="game"><img src="../images/fortes_6.png" alt="Fortes Banco de dados" class="game"><br><br>
        `,
        detalhes: "Tecnologias: HTML, CSS, JavaScript, Figma, SQL, PostgreSQL"
    },

    projeto2: {
        titulo: "Jogo no Scratch: BadApple!",
        descricao:  `
            Neste projeto, foi trabalhado a lógica de programação básica, onde usei o Scratch para produzir um mini jogo. Também usei noções de game design, pois produzi a música e todas as artes usadas no trabalho.<br><br>
			<a href="https://scratch.mit.edu/projects/1154340439" target="_blank">Link para o jogo</a><br><br>
			<img src="../images/start_game_gif.gif" alt="Gif do Jogo" class="game"><img src="../images/game_gif.gif" alt="Gif do Jogo" class="game"><br><br>
        `,
        detalhes: "Funcionalidades: detecção de colisões, acontecimentos cronometrados, movimentação, arte digital, música."
    }

};

var conteudoProjetoDiv = document.querySelector('.conteudo-projeto');

var linksProjetos = document.querySelectorAll('.projeto-item');

linksProjetos.forEach(link => {
    link.addEventListener('click', (evento) => {
        evento.preventDefault();

        var idProjeto = evento.target.dataset.projeto;

        var projeto = dadosProjetos[idProjeto];

        conteudoProjetoDiv.innerHTML = `
            <h1>${projeto.titulo}</h1>
            <p>${projeto.descricao}</p>
            <p>${projeto.detalhes}</p>
        `;
    });
});