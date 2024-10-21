
import styles from './HomePage.module.css'

import { pics } from '../../assets/homepics/home';
import { useRef } from 'react';
import { groceryItems } from '../../assets/homepics/home';
import HomeNavbar from './HomeNavbar';
import Footer from './Footer/Footer';


const HomePage = ()=>{
    const carouselRef = useRef(null);

    const handlePrev = () => {
      carouselRef.current.scrollBy({
        left: -300, 
        behavior: 'smooth',
      });
    };
  
    const handleNext = () => {
      carouselRef.current.scrollBy({
        left: 300, 
        behavior: 'smooth',
      });
    };
    return(<>
     <div className={styles.backgroundImage}>
     <div className={styles.section}>
      <HomeNavbar />
      <div className={styles.overlay}></div>
      <div className={styles.contentsection}>
        <h1 className={styles.title}>Millions Of Happy</h1>
        <p className={styles.description}>
          Send unlimited free texts and make WiFi calls from a free phone number.
          Download the free app or sign up online to pick your free phone number.
        </p>
        <button className={styles.button}>Start Now</button>
      </div>
      </div>
     





     <div className={styles.carouselContainer}>
      <h2 className={styles.carouselTitle}>Top Seller</h2>

      <div className={styles.cardContainer} ref={carouselRef}>
        {groceryItems.map(item => (
          <div className={styles.card} key={item.id}>
            <div className={styles.cardImage}>
              <img src={item.imageUrl} alt={item.title} />
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDetails}>{item.details}</p>
            <p className={styles.cardDetails}>{item.descript}</p>
           
            <button className={styles.addToCartButton}>ADD CART</button>
          </div>
        ))}
      </div>

      <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={handlePrev}>
        &#8249;
      </button>
      <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={handleNext}>
        &#8250;
      </button>
    </div>


    <div className={styles.bannerLemon}>
      <div className={styles.leftArea}>
        <img src={pics.juice} alt=""  />
      </div>
      <div className={styles.rightArea}>
        <h1>Top Seller</h1>
        <p>On a recent test run of all three services, Text Free was the fastest, most reliable and easiest to use.</p>
      </div>

    </div>



    <div className={styles.carouselContainer}>
      <h2 className={styles.carouselTitle}>vegetable</h2>

      <div className={styles.cardContainer} ref={carouselRef}>
        {groceryItems.filter(item => item.type === 'vegetable').map(item => (

          <div className={styles.card} key={item.id}>
            <div className={styles.cardImage}>
              <img src={item.imageUrl} alt={item.title} />
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDetails}>{item.details}</p>
            <p className={styles.cardDetails}>{item.descript}</p>
           
            <button className={styles.addToCartButton}>ADD CART</button>
          </div>
        ))}
      
      </div>

      <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={handlePrev}>
        &#8249;
      </button>
      <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={handleNext}>
        &#8250;
      </button>
      
    </div>



   <div className={styles.cokaPromoContainer}>
    <div className={styles.leftimg}>
      <img src={pics.cola} alt="" />
    </div>
   
  
    <div className={styles.rightside}>
      <h1>COCA COLA</h1>
      <h4>1 LITRE</h4>
      <p>“On a recent test run of all three services.</p>
      <button>ADD CART</button>
    </div>
   </div>





   <div className={styles.carouselContainer}>
      <h2 className={styles.carouselTitle}>Softdrinks</h2>

      <div className={styles.cardContainer} ref={carouselRef}>
        {groceryItems.filter(item => item.type === 'bottle').map(item => (

          <div className={styles.card} key={item.id}>
            <div className={styles.cardImage}>
              <img src={item.imageUrl} alt={item.title} />
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDetails}>{item.details}</p>
            <p className={styles.cardDetails}>{item.descript}</p>
           
            <button className={styles.addToCartButton}>ADD CART</button>
          </div>
        ))}
      
      </div>

      <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={handlePrev}>
        &#8249;
      </button>
      <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={handleNext}>
        &#8250;
      </button>
      
    </div>


<div className={styles.promoImageBox}>

  <div className={styles.leftImageBox}>
    <img src={pics.pic30} alt="" className={styles.img} />
    <img src={pics.pic23} alt="" className={styles.img} />

  </div>
  <div className={styles.centerImageBox}>
  <img src={pics.middle} alt="" className={styles.centerimg} />

  </div>
  <div className={styles.rightImageBox}>

  <img src={pics.pic25} alt="" className={styles.rightimgs} />
  <img src={pics.pic26} alt="" className={styles.rightimgs} />

  </div>
</div>



<div className={styles.bannerLemon2} >
      <div className={styles.leftArea2}>
        <img src={pics.pic28} alt=""  />
      </div>
      <div className={styles.rightArea2}>
        <h1>Top Seller</h1>
        <p>On a recent test run of all three services, Text Free was the fastest, most reliable and easiest to use.</p>
      </div>

  </div>




  <div className={styles.promoImageBox}>

  <div className={styles.leftImageBox}>
    <img src={pics.pic38} alt="" className={styles.img} />
    <img src={pics.pic39} alt="" className={styles.img} />

  </div>
  <div className={styles.centerImageBox}>
  <img src={pics.pic40} alt="" className={styles.centerimg} />

  </div>
  <div className={styles.rightImageBox}>

  <img src={pics.pic41} alt="" className={styles.rightimgs} />
  <img src={pics.pic42} alt="" className={styles.rightimgs} />

  </div>
</div>




<div className={styles.carouselContainer}>
      <h2 className={styles.carouselTitle}>Gradient</h2>

      <div className={styles.cardContainer} ref={carouselRef}>
        {groceryItems.filter(item => item.type === 'gradient').map(item => (

          <div className={styles.card} key={item.id}>
            <div className={styles.cardImage}>
              <img src={item.imageUrl} alt={item.title} />
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDetails}>{item.details}</p>
            <p className={styles.cardDetails}>{item.descript}</p>
           
            <button className={styles.addToCartButton}>ADD CART</button>
          </div>
        ))}
      
      </div>

      <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={handlePrev}>
        &#8249;
      </button>
      <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={handleNext}>
        &#8250;
      </button>
      
    </div>





    <div className={styles.promoImageBox2}>
      <div className={styles.leftBox2}>
         <div className={styles.underleftBox}>
           <div  className={styles.Box2img1}>
            
           </div>
           <div className={styles.Box2img2} ></div> 
         </div>
         <div className={styles.underrightBox}>
         <div className={styles.Box2top}></div>
         <div className={styles.Box2bottom}></div>
          
         </div>

      </div>

      <div className={styles.rightBox2}>
      <div className={styles.underupperBox}>
        <div className={styles.leftportion1}></div>
        <div className={styles.rightportion1}></div>
      </div>
      <div className={styles.underlowerBox}>

      <div className={styles.leftportion2}></div>
      <div className={styles.rightportion2}></div>
      </div>
        
        </div>
  



    </div>

    <Footer/>

  </div>
    </>)
}
export default HomePage;