import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Test GifItem.jsx', () => {
    const title = 'Mi titulo';
    const url = 'https://favillon.xyz';
    test('Match snapshot', () => {
        const {container}  = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot()
    })


    test('should imagen y el alt De la imagen', () => {
        render(<GifItem title={title} url={url} />)
        // screen.debug() // ## Depurar el codigo generado
        expect(screen.getByRole('img').src).toContain(url)
        expect(screen.getByRole('img').alt).toBe(title)
        const {src, alt} = screen.getByRole('img')
        expect(src).toContain(url)
        expect(alt).toBe(title)
    })

    test('should mostrar el titulo', () => {
        render(<GifItem title={title} url={url} />)
        expect(screen.getByText(title)).toBeTruthy()
    })
})