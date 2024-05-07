import Layout from "../components/Layout";
import Link from "next/link";
import projects from "./projects";
import { skills, experiences, projects } from "../profile";

const Index = () => (
  <Layout>
    {/* Header Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
          <div className="row">
            <div className="col-md-4">
              <img src="/santimoranprofile.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Santiago Moran</h1>
              <h3>Developer in progress</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae atque ullam perferendis harum, nisi porro voluptate,
                iste consequuntur enim reprehenderit architecto consectetur cum?
                Totam ad molestias natus illum illo officia.
              </p>
              <Link href="/github" className="btn btn-outline-light">
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

            <div className="sm:items-center md:mx-20 xl:mx-40 border-2 border-gray-400 dark:border-white rounded-md">
            <div className="grid md:justify-center mx-10 py-10">
              <h4 className="text-3xl font-bold">Calculadora</h4>
              <p className="text-lg py-10 leading-8">
              Uno de mis primeras pruebas de autodidacta fue esta calculadora que aunque sea muy basica fue lo que me ayudo a romper el hielo con la programacion
              </p>
              <div className=" ">
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://calculadora-ilonnxnko-morans-teams-projects.vercel.app/"
                >
                  <Image
                    className="xl:max-h-fit md:float-right rounded shadow-lg "
                    alt="Logo"
                    src={projects}
                  ></Image>
                </a>
              </div>
            </div>
          </div>
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
              {projects.map(({ name, description, image }, index) => (
                <div className="col-md-4 p-2" key={index}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img src={`/${image}`} alt="" className="card-img-top" />
                    </div>
                    <div className="card-body">
                      <h3>{name}</h3>
                      <p>{description}</p>
                      <a href="#!">Know More</a>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-md-12 mt-4">
                <div className="text-center">
                  <Link href="/portfolio" className="btn btn-outline-light">
                    More Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;