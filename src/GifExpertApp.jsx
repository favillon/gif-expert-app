import {useState} from 'react'
import { AddCategory, GifGrid } from './components/';

export const GifExpertApp = () => {
  const [ categories, setCategories ] = useState(['One Punch','DBZ']);

  const onAddCtegory =(newCategory) =>{
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
  }
  const onAddCtegoryTwo =() =>{
    setCategories(cat =>['New Category ', ...cat])
  }
  return (
    <>
        <h1>GifExpertApp</h1>
        <hr />
        {/* <button onClick={onAddCtegory}>Agregar</button>
        <button onClick={onAddCtegoryTwo}>Agregar V2</button> */}
        {/*
            Forma para  cambiar valores desde el hijo  ### No muy recomendable ###
            Key #1
            <AddCategory setCategories={setCategories}/>
        */}
        {/*
            Emmit a evento padre
            Detalle de Abajo
            <AddCategory onNewCategory={event => onAddCtegory(event)} />
        */}
        <AddCategory onNewCategory={onAddCtegory} />

        <hr />
        {
            categories.map( (category) => (
                <GifGrid  key={category} category={category} />
            ))
        }
    </>
  )
}
