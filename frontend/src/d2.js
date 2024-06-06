import React from 'react'
import { useLocation } from 'react-router-dom'
export default function D2() {
    const loc=useLocation();
  return (
    <div>{loc.state}</div>
  )
}
