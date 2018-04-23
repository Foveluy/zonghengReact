import React from 'react'

export const BottomBarItem = ({ children, backgroundColor, color, ...others }) => {
  return (
    <div className="bottom-bar-item" {...others} style={{ backgroundColor: backgroundColor, color: color }}>
      {children}
    </div>
  )
}

export const BottomBar = ({ children }) => {
  return (
    <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
      <div className="bottom-bar-wrap" style={{ display: 'flex' }}>
        {children}
      </div>
    </div>
  )
}
