import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Discovery from './pages/Discovery'
import Console from './pages/Console'
import Mine from './pages/Mine'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="discovery" element={<Discovery />} />
                <Route path="console" element={<Console />} />
                <Route path="mine" element={<Mine />} />
            </Route>
        </Routes>
    )
}

export default App
