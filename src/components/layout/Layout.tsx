import { ReactNode } from 'react'
import Header from './Header'
import TopBanner from './TopBanner'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <TopBanner />
      <Header />
      <main>{children}</main>
    </>
  )
} 