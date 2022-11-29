import styled from 'styled-components';

export const ContainerFooter = styled.section`
  background-color: #3a4e48;
`

export const WrapperContainer = styled.section`
  width: 46%;
  display: flex;
  margin: auto;
  justify-content: center;

  li {
    list-style-type: none;
    padding: 10px;
    font-size: 20px;
  }

  a:link {
    text-decoration: none;
  }
  
  a:visited {
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  a:active {
    text-decoration: underline;
  }
`

export const WrapperP = styled.section`
  display: flex;
  justify-content: center;
  font-size: 15px;
  text-align: center;

  p {
    font-family: Garamond, serif;
    font-style: italic;
    font-stretch: expanded;
  }
`