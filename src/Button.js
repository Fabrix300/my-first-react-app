import PropTypes from 'prop-types'

export function Button({ text, name, lastName = 'Some last name' }) {
  if (!text) { console.error('text is required') }
  return <button onClick={function(){
    console.log('¡Hola!')
  }}>
    {text} - {name} - {lastName}
  </button>
}

Button.propTypes = {
  text: PropTypes.string.isRequired
}

Button.defaultProps = {
  name: 'Some User'
}