import React from 'react'
import { mount, shallow } from 'enzyme'
import Header from '../component_header'
import { StaticRouter } from 'react-router'

describe('Header', () => {
    let header;

    beforeEach(() => {
        header = shallow(<Header />)
    })

    it('renders properly', () => {
        expect(header).toMatchSnapshot()
    })

    it('contains a `title`', () => {
        expect(header.find('.title').text()).toEqual('ImageShare')
    })

    it('contains a menu`state`', () => {
        const initialMenu = []
        expect(header.state().menu).toEqual(initialMenu)
    })
    
    describe('when mounted', () => {
        const menuList = ['Home', 'Profile', 'Register', 'Login']
        beforeEach(() => {
            const context = {}
            header = mount(
                <StaticRouter context={context}>
                    <Header />
                </StaticRouter>
            )
        })

        it('contains menu links from menu `state`', () => {
            for(let i = 0; i < menuList.length; i++) {
                expect(header.find(`.${menuList[i]}`).exists()).toBe(true)
            }
        })
    })


})