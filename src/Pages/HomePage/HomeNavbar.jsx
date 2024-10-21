import styles from './HomeNavbar.module.css'
import Context from '../../Context/Context';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
const HomeNavbar=()=>{

    const [active, setActive] = useState('Home');
    const { login } = useContext(Context);
    const navigate = useNavigate();
  
    return(<>
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
              placeholder="Search..."
              style={{
                width: '200px',
                height: '20px',
                borderRadius: '30px',
                marginRight: '10px',
                opacity: '80%',}}
             
              
            /> 
        
           
       
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
    </>)
}
export default HomeNavbar;