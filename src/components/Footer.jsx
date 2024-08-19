import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-around mb-8">
                <div className="mb-6">
                    <h3 className="text-lg font-semibold border-b-2 border-gray-500 pb-2">Company</h3>
                    <ul className="space-y-2 mt-4">
                        <li><Link to="/" className="hover:text-gray-400 transition-colors">About Us</Link></li>
                        <li><Link to="/" className="hover:text-gray-400 transition-colors">Our Services</Link></li>
                        <li><Link to="/" className="hover:text-gray-400 transition-colors">Privacy Policy</Link></li>
                        <li><Link to="/" className="hover:text-gray-400 transition-colors">Affiliate Program</Link></li>
                    </ul>
                </div>
                <div className="mb-6">
                    <h3 className="text-lg font-semibold border-b-2 border-gray-500 pb-2">Get Help</h3>
                    <ul className="space-y-2 mt-4">
                        <li><Link to="/" className="hover:text-gray-400 transition-colors">FAQ</Link></li>
                        <li><Link to="/" className="hover:text-gray-400 transition-colors">Shipping</Link></li>
                        <li><Link to="/" className="hover:text-gray-400 transition-colors">Returns</Link></li>
                        <li><Link to="/" className="hover:text-gray-400 transition-colors">Order Status</Link></li>
                        <li><Link to="/" className="hover:text-gray-400 transition-colors">Payment Options</Link></li>
                    </ul>
                </div>
                <div className="mb-6">
                    <h3 className="text-lg font-semibold border-b-2 border-gray-500 pb-2">Online Shop</h3>
                    <ul className="space-y-2 mt-4">
                        <li><Link to="/" className="hover:text-gray-400 transition-colors">Watch</Link></li>
                        <li><Link to="/" className="hover:text-gray-400 transition-colors">Blog</Link></li>
                        <li><Link to="/" className="hover:text-gray-400 transition-colors">Shoes</Link></li>
                        <li><Link to="/" className="hover:text-gray-400 transition-colors">Dress</Link></li>
                    </ul>
                </div>
                <div className="mb-6">
                    <h3 className="text-lg font-semibold border-b-2 border-gray-500 pb-2">Follow Us</h3>
                    <div className="flex space-x-4 mt-4">
                        <Link to="/" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook"><i className="fab fa-facebook-f"></i></Link>
                        <Link to="/" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter"><i className="fab fa-twitter"></i></Link>
                        <Link to="/" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram"><i className="fab fa-instagram"></i></Link>
                        <Link to="/" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></Link>
                    </div>
                </div>
            </div>
            <div className="text-center text-sm text-gray-500">© 2024 Your Company. All rights reserved.</div>
        </div>
    </footer>
    </>
  )
}

export default Footer
