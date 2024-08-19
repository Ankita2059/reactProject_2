import React from 'react'


const AboutUs = () => {
  return (
    <>
    
      <section id="aboutus" className="py-16 bg-gray-200 text-black">
        <div className="container mx-auto px-4 text-center ">
        <h2 className="text-3xl font-bold text-center mb-8">About  Us</h2>

            <div className="mb-8">
                <img src="about.jpg" alt="About Us" className="mx-auto rounded-lg shadow-lg" height={400} width={600}/>
            </div>
            <p className="text-lg max-w-2xl mx-auto">We are dedicated to providing the best web design services. Our team works tirelessly to ensure that your website stands out and meets your needs.</p>
        </div>
    </section> 

    </>
  )
}

export default AboutUs
