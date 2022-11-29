import styled from 'styled-components';

export const Container = styled.section`
  height: 220vh;
  margin: auto;
  background-color: #3a4e48;
`

export const WrapperH1 = styled.section`
  display: flex;
  justify-content: center;
  padding: 3.00rem 0px 9.375rem 0px;
  font-size: 1.900rem;

  h1 {
    font-family: Garamond, serif;
    font-style: italic;
    font-stretch: expanded;
  }
`

export const ContainerWrapper = styled.section`
  width: 80%;
  display: flex;
  margin: auto;
  justify-content: space-around;
`

export const WrapperTexts = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 50%;

  h2 {
    text-align: center;
    padding: 0px 0px 30px 0px;
    font-size: 1.875rem;
    font-family: Garamond, serif;
    font-style: italic;
    font-stretch: expanded;
  }

  p {
    margin: 10px 0px 0px 0px;
    font-size: 18px;
    text-align: left;
  }
`
  
export const WrapperImage = styled.section`
  display: flex;

  img {
    max-width: 18.80rem;
    max-height: 18.80rem;
    border-radius: 60px;
  }
`
export const ContainerHeader = styled.section`
  background-color: #060b26;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;

  Link {
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
  }
`

export const ContainerWrapperSkills = styled.section`
  width: 46%;
  display: flex;
  margin: auto;
  height: 50vh;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
`

export const WrapperSkills = styled.section`
  display: flex;
  padding: 20px;
  margin: 0px 2px 2px 2px;
  flex-direction: column;
  border: 3px solid black;
`

export const WrapperH3 = styled.section`
  display: flex;
  justify-content: center;
  padding: 2.00rem 0px 5.375rem 0px;
  font-size: 1.875rem;
  margin-top: 130px;
  width: 80%
  font-family: Garamond, serif;
  font-style: italic;
  font-stretch: expanded;
  margin-right: 50px
`

export const ContainerLinks = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 75px;
  text-align: center;
  margin-top: 100px;
  
  button {
    background-color: #0a0a23;
    border: none;
    color: white;
    padding: 15px 32px;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 10px;
  }

  button:hover {
    background-color: #002ead;
    transition: 0.7s;
  }

  li {
    list-style-type: none;
    margin: 0px 0px 0px 25px;
  }
`