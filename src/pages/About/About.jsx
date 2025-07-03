"use client"

import "./About.css"
import { useState, useEffect, useRef } from "react"

const useCountUp = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start)
  const [isVisible, setIsVisible] = useState(false)
  const countRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * (end - start) + start)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration, start])

  return [count, countRef]
}

export default function About() {
  const [count1, ref1] = useCountUp(25)
  const [count2, ref2] = useCountUp(500)
  const [count3, ref3] = useCountUp(50)

  const stats = [
    { number: `${count1}+`, label: "Years Experience", icon: "🏆", ref: ref1 },
    { number: `${count2}+`, label: "Projects Completed", icon: "👥", ref: ref2 },
    { number: `${count3}+`, label: "Crane Fleet", icon: "🔧", ref: ref3 },
    { number: "24/7", label: "Service Available", icon: "🕐", ref: null },
  ]

  const values = [
    {
      title: "Safety Excellence",
      description:
        "Safety is our top priority. We maintain the highest safety standards and ensure all operators are fully certified and trained.",
      icon: "🛡️",
    },
    {
      title: "Reliability",
      description:
        "Count on us to deliver on time, every time. Our well-maintained fleet and experienced team ensure project success.",
      icon: "⏰",
    },
    {
      title: "Expertise",
      description:
        "With decades of combined experience, our team brings unmatched knowledge to every lifting challenge.",
      icon: "👨‍💼",
    },
    {
      title: "Innovation",
      description: "We continuously invest in the latest crane technology and equipment to provide superior service.",
      icon: "💡",
    },
  ]

  return (
    <div className="about">
      <div className="container">
        {/* Header */}
        <div className="about-header text-center">
          <h1 className="page-title">About CraneHire Pro</h1>
          <p className="page-subtitle">
            Leading the industry in professional crane services with a commitment to safety, reliability, and excellence
            in every project we undertake.
          </p>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stats-grid grid grid-4">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card text-center" ref={stat.ref}>
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="mission-section">
          <div className="mission-content">
            <h2 className="section-title text-center">Our Mission</h2>
            <p className="mission-text">
              At CraneHire Pro, our mission is to provide exceptional crane rental services that exceed our clients'
              expectations while maintaining the highest standards of safety and professionalism. We are committed to
              being the most trusted partner for construction, industrial, and commercial projects of all sizes.
            </p>
            <p className="mission-text">
              Founded over 25 years ago, we have built our reputation on reliability, expertise, and unwavering
              commitment to safety. Our team of certified operators and project managers work tirelessly to ensure every
              lift is executed flawlessly, on time, and within budget. We understand that your project's success depends
              on having the right equipment and expertise when you need it most.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="values-section ">
          <h2 className="section-title text-center">Our Core Values</h2>
          <div className="values-grid grid grid-4">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-header">
                  <div className="value-icon">{value.icon}</div>
                  <h3 className="value-title">{value.title}</h3>
                </div>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  )
}
