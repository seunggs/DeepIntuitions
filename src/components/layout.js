import React from 'react'
import { Link } from 'gatsby'
import './layout.css'
import logo from "../images/logo/deepintuitions-logo.svg"
import Button from './Button'
import { CHECKOUT_URL } from '../utils/constants'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginLeft: `2rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div>
      <div className="container px-4 text-lg">
        <header className="flex flex-row items-center my-6">
          <Link to="/" className="flex-none">
            <img src={logo} alt="Logo" style={{ width: '252px' }} />
          </Link>

          <div className="flex-grow">&nbsp;</div>

          {/* <ul className="flex-none" style={{ listStyle: `none`, fontSize: '15px' }}>
            <ListLink to="/about/">Videos</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
          </ul> */}
          <div><Button priority="primary-outline" to="#enroll">Enroll now</Button></div>
        </header>

        <div className="lg:max-w-7xl mx-auto">{children}</div>

      </div>
      
      <footer className="bg-indigo-900 bg-opacity-5 text-black text-opacity-50 flex flex-row justify-center p-10 text-sm mt-24">
        <div>© DeepIntuitions</div>
      </footer>
    </div>
  )
}