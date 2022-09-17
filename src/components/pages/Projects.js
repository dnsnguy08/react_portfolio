//Project images
import PokemonWarImg from "../../images/PokemonWar.jpg";
import workdayScheduleImg from "../../images/WordaySchedule.jpg";
import WeatherDashboardImg from "../../images/WeatherDashboard.jpg";
import SingItLoudImg from "../../images/SingItLoud.jpg";
import TechBlogImg from "../../images/TechBlog.jpg";
import NoteTakerImg from "../../images/NoteTaker.jpg";
import TextEditorImg from "../../images/TextEditor.jpg";

// Icons
import CSS3Icon from "../../images/skills/CSS3.svg";
import ExpressIcon from "../../images/skills/express.svg";
import HerokuIcon from "../../images/skills/heroku.svg";
import HTML5Icon from "../../images/skills/html5.svg";
import JavascriptIcon from "../../images/skills/javascript.svg";
import mysqlIcon from "../../images/skills/mysql.svg";
import nodeIcon from "../../images/skills/nodejs.svg";
import tailwindIcon from "../../images/skills/tailwindcss.svg";

function Projects() {
  return (
    <section className="container2">
      <div className="sectionProjects h2">Projects</div>

      <div className="phase1 h3 pt-5 mx-auto" id="Phase1">
        <a href="Projects"> </a>Phase 1
      </div>

      <article className="homework1">
        <div className="card h-100" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={workdayScheduleImg}
            alt="Homework 1"
          ></img>
          <div className="card-body h-75">
            <h5 className="card-title">Workday Schedule</h5>
            <p className="card-text">
              An application utilizing Moment.JS to create a workday
              planner that saves to local storage.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="d-flex justify-content-around my-1">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={HTML5Icon} alt="HTML5" />
                </a>
                <a
                  href="https://www.w3.org/TR/CSS/#css"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={CSS3Icon} alt="CSS3" />
                </a>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={JavascriptIcon} alt="Javascript" />
                </a>
              </div>
            </li>
          </ul>
          <div className="card-body">
            <a
              href="https://github.com/dnsnguy08/work_day_calendar"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Repo
            </a>
            <a
              href="https://dnsnguy08.github.io/work_day_calendar/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Deployed link
            </a>
          </div>
        </div>
      </article>

      <article className="homework2">
        <div className="card h-100" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={WeatherDashboardImg}
            alt="Homework 2"
          ></img>
          <div className="card-body h-75">
            <h5 className="card-title">Weather App</h5>
            <p className="card-text">
              An application that searches for a city's weather forecast
              using the OpenWeather API.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="d-flex justify-content-around my-1">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={HTML5Icon} alt="HTML5" />
                </a>
                <a
                  href="https://www.w3.org/TR/CSS/#css"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={CSS3Icon} alt="CSS3" />
                </a>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={JavascriptIcon} alt="Javascript" />
                </a>
              </div>
            </li>
          </ul>
          <div className="card-body">
            <a
              href="https://github.com/dnsnguy08/weather_forecast_search"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Repo
            </a>
            <a
              href="https://dnsnguy08.github.io/weather_forecast_search/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Deployed link
            </a>
          </div>
        </div>
      </article>

      <section className="project1 h-50">
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={PokemonWarImg}
            alt="Taco Bout Hoppiness"
          ></img>
          <div className="card-body h-25">
            <h5 className="card-title">Pokemon War!</h5>
            <p className="card-text">
              The team was able to work colloboratively in an AGILE scrum setting 
              and work towards the goal in a sprint (2-week) timeline. Front-end and back-end skills were 
              used to develop dynamic features on the page; such as storing local data, card animations, and event listeners. 
              We were able to successfully incorporate two server-side APIs to build a two-player game
            </p>
            <p>
              Personal Contribution - Logic for button functions, logic for randomizing player hands and 
              utilization of the dice roll API. Created 'battle formula' and win condition.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="d-flex justify-content-around my-3">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={HTML5Icon} alt="HTML5" />
                </a>
                <a
                  href="https://www.w3.org/TR/CSS/#css"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={CSS3Icon} alt="CSS3" />
                </a>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={JavascriptIcon} alt="Javascript" />
                </a>
              </div>
            </li>
          </ul>
          <div className="card-body h-50">
            <a
              href="https://github.com/dnsnguy08/Pokemon-Battle"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Repo
            </a>
            <a
              href="https://dnsnguy08.github.io/Pokemon-Battle/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Deployed link
            </a>
          </div>
        </div>
      </section>

      <div className="phase2 h3 pt-5 mx-auto" id="Phase2">
        <a href="Projects"> </a>Phase 2
      </div>

      <section className="project2 h-50">
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={SingItLoudImg} alt="SingItLoud"></img>
          <div className="card-body h-25">
            <h5 className="card-title">Sing It Loud!</h5>
            <p className="card-text">
              Utilized Node/Express, Sequilize/MySQL, Handlebars, and the Bulma CSS library to create an application that
              tracks collection of music albums and share reviews between users.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="d-flex justify-content-around my-3">
                <a
                  href="https://nodejs.org/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={nodeIcon} alt="Node.JS" />
                </a>
                <a
                  href="https://expressjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={ExpressIcon} alt="Express" />
                </a>
                <a
                  href="https://www.mysql.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={mysqlIcon} alt="MySQL" />
                </a>
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={tailwindIcon} alt="Tailwind" />
                </a>
                <a
                  href="https://www.heroku.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={HerokuIcon} alt="Heroku" />
                </a>
              </div>
            </li>
          </ul>
          <div className="card-body h-50">
            <a
              href="https://github.com/dnsnguy08/sing_it_loud"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Repo
            </a>
            <a
              href="https://sing-it-loud.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Deployed link
            </a>
          </div>
        </div>
      </section>

      <article className="homework3">
        <div className="card h-100" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={NoteTakerImg}
            alt="Homework 3"
          ></img>
          <div className="card-body h-75">
            <h5 className="card-title">Note Taker App</h5>
            <p className="card-text">
              Created a CRUD application that utilizes Express to add/delete
              notes from a stored db.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="d-flex justify-content-around my-1">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={HTML5Icon} alt="HTML5" />
                </a>
                <a
                  href="https://www.w3.org/TR/CSS/#css"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={CSS3Icon} alt="CSS3" />
                </a>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={JavascriptIcon} alt="Javascript" />
                </a>
                <a
                  href="https://nodejs.org/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={nodeIcon} alt="Node.JS" />
                </a>
                <a
                  href="https://expressjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={ExpressIcon} alt="Express" />
                </a>
              </div>
            </li>
          </ul>
          <div className="card-body">
            <a
              href="https://github.com/dnsnguy08/note_taker"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Repo
            </a>
            <a
              href="https://my-note-planner.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Deployed link
            </a>
          </div>
        </div>
      </article>

      <article className="homework4">
        <div className="card h-100" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={TechBlogImg}
            alt="Homework 4"
          ></img>
          <div className="card-body h-75">
            <h5 className="card-title">Tech Blog</h5>
            <p className="card-text">
              Created a wordpress style site utilizing Node, Express, and a SQL
              database incorporating user signup/login and cookies.
            </p>
            <p className="card-text">
              Deployed to Heroku utilizing Jaws DB for the backend database.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="d-flex justify-content-around my-1">
                <a
                  href="https://nodejs.org/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={nodeIcon} alt="Node.JS" />
                </a>
                <a
                  href="https://expressjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={ExpressIcon} alt="Express" />
                </a>
                <a
                  href="https://www.mysql.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={mysqlIcon} alt="MySQL" />
                </a>
                <a
                  href="https://www.heroku.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={HerokuIcon} alt="Heroku" />
                </a>
              </div>
            </li>
          </ul>
          <div className="card-body">
            <a
              href="https://github.com/dnsnguy08/tech_blog"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Repo
            </a>
            <a
              href="https://the-cool-tech-blog.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Deployed link
            </a>
          </div>
        </div>
      </article>

      <div className="phase3 h3 pt-5 mx-auto" id="Phase3">
        <a href="Projects" content="Phase 3"> </a>Phase 3
      </div>

      <section className="project3-cont h-50">
       </section>

      <article className="homework5">
        <div className="card h-100" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={TextEditorImg}
            alt="Homework 5"
          ></img>
          <div className="card-body h-75">
            <h5 className="card-title">PWA Text Editor</h5>
            <p className="card-text">
              Progressive Web Application utilizing IndexDB, local storage and a
              service worker to create a text editor that works offline.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="d-flex justify-content-around my-1.5">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={HTML5Icon} alt="HTML5" />
                </a>
                <a
                  href="https://www.w3.org/TR/CSS/#css"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={CSS3Icon} alt="CSS3" />
                </a>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={JavascriptIcon} alt="Javascript" />
                </a>
                <a
                  href="https://nodejs.org/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={nodeIcon} alt="Node.JS" />
                </a>
                <a
                  href="https://expressjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={ExpressIcon} alt="Express" />
                </a>
              </div>
            </li>
          </ul>
          <div className="card-body">
            <a
              href="https://github.com/dnsnguy08/jate_text_editor"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Repo
            </a>
            <a
              href="https://j-a-text-editor.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Deployed link
            </a>
          </div>
        </div>
      </article>

      {/* Personal Projects */}

      <div className="PersonalProjects h3 pt-5 mx-auto" id="Personal">
        <a href="Projects"> </a>Personal Projects
      </div>

      

    </section>
  );
}

export default Projects;
