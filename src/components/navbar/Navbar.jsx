"use client"
import React from 'react'
import Link from 'next/link'

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Portfolio", url: "/portfolio" },
  { id: 3, title: "Blog", url: "/blog" },
  { id: 4, title: "About", url: "/about" },
  { id: 5, title: "Contact", url: "/contact" },
  { id: 6, title: "Dashboard", url: "/dashboard" },
];

function Navbar() {
  return (
    <div>
      <Link href="/">
        My Blog
      </Link>
      <div>
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        <button onClick={() => { console.log('user logout!') }}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar