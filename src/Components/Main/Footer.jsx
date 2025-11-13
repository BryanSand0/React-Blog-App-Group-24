import './Footer.css';

function Footer() { 
    var currentYear = 2025;

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    {/* Copyright message*/}
                    <p className="copyright">
                        © {currentYear} My Blog. All rights reserved.
                    </p>
                    
                    {/* Additional footer links */}
                    <div className="footer-links">
                        <a href="#privacy">Privacy Policy</a>
                        <span className="separator">|</span>
                        <a href="#terms">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;