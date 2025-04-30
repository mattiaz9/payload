import React from 'react'

export function Logo(props: React.ComponentProps<'svg'>) {
  return (
    <svg fill="currentColor" viewBox="0 0 296 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M0 0h64v64H0V0zm64 0h64v64H64V0zm64 0h64v64h-64V0zm64 0h64v64h-64V0zm64 0h64v64h-64V0zM0 32h64v32H0V32zm64 0h64v32H64V32zm64 0h64v32h-64V32zm64 0h64v32h-64V32zm64 0h64v32h-64V32z" />
    </svg>
  )
}

export function Symbol(props: React.ComponentProps<'svg'>) {
  return (
    <svg fill="currentColor" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="32" cy="32" fill="#F9A800" r="32" />
    </svg>
  )
}
