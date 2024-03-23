import React, { useState } from 'react';
//import image1 from '../images/P.jpeg';
import h1 from '../images/h1.jpg'
import h3 from '../images/h3.jpg'
import h4 from '../images/h4.jpg'
import h5 from '../images/h5.jpg'
import './Home.css'

import { Link } from 'react-router-dom';


function Home() {
  const handleImageHover = (event) => {
    const description = event.target.getAttribute('data-description');
    const descriptionElement = document.querySelector('.description p');
    descriptionElement.textContent = description;
    const cardElement = document.querySelector('.gc-1');
    cardElement.style.display = 'block';
  };

  const handleImageLeave = () => {
    const cardElement = document.querySelector('.gc-1');
    cardElement.style.display = 'block';
  };

  const [hovered, setHovered] = useState(Array(3).fill(false)); // Use an array to track hover state for each card

  const handleMouseEnter = (index) => {
    const updatedHovered = [...hovered];
    updatedHovered[index] = true;
    setHovered(updatedHovered);
  };

  const handleMouseLeave = (index) => {
    const updatedHovered = [...hovered];
    updatedHovered[index] = false;
    setHovered(updatedHovered);
  };

  const informationStyles = {
    position: 'relative',
    zIndex: '1',
    opacity: '1', // Set initial opacity to 1
    transition: '0.35s',
    transform: 'translateY(0)',
    margin: '20px',
  };

  const cardStyles = {
    maxWidth: '360px',
    position: 'relative',
    margin: '20px',
  };


  return (
    <div>
      <div>

        <div className='home-pic pt-5'>
          <h1 className=' text-white text-center pt-5 bg-home' >PrepQuest</h1>
          <p className='text-white text-center px-5 mx-5 bg-p'>"PrepQuest is an innovative platform that transforms static PDF question papers into interactive mock tests for exams like JEE. Users can upload question papers, generate online assessments, and even upload answer keys for automatic correction. With features like timers, test reviews, and social sharing, it's a comprehensive tool for exam preparation and assessment analysis."</p>
        </div>

        <div className="home-container">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "20px" }}>
            {/* First Box: Upload Your File */}
            <div style={{ backgroundColor: '#f5f5f5', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', margin: '20px' }}>
              <div style={{ marginBottom: '10px' }}>
                <h2 style={{ marginTop: '0', marginBottom: '10px' }}>Upload Your File</h2>
                <p style={{ fontSize: '18px', color: '#666', marginBottom: '20px' }}>
                  This feature allows you to upload your PDF files to take mock exams and improve your scores and efficiency.
                </p>
                <Link to="" style={{ textDecoration: 'none' }}>
                  <button style={{
                    padding: '15px 40px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    transition: 'background-color 0.3s ease',
                    textDecoration: 'none',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  }}>
                    Upload Your Syllabus/Text File
                  </button>
                </Link>
              </div>
            </div>
            {/* Second Box: Add your content here */}
            <div style={{ backgroundColor: '#f5f5f5', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', margin: '20px' }}>
              <div style={{ marginBottom: '10px' }}>
                <h2 style={{ marginTop: '0', marginBottom: '10px' }}>Upload Your File</h2>
                <p style={{ fontSize: '18px', color: '#666', marginBottom: '20px' }}>
                  This feature allows you to upload your PDF files to take mock exams and improve your scores and efficiency.
                </p>
                <Link to="/upload" style={{ textDecoration: 'none' }}>
                  <button style={{
                    padding: '15px 40px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    transition: 'background-color 0.3s ease',
                    textDecoration: 'none',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  }}>
                    Upload Your Question Paper
                  </button>
                </Link>
                {/* Add your content here */}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="card-deck" style={{ maxWidth: '1800px' }}>
              <div className="row row-cols-1 row-cols-md-4 g-12 mt-4 mb-3 mx-2">
                <div className="col mb-4">
                  <div className="card c1 h-100 p-3 " style={{ backgroundColor: "#ece5db" }} >
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/014/618/920/small/test-administrator-illustration-concept-a-flat-illustration-isolated-on-white-background-vector.jpg" className="card-img-top" alt="..." width=" 238px"
                      height=" 185px" />
                    <div className="card-body">
                      <h5 className="Apple">Why We Exist</h5>
                      <p className="card-text">We exist to make a positive impact on the world by providing valuable services, products, or solutions that address needs and improve the lives of individuals or society as a
                        whole.  </p>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card c1 h-100 p-3 " style={{ backgroundColor: "#ece5db" }}>
                    <img src="https://img.freepik.com/free-vector/online-testing-banner_107791-3684.jpg" className="card-img-top" alt="..." width=" 238px"
                      height=" 185px" />
                    <div className="card-body">
                      <h5 className="Apple">Why PrepQuest</h5>
                      <p className="card-text">Prep Quest offers a comprehensive platform designed to help individuals prepare for various challenges,
                        whether they be academic exams, professional certifications, or personal development goals.</p>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card c1 h-100 p-3 " style={{ backgroundColor: "#ece5db" }} >
                    <img src="https://www.shutterstock.com/image-illustration/3d-education-mock-test-exam-260nw-2133924155.jpg" className="card-img-top" alt="..." width=" 238px"
                      height=" 185px" />
                    <div className="card-body">
                      <h5 className="Apple">Our Mission</h5>
                      <p className="card-text">Our mission is to democratize education and
                        opportunity by providing accessible, high-quality learning resources to individuals worldwide. </p>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card c1 h-100 p-3 " style={{ backgroundColor: "#ece5db" }}>
                    <img src="https://media.istockphoto.com/id/1398462038/photo/online-exam-or-test.jpg?s=612x612&w=0&k=20&c=hvaH_2oA0Dm-tpQ8T5JBF_39QF3xhpic38Yi2AngaCE=" className="card-img-top" alt="..." width=" 238px"
                      height=" 185px" />
                    <div className="card-body">
                      <h5 className="Apple">Join Our Community</h5>
                      <p className="card-text">Joining our community means becoming part of a diverse and supportive network of individuals who share common goals, interests, and passions. Our community provides a platform for collaboration.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='galler-con1'>
            <div className="me-5 pe-5 gallery">
              <img
                src="data:image/jpeg;base64,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"
                alt="Hot air balloon"
                data-description="Join Prep Quest today to seamlessly manage your sales, connect with customers, and enhance your business's success. Sell your natural products directly to customers, increase your profits, and enjoy the convenience of efficient buyer coordination."
                onMouseEnter={handleImageHover} // Call the function on mouse enter
                onMouseLeave={handleImageLeave}
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg3YQrTY3skMh6mYDA4i6hO3TTZUMEFQ-SBA&s"
                alt="Sky view of an old city"
                data-description="Prep Quest empowers you to sell your products directly to customers, eliminating the need for intermediaries. Enjoy better prices for your hard work and maximize the returns on your agricultural efforts with FreshEarthFinds."
                onMouseEnter={handleImageHover}
                onMouseLeave={handleImageLeave}
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk69bY_7b9njPlqiSFX7SEs8taVU0ZXgsVjQ&s"
                alt="Small boat"
                data-description="Prep Quest simplifies coordination with your customers by providing a centralized platform. Manage orders, track deliveries, and handle payments seamlessly, all within a single, user-friendly interface."
                onMouseEnter={handleImageHover}
                onMouseLeave={handleImageLeave}
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWKcLap6htLYCnGt2hEL0Bg3EjKzCg9uXubQ&s"
                alt="Forest landscape"
                data-description="Selling directly to customers not only boosts your profits but also fuels the growth of your business. With Prep Quest, you can expand your reach, connect with more customers, and enhance your product sales effortlessly."
                onMouseEnter={handleImageHover}
                onMouseLeave={handleImageLeave}
              />
            </div>
            <div className='description gallery me-5'>
              <div className="gc-1">
                <p>This is where the description will be displayed.A card is a box-shaped element in the webpage which is used to add information that can be separated from other elements on the website. It will be easily visible to the users.</p> {/* This is where the description will be displayed */}
              </div>
            </div>
          </div>

          <div className='container mb-5 mt-5'>
            <h1>FREQUENTLY ASKED QUESTIONS!</h1>
            <div className="faq-content">
              <FAQQuestion
                id="q1"
                title="What is Prep Quest?"
                content="Prep Quest is a centralized platform dedicated to empowering consumers with comprehensive user-reviewed information on a diverse range of natural products. We aim to bridge 
                the gap between consumers and quality items, fostering transparency, reliability, and authenticity in the marketplace."
              />
              <FAQQuestion
                id="q2"
                title="How does Prep Quest ensure the authenticity and quality of products listed on the platform?"
                content="We prioritize authenticity and quality by fostering a community-driven approach where users can review and share insights about products. Additionally, we collaborate with trusted 
                suppliers and conduct rigorous vetting processes to ensure that products align with our standards and values."
              />
              <FAQQuestion
                id="q3"
                title="Can anyone join the Prep Quest community?"
                content="Absolutely! Prep Quest welcomes conscious consumers, reviewers, advocates, and anyone passionate about promoting transparency, sustainability, and ethical practices in 
                the natural products landscape. Join our community to engage, share, and grow together."
              />
              <FAQQuestion
                id="q4"
                title="What sets Prep Quest apart from other platforms?"
                content="Prep Quest stands out by prioritizing transparency, reliability, and community-driven insights. We offer a centralized hub where users can explore, review, and discover authentic, high-quality 
                natural products, fostering trust and empowering consumers to make informed decisions aligned with their values."
              />
              <FAQQuestion
                id="q5"
                title="Is Prep Quest affiliated with specific brands or suppliers?"
                content="Prep Quest maintains a neutral stance and does not have affiliations with specific brands or suppliers. Our platform aims to provide unbiased, comprehensive user-reviewed 
                information, enabling consumers to navigate the natural products landscape with confidence and clarity."
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function FAQQuestion({ id, title, content }) {
  return (
    <div className="faq-question">
      <input id={id} type="checkbox" className="panel" />
      <div className="plus">+</div>
      <label htmlFor={id} className="panel-title">{title}</label>
      <div className="panel-content">{content}</div>
    </div>
  );
}

export default Home;
