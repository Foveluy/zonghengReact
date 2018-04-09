import React from 'react'
import { FontSize } from '../../utils'

export const TabHeader = ({ time }) => {
    const t = time.split('-')
    return (
        <span key={time}>
            <span>{t[0]}</span>
            <span
                style={{
                    fontSize: FontSize.small,
                    marginLeft: 3
                }}
            >
                {t[1]}
            </span>
        </span>
    )
}
