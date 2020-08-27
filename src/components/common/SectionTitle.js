import React from 'react'

export default function SectionTitle({ children, title, subtitle }) {
    return (
        <div className="section-heading text-center">
            {subtitle ? (
                <h5 className="section__meta">{subtitle}</h5>
            ) : " "}

            {title ? (
                <h2 className="section__title padding-bottom-20px line-height-55">{title}</h2>
            ) : " "}

            <div className="section-divider"></div>
            {children}
        </div>
    )
}
