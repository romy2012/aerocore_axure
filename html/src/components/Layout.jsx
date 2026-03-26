import { Outlet, NavLink } from 'react-router-dom'
import { Home, Compass, Gamepad2, User } from 'lucide-react'

const Layout = () => {
    return (
        <div style={{ paddingBottom: '80px' }}>
            <main>
                <Outlet />
            </main>

            <nav style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'var(--bg-primary)',
                borderTop: '1px solid #222',
                display: 'flex',
                justifyContent: 'space-around',
                padding: '12px 0',
                zIndex: 1000
            }}>
                <NavItem to="/" icon={<Home size={24} />} label="首页" />
                <NavItem to="/discovery" icon={<Compass size={24} />} label="发现" />
                <NavItem to="/console" icon={<Gamepad2 size={24} />} label="主机" />
                <NavItem to="/mine" icon={<User size={24} />} label="我的" />
            </nav>
        </div>
    )
}

const NavItem = ({ to, icon, label }) => {
    return (
        <NavLink
            to={to}
            style={({ isActive }) => ({
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: isActive ? 'var(--tab-text-active)' : 'var(--tab-text-default)',
                fontSize: '10pt',
                gap: '4px'
            })}
        >
            {icon}
            <span>{label}</span>
        </NavLink>
    )
}

export default Layout
