import React from 'react'

interface Props {
    width?: number
    className?: string
}

export const ArrowForwardIcon = ({ width = 25, className }: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
    )
}
