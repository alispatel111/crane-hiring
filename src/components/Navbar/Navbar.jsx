"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  const isActive = (path) => location.pathname === path

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-brand">
            <Link to="/" className="brand-link">
              <div className="brand-icon">🏗️</div>
              <span className="brand-text">CraneHire Pro</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-menu desktop-menu">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className={`nav-link ${isActive(link.path) ? "active" : ""}`}>
                <span className="nav-text">{link.name}</span>
                <div className="nav-indicator"></div>
              </Link>
            ))}
          </div>

          <div className="navbar-actions">
{/*             <Link to="/contact" className="btn btn-primary navbar-cta">
              Get Quote
            </Link> */}

            {/* Mobile menu button */}
            <div className="mobile-menu-btn">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`hamburger ${isOpen ? "open" : ""}`}
                aria-label="Toggle menu"
              >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
          <div className="mobile-menu-content">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`mobile-nav-link ${isActive(link.path) ? "active" : ""}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn btn-primary mobile-cta" onClick={() => setIsOpen(false)}>
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
