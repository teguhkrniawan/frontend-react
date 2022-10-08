import React from 'react'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'

export const Layout = ({children}) => {
  return (
    <>
        <Navbar />
        <div className="columns mt-6">
            <div className="column is-2" style={{minHeight: '100vh'}}>
                <Sidebar />
            </div>
            <div className="column has-background-light">
                <main className='p-2'>
                    {children}
                </main>
            </div>
        </div>
    </>
  )
}
