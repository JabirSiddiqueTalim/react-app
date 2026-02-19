export default function({task,info})
{
  
    
    if(info)
    {
      return(<li>Done :{task}</li>)
    }else
    {
      return(<li>To Do :{task}</li>)
    }
  
     

}