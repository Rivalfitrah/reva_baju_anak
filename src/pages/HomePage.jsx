import React from 'react'
import '../app.css'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Card from '../components/Card'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection imagesrc="/images/Group 2.svg" posisi="mb-25"/>
      <Card judul="Produk Terbaru" jumlah={4} isi={4}/>
      <div className='pt-25'>
      <HeroSection imagesrc="/images/banner.svg" posisi="right-[29%] mb-10"/>
      </div>
      <div className='pt-25'>
      <Card judul="Rekomendasi Produk" jumlah={12} isi={4}/>
      </div>
      <br />
      <Footer />
    </>
  )
}

export default HomePage