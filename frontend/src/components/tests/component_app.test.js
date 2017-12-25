import React from 'react'
import { shallow } from 'enzyme'
import App from '../component_app.js'

describe('App', () => {
    let app;
    beforeEach(() => {
        app = shallow(<App />)
    })

    it('renders properly', () => {
        expect(app).toMatchSnapshot()
    })

    it('contains a Header component', () => {
        expect(app.find('Header').exists()).toBe(true)
    })

    it('contains a Main component', () => {
        expect(app.find('Header').exists()).toBe(true)
    })

    it('contains a Footer component', () => {
        expect(app.find('Footer').exists()).toBe(true)
    })
})