import styles from './Footer.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h5>Logo</h5>
                        </div>

                        <div className="col-md-4">
                            <h5>PRODUCT</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-white" aria-label="Product Overview">Product Overview</a></li>
                                <li><a href="#" className="text-white" aria-label="Omni-Channel">Omni-Channel</a></li>
                                <li><a href="#" className="text-white" aria-label="Sourcing">Sourcing</a></li>
                                <li><a href="#" className="text-white" aria-label="Compliance & Contracting">Compliance & Contracting</a></li>
                                <li><a href="#" className="text-white" aria-label="Payments">Payments</a></li>
                                <li><a href="#" className="text-white" aria-label="Data & Reporting">Data & Reporting</a></li>
                                <li><a href="#" className="text-white" aria-label="Pricing">Pricing</a></li>
                            </ul>
                        </div>

                        <div className="col-md-4">
                            <h5>WHY WORKSOME</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-white" aria-label="Product Overview">Product Overview</a></li>
                                <li><a href="#" className="text-white" aria-label="Omni-Channel">Omni-Channel</a></li>
                                <li><a href="#" className="text-white" aria-label="Sourcing">Sourcing</a></li>
                                <li><a href="#" className="text-white" aria-label="Compliance & Contracting">Compliance & Contracting</a></li>
                                <li><a href="#" className="text-white" aria-label="Payments">Payments</a></li>
                                <li><a href="#" className="text-white" aria-label="Data & Reporting">Data & Reporting</a></li>
                                <li><a href="#" className="text-white" aria-label="Pricing">Pricing</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className={`col ${styles.socialIcons}`}>
                            <a href="#" className="text-white" aria-label="Phone">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-white" aria-label="Email">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                </svg>
                            </a>

                            <a href="#" className="text-white" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                               <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                            </svg>
                            </a>
                            <a href="#" className="text-white" aria-label="LinkedIn">

                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                             <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                           </svg>
                            </a>
                            <a href="#" className="text-white" aria-label="Twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                             <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                           </svg>
                            </a>
                            {/* Other social icons */}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
