import React from 'react'
import { Navbar } from './navbar'

type LayoutProps = {
    children: React.ReactNode,
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="content-wrapper" style={{ marginTop: "40px" }}>
                <div className="content-container">
                    {children}
                </div>
            </div>
        </div>
    )
}
