import { Outlet } from 'react-router'
import { useAuth } from '../hooks/useAuth.js'
import Header from './Header.jsx'
import Footer from './Footer.jsx'


function Layout() {
  const { user } = useAuth()
  return (
    <>
      <Header />
      <main className="container" key={user?.uid ?? 'guest'}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout