import './App.css'

function App() {

  return (
    <>
      <header>
        <h1>Portfólio</h1>
        <div>
          <a href="#Apresentacao">Apresentação</a>
          <a href="#Historico">Histórico</a>
          <a href="#Projetos">Projetos</a>
        </div>
      </header>
      <br />

      <main>
        <section className='sessao'>
          <h2>Apresentação</h2>
          <div>
            <img src="../src/assets/eu.png" alt="Foto minha" />
            <p>Meu nome é Fernando Henrique Krizanoski de Andrade, tenho 19 anos Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ea accusantium distinctio, eligendi dolorum necessitatibus. Alias quisquam vitae, incidunt rerum quos, molestias id expedita impedit fuga odit ad fugit deleniti.</p>
          </div>
        </section>

        <section className='sessao'>
          <h2>Histórico</h2>
          <div>
            <p>Programa de Aprendizagem Bosch</p>
            <img src="../src/assets/bosch_logo_2.png" alt="Foto minha" />
          </div>
        </section>

        <section className='sessao'>
          <h2>Projetos</h2>
        </section>
      </main>
    </>
  )
}

export default App
