import styled from 'styled-components';

export const ContainerContact = styled.section`
  margin: auto;
  height: 100vh;
  background-color: #3a4e48;
  display: flex;
  justify-content: center;
  align-items: center;
`
  
export const WrapperInputs = styled.section`
  width: 500px;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  label {
    margin-bottom: 25px;
    width: 90%;
  }

  input {
    padding: 12px;
    background-color: wthite;
    outline: none;
    border-radius: 10px;
    font-size: 15px;
    border: 1px solid;
    width: 100%;
    position: relative;
  }

  h1 {
    font-size: 1.900rem;
    font-family: Garamond, serif;
    font-style: italic;
    font-stretch: expanded;
    margin-bottom: 50px
  }
  
  textarea {
    padding: 12px;
    background-color: wthite;
    outline: none;
    border-radius: 10px;
    font-size: 15px;
    border: 1px solid;
    width: 100%;
    position: relative;
  }
`