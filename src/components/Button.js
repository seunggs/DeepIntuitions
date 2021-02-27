import React from 'react'
import { Link } from 'gatsby'

const Button = ({
  priority = 'primary',
  shape = 'round',
  type = 'button',
  size = 'md',
  block = false,
  to,
  href,
  children,
}) => {
  const priorityMap = {
    'primary': 'btn-primary',
    'primary-outline': 'btn-primary-outline',
  }
  const priorityClassName = priorityMap[priority]

  const sizeMap = {
    'sm': 'btn-sm',
    'md': 'btn-md',
    'lg': 'btn-lg',
  }
  const sizeClassName = sizeMap[size]

  const shapeMap = {
    'round': 'btn-round'
  }
  const shapeClassName = shapeMap[shape]

  /**
   * Elements
   */
  const ButtonContent = ({}) => (
    <div className="flex flex-row items-center">
      <div className="mr-2">{children}</div>
      <div>&rarr;</div>
    </div>
  )
  const InternalLink = ({}) => <Link to={to}><ButtonContent /></Link>
  const ExternalLink = ({}) => <a href={href} target="_blank"><ButtonContent /></a>

  return (
    <button type={type} className={`btn ${priorityClassName} ${sizeClassName} ${shapeClassName} ${block ? 'block w-full' : ''}`}>
      {to ? <InternalLink /> : href ? <ExternalLink /> : <ButtonContent />}
    </button>
  )
}

export default Button