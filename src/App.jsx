import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import MainLayout from './layout/MainLayout'
import BasketPage from './Pages/BasketPage'
import WishlistPage from './Pages/WishlistPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/basket" element={<BasketPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
