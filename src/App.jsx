
import './App.css'

function App() {
  

  return (
    <>
      
      <h1>Vite + React</h1>
      <Pet ></Pet>
      <Det></Det>
      <Person></Person>

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
function Person()
{
   return(
    
    <div className='catcss'>
     <h2>Person</h2>
     <p>Name : Jabir Siddique Talim</p>
     <p>Life: Down </p>
     </div>
   )
}


export default App
