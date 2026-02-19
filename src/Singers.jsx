export default function Singer({singer})
{
  console.log({singer})
  return (
    <div>
      <h2>Name : {singer.name}</h2>
      <li>ID: {singer.id}  </li>
      <li>Age : {singer.age}</li>

    </div>
  )
}