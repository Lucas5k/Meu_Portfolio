import { useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import HeaderPage from '../Components/HeaderPage';
import { ContainerProject, WrapperProjects, WrapperCont } from '../Styled/StyledProjects';
import array from '../utils/array';

function ProjectPage() {
  const [allProjects, setAllProjects] = useState();

  useEffect(() => {
    const requestProjects = async () => {
      const url = process.env.REACT_APP_URL || 'localhost:3005/Projects';
      const response = await (await fetch(url)).json();
      
      if (!response) {
        setAllProjects(array)
      }
      setAllProjects(response);
    }
    requestProjects()
  }, []);

  return (
    <ContainerProject>
      <HeaderPage />
      <WrapperCont>
        {
          allProjects.map((element, index) => {
            return (
              <WrapperProjects key={ index }>
                <h1>{ element.title }</h1>
                <h2>{ element.description }</h2>
                <p>{ element.paragraph }</p>
                <h3>{ element.technology_used }</h3>
                {
                  element.technology.map((tech, idx) => {
                    return (
                      <ul key={ idx }>
                        <li>{ tech.replace(";", "") }</li>
                      </ul>
                    )
                  })
                }
                <button
                  type='button'
                  onClick={ () => window.location.href = element.url }
                >
                  Saber mais!
                </button>
              </WrapperProjects>
            )
          })
        }
      </WrapperCont>
      <Footer />
    </ContainerProject>
  );
}

export default ProjectPage;
