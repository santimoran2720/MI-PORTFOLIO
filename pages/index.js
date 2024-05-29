import Layout from "../components/Layout";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { skills, experiences, projects, imageURL } from "../profile";
import { GoArrowLeft } from "react-icons/go";
import { DiJsBadge } from "react-icons/di";
import { TiHtml5 } from "react-icons/ti";
import { SiCsswizardry } from "react-icons/si";
const Index = () => (
  <Layout>
    <main className="bg-light px-10 dark:bg-slate-800">
      {/* Header Card */}

      <navBar />
      <div className="min-h-screen">
        <header className="row">
          <div className="col-md-12">
            <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src="/santimoranprofile.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <div className="col-md-8">
                  <h1>Santiago Moran</h1>
                  <h3>Developer in progress</h3>
                  <p>
                    Antes de adquirir habilidades en programación de manera
                    autodidacta, exploré algunos cursos que, aunque no
                    resultaron como esperaba, me brindaron la motivación
                    necesaria para perseverar y concentrarme en mi desarrollo
                    profesional. He utilizado una variedad de recursos, como
                    libros, vídeos y proyectos personales, para aprender y
                    mejorar mis habilidades en desarrollo de software. Esta
                    experiencia me ha proporcionado una base sólida en
                    programación y ha cultivado mi capacidad para aprender de
                    forma independiente y adaptarme a nuevas tecnologías.
                  </p>
                  <Link
                    href="https://www.linkedin.com/in/santiago-moran-9b30b1227/"
                    className="btn btn-outline-light"
                  >
                    Hire Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Second section */}

        <section className="row">
          <div className="col-md-4 py-2">
            <div className="card bg-light animate__animated animate__fadeInLeft">
              <div className="card-body">
                <h1>Skills</h1>

                {/* Skill Progress  */}
                {skills.map(({ skill, percentage }, i) => (
                  <div className="py-3" key={i}>
                    <h5>{skill}</h5>
                    <div className="progress ">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${percentage}%` }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-8 py-2">
            {/* Experience */}
            <div className="card bg-light animate__animated animate__fadeInRight">
              <div className="card-body">
                <h1>Experience</h1>

                <ul>
                  {/* List Item Experience */}
                  {experiences.map(
                    ({ title, from, to, description }, index) => (
                      <li key={index}>
                        <h3>{title}</h3>
                        <h3>{description}</h3>
                        <h5>
                          {from} {to ? `- ${to}` : "- current"}
                        </h5>
                        <p></p>
                      </li>
                    )
                  )}
                </ul>
                <Link href="/hireme" className="btn btn-light">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Porfolio */}
        <section>
          <div className="row">
            <div className="col-md-12">
              <div className="card card-body bg-dark">
                <div className="row">
                  <div className="col-md-12 my-2">
                    <h1 className="text-center text-light">Portfolio</h1>
                  </div>
                  {projects.map(({ text, imageURL, post }, index) => (
                    <div className="col-md-4 p-2" key={index}>
                      <div className="card h-100">
                        <div className="overflow">
                          <img
                            src={"/public/calculator.png"}
                            alt=""
                            className="card-img-top"
                          />
                        </div>
                        <div className="card-body">
                          <p>{text}</p>
                          <br></br>
                          <p>
                            Aplicacion creada con: <TiHtml5 /> <SiCsswizardry />{" "}
                            <DiJsBadge />
                          </p>
                          <a href="https://calculadora-orpin-phi.vercel.app/">
                            Haz click aqui! <GoArrowLeft />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="col-md-12 mt-4">
                    <div className="text-center">
                      <Link href="/github" className="btn btn-outline-light">
                        More Projects
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </Layout>
);

export default Index;
