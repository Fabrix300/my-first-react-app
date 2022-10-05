/*export function Greeting() {

  function add(x, y) {
    return x + y;
  }

  const name = 'Fabrix300'
  return <h1>{name + " " + add(1,2)}</h1>
}*/

/*export function Greeting(props) {
  return <h1>{props.title}</h1>
}*/

export function Greeting({title, name='User'}) {
  return <h1>{title}, dice {name}</h1>
}

export function UserCard({name, amount, married, address, greet}){
  return (
    <div>
      <h3>{name}</h3>
      <p>{amount}</p>
      <p>{married ? 'married' : 'single'}</p>
      <ul>
        <li>City: {address.city}</li>
        <li>Street: {address.street}</li>
      </ul>
    </div>
  )
}

/*export function UserCard(props){
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.amount}</p>
      <p>{props.married ? 'married' : 'single'}</p>
      <ul>
        <li>City: {props.address.city}</li>
        <li>Street: {props.address.street}</li>
      </ul>
    </div>
  )
}*/

/*export function UserCard(){
  return <h1>User Card</h1>
}*/