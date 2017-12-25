import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    state = {
        menu: []
    }
    
    componentDidMount() {
        this.setState({ menu: [
            {
                name: 'Home',
                route: '/'
            },
            {
                name: 'Profile',
                route: '/profile'
            },
            {
                name: 'Register',
                route: '/register'
            },
            {
                name: 'Login',
                route: '/login'
            },
            ]
        })
    }

    renderMenuLink = (menu) => {
        return (
            <li key={menu.name}>
                <Link 
                    className={menu.name} 
                    to={menu.route} >{menu.name}
                </Link>
            </li>
        )
    }

    render() {
        return (
            <div>
                <h2 className='title'>ImageShare</h2>
                <ul>
                    {this.state.menu.map(this.renderMenuLink)}
                </ul>
            </div>
        )
    }
}

export default Header