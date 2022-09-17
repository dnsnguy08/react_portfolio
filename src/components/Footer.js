import React from "react";

// const navTitles = ["ABOUT ME", "PORTFOLIO", "CONTACT", "RESUME"];

function Footer() {
    return (
        <footer className="footerContainer container">
            <h4 className="">@Dennis Nguyen, 2022</h4>
            <div className='ps-4 pb-2'>
                <a href='mailto:dnsnguy08@gmail.com' className="footerImage">
                    <i className='bi bi-envelope-fill h5 px-2 footerImage'></i>
                </a>
                <a href='https://github.com/dnsnguy08' className="footerImage" target='_blank' rel='noreferrer'>
                    <i className='bi bi-github h5 px-2 footerImage'></i>
                </a>
                <a href='https://www.linkedin.com/in/dennis-nguyen-a19bb9b6/' className="footerImage" target='_blank' rel='noreferrer'>
                    <i className='bi bi-linkedin h5 px-2 '></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer