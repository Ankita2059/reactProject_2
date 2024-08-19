import React from 'react'

const Contact = () => {
  return (
    <>
    
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

export default Contact
