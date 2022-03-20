import Typical from 'react-typical';
import './profile.css';

export default function Profile(){
    return(
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className='colz-icon'>
                            <a href='https://github.com/michaelripoll'>
                                <i className="fa fa-github-square"></i>
                            </a>
                            {/* <a href='#'>
                                <i className="fa fa-google-plus-square"></i>
                            </a> */}
                            <a href='https://www.linkedin.com/in/michaelripoll/'>
                                <i className="fa fa-linkedin"></i>
                            </a>
                            <a href='https://www.youtube.com/channel/UCMWPxeHwH8Q3afWyVDjFLjA'>
                                <i className="fa fa-youtube-square"></i>
                            </a>
                            <a href='https://twitter.com/mripoll_dev'>
                                <i className="fa fa-twitter"></i>
                            </a>
                        </div>
                    
                    </div>
                
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'M <span className="highlighted-text">Michael</span>
                        </span>
                    </div>

                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                            "Ethusiasted Dev 🔴",
                                            1000,
                                            "Full Stack Developer 💻",
                                            1000,
                                            "Cross Platform Dev 🌐",
                                            1000,
                                            "React Dev 📱",
                                            1000,
                                    ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Knack of building applications with front and back end operations. 
                            </span>
                        </span>
                    </div>

                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me
                            {" "}
                        </button>
                        <a href='michaelripoll.pdf' download='CV michaelripoll.pdf' >
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>

                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>

            </div>
        </div>
    )
}