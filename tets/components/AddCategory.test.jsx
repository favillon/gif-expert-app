import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'

describe('Test AddCategory', () => {

    test('Change input text', () => {
        render(<AddCategory  onNewCategory={ ()=>{} }/>)
        const inputText = screen.getByRole('textbox')
        fireEvent.input(inputText, {target : {value:'Saitama'}})
        expect(inputText.value).toBe('Saitama')
        //screen.debug()
    })

    test('OnSubmit form', () => {
        const inputValue = 'Chavo'
        const onNewCategory = jest.fn();
        render(<AddCategory  onNewCategory={onNewCategory}/>)
        const inputText = screen.getByRole('textbox')
        const form = screen.getByRole('form') // aria-label
        fireEvent.input(inputText, {target : {value: inputValue}})
        //screen.debug()
        expect(inputText.value).toBe(inputValue)
        fireEvent.submit(form)
        expect(inputText.value).toBe('')
        //screen.debug()

        expect(onNewCategory).toHaveBeenCalled()
        expect(onNewCategory).toHaveBeenCalledTimes(1)
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
    })
    
    test('Call onNewCategory return ', () => {
        const inputValue = 'c'
        const onNewCategory = jest.fn();
        render(<AddCategory  onNewCategory={onNewCategory}/>)
        const inputText = screen.getByRole('textbox')
        const form = screen.getByRole('form') // aria-label
        fireEvent.input(inputText, {target : {value: inputValue}})
        //screen.debug()
        expect(inputText.value).toBe(inputValue)
        fireEvent.submit(form)
        //screen.debug()

        expect(onNewCategory).not.toHaveBeenCalled()
        expect(onNewCategory).not.toHaveBeenCalledTimes(1)
    })
})
