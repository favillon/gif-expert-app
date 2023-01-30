import { getGifs } from "../../src/helpers/ApiGifs";

describe('Test ApiGifs', () => {
    test('should Api', async() => {
        jest.setTimeout(15000)
        const gifs = await getGifs('DBZ')
        //console.log(gifs);
        expect(gifs.length).toBeGreaterThan(0)
        //console.log(gifs[0]);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    })
})