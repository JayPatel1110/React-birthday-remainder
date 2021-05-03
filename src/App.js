import {useState} from  'react'
import './App.css';
import data from './data'
import List from './List'

function App() {
      const [people,setPeople]=useState(data);

  return (
    <main>
      <section className='container'>
     <h2>{people.length} birthdays today</h2>
     <List people={people}/>
     <button onClick={()=>{setPeople([])}}>Clear</button>
     </section>
    </main>
  );
}

export default App;
