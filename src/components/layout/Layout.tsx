


type LayoutProps = {
    children: React.ReactNode
    }


const Layout = ({children}: LayoutProps) => {
  return (
    <div>
        <header>
            <h1>My App</h1>
        </header>
        <main>
            {children}
        </main>
    </div>
  )
}

export default Layout