import React from 'react'

const SubHeadline = ({ children, size = 'md', className = 'blue' }) => {
  const sizeMap = {
    md: { fontSize: '1.125rem', lineHeight: '1.75rem', fontWeight: '500' },
  }
  const sizeStyle = sizeMap[size]

  return (
    <div className={`mb-3 ${className}`} style={sizeStyle}>{children}</div>
  )
}

export default SubHeadline