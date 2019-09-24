import * as React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import List from './List'

const mockItems = [
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
]

describe('List', () => {
    let wrapper;
    it('should render the UI with items', () => {
        wrapper = shallow(<List items={mockItems} />)
        expect(wrapper.find('ListItem')).toExist()
        expect(wrapper.find('div.no-items')).not.toExist()
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('should render the UI without items', () => {
        wrapper = shallow(<List items={[]} />)
        expect(wrapper.find('ListItem')).not.toExist()
        expect(wrapper.find('div.no-items')).toExist()
        expect(toJson(wrapper)).toMatchSnapshot()
    })


})