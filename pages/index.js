import Layout from '../components/Layout'
import Link from 'next/link'
import {skills, experiences, projects} from '../profile'
import Image from 'next/image';
// console.log(experiences)

const Index = () => (
  <Layout>
    {/** Header card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark text-light">
          <div className="row">
            <div className="col-md-2">
              <img src="JuanMarin.jpg" alt=""  className="card-img-top"/>              
            </div>
            <div className="col-md-8">
              <h1>Juan Eduardo Marin Ramallo</h1>
              <h3>Full Stack & Mobile Developer</h3>
              <p>More than 15 years of experience developing applications for various 
                environments such as console, desktop, web and mobile.
                ESPOL</p>
              <a href="/hireme">Hire Me</a>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/**Second Section */}
    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Skills</h1>

            {
              skills.map(({skill,level,percentage}, i) => (
                  <div className='py-3' key={i}>
                    <h5>{skill}</h5>
                    <h6>{level}</h6>
                    <div className="progress">
                        <div 
                          className="progress-bar" 
                          role="progressbar" 
                          style={{width: `${percentage*100/300}%`}}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100">
                        </div>
                    </div>
                  </div>
                )
              ).slice(0,4)
            }

            <Link href="https://app.pluralsight.com/profile/ozurajean">
              <a target="_blank" className="btn btn-light">
                Know More
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Experience</h1>            
            <ul>
              {
                experiences.map(({title,link,company,from,to,description}, index) => (
                  <li key={index}>
                    <h3>{title}</h3>
                    <h5><a href={`${link}`} target="_blank" rel="noopener noreferrer">{company}</a></h5>
                    <h5>{from} - {to}</h5>
                    <p>
                      {description}
                    </p>
                  </li>   
                )).slice(0,2)
              }
            </ul>
            
            <Link href="/experience">
              <a  className="btn btn-light">
                Know More
              </a>
            </Link>
            
          </div>
        </div>
      </div>
    </div>

    {/**Portfolio */}
    <div className='row'>
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className='row'>
            <div className='col-md-12'>
              <h1 className='text-center text-light'>Projects</h1>
            </div>

            {
              projects.map(({name,technology,description,image}, i) => (
                <div className='col-md-4 p-2' key={i}>
                  <div className='card h-100'>
                    <div className='overflow'>
                      <img src={`/${image}`} alt=""  className="card-img-top"/>
                    </div>                    
                    <div className="card-body">
                      <h3>{name}</h3>
                      <h5>{technology}</h5>
                      <p>{description}</p>
                      <a href="#!">Know more</a>
                    </div>
                  </div>
                </div>
                )
              )
            }
          </div>

          <div className='text-center mt-4'>
            <Link href="/projects">
              <a className='btn btn-outline-light'>More Projects</a>
            </Link>
          </div>

        </div>
      </div>
    </div>
    
  </Layout>
);

export default Index;