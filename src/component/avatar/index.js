import React from 'react'

export const Avatar = ({ size, src = 'https://pic1.zhimg.com/v2-deae641fba60b071f255ad1f0e3613cb_xl.jpg' }) => {
  return <img alt="rand" src={src} height={50} width={50} style={{ borderRadius: '50%' }} />
}
