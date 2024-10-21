import React from "react";
import styles from "./Product.module.css";
import {banner2 , banner1, bannerimg, headerImg, Product, card1Img, card2Img } from "../../assets/ProductPics"; 
import ProductNavbar from "./ProductNavbar";
import Footer from "./Footer/Footer";


const ProductPage = () => {
  return (
    <>
    
    
      <div className={styles.header}>
        <ProductNavbar/>
  <div className={styles.headerLeft}>
    <p>
      Testy and 
    </p>
    <h1 className={styles.highlight}>Fresh</h1>


    <p>A mango is an edible stone fruit produced by the tropical tree Mangifera indica.</p>
    <div className={styles.stars}>
      ⭐⭐⭐⭐☆
    </div>
    <button className={styles.buyButton}>BUY NOW</button>
  </div>
  <div className={styles.headerRight}>
    <img src={headerImg.pic1} alt="Mango" />
  </div>
</div>
      <div className={styles.productContainer}>
        {Product.map((item, index) => (
          index < 8 && (
            <div key={item.id} className={styles.productCard}>
              <img
                src={item.image}
                alt={item.type}
                className={styles.productImage}
              />
              <div className={styles.ProductHeading}>
                <h3 className={styles.productType}>{item.type}</h3>
                <div className={styles.rating}>
                  <span>{item.rating}</span>
                  <img src={item.star} alt="star rating" className={styles.starIcon} />
                </div>
              </div>
              <p className={styles.description}>{item.description}</p> 
              <button className={styles.addToCartButton}>Add to Cart</button>
            </div>
          )
        ))}
      </div>

      <div className={styles.banner}>
        <img src={banner1} alt="Background" />
        <div className={styles.bannerContent} >
           <div style={{color:'white'}}>
              <h4 >Tasty and</h4>
              <h1 style={{color:'#ffcc00', fontFamily:'kaushan script',fontWeight:'600'}}>Fresh</h1>
              <p style={{color:'white'}}>A mango is an edible stone fruit produced by the tropical tree Mangifera indica.</p>
           </div>
          <div className={styles.bannerContentRight}>
            <img src={bannerimg} alt="Fruit Image" />
          </div>
       </div>
    </div>


      <div className={styles.productContainer}>
        {Product.map((item, index) => (
          index >= 8 && index < 16 && (
            <div key={item.id} className={styles.productCard}>
              <img
                src={item.image}
                alt={item.type}
                className={styles.productImage}
              />
              <div className={styles.ProductHeading}>
                <h3 className={styles.productType}>{item.type}</h3>
                <div className={styles.rating}>
                  <span>{item.rating}</span>
                  <img src={item.star} alt="star rating" className={styles.starIcon} />
                </div>
              </div>
              <p className={styles.description}>{item.description}</p> 
              <button className={styles.addToCartButton}>Add to Cart</button>
            </div>
          )
        ))}
      </div>
      


      <div className={styles.container}>
        <div className={styles.card}>
            <img src={card1Img} alt="Peaches"/>
            <h3>Fresh <span>4.3★</span></h3>
            <p>A peach is an edible stone fruit.</p>
            <button>Add Cart</button>
        </div>
        <div className={styles.card}>
            <img src={card2Img} alt="Avocado"/>
            <h3>Fresh <span>4.3★</span></h3>
            <p>An avocado is an edible stone fruit.</p>
            <button>Add Cart</button>
        </div>
    </div>





      <div className={styles.banner}>
        <img src={banner2} alt="Background" />
        <div className={styles.bannerContent}>
           <div className={styles.bannerContentLeft}>
              <h4>Tasty and</h4>
              <h1>Fresh</h1>
              <p>A mango is an edible stone fruit produced by the tropical tree Mangifera indica.</p>
           </div>

       </div>
    </div>

      <div className={styles.productContainer}>
        {Product.map((item, index) => (
          index >= 16 && index < 24 && (
            <div key={item.id} className={styles.productCard}>
              <img
                src={item.image}
                alt={item.type}
                className={styles.productImage}
              />
              <div className={styles.ProductHeading}>
                <h3 className={styles.productType}>{item.type}</h3>
                <div className={styles.rating}>
                  <span>{item.rating}</span>
                  <img src={item.star} alt="star rating" className={styles.starIcon} />
                </div>
              </div>
              <p className={styles.description}>{item.description}</p> 
              <button className={styles.addToCartButton}>Add to Cart</button>
            </div>
          )
        ))}



      </div>
      <Footer/>
    
    </>
  );
}

export default ProductPage;
