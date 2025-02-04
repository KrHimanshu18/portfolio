function App() {
  return (
    <div>
      <header className="header">
        <a href="/" className="logo">
          Himanshu.
        </a>

        <nav className="navbar">
          <a href="#" className="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#education">Experience</a>
          <a href="#contact">Contact</a>
          <a href="/assets/index.html">Resume</a>
        </nav>
      </header>

      <section className="home">
        <div className="home-content">
          <h1>Hi, I'm Himanshu Kumar</h1>
          <h3>Frontend Developer</h3>
          <p>
            I'm frontend developer passionate about creating engaging user
            experiences through clean, responsive design and innovative web
            solutions.
          </p>
          <div className="btn-box">
            <a href="/assets/index.html">Resume</a>
            <a href="#contact">Contact Me</a>
          </div>
        </div>

        <div className="home-src">
          <a href="https://github.com/KrHimanshu18">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/himanshu-kumar-8a83802a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <i className="bx bxl-linkedin-square"></i>
          </a>

          <a href="mailto:krhimanshugaya@gmail.com">
            <i className="bx bx-envelope"></i>
          </a>
        </div>
        <img src="/src/assets/mypic.jpg" className="mypic" />
        <span className="home-imgHover"></span>
      </section>

      <section className="about" id="about">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <div className="about-img">
          <img src="/src/assets/mypic.jpg" alt="" />
          <span className="circle"></span>
        </div>

        <div className="about-content">
          <h3>Frontend Developer</h3>
          <p>
            I am a passionate frontend web developer with expertise in HTML,
            CSS, and JavaScript. I create responsive, user-friendly websites and
            web applications, ensuring seamless user experiences across all
            devices. With a keen eye for design and a strong understanding of
            modern web development practices, I excel in turning creative
            concepts into functional interfaces. I am committed to continuous
            learning and staying updated with the latest industry trends to
            deliver high-quality, efficient, and innovative solutions.
          </p>
        </div>
      </section>

      <section className="skill" id="skill">
        <h2 className="heading">
          My <span>skill</span>
        </h2>

        <div className="skill-row">
          <div className="skill-column">
            <h3 className="title">Coding Skills</h3>

            <div className="skill-box">
              <div className="skill-content">
                <div className="progress">
                  <h3>
                    HTML <span>90%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>

                <div className="progress">
                  <h3>
                    CSS <span>80%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>

                <div className="progress">
                  <h3>
                    JAVA <span>70%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>

                <div className="progress">
                  <h3>
                    DSA <span>80%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-column">
            <h3 className="title">Professional Skills</h3>

            <div className="skill-box">
              <div className="skill-content">
                <div className="progress">
                  <h3>
                    WEB DESIGN <span>90%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>

                <div className="progress">
                  <h3>
                    WEB DEVELOPMENT <span>65%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>

                <div className="progress">
                  <h3>
                    GRAPHIC DESIGN <span>70%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>

                <div className="progress">
                  <h3>
                    APP DEVELOPMENT <span>60%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="education" id="education">
        <h2 className="heading">
          My <span>Journey</span>
        </h2>

        <div className="education-row">
          <div className="education-column">
            <h3 className="title">Education</h3>
            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bx-calendar"></i>2023 - 2027
                  </div>
                  <h3>B. Tech.</h3>
                  <p>Indian Institute of Information Technology, Guwahati</p>
                  <p>CGPA : 7.17</p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bx-calendar"></i>2020 - 2022
                  </div>
                  <h3>Class - 12th, CBSE</h3>
                  <p>Gyan Bharti Resi Complex, Bodhgaya, Gaya, Bihar</p>
                  <p>Percentage : 82.4%</p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bx-calendar"></i>2019 - 2020
                  </div>
                  <h3>Class - 10th, CBSE</h3>
                  <p>D.A.V Public School, Cantt. Area, Gaya, Bihar</p>
                  <p>Percentage : 89.2%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="education-column">
            <h3 className="title">Projects</h3>
            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  {/* <div className="year">
                  <i className="bx bx-calendar"></i>2023 - 2027
                </div> */}
                  <h3>
                    <a href="https://github.com/KrHimanshu18/BLOG-SITE">
                      Blog Site
                    </a>
                  </h3>
                  <p>
                    This project involves creating a dynamic blog site using
                    HTML, CSS, and JavaScript. It integrates RESTful APIs for
                    managing posts and comments, allowing users to create, edit,
                    and delete posts. The site features a responsive design,
                    ensuring optimal viewing across all devices.
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <h3>
                    <a href="https://github.com/KrHimanshu18/Joke-Generator">
                      Joke Generator
                    </a>
                  </h3>
                  <p>
                    This project involves creating a joke generator site using
                    HTML, CSS, and JavaScript. It leverages an external API to
                    fetch and display jokes dynamically. The site features a
                    clean and responsive design, ensuring an optimal user
                    experience across all devices. Users can generate new jokes
                    with a simple click, making the site interactive and fun.
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <h3>Gird Art</h3>
                  <p>
                    This project involves creating a Mondrian-inspired grid art
                    using HTML and CSS. Utilizing CSS Grid and Flexbox, the
                    design replicates Mondrian’s distinctive style with
                    colorful, asymmetrical grids. The project showcases
                    responsive design principles, ensuring the artwork scales
                    and adjusts seamlessly across all devices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="education-column">
            <h3 className="title">Experience</h3>
            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bx-calendar"></i>June'23 - July'23
                  </div>
                  <h3>
                    <a href="/image/encCert.png">Java Developer - Encryptix</a>
                  </h3>
                  <p>
                    My journey as a Java developer involved creating three
                    projects: a Number Guessing Game to learn loops and
                    conditionals, a Student Grade Calculator for arrays and data
                    processing, and an ATM Interface for user authentication and
                    transaction management. Each project enhanced my
                    problem-solving skill and proficiency in Java, progressively
                    building my knowledge from basic to more complex concepts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2 className="heading">
          Contact <span>Me</span>
        </h2>

        <form action="#">
          <div className="inputbox">
            <div className="input-field">
              <input type="text" placeholder="Full Name" required />
              <span className="focus"></span>
            </div>

            <div className="input-field">
              <input type="text" placeholder="Email Address" required />
              <span className="focus"></span>
            </div>
          </div>

          <div className="inputbox">
            <div className="input-field">
              <input type="number" placeholder="Mobile Number" required />
              <span className="focus"></span>
            </div>

            <div className="input-field">
              <input type="text" placeholder="Email Subject" required />
              <span className="focus"></span>
            </div>
          </div>
          <div className="textarea-field">
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Your Message"
              required
            ></textarea>
            <span className="focus"></span>
          </div>

          <div className="btn-box btns">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </section>

      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; 2023 by Himanshu | All rights reserved.</p>
        </div>

        <div className="footer-iconTop">
          <a href="#">
            <i className="bx bx-up-arrow-alt"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
