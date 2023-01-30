import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components/GifGrid'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')

describe('Test GifGrid', () => {
    useFetchGifs.mockReturnValue({
        images : [],
        isLoading : true
    })
    const category = 'DBZ'
    test('Mostar el loading', () => {
        render(<GifGrid  category={ category } />)
        //screen.debug()
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))
    })
    test('Mostar el loading', () => {
        useFetchGifs.mockReturnValue({
            images : [],
            isLoading : true
        })
        render(<GifGrid  category={ category } />)
        //screen.debug()
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))
    })
    test('use useFetchGifs', () => {
        const gifs = [
            {
                id : 'Abc',
                title : 'One',
                url : 'https://gogole.com'
            },
            {
                id : 'Def',
                title : 'cha',
                url : 'https://gogole.com'
            }
        ]
        useFetchGifs.mockReturnValue({
            images : gifs,
            isLoading : false
        })
        render(<GifGrid  category={ category } />)
        //screen.debug()
        expect(screen.getAllByRole('img').length).toBe(gifs.length)
    })
})

