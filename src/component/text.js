import { FontSize } from '../utils'
import React from 'react'

export const SmallText = ({ children, textAlign = 'center', style }) => {
  return <div style={{ ...style, fontSize: FontSize.small, textAlign: textAlign }}>{children}</div>
}
