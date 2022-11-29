import HeaderPage from '../Components/HeaderPage';
import myPhoto from '../Images/minhaFoto.jpg';
import {
  Container,
  ContainerWrapper,
  WrapperH1,
  WrapperImage,
  WrapperTexts,
  ContainerWrapperSkills,
  WrapperSkills,
  WrapperH3,
  ContainerLinks
} from '../Styled/StyledHome';
import { ArrayOfSkills } from '../Components/ArrayOfSkills';
import { IconContext } from 'react-icons';
import '../Styled/Icons.css';
import { LinksData } from '../Components/LinksData';
import Footer from '../Components/Footer';

function HomePage() {
  return (
    <Container>
      <HeaderPage />
      <WrapperH1>
        <h1>Hi, my name is Lucas and i'm a backend developer!!</h1>
      </WrapperH1>
      <ContainerWrapper>
        <WrapperTexts>
          <h2>About me</h2>
          <p>
            Desde criança sempre fui apaixonado por tecnologia, mais nunca levei isso Adiante. No mês de abril a minha vida mudou da água para o vinho, quando fui mandado embora por conta da pandemia. Atráves de um amigo conheci a Trybe, que é uma escola de desenvolvimento web full stack, que além de ensinar Hardskills, também ensina habilidades comportamentais. Não pensei duas vezes em fazer a transição de carreira.
          </p>
        </WrapperTexts>
        <WrapperImage>
          <img src={ myPhoto } alt="Esse sou eu!" />
        </WrapperImage>
      </ContainerWrapper>
      <ContainerLinks>
        {
          LinksData.map((item, index) => {
            return (
              <li key={ index }>
                <button onClick={ () => window.location.href = item.path }>
                  { item.icon }
                  <span>{ item.title }</span>
                </button>
              </li>
            )
          })
        }
      </ContainerLinks>
      <WrapperH3>
        <h3>Some Skills</h3>
      </WrapperH3>
      <ContainerWrapperSkills>
        <IconContext.Provider value={{
          "size": "1.3em",
          "className": "Icons"
        }}>
          {
            ArrayOfSkills.map((skill, index) => {
              return (
                <WrapperSkills key={ index }>
                  {skill.icon}
                  <h4>{skill.name}</h4>
                </WrapperSkills>
              )
            })
          }
        </IconContext.Provider>
      </ContainerWrapperSkills>
      <Footer />
    </Container>
  )
}

export default HomePage;
