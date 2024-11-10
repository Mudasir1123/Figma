import React from 'react';
import Image from 'next/image';
import myImage from './Rectangle-6.png';
import rectangle from './Rectangle-8.png';
import first from './Rectangle-10.png';
import sec from './Rectangle-9.png';
import i15 from './image 15.png';
import i16 from './image 16.png';
import i17 from './image 17.png';
import i18 from './image 18.png';
import contact from './image 12.png';
import './globals.css';

export default function Home() {
  return (
    <>
    <div className="mainContainer">
      <div className="home-container">
        <div className="content-section">
          <div className='h1'>Project
            Lorem</div>
        </div>
        <div className="image-section">
          <Image
            src={myImage}
            alt="Welcome"
            width={500}
            height={200}
          />
        </div>
      </div>


      <div className="second">
        <div className="sec">
          <div className="image-group">
            <Image src={rectangle} alt="First" width={300} height={300} />
            <Image src={first} alt="Second" width={300} height={200} />
          </div>
          <div className="image-single">
            <Image src={sec} alt="Third" width={300} height={100} />
          </div>
          <div className="about-text">
            <h2>About</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>


      <div className="container-main">
        <div className="title">Main Focus/Mission Statement</div>
        <div className="focus-section">
          <div className="focus-item">
            <div className="number">1
              <div className="text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
              </div>
            </div>
          </div>
          <div className="focus-item">
            <div className="number">2
              <div className="text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.</p>
              </div>
            </div>
          </div>
        </div>
      </div>




<div className="container_project">
    <div className="section-title">Our Projects</div>
    <div className="projects-grid">
            <div className="project-overlay">
                <h3>Sample Project</h3>
                <h3>View More</h3>
            </div>
        <Image src={i15} alt="First" width={500} height={300} />
    </div>
       
<div className="images_group">
        <Image src={i16} alt="Third" width={250} height={300} />
        <Image src={i17} alt="Third" width={400} height={300} />
        <Image src={i18} alt="Third" width={250} height={300}/>
        </div>
</div>

<div className="mainContainer">
<h1>Contact US</h1>
      <div className="home-container">
        <div className="content-section">
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button>Send Message</button>
      </form>
        </div>
        <div className="image-section">
          <Image
            src={contact}
            alt="Welcome"
            width={500}
            height={200}
          />
        </div>
      </div>

</div>
  

  </div>
  
    </>
  );
}
