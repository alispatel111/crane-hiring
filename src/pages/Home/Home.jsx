"use client"

import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import "./Home.css"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      title: "Professional Crane Services",
      subtitle:
        "Reliable, safe, and efficient crane rental services for construction, industrial, and commercial projects of all sizes.",
      image: "🏗️",
    },
    {
      title: "24/7 Emergency Support",
      subtitle:
        "Round-the-clock availability for urgent lifting operations and emergency crane services across the region.",
      image: "🚨",
    },
    {
      title: "Expert Team & Modern Fleet",
      subtitle:
        "Certified operators and state-of-the-art equipment ensuring maximum safety and efficiency for your projects.",
      image: "👷‍♂️",
    },
  ]

  const features = [
    {
      title: "Safety Excellence",
      description:
        "All our cranes are regularly inspected and operated by certified professionals with impeccable safety records.",
      icon: "🛡️",
      color: "blue",
    },
    {
      title: "24/7 Service",
      description: "Round-the-clock availability for emergency and scheduled crane services whenever you need us.",
      icon: "⏰",
      color: "green",
    },
    {
      title: "Expert Team",
      description:
        "Experienced operators and project managers to handle any lifting challenge with precision and care.",
      icon: "👥",
      color: "purple",
    },
    {
      title: "Modern Fleet",
      description:
        "Latest crane technology with GPS tracking, advanced safety systems, and regular maintenance schedules.",
      icon: "🚛",
      color: "orange",
    },
    {
      title: "Competitive Pricing",
      description: "Transparent pricing with no hidden costs, flexible payment options, and competitive market rates.",
      icon: "💰",
      color: "teal",
    },
    {
      title: "Quick Response",
      description: "Fast deployment and setup times to keep your project on schedule and within budget constraints.",
      icon: "⚡",
      color: "red",
    },
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Metro Construction Ltd.",
      text: "CraneHire Pro exceeded our expectations with their professional service and modern equipment. Highly recommended!",
      rating: 5,
      image: "👨‍💼",
    },
    {
      name: "Priya Sharma",
      company: "Skyline Builders",
      text: "Their 24/7 emergency service saved our project timeline. Excellent team and reliable equipment.",
      rating: 5,
      image: "👩‍💼",
    },
    {
      name: "Amit Patel",
      company: "Industrial Solutions Inc.",
      text: "Top-notch crane services with competitive pricing. They're our go-to partner for all lifting operations.",
      rating: 5,
      image: "👨‍🔧",
    },
  ]

  const stats = [
    { number: "25+", label: "Years Experience", icon: "🏆" },
    { number: "500+", label: "Projects Completed", icon: "✅" },
    { number: "50+", label: "Modern Cranes", icon: "🏗️" },
    { number: "24/7", label: "Support Available", icon: "📞" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-content animate-fade-up">
            <div className="hero-icon">{heroSlides[currentSlide].image}</div>
            <h1 className="hero-title">{heroSlides[currentSlide].title}</h1>
            <p className="hero-subtitle">{heroSlides[currentSlide].subtitle}</p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary hero-btn">
                <span>🚀</span>
                Get Your Project Quote
              </Link>
              <Link to="/services" className="btn btn-outline hero-btn">
                <span>👁️</span>
                View Our Fleet
              </Link>
            </div>
            <div className="hero-indicators">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentSlide ? "active" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-container card">
            <div className="stats-grid grid grid-4">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <div className="section-header text-center animate-fade-up">
            <h2 className="section-title">Why Choose CraneHire Pro?</h2>
            <p className="section-subtitle">
              We provide comprehensive crane solutions with unmatched reliability, expertise, and commitment to
              excellence that you can trust for your most important projects.
            </p>
          </div>

          <div className="features-grid grid grid-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature-card card feature-${feature.color} animate-fade-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">{feature.icon}</div>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-arrow">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials section">
        <div className="container">
          <div className="section-header text-center animate-fade-up">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Don't just take our word for it - hear from our satisfied customers across India
            </p>
          </div>

          <div className="testimonials-grid grid grid-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card card animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="testimonial-header">
                  <div className="client-avatar">{testimonial.image}</div>
                  <div className="client-info">
                    <div className="client-name">{testimonial.name}</div>
                    <div className="client-company">{testimonial.company}</div>
                  </div>
                </div>
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="quote-icon">"</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview section">
        <div className="container">
          <div className="section-header text-center animate-fade-up">
            <h2 className="section-title">Our Premium Services</h2>
            <p className="section-subtitle">Professional crane rental solutions for every project requirement</p>
          </div>

          <div className="services-grid grid grid-3">
            <div className="service-preview-card card animate-fade-up">
              <div className="service-icon">🏗️</div>
              <h3 className="service-title">Construction Cranes</h3>
              <p className="service-description">Mobile, tower, and crawler cranes for all construction projects</p>
              <Link to="/services" className="service-link">
                Explore →
              </Link>
            </div>
            <div className="service-preview-card card animate-fade-up">
              <div className="service-icon">🏭</div>
              <h3 className="service-title">Industrial Lifting</h3>
              <p className="service-description">Heavy-duty cranes for industrial and manufacturing operations</p>
              <Link to="/services" className="service-link">
                Explore →
              </Link>
            </div>
            <div className="service-preview-card card animate-fade-up">
              <div className="service-icon">🚨</div>
              <h3 className="service-title">Emergency Services</h3>
              <p className="service-description">24/7 emergency crane services for urgent lifting operations</p>
              <Link to="/services" className="service-link">
                Explore →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content text-center animate-fade-up">
            <div className="cta-icon">🚀</div>
            <h2 className="cta-title">Ready to Start Your Project?</h2>
            <p className="cta-subtitle">
              Contact us today for a free consultation and competitive quote for your crane rental needs. Our experts
              are standing by to help you succeed with professional crane solutions.
            </p>
            <div className="cta-features">
              <div className="cta-feature">
                <span className="feature-icon">📞</span>
                <span>Free Consultation</span>
              </div>
              <div className="cta-feature">
                <span className="feature-icon">⚡</span>
                <span>Quick Response</span>
              </div>
              <div className="cta-feature">
                <span className="feature-icon">💰</span>
                <span>Best Pricing</span>
              </div>
            </div>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary cta-btn">
                <span>💬</span>
                Get Free Quote
              </Link>
              <Link to="/services" className="btn btn-secondary cta-btn">
                <span>🔍</span>
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
