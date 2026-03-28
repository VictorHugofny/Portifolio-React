import './style.css'

function Footer(){
    return(
        <footer className='footer'>
            <div className="container footer-content">
                <div className="footer-info">
                    <strong>Portfólio by</strong> <a href="https://github.com/VictorHugofny" target="_blank" rel="noreferrer">Victor Hugo (victorhugofny)</a>
                </div>
                <div className="footer-contact">
                    <a href="mailto:victorhugofny@gmail.com"><strong>victorhugofny@gmail.com</strong></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;