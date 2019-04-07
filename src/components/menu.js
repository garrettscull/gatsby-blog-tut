import React from 'react'

const Menu = () => (
    <div style={{
        background: '#f4f4f4',
        paddingTop: '10px',
    }}>
      <ul style={{
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'space-evenly',
      }}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/blog">Blog</a></li>
      </ul>
    </div>
  )

export default Menu;