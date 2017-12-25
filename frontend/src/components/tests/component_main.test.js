import React from 'react'
import { mount, shallow } from 'enzyme'
import { MemoryRouter } from 'react-router'
import Main from '../component_main'
import Home from '../component_home'
import Profile from '../component_profile'
import Register from '../component_register'
import Login from '../component_login'

describe('Main', () => {
    let main;
    beforeEach(() => {
        main = shallow(<Main />)
    })

    it('renders properly', () => {
        expect(main).toMatchSnapshot()
    })

    describe('when routing to path `/`', () => {
        const main = mount(
                <MemoryRouter initialEntries={[ '/' ]}>
                    <Main />
                </MemoryRouter>
            )
        it('renders Home component in Main Component', () => {
            expect(main.find(Home)).toHaveLength(1)
        })
    })

    describe('when routing to path `/profile`', () => {
        const main = mount(
                <MemoryRouter initialEntries={[ '/profile' ]}>
                    <Main />
                </MemoryRouter>
            )
        it('renders Home component in Main Component', () => {
            expect(main.find(Profile)).toHaveLength(1)
        })
    })

    describe('when routing to path `/register`', () => {
        const main = mount(
                <MemoryRouter initialEntries={[ '/register' ]}>
                    <Main />
                </MemoryRouter>
            )
        it('renders Home component in Main Component', () => {
            expect(main.find(Register)).toHaveLength(1)
        })
    })
    describe('when routing to path `/Login`', () => {
        const main = mount(
                <MemoryRouter initialEntries={[ '/login' ]}>
                    <Main />
                </MemoryRouter>
            )
        it('renders Home component in Main Component', () => {
            expect(main.find(Login)).toHaveLength(1)
        })
    })
})