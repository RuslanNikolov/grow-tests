import sinon from 'sinon';
import { transformData } from './transform';


global.Math = { random: () => 0.2 }

const mockItems = [
    {
        id: 1,
        title: 'title1',
        url: 'url1',
        thumbnailUrl: 'thumbnailUrl1'
    },
    {
        id: 2,
        title: 'title2',
        url: 'url2',
        thumbnailUrl: 'thumbnailUrl2'
    },
    {
        id: 3,
        title: 'title3',
        url: 'url3',
        thumbnailUrl: 'thumbnailUrl3'
    },
]

describe('transform', () => {
    it('should transform the data correctly', () => {
        const transformedData = transformData(mockItems);
        expect(transformedData).toEqual([
            {
                id: 1,
                title: 'title1',
                url: 'url1',
                image: 'thumbnailUrl1'
            },
            {
                id: 2,
                title: 'title2',
                url: 'url2',
                image: 'thumbnailUrl2'
            },
        ])
    })

})
