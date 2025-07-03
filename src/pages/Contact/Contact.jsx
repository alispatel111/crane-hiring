"use client"

import { useState } from "react"
import "./Contact.css"

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    craneType: "",
    projectDescription: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false)

  const craneTypes = [
    "Mobile Crane",
    "Tower Crane",
    "Crawler Crane",
    "Rough Terrain Crane",
    "Truck Crane",
    "Overhead Crane",
  ]

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    const phoneRegex = /^\d{10}$/
    const cleanPhone = formData.phone.replace(/\D/g, "")
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number"
    }

    if (!formData.craneType) {
      newErrors.craneType = "Please select a crane type"
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = "Project description is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Show success animation
      setShowSuccessAnimation(true)
      document.body.style.overflow = "hidden"

      // Hide animation after 4 seconds and reset form
      setTimeout(() => {
        setShowSuccessAnimation(false)
        document.body.style.overflow = "auto"
        setSubmitStatus("success")
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          craneType: "",
          projectDescription: "",
        })
      }, 4000)
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: "📞",
      title: "Phone Support",
      details: ["(555) 123-4567", "(555) 987-6543"],
      description: "24/7 Emergency Service Available",
      color: "blue",
    },
    {
      icon: "✉️",
      title: "Email Support",
      details: ["info@cranehirepro.com", "quotes@cranehirepro.com"],
      description: "Quick Response Guaranteed",
      color: "green",
    },
    {
      icon: "📍",
      title: "Our Location",
      details: ["123 Industrial Boulevard", "Construction City, CC 12345"],
      description: "Serving the Greater Metro Area",
      color: "purple",
    },
    {
      icon: "🕐",
      title: "Business Hours",
      details: ["Mon-Fri: 6:00 AM - 8:00 PM", "Sat-Sun: 8:00 AM - 6:00 PM"],
      description: "Emergency Service Available 24/7",
      color: "orange",
    },
  ]

  const features = [
    {
      icon: "⚡",
      title: "Quick Response"
      // description: "Get quotes within 2 hours",
    },
    {
      icon: "🛡️",
      title: "Fully Insured"
      // description: "Complete insurance coverage",
    },
    {
      icon: "👨‍💼",
      title: "Expert Team"
      // description: "Certified crane operators",
    },
    {
      icon: "💰",
      title: "Best Pricing"
      // description: "Competitive market rates",
    },
  ]

  return (
    <div className="contact">
      <div className="container">
        {/* Header */}
        <div className="contact-header text-center">
          <div className="header-badge">Get In Touch</div>
          <h1 className="page-title">Request Your Project Quote</h1>
          <p className="page-subtitle">
            Ready to start your project? Fill out our comprehensive form below and our expert team will get back to you
            with a detailed, competitive quote within 24 hours. We're here to make your project a success.
          </p>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <div className="features-grid 2">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="form-section">
            <div className="form-container">
              <div className="form-header">
                <h2 className="form-title">Project Details Form</h2>
                <p className="form-subtitle">Please provide detailed information about your project requirements</p>
              </div>

              {submitStatus === "success" && (
                <div className="alert alert-success">
                  <div className="alert-icon">✅</div>
                  <div className="alert-content">
                    <h4>Request Submitted Successfully!</h4>
                    <p>Thank you for your inquiry. Our team will contact you within 24 hours with a detailed quote.</p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="alert alert-error">
                  <div className="alert-icon">❌</div>
                  <div className="alert-content">
                    <h4>Submission Failed</h4>
                    <p>There was an error submitting your request. Please try again or contact us directly.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">
                      <span className="label-text">Full Name</span>
                      <span className="label-required">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`form-input ${errors.fullName ? "error" : ""}`}
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && <p className="error-message">{errors.fullName}</p>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      <span className="label-text">Phone Number</span>
                      <span className="label-required">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`form-input ${errors.phone ? "error" : ""}`}
                      placeholder="Enter your 10-digit phone number"
                    />
                    {errors.phone && <p className="error-message">{errors.phone}</p>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    <span className="label-text">Email Address</span>
                    <span className="label-required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`form-input ${errors.email ? "error" : ""}`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="error-message">{errors.email}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="craneType" className="form-label">
                    <span className="label-text">Crane Type Required</span>
                    <span className="label-required">*</span>
                  </label>
                  <select
                    id="craneType"
                    name="craneType"
                    value={formData.craneType}
                    onChange={handleInputChange}
                    className={`form-input ${errors.craneType ? "error" : ""}`}
                  >
                    <option value="">Select the type of crane you need</option>
                    {craneTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.craneType && <p className="error-message">{errors.craneType}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="projectDescription" className="form-label">
                    <span className="label-text">Project Description</span>
                    <span className="label-required">*</span>
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    rows={6}
                    className={`form-input ${errors.projectDescription ? "error" : ""}`}
                    placeholder="Please describe your project requirements in detail including:
• Project location and site conditions
• Timeline and duration needed
• Specific lifting requirements
• Any special considerations or constraints"
                  />
                  {errors.projectDescription && <p className="error-message">{errors.projectDescription}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`submit-btn btn btn-primary ${isSubmitting ? "loading" : ""}`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading-spinner"></span>
                      Submitting Request...
                    </>
                  ) : (
                    <>
                      <span className="btn-icon">📤</span>
                      Submit Project Request
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="info-section">
            <div className="contact-info">
              <div className="info-header">
                <h2 className="info-title">Get In Touch With Us</h2>
                <p className="info-subtitle">
                  Multiple ways to connect with our expert team. Choose what works best for you.
                </p>
              </div>

              <div className="contact-methods-grid">
                {contactInfo.map((info, index) => (
                  <div key={index} className={`contact-method-card contact-${info.color}`}>
                    <div className="method-header">
                      <div className="method-icon-container">
                        <span className="method-icon">{info.icon}</span>
                      </div>
                      <div className="method-info">
                        <h3 className="method-title">{info.title}</h3>
                        <p className="method-subtitle">{info.description}</p>
                      </div>
                    </div>
                    <div className="method-details">
                      {info.details.map((detail, idx) => (
                        <div key={idx} className="detail-item">
                          <span className="detail-text">{detail}</span>
                        </div>
                      ))}
                    </div>
                    <div className="method-action">
                      <button
                        className={`action-btn btn-${info.color}`}
                        onClick={() => {
                          if (info.title === "Phone Support") {
                            window.open("tel:+918511231514", "_self")
                          } else if (info.title === "Email Support") {
                            window.open("mailto:info@cranehirepro.com", "_self")
                          } else if (info.title === "Our Location") {
                            window.open(
                              "https://maps.google.com/?q=123+Industrial+Boulevard,+Construction+City",
                              "_blank",
                            )
                          } else {
                            window.open("tel:+918511231514", "_self")
                          }
                        }}
                      >
                        <span className="btn-icon">{info.icon}</span>
                        <span>Contact Now</span>
                        <span className="btn-arrow">→</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact Bar */}
            <div className="quick-contact-bar">
              <div className="quick-contact-content">
                <div className="quick-contact-text">
                  <h3>Need Immediate Assistance?</h3>
                  <p>Our team is ready to help you right now</p>
                </div>
                <div className="quick-contact-actions">
                  <button className="quick-btn quick-call" onClick={() => window.open("tel:+918511231514", "_self")}>
                    <span className="quick-icon">📞</span>
                    <span>Call Now</span>
                  </button>
                  <button
                    className="quick-btn quick-whatsapp"
                    onClick={() =>
                      window.open(
                        "https://wa.me/918511231514?text=Hi, I need crane rental services. Please provide more information.",
                        "_blank",
                      )
                    }
                  >
                    <span className="quick-icon">💬</span>
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="emergency-contact">
              <div className="emergency-content">
                <div className="emergency-badge">
                  <span className="emergency-pulse"></span>
                  <span className="emergency-text">24/7 EMERGENCY</span>
                </div>
                <h3 className="emergency-title">Emergency Crane Service</h3>
                <p className="emergency-description">
                  Critical lifting operations can't wait. Our emergency response team is available around the clock for
                  urgent situations.
                </p>
                <button className="emergency-btn" onClick={() => window.open("tel:+918511231514", "_self")}>
                  <span className="btn-icon">🚨</span>
                  <span className="btn-text">Emergency Hotline: +91-8511231514</span>
                  <span className="btn-pulse"></span>
                </button>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="why-choose-us">
              <h3 className="section-title">Why Choose CraneHire Pro?</h3>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <div className="benefit-icon">🛡️</div>
                  <div className="benefit-content">
                    <h4>Fully Licensed & Insured</h4>
                    <p>Complete coverage for peace of mind</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">👨‍💼</div>
                  <div className="benefit-content">
                    <h4>Expert Operators</h4>
                    <p>10+ years certified experience</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🏗️</div>
                  <div className="benefit-content">
                    <h4>Modern Fleet</h4>
                    <p>Latest safety technology</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">💰</div>
                  <div className="benefit-content">
                    <h4>Competitive Pricing</h4>
                    <p>Transparent, fair quotes</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">⚡</div>
                  <div className="benefit-content">
                    <h4>Quick Response</h4>
                    <p>2-hour quote guarantee</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🎯</div>
                  <div className="benefit-content">
                    <h4>Precision Work</h4>
                    <p>Accurate, safe operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Animation */}
      {showSuccessAnimation && (
        <div className="success-overlay">
          <div className="success-modal">
            <div className="success-animation">
              <div className="checkmark-container">
                <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                  <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
                  <path className="checkmark-check" fill="none" d="m14.1 27.2l7.1 7.2 16.7-16.8" />
                </svg>
              </div>
              <div className="success-content">
                <h2 className="success-title">Request Sent Successfully!</h2>
                <p className="success-message">
                  Thank you for choosing CraneHire Pro! Our expert team has received your project details and will
                  contact you within 24 hours with a comprehensive quote tailored to your needs.
                </p>
                <div className="success-features">
                  <div className="success-feature">
                    <span className="feature-icon">⚡</span>
                    <span>Quick Response</span>
                  </div>
                  <div className="success-feature">
                    <span className="feature-icon">💰</span>
                    <span>Best Pricing</span>
                  </div>
                  <div className="success-feature">
                    <span className="feature-icon">🛡️</span>
                    <span>Fully Insured</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
