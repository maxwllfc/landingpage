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

/* projetos */

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
        descricao: `
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

/* serviços */

var dadosServicos = {

    servico1: {
        titulo: "Automação em Python",
        descricao: `
            Ofereço serviços de automação em pyhton personalisado para o seu problema, afim de facilitar sua vida!<br><br>
            Segue tabela de preços:<br><br>
        `,
        detalhes: `
    <section class="tabela-servicos">
        <table>
            <thead>
            <tr>
                <th>Serviço</th>
                <th>Descrição</th>
                <th>Preço (a partir de)</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Automação de Tarefas</td>
                    <td>Scripts para agilizar atividades repetitivas (relatórios, processamento de arquivos).</td>
                    <td>R$ 300</td>
                </tr>
                <tr>
                    <td>Web Scraping</td>
                    <td>Coleta de dados em sites de forma automatizada, exportando para Excel/CSV/DB.</td>
                    <td>R$ 500</td>
                </tr>
                <tr>
                    <td>Integração de APIs</td>
                    <td>Conexão entre sistemas via APIs (ex: Google Sheets, CRMs, etc).</td>
                    <td>R$ 700</td>
                </tr>
                <tr>
                    <td>Bots de Chat</td>
                    <td>Automação de mensagens em Telegram, Discord, WhatsApp, etc.</td>
                    <td>R$ 900</td>
                </tr>
                <tr>
                    <td>Soluções Personalizadas</td>
                    <td>Projetos sob demanda adaptados ao seu fluxo de trabalho.</td>
                    <td>R$ 1.200</td>
                </tr>
            </tbody>
        </table>
    </section>
    <br><br><p>Interessado? <strong>Me contate <a href="../contato/contato.html">clicando aqui!</a></strong></p>
        `
    },

    servico2: {
        titulo: "Desenvolvimento de Sites",
        descricao: `
            Desenvolvo o seu site a partir de modelos ou do zero, de acordo com o que você deseja e publico em um domínio.<br><br>
            Segue tabela de preços:<br><br>
        `,
        detalhes: `
        <section class="tabela-servicos">
  <table>
    <thead>
      <tr>
        <th>Serviço</th>
        <th>Descrição</th>
        <th>Preço (a partir de)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Landing Page Simples</td>
        <td>Página única, responsiva, com formulário de contato.</td>
        <td>R$ 600</td>
      </tr>
      <tr>
        <td>Site Institucional</td>
        <td>Até 4 páginas (Home, Sobre, Serviços, Contato), responsivo.</td>
        <td>R$ 1.200</td>
      </tr>
      <tr>
        <td>Site Personalizado</td>
        <td>Layout exclusivo, efeitos JS e interatividade.</td>
        <td>R$ 1.800</td>
      </tr>
      <tr>
        <td>Otimização e Performance</td>
        <td>Ajustes de velocidade, SEO básico e responsividade.</td>
        <td>R$ 500</td>
      </tr>
      <tr>
        <td>Manutenção e Suporte</td>
        <td>Alterações de conteúdo, pequenas melhorias mensais.</td>
        <td>R$ 200/mês</td>
      </tr>
    </tbody>
  </table>
</section>
<br><br><p>Interessado? <strong>Me contate <a href="../contato/contato.html">clicando aqui!</a></strong></p>
        `
    }

};

var conteudoServicoDiv = document.querySelector('.conteudo-servico');

var linksServicos = document.querySelectorAll('.servico-item');

linksServicos.forEach(link => {
    link.addEventListener('click', (evento) => {
        evento.preventDefault();

        var idServico = evento.target.dataset.servico;

        var servico = dadosServicos[idServico];

        conteudoServicoDiv.innerHTML = `
            <h1>${servico.titulo}</h1>
            <p>${servico.descricao}</p>
            <p>${servico.detalhes}</p>
        `;
    });
});

/* contato */

document.addEventListener("DOMContentLoaded", () => {
  const btnWhatsapp = document.getElementById("btn-whatsapp");
  const btnEmail = document.getElementById("btn-email");
  const mensagemInput = document.getElementById("mensagem");

  btnWhatsapp.addEventListener("click", () => {
    const mensagem = encodeURIComponent(mensagemInput.value || "Olá Maxwell, gostaria de mais informações!");
    const telefone = "5527974002669";
    window.open(`https://wa.me/${telefone}?text=${mensagem}`, "_blank");
  });

  btnEmail.addEventListener("click", () => {
    const mensagem = encodeURIComponent(mensagemInput.value || "Olá Maxwell, gostaria de mais informações!");
    const email = "mw.dev.contact@proton.me";
    const assunto = encodeURIComponent("Contato via site");
    window.open(`mailto:${email}?subject=${assunto}&body=${mensagem}`, "_blank");
  });
});