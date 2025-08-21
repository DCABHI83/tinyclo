import React from 'react'
import parent from '../assets/parent.png'
import background from '../assets/background.jpg'

const About = () => {
  return (
   <>
   <div>
    <div className="w-full bg-center bg-cover relative md:h-[42vh] h-[20vh]  " style={{backgroundImage:`url(${background})`}} >
      <div className='w-full md:h-[42vh]  bg-[#BDBCD4] h-[20vh] opacity-80'></div>
      <img className='md:absolute md:left-20 md:bottom-1 hidden md:block ' src={parent} alt="" />
       <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
             flex flex-col items-center gap-2 text-center'>
      <h1 className='md:text-7xl text-5xl font-[1000]'><span className='text-[#147AA9]'>About</span> <span className='text-[#FC6565]'>Us</span></h1>
      <h2 className='md:text-4xl font-[1000] pr-4'>We're Parents,Just Like You</h2>
    </div>
    </div>
   </div>
     <div className='flex flex-col justify-center items-center pb-10'>
      <div className='  flex flex-col gap-4 w-[95%] mt-5'>
           <p className='text-xl'>Welcome to TinyClo, your one-stop solution for all your baby's needs! We understand that babies grow fast, and keeping up with their clothing, toys, and equipment can be both expensive and overwhelming. That's why we're here to offer you a smarter, more sustainable way to meet those needs.</p>
   <p className='text-xl'> At TinyClo, our mission is to make parenting easier and more affordable by providing a convenient rental service for high-quality baby clothes, toys, and equipment. Whether you're looking for the perfect outfit for your little one, educational toys to stimulate their development, or essential baby gear to make your life easier, we've got you covered.

</p>
      </div>
      <div className='w-[95%] mt-4'>
        <h1  className='font-[1000] text-2xl'>Why Choose TinyClo?</h1>
        <div className='flex flex-col gap-5 mt-3'>
          <p className='text-xl'><span className='font-[1000] text-xl'> Affordable:</span> Save money by renting instead of buying. Our service allows you to access premium baby products at a fraction of the cost, giving you more flexibility in managing your budget.</p>
          <p className='text-xl'><span className='font-[1000] text-xl'>.Eco-Friendly:</span> Reduce waste and promote sustainable living by choosing to rent. By reusing high-quality products, you're helping us minimize environmental impact and support a greener future for our children.</p>
          <p className='text-xl'><span className='font-[1000] text-xl'>.Convenient:</span> We offer a wide range of products to suit your baby's ever-changing needs. From clothing and toys to strollers and car seats, you can easily rent what you need when you need it. Plus, we take care of cleaning and maintenance, so you can focus on enjoying time with your little one.

 </p>
          <p className='text-xl'><span className='font-[1000] text-xl'>.Quality Assurance:</span> Every item in our collection is carefully selected and thoroughly inspected to ensure it meets our high standards of quality and safety. Your baby's well-being is our top priority.

</p>
        </div>
      </div>

      <div className='w-[95%] mt-5'>
        <h1 className='text-2xl font-[1000]'>Our Story</h1>
<p className='text-xl'>TinyClo was born out of a desire to make parenting a little bit easier and a lot more sustainable. As parents ourselves, we know the challenges of keeping up with the constant demands of a growing baby. Our goal is to provide a practical solution that benefits both your family and the planet.</p>

      </div>

      <div className='w-[95%] flex flex-col gap-5 mt-5'>
        <h1 className='text-2xl font-[1000]'>Join Our Community</h1>
        <p className='text-xl'>At TinyClo, we believe in building a community of like-minded parents who value smart, eco-conscious choices. Join us in our mission to create a better future for our children by making thoughtful, sustainable decisions today.</p>
        <p className='text-xl'>Thank you for choosing TinyClo. We're excited to support you and your family with the best products and service possible!

</p>
      </div>

   </div>
   </>
  )
}

export default About
