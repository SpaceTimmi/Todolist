import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

import Tasks from './components/Tasks';
import Form from './components/Form';


import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Body Tasks={Tasks} Form={Form} />
      <Footer />
    </div>
  );
}

export default App;
