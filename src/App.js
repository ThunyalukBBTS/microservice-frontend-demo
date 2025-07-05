
import './App.css';
import { useEffect, useState } from 'react';
import { getAllUsers } from './api';


function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllUsers()
      .then(setUsers)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://skillicons.dev/icons?i=java,kotlin,nodejs,figma&theme=light" className='tech-stack-icon' alt="logo" />

        <h3 className="app-stack">Nestjs + PostgreSQL + Reactjs</h3>
        <h1 className='header'>Welcome!!! This page show users</h1>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {!loading && !error && (
          <table>
            <thead>
              <tr>
                <th className='id-th'>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </header>
    </div>
  );
}

export default App;
