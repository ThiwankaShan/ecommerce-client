import React from 'react'
import { Navbar } from './navbar'

type LayoutProps = {
    children: React.ReactNode,
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="content">
            <div>
                <Navbar />
            </div>
            <div style={{ padding: "20px" }}>
                {children}
            </div>
        </div>
    )
}
