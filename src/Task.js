import './Task.css'

export function TaskCard({ready}) {
  /*const cardStyle = {background: '#202020', color: '#fff', padding: '20px'}
  const titleStyle = {fontWeight: 'lighter'}*/

  return (
    <div className='card'>
      <h1>Mi primer tarea</h1>
      {/*<p style={ready ? {background: 'green'} : {background: 'red'}}>{ready ? 'Tarea realizada' : 'Tarea pendiente'}</p>*/}
      <p className={ready ? 'bg-green' : 'bg-red'}>{ready ? 'Tarea realizada' : 'Tarea pendiente'}</p>
    </div>
  )

  /*return (
  <div style={cardStyle}>
      <h1 style={titleStyle}>Mi primer tarea</h1>
      <p>Tarea realizada</p>
  </div>
  )*/
}