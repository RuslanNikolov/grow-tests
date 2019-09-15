import * as React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ListItem from './ListItem'

const mockItem1 = {
    id: 1,
    title: 'title1',
    url: 'url1',
    image: 'thumbnailUrl1'
}

const mockItem2 = {
    id: 1,
    title: 'title1',
    url: 'url1',
}

describe('ListItem', () => {
    let wrapper;

    it('should render the UI with image', () => {
        wrapper = shallow(<ListItem {...mockItem1} />)

        expect(toJson(wrapper)).toMatchSnapshot()
    })
    it('should render the UI without image', () => {
        wrapper = shallow(<ListItem {...mockItem2} />)

        expect(toJson(wrapper)).toMatchSnapshot()
    })

})