import { aboutbottom , aboutbottom2, cardimg, ser1, ser2, ser3, uniq } from "../../assets/About";
import styles from "./AboutUs.module.css"

import AboutNavbar from "./AboutNavbar";
import Footer from "./Footer/Footer";
const AboutUs =()=>{
    return(<>
    <AboutNavbar />
        <div className={styles.wrapper}>
        <div className={styles.leftSection}>
            <div className={styles.content}>
                <h1 style={{fontFamily:'kaushan script'}}> About Us</h1>
                <p>TextFree is a mobile application and web service that allows users to send and receive text messages, as well as make and receive VoIP phone calls, for free.</p>
            </div>
        </div>
        <div className={styles.rightSection}>
            
        </div>
    </div>



    <div className={styles.container}>
      <div className={styles.card}>
        <img src={cardimg.card1} alt="Grocery 1" className={styles.image} />
        <div className={styles.textContainer}>
          <h3>Free text online</h3>
          <p>TextFree is a mobile application and web service</p>
          <a href="#">See More...</a>
        </div>
      </div>
      <div className={styles.card}>
        <img src={cardimg.card2} alt="Grocery 2" className={styles.image} />
        <div className={styles.textContainer}>
          <h3>Free text online</h3>
          <p>TextFree is a mobile application and web service</p>
          <a href="#">See More...</a>
        </div>
      </div>
      <div className={styles.card}>
        <img src={cardimg.card3} alt="Grocery 3" className={styles.image} />
        <div className={styles.textContainer}>
          <h3>Free text online</h3>
          <p>TextFree is a mobile application and web service</p>
          <a href="#">See More...</a>
        </div>
        </div>

        <div className={styles.card} style={{marginTop:'20vh'}}>
        <div className={styles.textContainer}>
          <h3>Free text online</h3>
          <p>TextFree is a mobile application and web service that allows users to send and receive text messages, as well as make and receive VoIP phone calls, for free over .</p>
          <a href="#">See More...</a>
        </div>
        </div>
      </div>


      <div className={styles.container1}>
      <div className={styles.imageContainer1}>
        <img src={aboutbottom} alt="Grocery Shopping" className={styles.image1} />
      </div>
      <div className={styles.textContainer1}>
        <h2>Free text online</h2>
        <p>
          TextFree is a mobile application and web service that allows users to
          send and receive text messages, as well as make and receive VoIP
          phone calls, for free over. TextFree is a mobile application and web
          service that allows users to send and receive text messages, as well
          as make and receive VoIP phone calls, for free over.
        </p>
        <a href="#">See More...</a>
      </div>
    </div>


    

    <div className={styles.container2}>
      <div className={styles.textSection2}>
        <h1>Free text online</h1>
        <p>
          TextFree is a mobile application and web service that allows users to send and receive text messages, 
          as well as make and receive VoIP phone calls, for free over the internet.
        </p>
        <p>
          TextFree is a mobile application and web service that allows users to send and receive text messages, 
          as well as make and receive VoIP phone calls, for free over the internet.
        </p>
        <a href="#" className={styles.link2}>See More...</a>
      </div>
      <div className={styles.imageSection2}>
        <img src={aboutbottom2} alt="Vegetables" />
      </div>
    </div>






    <div className={styles.serviceContainer}>
      <div className={styles.serviceHeader}>
        <h1>About service</h1>
        <p>
          TextFree is a mobile application and web service that allows users to send and receive text messages.
        </p>
      </div>
      <div className={styles.serviceGrid}>
        <div className={styles.serviceCard}>
          <img src={ser1} alt="Service 1" />
          <h2>Free text online</h2>
          <p>TextFree is a mobile application and web service.</p>
          <a href="#" className={styles.serviceLink}>See More...</a>
        </div>
        <div className={styles.serviceCard}>
          <img src={ser2} alt="Service 2" />
          <h2>Free text online</h2>
          <p>TextFree is a mobile application and web service.</p>
          <a href="#" className={styles.serviceLink}>See More...</a>
        </div>
        <div className={styles.serviceCard}>
          <img src={ser3} alt="Service 3" />
          <h2>Free text online</h2>
          <p>TextFree is a mobile application and web service.</p>
          <a href="#" className={styles.serviceLink}>See More...</a>
        </div>
      </div>
    </div>




    <div className={styles.uniqueContainer}>
      <div className={styles.uniqueImageSection}>
        <img src={uniq} alt="Groceries on laptop" />
      </div>
      <div className={styles.uniqueTextSection}>
        <h1>Free text online</h1>
        <p>
          TextFree is a mobile application and web service that allows users to send and receive text messages,
          as well as make and receive VoIP phone calls, for free over the internet.
        </p>
        <p>
          TextFree is a mobile application and web service that allows users to send and receive text messages,
          as well as make and receive VoIP phone calls, for free over the internet.
        </p>
        <a href="#" className={styles.uniqueLink}>See More...</a>
      </div>
    </div>
    <Footer/>
   
    </>)
}
export default AboutUs;