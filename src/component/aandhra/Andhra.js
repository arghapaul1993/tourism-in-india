import React from 'react'
import Styles from "./andhra.module.css"


import pic01 from './pic/BannerTelangana.jpg';
import pic02 from './pic/MuseumsTel.webp';
import pic03 from './pic/PalacesTelanagana.jpg';
import pic04 from './pic/WaterfallsTelangana.jpg';
import pic05 from './pic/ramuji.jpg';
import pic06 from './pic/templeTelanglana.jpg';



import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";




const Andhra = () => {
  return (
    <>
    <div className={Styles.container}>
  <div className={Styles.main}>
  <div className={Styles.text}><h1  >Adventure Tourism in Andhra Pradesh</h1></div>

  <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
      
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={pic01} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={pic02} className='carouselImg'/></SwiperSlide>
        <SwiperSlide><img src={pic03} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={pic04} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={pic05} className='carouselImg'/></SwiperSlide> 
        <SwiperSlide><img src={pic06} className='carouselImg' /></SwiperSlide>
  
      </Swiper>

  </div>
    </div>
    <br/>
    <br/>
    <div className={Styles.tour}>
      <h2>Tourism in Andhra Pradesh</h2>
      <div className={Styles.about}>
        <div>
            <h3>About Andhra Pradesh</h3>
            <p>Blessed with two beautiful rivers, Krishna and Godavari, Andhra Pradesh has the Bay of Bengal to its west, and it boasts of a coastline of 972km, the longest in the country. This state is widely advertised as the Kohinoor of India by the tourism department. The state is most visited for its world famous Tirupati temple. Srisailam Mallikarjuneswar temple is another famous Shiva shrine and is one of the 12 Jyotirlinga temples in India.</p>
        </div>
        <div>
            <h3>Plenty of adventure to be had!</h3>
            <p>
The Vijayanagara dynasty can be credited for constructing some breathtaking structures in the state like Srisailam and Lepakshi temples. One of the famous mosques in the state is the Shahi Jamia Masjid in Adoni of Kurnool district. Rajahmundry city, located on the banks of Godavari River is one of the main attractions of the city. Likewise, Kolleru Lake is one of the largest freshwater lakes in India located in the state of Andhra Pradesh. A trip to this state will leave you completely mesmerised. </p>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      
      <hr/>
    </div>



    <br/>
      <br/>
      <br/>
    <br/>
      <br/>
      <br/>
      <div className={Styles.ad}>
       <div>
        <img height="100%" width="100%" src='https://media.istockphoto.com/id/1268716417/photo/misty-tirupathi.jpg?b=1&s=170667a&w=0&k=20&c=0vf7hLEbN9n_VKNSMNh1Z9H2iaBXerUKgJNDFyY7bWA=' />
       </div>
       <div>
       <h2> Tirupati Tourism</h2>
     
        <div className={Styles.textt}>
            <p>ituated in the Chittoor district of Andhra Pradesh, Tirupati is known for Lord Venkateshwara Temple, one of the most visited pilgrimage centers in the world. It is also one of the world's richest temples known by different names - Tirumala Temple, Tirupati Temple, and Tirupati Balaji Temple. Tirumala is one of the seven hills in Tirupati, where the main temple is located. The temple is believed to be where Lord Venkateshwara took the form of an idol and is home to the deity Govinda. Tirupati is one of India's oldest cities and is mentioned in many ancient Vedas and Puranas.

</p>
        </div>
       </div>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className={Styles.ad}>
       <div>
       <h3>Amaravathi Tourism</h3>
       <div className={Styles.textt}>
        <p>Known as the Capital of Andhra Pradesh, Amaravathi is a planned city on the banks of the River Krishna. Amaravathi is renowned for being a site of a Buddhist Stupa that is a semi-hemispherical structure containing Buddhist relics and often called the Abode of God. </p>
       </div>
       </div>
       <div>
        <img  height="100%" width="100%"  src='https://media.istockphoto.com/id/683979926/photo/125-feet-high-dhyana-buddha-statue-on-bank-of-river-krishna-where-historic-stupa-was-built-in.jpg?b=1&s=170667a&w=0&k=20&c=zjTdj-GuHZbZtKHgq72NCiNXX80WpSTuLxcGI5s_sxI='/>
       </div>
      </div>


      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className={Styles.ad}>
       <div>
        <img height="100%" width="100%"  src='https://media.istockphoto.com/id/1166001054/photo/virupaksha-hindu-temple-gopuram-captured-from-hemakuta-hill.jpg?s=612x612&w=0&k=20&c=eHgjjYRyK3DStKIUtaFTsNdOfO9-yygUFuG9i0Yo9pU='/>
       </div>
       <div>
       <h3>Vijayawada Tourism</h3>
        <div className={Styles.textt}>
    <p>Nestled on the banks of River Krishna in the state of Andhra Pradesh, Vijayawada is the second-largest populated city in the state. Known as the ‘commercial, political and media capital of Andhra Pradesh’, the city is one of the most rapidly growing urban cities in India. Covered by hills and canals, Vijayawada is also home to numerous caves and rock-cut temples carved out of these caves.</p>
        </div>
       </div>
      </div>

      <br/>
      <br/>
      <br/>

      <br/>
      <br/>
      <br/>
      <div className={Styles.ad}>
       <div>
   <h3>   The Heritage Haven of Andhra"</h3>
       <div className={Styles.textt}>
        <p>Anantapuram is the headquarters of Anantapur District in the Indian state of Andhra Pradesh. Anantapuram is not a cosmopolitan city. Neither is it a village. It is one of those towns in transition, that is at the confluence of the past and the future. Anantapuram reverberates with flashes of India's glorious history and the true ethnic traditions and values of India. Interestingly, Anantapur receives the second-lowest rainfall in India.</p>
       </div>
       </div>
       <div>
        <img height="100%" width="100%" src='https://media.istockphoto.com/id/481950558/photo/the-old-temple-in-bagan-myanmar-burma.jpg?s=612x612&w=0&k=20&c=Eswd5MQbY3sXuGo7EomPRFDyi2bTJRxtYQcB_SLx1d0='/>
       </div>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className={Styles.ad}>
       <div>
        <img height="100%" width="100%"  src='https://media.istockphoto.com/id/466328210/photo/srisailam-jyotirlinga-temple.jpg?b=1&s=170667a&w=0&k=20&c=vdZiywwNK841Rr5au6e0wP4Et6UlpIMs9P5MFcO0D5E=' />
       </div>
       <div>
       <h3>Srisailam Tourism</h3>
        <div className={Styles.textt}>
            <p>Srisailam, a hill town in Kurnool district of Andhra Pradesh is home to the holy Malikarjuna Jyotirlinga and also as one of the eighteen Shakti Peethas of goddess Parvati. Situated on the banks of river Krishna, Srisailam is identified with a wildlife sanctuary and a dam. </p>
        </div>
       </div>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className={Styles.ad}>
       <div>
       Lepakshi Tourism
       <div className={Styles.textt}>
        <p>Lepakshi is a small quaint village with a trail of several great kingdoms that once ruled the area. Located in the Anantpur district of Andhra Pradesh, Lepakshi is located at a distance of 120 km from Bangalore making it a great choice for one day trip. Founded in 1535 AD by Maharaja Aliya Rama Raya of the Vijayanagara empire, Lepakshi is a trove of several fascinating archaeological sites, beautiful ancient temples and rich culture.</p>
       </div>
       </div>
       <div>
       <img height="100%" width="100%"  src='https://media.istockphoto.com/id/1390023980/photo/beautiful-stone-carved-huge-nagalingam-lepakshi-temple-stone-carved-nagalingam-eighteen-feet.jpg?b=1&s=170667a&w=0&k=20&c=TNC0opfnKgJie3G5GG7aYIGQpcAdnSudjlIwTaeSNsc='/>
       </div>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className={Styles.ad}>
       <div>
        <img height="100%" width="100%"  src='https://media.istockphoto.com/id/519886489/photo/tower-of-victory-chittorgarh-fort-rajasthan-india.jpg?s=612x612&w=0&k=20&c=eeqiHdKgxbse11xaLWK7-hfeBRdztEP980yHaBaq5g4='/>
       </div>
       <div>
       <h3>Chittoor Tourism</h3>
      
        <div className={Styles.textt}>
            <p>Steeped in religion, devotion and architecture, Chittoor is a place that everyone should visit at least once in their lifetime.

Also blessed with scenic beauty, cascading waterfalls and a beautiful hill station, Chittoor is not a disappointment to the traveller who seeks redemption from the busy metro life. Also known as the Mango City, Chittoor offers myriad varities of heavenly mangoes to please its visitors.</p>
        </div>
       </div>
      </div>
      <br/>
      <br/>
      <br/>
    </>
  )
}

export default Andhra