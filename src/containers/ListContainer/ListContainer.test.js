import * as React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import ListContainer from './ListContainer'


describe('ListContainer', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <ListContainer />)

        act(() => {
            jest.runAllImmediates();
        });

    })

    it('should render the correct initial UI', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })



})
