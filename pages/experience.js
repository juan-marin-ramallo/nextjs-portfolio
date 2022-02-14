import Layout from "../components/Layout";
import {skills, experiences} from '../profile'

const Experience = () => (
    <Layout>
        <h1>Experience</h1>

        <div className="row py-2">


            <div className="col-md-16">
                <div className="card bg-light">
                <div className="card-body">
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
                        ))
                    }
                    </ul>
                                        
                </div>
                </div>
            </div>
            </div>
    </Layout>
)

export default Experience;