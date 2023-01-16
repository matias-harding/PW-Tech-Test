import { Link } from 'react-router-dom';

const Welcome = () => {

return <div className="App">
        <header className="App-header">
          Test Tecnico PeopleWork
        </header>
        <main className='welcome-container'>
          <Link to="/productos">Productos</Link>
        </main>
        <footer>
          <p>Dev: Matias Harding</p>
        </footer>
      </div>
}

export default Welcome
