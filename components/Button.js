
const Button = ({imageUrl,clickHandler}) => {
  return (
      <button onClick={clickHandler}>
        <img src={imageUrl} alt="button"/>
      </button>
  )
}

export default Button
