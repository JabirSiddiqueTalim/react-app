
import './App.css'

function App() {
  

  return (
    <>
      
      <h1>Vite + React</h1>
      <Pet ></Pet>
      <Det></Det>
      <Person name= "Jabir Siddique" age='24' ></Person>

    </>
  )
}
function Pet()
{
  return (
    <div className='catcss'>

      <h2>CAT</h2>
      <p>White color cat</p>
    </div>
    
    
    )
}
function Det()
{
  return (
    <div style={
      {
         padding: 10,
         margin: 10,
         borderRadius: 20,
        backgroundColor:"red",
        

      }
    }>

      <h2>DOG</h2>
      <p>Black color dog</p>
    </div>
    
    
    )
}
function Person(prop)
{
  console.log(prop)
   return(
    
    <div className='catcss'>
     <h2>Person</h2>
     <p>Name :{prop.name } </p>
     <p>Age:{prop.age}  </p>
     </div>
   )
}


export default App
