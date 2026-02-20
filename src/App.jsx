
import './App.css'
import ToDo from './todo'
import Actor from './Actor'
import Singer from './Singers';
import Doctor from './Doctor';

function App() {

  const actors = ["JKR", "Sallu", "Alu", "SRK"];
  const singers = [
    { id:'1', name :'Jabir', age:'10' },
    { id:'2', name :'Aabir', age:'20' },
    { id:'3', name :'Kabir', age:'30' }
  ];
  const doctors=['Dr faiza','Dr mahi','Dr sallu'];

  return (
    <>

    {

    }
     

      <h1>Vite + React</h1>
     
 
     {
          doctors.map(doctor => <Doctor name ={doctor}></Doctor>)

     }

{/* 
      {
        actors.map(actor => <Actor actor={actor}></Actor>)
      }
      {
        singers.map(singer=> <Singer singer={singer}></Singer>)
      }
 */}




      {/* <ToDo task="Learn React" info={true} time='100'></ToDo>
      <ToDo task="Revise React" info={false} ></ToDo>
      <ToDo task="Learn JS" info={true} time='50'></ToDo> */}
      {/* <Pet ></Pet>
      <Det></Det>
      <Person name= "Jabir Siddique" age='24' ></Person>
      <Player name='Tamim Dalal' run='10000'></Player>
      <Player name='sakib al hasan' run='20000'></Player> */}


    </>
  )
}
function Pet() {
  return (
    <div className='catcss'>

      <h2>CAT</h2>
      <p>White color cat</p>
    </div>


  )
}
function Det() {
  return (
    <div style={
      {
        padding: 10,
        margin: 10,
        borderRadius: 20,
        backgroundColor: "red",


      }
    }>

      <h2>DOG</h2>
      <p>Black color dog</p>
    </div>


  )
}
function Person(prop) {
  console.log(prop)
  return (

    <div className='catcss'>
      <h2>Person</h2>
      <p>Name :{prop.name} </p>
      <p>Age:{prop.age}  </p>
    </div>
  )
}
function Player({ name, run }) {
  return (
    <div className='catcss'>
      <h2>Player Name : {name}</h2>
      <p>Run :{run} </p>
    </div>
  )
}


export default App
