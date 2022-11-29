import styled from 'styled-components';

export const ContainerProject = styled.section`
  margin: auto;
  background-color: #3a4e48;
`
export const WrapperCont = styled.section`
  width: 60%;
  display: flex;
  margin: auto;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
`

export const WrapperProjects = styled.section`
  display: flex;
  padding: 20px;
  margin: 0px 2px 2px 2px;
  flex-direction: column;
  border: 3px solid black;

  h1 {
    font-size: 45px;
    text-align: center;
    margin-bottom: 50px;
    font-family: Garamond, serif;
    font-style: italic;
    font-stretch: expanded;
  }

  h2 {
    margin-bottom: 25px;
    font-size: 27px;
    text-align: start;
    font-family: Garamond, serif;
    font-style: italic;
    font-stretch: expanded;
  }

  p {
    font-size: 20px;
    text-align: start;
    margin-bottom: 25px;
    font-family: Garamond, serif;
    font-style: italic;
    font-stretch: expanded;
  }

  h3 {
    margin-bottom: 20px;
    font-size: 20px;
    text-align: center;
    font-family: Garamond, serif;
    font-style: italic;
    font-stretch: expanded;
  }

  li {
    list-style-type: none;
    font-size: 18px;
    border: 1.5px solid black;
    padding: 0px 0px 3px 0px;
  }

  button {
    background-color: #0a0a23;
    border: none;
    color: white;
    padding: 15px 32px;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 10px;
    margin-top: 40px;
    font-family: Garamond, serif;
    font-style: italic;
    font-stretch: expanded;
  }

  button:hover {
    background-color: #002ead;
    transition: 0.7s;
  }
`