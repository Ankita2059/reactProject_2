import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
    
    <section className="hero bg-green-800 text-white py-40 flex items-center justify-center text-center">
        <div className="space-y-6">
            <h1 className="text-6xl font-bold">Ankita</h1>
            <h2 className="text-3xl">Web Designer</h2>
            <p className="text-lg max-w-lg mx-auto">I am a passionate web designer who loves creating beautiful and functional websites.</p>
            <Link to="/contact" className="inline-block bg-white text-green-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Contact</Link>
        </div>
    </section>

    
    <section id="aboutus" className="py-16 bg-gray-200 text-black">
        <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-center mb-8">About  Us</h2>
            <div className="mb-8">
                <img src="about.jpg" alt="About Us" className="mx-auto rounded-lg shadow-lg" height={400} width={600} />
            </div>
            <p className="text-lg max-w-2xl mx-auto">We are dedicated to providing the best web design services. Our team works tirelessly to ensure that your website stands out and meets your needs.</p>
        </div>
    </section>

    
    <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
            <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label for="name" className="block text-gray-700">Name</label>
                    <input type="text" id="name" className="w-full p-2 border rounded-lg" placeholder="Your Name" required />
                </div>
                <div className="mb-4">
                    <label for="email" className="block text-gray-700">Email</label>
                    <input type="email" id="email" className="w-full p-2 border rounded-lg" placeholder="Your Email" required />
                </div>
                <div className="mb-4">
                    <label for="message" className="block text-gray-700">Message</label>
                    <textarea id="message" rows="4" className="w-full p-2 border rounded-lg" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="w-full bg-green-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-500 transition-colors">Submit</button>
            </form>
        </div>
    </section>

    
    
    </>
  )
}

export default Home
