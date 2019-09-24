import * as React from 'react'
import { mount, shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ListContainer from './ListContainer'
import List from '../../components/List/List'
import * as ListContainerExports from './ListContainer'

jest.mock('../../helpers/requests');


describe('ListContainer', () => {
    let wrapper;
    let loadDataSpy;
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation(init => [init, setState]);

    beforeEach(() => {
        loadDataSpy = jest.spyOn(ListContainerExports, 'loadData')
        wrapper = mount(<ListContainer />)
    })

    afterEach(() => {
        jest.clearAllMocks()
        wrapper.unmount()
    })

    it('should render the correct initial UI', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('should have correct props', () => {
        expect(wrapper.props()).toEqual({})
    })

    it('should have initially no items', () => {
        const ListComponent = wrapper.find(List)
        expect(ListComponent.prop('items')).toEqual([]);
    })

    it('should have initially no error', () => {
        const errorDiv = wrapper.find('.error')
        expect(errorDiv).not.toExist()
    })

    it('should initially have no loading', () => {
        const button = wrapper.find('.button');
        expect(button.prop('disabled')).toBeFalsy()
    })

    it('should load data on initial load', () => {
        expect(loadDataSpy).toHaveBeenCalled();
    })

    it('should call useState', () => {
        wrapper.find('.button').props().onClick()
        expect(setState).toHaveBeenCalled();
    })

    it('should reload data on button click', () => {
        wrapper.find('.button').props().onClick()
        expect(loadDataSpy).toHaveBeenCalled()
    })
    

})
