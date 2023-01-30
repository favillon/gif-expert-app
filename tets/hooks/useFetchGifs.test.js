import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Test useFetchGifs', () => {
    const category = 'DBZ'
    test('return status init', () => {
        const {result} = renderHook(() => useFetchGifs(category))
        const {images, isLoading} = result.current
        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()
      //useFetchGifs();
    })
    test('return status not init', async() => {
        const {result} = renderHook(() => useFetchGifs(category))
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
        );
        const {images, isLoading} = result.current
        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()
    })
})