import React from 'react'
import "./Home.css"
import Cards from './Cards'
function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/uber_new_high._CB537689643_.jpg"/>
        </div>
        <div className='home_row'>
            <Cards title="Samsung Galaxy S25 Ultra | 256GB Memory | 8GB RAM| 200Mp Sony Camera" price={1296} rating={5} image="https://m.media-amazon.com/images/I/71rs4Aer71L._AC_UF1000,1000_QL80_.jpg"/>
            <Cards title="PNY NVIDIA GeForce RTX 4090 24GB Verto Triple Fan Graphics Card DLSS 3 (384-bit PCIe 4.0, GDDR6X, Supports 4k, Anti-Sag Bracket, HDMI/DisplayPort) - VCG409024TFXPB1" price={3899} rating={4} image="https://m.media-amazon.com/images/I/619QTa9dXXL._AC_UY327_FMwebp_QL65_.jpg"/>
        </div>
        <div className='home_row'>
            <Cards image="https://m.media-amazon.com/images/I/61giwQtR1qL._AC_UY327_FMwebp_QL65_.jpg
            " title="iPhone 16 Pro Max 256 GB: 5G Mobile Phone with Camera Control, 4K 120 fps Dolby Vision and a Huge Leap in Battery Life. Works with AirPods; Desert Titanium" price={1599} rating={5}/>
            <Cards image="https://m.media-amazon.com/images/I/51afJC92cgL._AC_UY327_FMwebp_QL65_.jpg
            " title="Sony PlayStation®5 Digital Edition (slim) Console Video Game" price={599} rating={5}/>
            <Cards image="https://m.media-amazon.com/images/I/81kAitW5qAL._AC_UY327_FMwebp_QL65_.jpg"
            title="Rockstar Games PS5 Video Game ConsoleGrand Theft Auto V"
            rating={3} price="25"/>
           
        </div>
        <div className='home_row'>
            <Cards image="https://m.media-amazon.com/images/I/61uzjC4QiBL._AC_SX466_.jpg"
            title="Acer Predator Gaming Monitor | 27 WQHD (2560 x 1440) OLED | AMD FreeSync Premium Pro | 240Hz | 0.03ms (G to G) | VESA DisplayHDR True Black 400 | Display Port 1.4 & 2 x HDMI 2.1 | X27U X1bmiiphx"
            rating={4} price="529"/>
            
        </div>
    </div>
  )
}

export default Home