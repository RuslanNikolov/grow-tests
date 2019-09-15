import * as moxios from 'moxios'
import { getData } from './requests'


describe('requests', () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall()
    })

    it('should get the adequate data', async () => {
        const mockPhotos = ['photo1', 'photo2']

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: mockPhotos
            })
        })

        const result = await getData();
        expect(result).toEqual({ items: mockPhotos, error: null })
    })

    it('should return empty data on error', async () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 404,
            })
        })

        const result = await getData();
        expect(result).toEqual({ items: [], error: 'Request failed with status code 404' })

    })


})
