import './App.css';
import Header from './components/header/header';
import UserList from './components/userList/userList';

function App() {
  
  return (
    <div className="App">
      <div className="container">
        <Header />
        <UserList />
      </div>
    </div>
  );
}

export default App;
