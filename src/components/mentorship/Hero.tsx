'use client'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import Image from 'next/image'

export const Hero = () => {
  return (
    <section className="container mx-auto py-12 md:py-20 relative overflow-hidden">
      <div className='flex justify-between mx-auto px-6 pb-6'>
        <Image
          src={'/images/logo.svg'}
          width={72}
          height={48}
          alt="Hero Image"
          style={{ objectFit: 'contain' }}
          className="rounded-lg"
        />
        <button className='border border-[#64cdf6] rounded-4xl font-bold px-8 h-16'>
          Book a session
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          className="order-2 lg:order-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-jakarta mb-6 leading-tight">
            Your Cyber Skills<br />Mastery Begins<br />Here
          </h1>
          <p className="text-lg md:text-xl mb-8 text-foreground/80 max-w-lg mx-auto lg:mx-0">
            Transform Your Skills. Empowering Your Future
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button className='inline-flex items-center px-12 py-10 bg-gradient-to-r from-[#075E80] to-[#62CBF4] text-white text-xl font-medium rounded-full shadow-md'>
              Book a Session
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="order-1 lg:order-2 relative w-full h-64 md:h-80 lg:h-96 xl:h-[28rem] max-w-md mx-auto lg:max-w-none"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src={'/images/nmcyber-shield.svg'}
            fill
            alt="Hero Image"
            style={{ objectFit: 'contain' }}
            className="rounded-lg"
          />
        </motion.div>
      </div>
      {/* ARTWORK - BG-DECOR */}
      {/* <BackgroundArtwork /> */}
      {/* <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" /> */}
    </section>
  )
}

