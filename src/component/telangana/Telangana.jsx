import React from 'react';
import './Telangana.css';

import MuseumsTel from './pic/MuseumsTel.webp';
import PalacesTelanagana from './pic/PalacesTelanagana.jpg';
import ramuji from './pic/ramuji.jpg';
import templeTalanglana from './pic/templeTelanglana.jpg';
import WaterfallsTelangana from './pic/WaterfallsTelangana.jpg';


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



const Telangana = () => {

  return (
    <>
    
    
    {/* <div className='banner3'>
        <p className='tourTitles'>Tourism to Telangana</p>
    </div> */}
    <div>
        <p className='title'>Tourism in Telangana</p>

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

<br></br>
        <article class="newspaper">
        Telangana is located in the southern part of India and is renowned for its natural attractions, temples, palaces, forts and other heritage sites. The rich cultural heritage of the state makes it one of the most visited tourist destinations in South India.

            According to the Telangana State Tourism Development Corporation, about 92.8 million and 0.318 million domestic and international tourists, respectively, visited the state in 2018. This tourist-friendly state has a large number of big and small accommodation options including budget, luxury and heritage hotels, homestays and resorts.

            After India’s freedom, the then Nizam wanted Hyderabad State to remain independent. But the Indian Government annexed it in 1948 with ‘Operation Polo’. In 1956, Telangana region was combined with Andhra State to form Andhra Pradesh. In the years that followed, there were many major movements to revoke the merger. Consequently, the state of Telangana was officially formed from the northwest part of Andhra Pradesh on 2nd June, 2014.
          
</article>
    </div>

    <div>
        <p className='catogoryTitle'>Popular area to visit in Telangana</p>
        
        <div className='catogaryDiv'>
            <img src={templeTalanglana} alt="" className='wbimages'/>
            <p className='textWBCat'>Temples: Jagannath Temple, Kolanupaka Jain Temple, Thousand Pillar Temple, Sita Ramachandraswamy Temple, Ramappa Temple  </p>
        </div>

        <div className='catogaryDiv'>
            <p className='textWBCat'>Museums: Salar Jung Museum, Telangana State Archaeology Museum, BM Birla Science Museum, Heritage Jail Museum, Sudha Cars Museum            </p>
            <img src={MuseumsTel} alt="" className='wbimages'/>

        </div>

        <div className='catogaryDiv'>
        <img src={WaterfallsTelangana} alt="" className='wbimages' />
            <p className='textWBCat'> Lakes & Waterfalls: Hussain Sagar Lake, Osman Sagar Lake, Durgam Cheruvu, Laknavaram Lake, Pakhal Lake,
 Kuntala Waterfalls, Mallela Theertham, Bheemuni Paadam Waterfalls, Gayatri Waterfalls, Kanakai Waterfalls  </p>
        </div>

        <div className='catogaryDiv'>
            <p className='textWBCat'>
            Forts & Palaces: Qutb Shahi tombs ,Charminar ,Golconda Fort, Bhongir Fort, Warangal Fort, Elgandal Fort, Khammam Fort, Devarakonda Fort, Jagtial Fort, Chowmahalla Palace, Hill Fort Palace, Falaknuma Palace, King Kothi Palace, Jubilee Hall, Purani Haveli
            </p>
            <img src={PalacesTelanagana} alt=""className='wbimages' />

        </div>


        <div className='catogaryDiv'>
        <img src={ramuji} alt=""className='wbimages' />

            <p className='textWBCat'>
            Other Attractions: Ramoji Film City, Wonderla, Manjeera Dam, Ananthagiri Hills
            </p>

        </div>
    </div>
    
    
    
    
    
    
    
   
    
    
    </>
  )
}
export default Telangana;


