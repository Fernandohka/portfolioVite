import './App.css'

function App() {

  return (
    <>
      <header>
        <h1>Portfólio</h1>
        <div className='iconsNav'>
          <a href="#Apresentacao">Apresentação</a>
          <a href="#Historico">Histórico</a>
          <a href="#Projetos">Projetos</a>
        </div>
      </header>
      <br />

      <main>
        <section id='Apresentacao' className='sessao'>
          <h2>Apresentação</h2>
          <div className='card'>
            <img src="./eu.png" alt="Foto minha" />
            <p>Meu nome é Fernando Henrique Krizanoski de Andrade, tenho 19 anos. Gosto de programação, minha área favorita é games. Atualmente estou trabalhando como aprendiz em soluções digitais na Bosch.</p>
          </div>
        </section>

        <section id='Historico' className='sessao'>
          <h2>Histórico</h2>
          <div className='card'>
            <p>Programa de Aprendizagem Bosch</p>
            <img src="./bosch_logo_2.png" alt="Foto Bosch" />
          </div>
        </section>

        <section id='Projetos' className='sessao'>
          <h2>Projetos</h2>
          <div>
            <div className='card'>
              <img src="./Ternaria.png" alt="" />
              <div>
                <h2>Ternaria</h2>
                <p>O Ternaria é um projeto de conclusão da matéria de Lógica de Programação que tive no curso de desenvolvimento de sistemas do Senai. Este projeto foi desenvolvido em conjunto com 2 amigos meus, e a sua primeira versão foi concluída com um prazo de 7 dias.</p>
                <p>O projeto é uma releitura do jogo Terraria. Nele nós fizemos apenas a jogabilidade básica do jogo, incluindo construção, combate e movimentação do jogo.</p>
                <a href="https://github.com/OsvaldoComCH/Ternaria" target='_blank'>https://github.com/OsvaldoComCH/Ternaria</a>
              </div>
            </div>
            <br />
            <div className='card'>
              <img src="./IMG-20240907-WA0009.jpg" alt="" />
              <div>
                <h2>My Movie List</h2>
                <p>Site para anotar quais filmes e séries você assistiu e dar uma nota para eles.</p>
                <a href="https://github.com/AmiltonMn/MyMovieList" target='_blank'>https://github.com/AmiltonMn/MyMovieList</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <h3>Contato: </h3>
        <a href="https://wa.me/41996956665/?text=Tó%20Dinheiro" target='_blank'><img className='zap' src="./whatsapp.png" alt="" /></a>

      </footer>
    </>
  )
}

export default App
