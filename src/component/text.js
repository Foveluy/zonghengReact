import { FontSize } from '../utils'
import React from 'react'

export const SmallText = ({ children, textAlign = 'center' }) => {
  return <div style={{ fontSize: FontSize.small, textAlign: textAlign }}>{children}</div>
}
