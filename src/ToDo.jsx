// export default function({task,info})
// {
  
    
//     if(info)
//     {
//       return(<li>Done :{task}</li>)
//     }else
//     {
//       return(<li>ToDo : {task}</li>)
//     }
  
     

// }
export default function({task,info,time=0})
{
  
    
    // if(info)
    // {
    //   return(<li>Done :{task}</li>)
    // }else
    // {
    //   return(<li>ToDo : {task}</li>)
    // }
    
     const ans =info ? (<li>Done :{task} Info : {info } Time:{time}</li>) : (<li>TO DO :{task} Info : {info } Time:{time}</li>);
    return(ans)
}