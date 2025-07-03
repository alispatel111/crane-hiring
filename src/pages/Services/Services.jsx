"use client"

import { useState } from "react"
import "./Services.css"

export default function Services() {
  const cranes = [
    {
      id: 1,
      name: "Mobile Crane",
      type: "mobile",
      capacity: "50 Tons",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      description:
        "Versatile mobile cranes perfect for construction sites and general lifting operations with excellent maneuverability.",
      features: [
        "Quick setup and deployment",
        "All-terrain capability",
        "Flexible positioning",
        "Cost-effective solution",
      ],
      specifications: {
        maxHeight: "45m",
        maxRadius: "35m",
        engine: "Diesel 350HP",
        weight: "48,000 kg",
      },
      price: "₹8,000/day",
      popular: false,
      detailedDescription:
        "Our mobile cranes are the perfect solution for construction projects requiring flexibility and quick deployment. These versatile machines can navigate through tight spaces and set up quickly on various terrains.",
      applications: ["Building Construction", "Infrastructure Projects", "Equipment Installation", "Material Handling"],
      safetyFeatures: [
        "Load Moment Indicator",
        "Anti-Two Block System",
        "Outrigger Monitoring",
        "Emergency Stop Systems",
      ],
    },
    {
      id: 2,
      name: "Tower Crane",
      type: "tower",
      capacity: "20 Tons",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
      description:
        "High-rise construction specialists with exceptional reach and precision for tall building projects.",
      features: ["Maximum height reach", "Precise load control", "Heavy-duty construction", "Weather resistant"],
      specifications: {
        maxHeight: "80m",
        maxRadius: "65m",
        engine: "Electric 200HP",
        weight: "25,000 kg",
      },
      price: "₹15,000/day",
      popular: true,
      detailedDescription:
        "Tower cranes are essential for high-rise construction projects, offering unmatched height and reach capabilities. These stationary cranes provide precise load placement and can handle multiple lifting operations simultaneously.",
      applications: ["High-rise Buildings", "Commercial Complexes", "Residential Towers", "Bridge Construction"],
      safetyFeatures: [
        "Collision Avoidance System",
        "Load Block Protection",
        "Wind Speed Monitoring",
        "Emergency Descent System",
      ],
    },
    {
      id: 3,
      name: "Crawler Crane",
      type: "crawler",
      capacity: "100 Tons",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      description: "Heavy-duty crawler cranes for the most demanding industrial projects requiring maximum stability.",
      features: ["Superior stability", "Heavy lifting capacity", "Rough terrain operation", "Long reach capability"],
      specifications: {
        maxHeight: "60m",
        maxRadius: "50m",
        engine: "Diesel 500HP",
        weight: "95,000 kg",
      },
      price: "₹20,000/day",
      popular: false,
      detailedDescription:
        "Crawler cranes offer exceptional stability and lifting capacity for heavy industrial applications. With their tracked undercarriage, they can operate on soft ground and rough terrain while maintaining superior load control.",
      applications: ["Industrial Plants", "Power Generation", "Petrochemical Projects", "Heavy Manufacturing"],
      safetyFeatures: [
        "Dynamic Load Charts",
        "Boom Angle Indicator",
        "Ground Pressure Monitoring",
        "Stability Control System",
      ],
    },
    // 
    {
      id: 4,
      name: "Truck Crane",
      type: "truck",
      capacity: "40 Tons",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
      description: "Road-mobile cranes that combine transportation and lifting capabilities for maximum efficiency.",
      features: ["Highway travel ready", "Quick deployment", "Cost-effective solution", "Versatile applications"],
      specifications: {
        maxHeight: "40m",
        maxRadius: "30m",
        engine: "Diesel 300HP",
        weight: "35,000 kg",
      },
      price: "₹7,000/day",
      popular: true,
      detailedDescription:
        "Truck cranes offer the perfect balance of mobility and lifting capability. These versatile machines can travel on highways and set up quickly at job sites, making them ideal for various applications.",
      applications: ["Urban Construction", "Maintenance Work", "Emergency Response", "Small to Medium Projects"],
      safetyFeatures: [
        "Outrigger Float Monitoring",
        "Load Moment System",
        "Boom Extension Control",
        "Operator Cab Protection",
      ],
    },
    {
      id: 5,
      name: "Overhead Crane",
      type: "overhead",
      capacity: "30 Tons",
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&h=300&fit=crop",
      description: "Indoor industrial cranes for warehouse and manufacturing operations with precise positioning.",
      features: ["Precise positioning", "Indoor operation", "High efficiency", "Automated controls"],
      specifications: {
        maxHeight: "15m",
        maxRadius: "25m",
        engine: "Electric 150HP",
        weight: "20,000 kg",
      },
      price: "₹5,000/day",
      popular: false,
      detailedDescription:
        "Overhead cranes are essential for indoor material handling operations. These cranes provide precise control and efficient movement of materials in warehouses, factories, and manufacturing facilities.",
      applications: ["Manufacturing Plants", "Warehouses", "Steel Mills", "Assembly Lines"],
      safetyFeatures: ["Collision Prevention", "Load Limit Switches", "Emergency Stop Systems", "Anti-Sway Technology"],
    },
  ]

  const [filter, setFilter] = useState("all")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedCrane, setSelectedCrane] = useState(null)
  const [showQuickView, setShowQuickView] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false)

  const filteredCranes = filter === "all" ? cranes : cranes.filter((crane) => crane.type === filter)

  const filterOptions = [
    { value: "all", label: "All Cranes", count: cranes.length, icon: "🏗️" },
    { value: "mobile", label: "Mobile", count: cranes.filter((c) => c.type === "mobile").length, icon: "🚛" },
    { value: "tower", label: "Tower", count: cranes.filter((c) => c.type === "tower").length, icon: "🏢" },
    { value: "crawler", label: "Crawler", count: cranes.filter((c) => c.type === "crawler").length, icon: "🐛" },
    {
      value: "rough-terrain",
      label: "Rough Terrain",
      count: cranes.filter((c) => c.type === "rough-terrain").length,
      icon: "⛰️",
    },
    { value: "truck", label: "Truck", count: cranes.filter((c) => c.type === "truck").length, icon: "🚚" },
    { value: "overhead", label: "Overhead", count: cranes.filter((c) => c.type === "overhead").length, icon: "🏭" },
  ]

  const openQuickView = (crane) => {
    setSelectedCrane(crane)
    setShowQuickView(true)
    document.body.style.overflow = "hidden"
  }

  const openDetails = (crane) => {
    setSelectedCrane(crane)
    setShowDetails(true)
    document.body.style.overflow = "hidden"
  }

  const openQuoteModal = (crane) => {
    setSelectedCrane(crane)
    setShowQuoteModal(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setShowQuickView(false)
    setShowDetails(false)
    setShowQuoteModal(false)
    setSelectedCrane(null)
    document.body.style.overflow = "auto"
  }

  const handleQuoteSubmit = async (e) => {
    e.preventDefault()

    // Show success animation
    setShowSuccessAnimation(true)
    document.body.style.overflow = "hidden"

    // Hide animation after 4 seconds
    setTimeout(() => {
      setShowSuccessAnimation(false)
      document.body.style.overflow = "auto"
      closeModal()
    }, 4000)
  }

  const handleSpeakWithExpert = () => {
    window.open("tel:+918511231514", "_self")
  }

  const handleDownloadCatalog = () => {
    // Create a dummy PDF download
    const link = document.createElement("a")
    link.href =
      "data:application/pdf;base64,JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVGl0bGUgKENyYW5lSGlyZSBQcm8gQ2F0YWxvZykKL0NyZWF0b3IgKENyYW5lSGlyZSBQcm8pCi9Qcm9kdWNlciAoQ3JhbmVIaXJlIFBybykKL0NyZWF0aW9uRGF0ZSAoRDoyMDI0MDEwMTEyMDAwMFopCj4+CmVuZG9iago="
    link.download = "CraneHire-Pro-Catalog.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="services">
      <div className="container">
        {/* Header */}
        <div className="services-header text-center animate-fade-up">
          <h1 className="page-title">Our Premium Crane Services</h1>
          <p className="page-subtitle">
            Choose from our comprehensive fleet of professional-grade cranes, each maintained to the highest safety
            standards and operated by certified professionals with years of experience.
          </p>
          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Cranes Available</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Service Support</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="filter-section animate-fade-up">
          <div className="filter-header">
            <h2 className="filter-title">
              {filter === "all" ? "All Services" : filterOptions.find((f) => f.value === filter)?.label}
              <span className="result-count">({filteredCranes.length} available)</span>
            </h2>
            <button onClick={() => setShowFilters(!showFilters)} className="filter-toggle btn btn-outline">
              <span>🔍</span>
              Filters
            </button>
          </div>

          <div className={`filter-buttons ${showFilters ? "show" : ""}`}>
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`filter-btn ${filter === option.value ? "active" : ""}`}
              >
                <span className="filter-icon">{option.icon}</span>
                <span className="filter-text">{option.label}</span>
                <span className="filter-count">({option.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Crane Cards Grid */}
        <div className="cranes-grid grid grid-3 animate-fade-up">
          {filteredCranes.map((crane, index) => (
            <div
              key={crane.id}
              className={`crane-card card ${crane.popular ? "popular" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {crane.popular && <div className="popular-badge">⭐ Most Popular</div>}

              <div className="crane-image">
                <img src={crane.image || "/placeholder.svg"} alt={crane.name} />
                <div className="image-overlay">
                  <div className="capacity-badge">{crane.capacity}</div>
                  <div className="price-badge">{crane.price}</div>
                </div>
                <div className="hover-overlay">
                  <button className="quick-view-btn" onClick={() => openQuickView(crane)}>
                    👁️ Quick View
                  </button>
                </div>
              </div>

              <div className="crane-content">
                <div className="crane-header">
                  <h3 className="crane-name">{crane.name}</h3>
                  <div className="crane-type">{crane.type.replace("-", " ")}</div>
                </div>

                <p className="crane-description">{crane.description}</p>

                <div className="crane-features">
                  <h4 className="features-title">✨ Key Features:</h4>
                  <ul className="features-list">
                    {crane.features.map((feature, index) => (
                      <li key={index} className="feature-item">
                        <span className="feature-dot"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="crane-specs">
                  <h4 className="specs-title">📊 Specifications:</h4>
                  <div className="specs-grid">
                    <div className="spec-item">
                      <span className="spec-label">Max Height:</span>
                      <span className="spec-value">{crane.specifications.maxHeight}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Max Radius:</span>
                      <span className="spec-value">{crane.specifications.maxRadius}</span>
                    </div>
                  </div>
                </div>

                <div className="crane-actions">
                  <button className="btn btn-primary quote-btn" onClick={() => openQuoteModal(crane)}>
                    Request Quote
                  </button>
                  <button className="btn btn-outline details-btn" onClick={() => openDetails(crane)}>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose CraneHire Pro Section */}
        <div className="why-choose-sections animate-fade-up">
          <div className="container">
            <div className="why-choose-container">
              <div className="why-choose-header">
                <div className="section-badge">🏆 Industry Leaders</div>
                <h2 className="section-title">Why Choose CraneHire Pro?</h2>
                <p className="section-subtitle">
                  Experience the difference with India's most trusted crane rental service. We deliver excellence
                  through innovation, safety, and unmatched customer service.
                </p>
              </div>

              <div className="why-choose-content">
                <div className="stats-showcase">
                  <div className="stat-card">
                    <div className="stat-icon">🏆</div>
                    <div className="stat-number">25+</div>
                    <div className="stat-label">Years Experience</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon">✅</div>
                    <div className="stat-number">500+</div>
                    <div className="stat-label">Projects Completed</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon">🚛</div>
                    <div className="stat-number">50+</div>
                    <div className="stat-label">Modern Cranes</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon">⭐</div>
                    <div className="stat-number">100%</div>
                    <div className="stat-label">Client Satisfaction</div>
                  </div>
                </div>

                <div className="advantages-grid">
                  <div className="advantage-card">
                    <div className="advantage-icon">🛡️</div>
                    <h3>Safety First Approach</h3>
                    <p>
                      Zero-accident record with certified operators and comprehensive safety protocols for every
                      project.
                    </p>
                    <ul className="advantage-points">
                      <li>OSHA Certified Operators</li>
                      <li>Daily Equipment Inspections</li>
                      <li>Emergency Response Team</li>
                    </ul>
                  </div>

                  <div className="advantage-card">
                    <div className="advantage-icon">⚡</div>
                    <h3>Rapid Response Service</h3>
                    <p>
                      24/7 availability with 2-hour response time for emergency situations and urgent project needs.
                    </p>
                    <ul className="advantage-points">
                      <li>2-Hour Emergency Response</li>
                      <li>Weekend & Holiday Service</li>
                      <li>Real-time Project Updates</li>
                    </ul>
                  </div>

                  <div className="advantage-card">
                    <div className="advantage-icon">💎</div>
                    <h3>Premium Equipment Fleet</h3>
                    <p>Latest technology cranes with GPS tracking, load monitoring, and advanced safety systems.</p>
                    <ul className="advantage-points">
                      <li>2023 Model Cranes</li>
                      <li>GPS Tracking System</li>
                      <li>Preventive Maintenance</li>
                    </ul>
                  </div>

                  <div className="advantage-card">
                    <div className="advantage-icon">💰</div>
                    <h3>Transparent Pricing</h3>
                    <p>
                      Competitive rates with no hidden costs, flexible payment terms, and volume discounts available.
                    </p>
                    <ul className="advantage-points">
                      <li>No Hidden Charges</li>
                      <li>Flexible Payment Options</li>
                      <li>Volume Discounts Available</li>
                    </ul>
                  </div>
                </div>

                <div className="testimonial-highlight">
                  <div className="testimonial-content ">
                    <div className="quote-mark">"</div>
                    <p className="testimonial-text">
                      "CraneHire Pro exceeded our expectations with their professional service and modern equipment.
                      Their team's expertise and commitment to safety made our project a complete success."
                    </p>
                    <div className="testimonial-author">
                      <div className="author-avatar">👨‍💼</div>
                      <div className="author-info">
                        <div className="author-name">Rajesh Kumar</div>
                        <div className="author-company">Metro Construction Ltd.</div>
                      </div>
                      <div className="rating">
                        <span>⭐⭐⭐⭐⭐</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="services-cta card animate-fade-up">
          <div className="cta-content">
            <div className="cta-icon">🤝</div>
            <h2 className="cta-title">Need Help Choosing the Right Crane?</h2>
            <p className="cta-description">
              Our expert team can help you select the perfect crane for your specific project requirements.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary cta-btn" onClick={handleSpeakWithExpert}>
                🗣️ Speak with Expert
              </button>
              <button className="btn btn-outline cta-btn" onClick={handleDownloadCatalog}>
                📥 Download Catalog
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      {showQuickView && selectedCrane && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content quick-view-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ✕
            </button>
            <div className="modal-header">
              <img src={selectedCrane.image || "/placeholder.svg"} alt={selectedCrane.name} className="modal-image" />
              <div className="modal-info">
                <h2 className="modal-title">{selectedCrane.name}</h2>
                <div className="modal-badges">
                  <span className="capacity-badge">{selectedCrane.capacity}</span>
                  <span className="price-badge">{selectedCrane.price}</span>
                </div>
                <p className="modal-description">{selectedCrane.description}</p>
              </div>
            </div>
            <div className="modal-body">
              <div className="quick-specs">
                <h3>Quick Specifications</h3>
                <div className="specs-grid">
                  {Object.entries(selectedCrane.specifications).map(([key, value]) => (
                    <div key={key} className="spec-item">
                      <span className="spec-label">
                        {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}:
                      </span>
                      <span className="spec-value">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="modal-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    closeModal()
                    openQuoteModal(selectedCrane)
                  }}
                >
                  Request Quote
                </button>
                <button
                  className="btn btn-outline"
                  onClick={() => {
                    closeModal()
                    openDetails(selectedCrane)
                  }}
                >
                  View Full Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Details Modal */}
      {showDetails && selectedCrane && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content details-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ✕
            </button>
            <div className="modal-header">
              <img src={selectedCrane.image || "/placeholder.svg"} alt={selectedCrane.name} className="modal-image" />
              <div className="modal-info">
                <h2 className="modal-title">{selectedCrane.name}</h2>
                <div className="modal-badges">
                  <span className="capacity-badge">{selectedCrane.capacity}</span>
                  <span className="price-badge">{selectedCrane.price}</span>
                </div>
              </div>
            </div>
            <div className="modal-body details-body">
              <div className="details-section">
                <h3>📝 Detailed Description</h3>
                <p>{selectedCrane.detailedDescription}</p>
              </div>

              <div className="details-section">
                <h3>🔧 Complete Specifications</h3>
                <div className="specs-grid">
                  {Object.entries(selectedCrane.specifications).map(([key, value]) => (
                    <div key={key} className="spec-item">
                      <span className="spec-label">
                        {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}:
                      </span>
                      <span className="spec-value">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="details-section">
                <h3>🎯 Applications</h3>
                <div className="applications-grid">
                  {selectedCrane.applications?.map((app, index) => (
                    <div key={index} className="application-item">
                      <span className="app-icon">✓</span>
                      {app}
                    </div>
                  ))}
                </div>
              </div>

              <div className="details-section">
                <h3>🛡️ Safety Features</h3>
                <div className="safety-grid">
                  {selectedCrane.safetyFeatures?.map((feature, index) => (
                    <div key={index} className="safety-item">
                      <span className="safety-icon">🔒</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    closeModal()
                    openQuoteModal(selectedCrane)
                  }}
                >
                  Request Quote Now
                </button>
                <button className="btn btn-outline" onClick={closeModal}>
                  Close Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quote Request Modal */}
      {showQuoteModal && selectedCrane && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content quote-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ✕
            </button>
            <div className="modal-header">
              <h2 className="modal-title">Request Quote for {selectedCrane.name}</h2>
              <p className="modal-subtitle">Fill out the form below and we'll get back to you within 2 hours</p>
            </div>
            <div className="modal-body">
              <form className="quote-form" onSubmit={handleQuoteSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" placeholder="Enter your full name" required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input type="tel" placeholder="Enter your phone number" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" placeholder="Enter your email address" required />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Project Location *</label>
                    <input type="text" placeholder="Enter project location" required />
                  </div>
                  <div className="form-group">
                    <label>Duration (Days) *</label>
                    <input type="number" placeholder="Number of days" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Project Description *</label>
                  <textarea rows="4" placeholder="Describe your project requirements..." required></textarea>
                </div>
                <div className="selected-crane-info">
                  <h4>Selected Crane:</h4>
                  <div className="crane-summary">
                    <img src={selectedCrane.image || "/placeholder.svg"} alt={selectedCrane.name} />
                    <div>
                      <h5>{selectedCrane.name}</h5>
                      <p>Capacity: {selectedCrane.capacity}</p>
                      <p>Rate: {selectedCrane.price}</p>
                    </div>
                  </div>
                </div>
                <div className="modal-actions">
                  <button type="submit" className="btn btn-primary">
                    📤 Send Quote Request
                  </button>
                  <button type="button" className="btn btn-outline" onClick={closeModal}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Success Animation Modal */}
      {showSuccessAnimation && (
        <div className="success-animation-overlay">
          <div className="success-animation-modal">
            <div className="success-checkmark-container">
              <svg className="success-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className="success-checkmark-circle" cx="26" cy="26" r="25" fill="none" />
                <path className="success-checkmark-check" fill="none" d="m14.1 27.2l7.1 7.2 16.7-16.8" />
              </svg>
            </div>
            <div className="success-content">
              <h3>Quote Request Sent Successfully!</h3>
              <p>
                Thank you for your interest! Our expert team will review your requirements and contact you within 2
                hours with a detailed quote.
              </p>
              <div className="success-features">
                <div className="success-feature">
                  <span className="success-feature-icon">⚡</span>
                  <span>Quick Response</span>
                </div>
                <div className="success-feature">
                  <span className="success-feature-icon">💰</span>
                  <span>Best Pricing</span>
                </div>
                <div className="success-feature">
                  <span className="success-feature-icon">🛡️</span>
                  <span>Fully Insured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
