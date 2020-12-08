import React from 'react'

const Headline = ({ children, size = 'lg' }) => {
  const sizeMap = {
    md: { fontSize: '2rem', lineHeight: '2.75rem' },
    lg: { fontSize: '2.75rem', lineHeight: '3.25rem' },
  }
  const sizeStyle = sizeMap[size]

  return (
    <h2 className={`text-black mb-5 font-medium`} style={sizeStyle}>{children}</h2>
  )
}

export default Headline