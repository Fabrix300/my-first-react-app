import React from 'react'
import ReactDOM from 'react-dom/client'

import { Greeting, UserCard } from './Greeting'
import Product, { NavBar } from './Product'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
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
)

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