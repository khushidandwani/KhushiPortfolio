import React, { useState } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import '../App.css'
import Hero from '../Portfolio website/hero.png'; 
import Hero2 from '../Portfolio website/my image.png';
import ProjectImg from '../Portfolio website/Project1.png';
import ProjectImg2 from '../Portfolio website/Project2.png';
import ProjectImg3 from '../Portfolio website/Form.png';
import Clock from '../Portfolio website/Clock.png';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Home=()=> {
  const [activeTab, setActiveTab] = useState('education')

  const educationCards = [
    {
      date: '2025-2028',
      status: 'Currently Pursuing',
      title: 'BCA, Computer Science',
      description: 'Lucky Institute of Professional Studies',
    },
    {
      date: '2012-2024',
      status: 'Percentage - 75%',
      title: 'CBSE Education ',
      description: 'Central Board of Secondary Education',
    },
  ]

  const achievementCards = [
    {
      date: '2024',
      status: 'Hackathon Winner',
      title: 'Best UI Innovation',
      description: 'Won first place for creative web app design.',
    },
    {
      date: '2023',
      status: 'Open Source',
      title: 'GitHub Contributor',
      description: 'Contributed to multiple community projects.',
    },
  ]

  const activeCards = activeTab === 'education' ? educationCards : achievementCards


 const [index, setIndex] = useState(0);
  const projects = [
  {
    id: 1,
    category: "Frontend Web Application",
    title: "Cake Bakery Website",
    description: 'Welcome to our bakery portfolio — a delightful showcase of handcrafted cakes and sweet creations made with passion and precision. From elegant celebration cakes to rich, mouthwatering desserts, each piece reflects our dedication to quality, creativity, and taste.',
    features: [
      "High-quality product gallery display",
       "Custom-designed cakes for every occasion",
      "Good User Interface",
    ],
    live : "https://perfectcakebakery.netlify.app/",
    tech: ["Javascript.js", "HTML", "Boostrap", "CSS"],
    image: ProjectImg,
  },
  {
    id: 2,
    category: "Pasword Dashboard App",
    title: "Password Generator",
    description: "Modern design with Generator App.",
    tech: ["React", "CSS", "UseState Hook" , "Boostrap" , "Useeffect" , "Map()"],
    live : "https://projectgeneator.netlify.app/",
    image: ProjectImg2,
  },
  {
    id: 3,
    category: "User Contact Form",
    title: "Form Vadidation App ",
    description: "Modern design with Form Validation Successfully .",
    tech: ["React", "CSS", "UseState Hook" , "Boostrap" , "Useeffect" ],
    live : "https://formverfication.netlify.app/",
    image: ProjectImg3,
  },
   {
    id: 4,
    category: "Time Clock",
    title: " Digital Clock ",
    description: "Modern design with Form Validation Successfully .",
    tech: ["Javascript", "CSS", "Date()" , "SetTimeout()" ],
    image: Clock,
  },
];

  const nextSlide = () => {
    setIndex((prev) => 
       prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const project = projects[index];

  // defining the navabar background //



  // ==========================defining the form validation //

  let [Formdata , setFormdata] = useState(
    {
      FullName : "",
      Email : "",
      Phone : "",
      Message : "",
      index: ""
    }
  )

  // Checking the old data 
 let [Userdata , SetUserData] = useState([])

  const  GetValue = (event)=>{
    let OldData = {...Formdata}
    let inputname = event.target.name;  //
    let InputValue = event.target.value;
    OldData[inputname] = InputValue;
    setFormdata(OldData);
  }


  // Checking the unique data //

  //form submit //
 const HandleSubmit = (event) => {
  event.preventDefault();

  if(Formdata.index !== "") {
    // Edit mode — directly update karo, duplicate check mat karo
    let EditIndex = Formdata.index;
    let OldeUserData = Userdata;
    OldeUserData[EditIndex]['Name'] = Formdata.name;
    OldeUserData[EditIndex]['Email'] = Formdata.Email;
    OldeUserData[EditIndex]['Phone'] = Formdata.Phone;
    OldeUserData[EditIndex]['Message'] = Formdata.Message;
    SetUserData(OldeUserData);
  } else {
    // Add mode — tabhi duplicate check karo
    let isDuplicate = Userdata.find(user => user.Email === Formdata.Email);
    if(isDuplicate) {
      toast.error("Data already exists!");
      return; 
    }
    SetUserData([...Userdata, Formdata]);
  }

  setFormdata({ FullName: "", Email: "", Phone: "", Message: "", index: "" });
  toast.success("Form Submitted Successfully");
}
 
  
  return (
      <>
        <div className="hero-section">
          <div className='home-left'>
            <span>Availiable for Work</span>
            <h1>I'm Khushi-</h1>
            <h1>Web Developer</h1>
            <p>I design and build clean, responsive web experiences using HTML, CSS, and React.
            I love turning ideas into pixel-perfect interfaces that are fast, functional, and
            beautiful. Currently open to freelance projects and full-time opportunities.</p>
            <div className='buttonbox'>
              <button className='github-btn'><i className="fa fa-suitcase" /> Hire me</button>
              <button className='github-btn'>View CV</button>
            </div>
          </div>
          <div className='home-right'>
            <img src={Hero} alt='Hero illustration' />
          </div>
        </div>

        {/* ====================ABOUT US SECTION */}
      <section className='about'>
        <div className='about-left'>
          <div className='aboutbox'>
            <div className='orbit-icon'><i className="fa fa-html5" aria-hidden="true"></i></div>
            <div className="icon icon1">⚛️</div>
            <div className="icon icon2">📜</div>
            <div className="icon icon3">💻</div>
            <div className="icon icon4">🟢</div>
            <div className="icon icon5">🔥</div>
            <div className="icon icon6">📦</div>
            <div className='imagebox'>
              <img src={Hero2} alt='About illustration' />
            </div>
          </div>
          <a href='https://github.com/khushidandwani' className='btn github-btn' target='_blank' rel='noopener noreferrer'>
           View Github Profile
          </a>
        </div>
        <div className='about-right'>
          <div className='about-content'>
            <h2>About Me</h2>
            <p>I design and build clean, responsive web experiences using HTML, CSS, and React. I love turning ideas into pixel-perfect interfaces that are fast, functional, and beautiful. Currently open to freelance projects and full-time opportunities.</p>
          </div>
          <div className='Tables'>
            <div className='tables-header'>
              <button type='button' className={`tab ${activeTab === 'education' ? 'active' : ''}`} onClick={() => setActiveTab('education')}>
                Education
              </button>
              <button type='button' className={`tab ${activeTab === 'achievements' ? 'active' : ''}`} onClick={() => setActiveTab('achievements')}>
                Achievements
              </button>
            </div>
            <div className='tables-grid'>
              {activeCards.map((card) => (
                <div key={card.title} className='table-card'>
                  <div className='card-row'>
                    <span className='card-date'>{card.date}</span>
                    <span className='card-status'>{card.status}</span>
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <div className='card-progress' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
      <div className="portfolio">
      <span>PORTFOLIO</span>
      <h1>Featured Projects</h1>
      <p className="desc">
        Explore my latest work showcasing modern web technologies.
      </p>

      <div className="portfolio-box">
        
        {/* LEFT IMAGE */}
        <div className="left">
          <img src={project.image} alt="" className='img-fluid'/>

          <button className="nav left-btn" onClick={prevSlide}>‹</button>
          <button className="nav right-btn" onClick={nextSlide}>›</button>
        </div>

        {/* RIGHT CONTENT */}
        <div className="right">
          <h6 className="tag">{project.category}</h6>
          <h2>{project.title}</h2>
          <p>{project.description}</p>

          {/* <h4>KEY FEATURES</h4>
          <ul>
            {project.features.map((f, i) => (
              <li key={i}>✔ {f}</li>
            ))}
          </ul> */}

          <div className="tech">
            {project.tech.map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>

          <div className="buttons">
             <a href={project.live} target="_blank" rel="noopener noreferrer">
             <button className="live">Live Preview</button>
             </a>
          </div>
        </div>
      </div>
    </div>
    </section>
    <section>
      <div className='Contact-box'>
            <h1>Have A Doubt !</h1>
            <p>Have a question, idea, or project in mind? We’d love to hear from you. Fill out the form below and our team will get back to you as soon as possible.</p>
            <div className="Form">
            {/* {Userdata.length} */}
          <form onSubmit={HandleSubmit}>
            <div className="pb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" onChange={GetValue} name="FullName" value={Formdata.FullName} placeholder='Enter Your Name'/>
            </div>
             <div className="pb-3">
              <label className="form-label">Email</label>
              <input type="Email" className="form-control"  onChange={GetValue} name="Email" value={Formdata.Email} placeholder='Enter Your Email'/>
            </div>
             <div className="pb-3">
              <label className="form-label">Phone</label>
              <input type="tel" className="form-control" name="Phone" onChange={GetValue} value={Formdata.Phone} placeholder='Enter Your Phone Number'/>
            </div>
             <div className="pb-3">
              <label className="form-label">Message</label>
              <input type="text" className="form-control" name="Message" onChange={GetValue} value={Formdata.Message} placeholder='Type Your Message here'/>
            </div>
            <button className="live" onClick={HandleSubmit}>Submit
              <ToastContainer/>
            </button>
          </form>
        </div>
      </div>
    </section>
    <section>
      <div className='Action'>
        <h1>Khushi Dandwani</h1>
        <div className='Social-links'>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-github"></i>
        </div>
      </div>
    </section>
    </>
  )
}


export default Home