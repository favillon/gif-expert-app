import { useState } from 'react'

/*
    Forma de hacer el cambio del estado desde el hijo
    Key #1
    export const AddCategory = ({setCategories}) => {
*/
export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setinputValue] = useState('One Punch')
  const onInputChange = ({target}) => {
    setinputValue(target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault()
    if (inputValue.trim().length<=1) return;
    /*
        Forma de hacer el cambio del estado desde el hijo
        Key #1
        setCategories( categories => [inputValue, ...categories])
    */
    onNewCategory(inputValue.trim())
    setinputValue('')
  }
  return (
    <form onSubmit={onSubmit}>
      <input
       type="text"
       placeholder="Buscar gif"
       value={inputValue}
       onChange={onInputChange}
      />
    </form>
  )
}
