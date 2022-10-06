import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'

/*import { Greeting, UserCard } from './Greeting'
import Product, { NavBar } from './Product'
import { Button } from './Button'
import { TaskCard } from './Task'
import { Name } from './Name'*/
//import { Posts } from './Posts'

/*const handleChange = (e) => {
  console.log(e.target.value)
}*/

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <>
    <Counter/>
  </>
)

function Counter() {
  const [message, setMessage] = useState('')
  const [counter, setCounter] = useState(0)
  
  //El array como segundo parámetro podemos ponerlo como [] para que use effect solo se ejecute una vez al cargar
  useEffect(() => {
    console.log('render')
  }, [counter])

  return (
    <div>
      <input onChange={(e) => {setMessage(e.target.value)}}/>
      <button onClick={() => {
        console.log('El mensaje es ' + message)
      }}>
        Save
      </button>
      <hr />
      <h1>Counter: {counter}</h1>
      <button onClick={() => {
        setCounter(counter + 1)
      }}>
        Add
      </button>
    </div>
  )
}

/*function Counter() {
  const [counter, setCounter] = useState(0)

  return <div>
    <h1>Counter: {counter}</h1>
    <button onClick={() => {
      setCounter(counter + 1)
    }}>
      Add
    </button>

    <button onClick={() => {
      setCounter(counter - 1)
    }}>
      Subtract
    </button>

    <button onClick={() => {
      setCounter(0)
    }}>
      Restart
    </button>
  </div>
}*/

/*const users = [
  {
    id: 1,
    name: 'Ryan Miller',
    img: 'https://robohash.org/user1'
  },
  {
    id: 2,
    name: 'Chris Teller',
    img: 'https://robohash.org/user2'
  }
]

root.render(
  <>
    {users.map((user, index) => {
      return <div key={index}>
        <h1>{user.name}</h1>
        <img src={user.img} alt='userImage'/>
      </div>
    })}
  </>
)*/

/*root.render(
  <>
    <Posts/>
  </>
)*/

/*root.render(
  <>
    <TaskCard ready={true}/>
    <Name/>
    <Button text='Saludar'/>

    <input id='hola' onChange={handleChange}/>

    <form onSubmit={(e) => {
      e.preventDefault()
      console.log('enviado')
    }}>
      <h1>Registro</h1>
      <button>Send</button>
    </form>
  </>
)*/

/*root.render(
  <>
    <Button text="Pay"/>
    <Button text="Click Me"/>
    <Button text="Test Me" name="Joe"/>
  </>
)*/

/*root.render(
  <>
    <UserCard 
      name='Ryan Johnson'
      amount={3000}
      married={true}
      points={[99, 22.3, 33.2]}
      address={{street: '123 Main Street', city: 'San Francisco'}}
      greet={function(){alert('Hello!')}}
    />

    <UserCard 
      name='Charles McDonald'
      amount={1000}
      married={false}
      points={[80, 20]}
      address={{street: '123 Awesome Street', city: 'New York'}}
    />
  </>
)*/

/*root.render(
  <>
    <Greeting title='Hola Mundo' name='Joe' />
    <Greeting title='Hola JSX' name='Ryan' />
    <Greeting title='Hola React' />
    <Greeting title='Hola JavaScript' />
    <Greeting title='Hola Fabrix' />
  </>
)*/

/*root.render(
  <>
    <Greeting title='hola' />
    <Greeting x='bye' />
    <Greeting y={30} />
    <Greeting z={true} />
    <Greeting a={[1,2,3]} />
  </>
)*/

/*root.render(
  <>
    <Greeting></Greeting>
    <UserCard></UserCard>
    <Product></Product>
    <NavBar></NavBar>
  </>
)*/