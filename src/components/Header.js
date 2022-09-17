import React from 'react';

function Header({ currentPage, handlePageChange, setLayout }) {

    const homeEl = document.getElementById('homeNav');
    const aboutMeEl = document.getElementById('aboutMeNav');
    const projectEl = document.getElementById('projectNav');
    const resumeEl = document.getElementById('resumeNav');
    const contactEl = document.getElementById('contactNav');

    const navButtons = [homeEl, aboutMeEl, projectEl, resumeEl, contactEl]

    const removeActive = (elements) => elements.forEach(element => {
        element.classList.remove('active');
    })

    if (currentPage === 'home') {
        removeActive(navButtons)
        homeEl.classList.add('active');
    } else if (currentPage === 'aboutMe') {
        removeActive(navButtons)
        aboutMeEl.classList.add('active');
    }
    else if (currentPage === 'Phase1') {
        removeActive(navButtons)
        projectEl.classList.add('active');
    }
    else if (currentPage === 'Phase2') {
        removeActive(navButtons)
        projectEl.classList.add('active');
    }
    else if (currentPage === 'Phase3') {
        removeActive(navButtons)
        projectEl.classList.add('active');
    }
    else if (currentPage === 'Resume') {
        removeActive(navButtons)
        resumeEl.classList.add('active');
    }
    else if (currentPage === 'Contact') {
        removeActive(navButtons)
        contactEl.classList.add('active');
    }


    return (

        <nav className='navbar navbar-expand-lg navbar-light bg-light sticky-top'>
            <div className='container-fluid navColor' id='home'>
                <a href='/' className='navbar-brand navText' id='homeNav'>Dennis Nguyen</a>
                <button className='navbar-toggler ' type='button' data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false'
                    aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon navText'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <a className='nav-link navText' href='#aboutMe' id='aboutMeNav' onClick={() => handlePageChange('aboutMe')}>About Me</a>
                        </li>
                        <li className='nav-item dropdown'>
                            <a className='nav-link dropdown-toggle navText' href='#Projects' id='projectNav' role='button'
                                data-bs-toggle='dropdown' aria-expanded='false'>
                                Projects
                            </a>
                            <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                <li>
                                    <a className='dropdown-item' href='#Projects' onClick={() => handlePageChange('Projects')} >Bootcamp Projects</a>
                                </li>
                                <li>
                                    <div style={{ borderTop: '2px solid #fff ', marginLeft: 20, marginRight: 20 }}></div>

                                </li>
                                <li>
                                    <a className='dropdown-item ms-4' href='#Phase1' onClick={() => handlePageChange('Phase1')}>Phase 1</a>
                                </li>
                                <li>
                                    <a className='dropdown-item ms-4' href='#Phase2' onClick={() => handlePageChange('Phase2')}>Phase 2</a>
                                </li>
                                <li>
                                    <a className='dropdown-item ms-4' href='#Phase3' onClick={() => handlePageChange('Phase3')}>Phase 3</a>
                                </li>
                                <li>
                                    <div style={{ borderTop: '2px solid #fff ', marginLeft: 20, marginRight: 20 }}></div>

                                </li>
                                <li><a className='dropdown-item disabled' href='#Projects'>Personal Projects</a></li>
                                <li>
                                    <div style={{ borderTop: '2px solid #fff ', marginLeft: 20, marginRight: 20 }}></div>

                                </li>
                            </ul>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link navText' href='#resume' id='resumeNav' onClick={() => handlePageChange('Resume')}>Resume</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link navText' href='#contact' id='contactNav' onClick={() => handlePageChange('Contact')}>Contact</a>
                        </li>
                        <li className='nav-item dropdown'>
                            <a className='nav-link dropdown-toggle navText' href='#View' id='projectNav' role='button'
                                data-bs-toggle='dropdown' aria-expanded='false'>
                                Toggle View
                            </a>
                            <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                <li>
                                    <label className='dropdown-item' onClick={() => setLayout(false)} >Single Page</label>
                                </li>
                                <li>
                                    <label className='dropdown-item'  onClick={() => setLayout(true)} >Tabbed</label>
                                </li>

                            </ul>
                        </li>


                    </ul>
                    <div style={{ borderTop: '2px solid #fff ', marginLeft: 20, marginRight: 20 }}></div>

                    <a href='mailto:dnsnguy08@gmail.com'>
                        <i className='bi bi-envelope-fill h4 px-2'></i>
                    </a>
                    <a href='https://github.com/dnsnguy08' target='_blank' rel='noreferrer'>
                        <i className='bi bi-github h4 px-2'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/dennis-nguyen-a19bb9b6/' target='_blank' rel='noreferrer'>
                        <i className='bi bi-linkedin h4 px-2'></i>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Header;