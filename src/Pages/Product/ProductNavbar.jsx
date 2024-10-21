import { useContext, useState } from 'react';
import styles from './ProductNavbar.module.css'; 
import Context from '../../Context/Context';
import { Link, useNavigate } from 'react-router-dom';

const ProductNavbar = () => {
  const [active, setActive] = useState('Product');
  const { login } = useContext(Context);
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbarLeft}>
          <div className={styles.navbarLeftLogo}>
            <h1>Your Logo</h1>
          </div>
        </div>
        <div className={styles.navbarRight}>
         
            <input
              className={styles.search}
              type='text'
              style={{
                width: '200px',
                height: '20px',
                borderRadius: '30px',
                marginRight: '10px',
                opacity: '80%',
                backgroundColor:'white'
              }}
              placeholder='Search...'/>
         
        
          <ul className={styles.navbarRightLinks}>
            <li
              className={active === 'Home' ? styles.active : ''}
              onClick={() => {
                setActive('Home');
                navigate('/');
              }}
            >
              Home
              <Link to='/'></Link>
            </li>
            <li
              className={active === 'About' ? styles.active : ''}
              onClick={() => {
                setActive('About');
                navigate('/About');
              }}
            >
              About Us
              <Link to='/About'></Link>
            </li>
          
             
           
              <li
                className={active === 'Product' ? styles.active : ''}
                onClick={() => {
                  setActive('Product');
                  navigate('/Product');
                }}
              >
                Product
                <Link to='/Product'></Link>
              </li>
           
            <li
              className={active === 'Contact' ? styles.active : ''}
              onClick={() => {
                setActive('Contact');
                navigate('/Contact');
              }}
            >
              Contact Us
              <Link to='/Contact'></Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductNavbar;
