import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import HomePage from '../Pages/HomePage';
import { ArrayOfSkills } from '../Components/ArrayOfSkills';
import { SidebarData } from '../Components/SiderData';


describe('Testando se a HomePage contém todos elementos corretamente!!', () => {
  it('verifica se existe um header na home e se contém os seus elementos.', async () => {
    renderWithRouter(<HomePage />);
    const buttonSVG = screen.getByTestId('button-svg');
    userEvent.click(buttonSVG);

    const Sidebar = SidebarData.map((_el, index) => {
      const links = screen.getAllByTestId(`title-${index}`);

      return links;
    });

    expect(Sidebar.length).toBe(Sidebar.length);
  });

  it('verifica se a home contém uma tag h1 e se está populada corretamente!', async () => {
    renderWithRouter(<HomePage />);
    const headingH1 = await screen.findByRole('heading', { 
      name: "Hi, my name is Lucas and i'm a backend developer!!"
    });

    expect(headingH1).toBeInTheDocument();
  });

  it('verifica se a home contém uma tag h2 e se está populada corretamente!', async () => {
    renderWithRouter(<HomePage />);
    const headingH2 = await screen.findByRole('heading', { name: 'About me' });

    expect(headingH2).toBeInTheDocument();
  });

  it('verifica se a home contém uma tag img e está renderizando corretamente!', () => {
    renderWithRouter(<HomePage />);
    const get_alt_img = screen.getByAltText('Esse sou eu!');

    expect(get_alt_img).toBeInTheDocument();
  });

  it('verifica se a home contém uma tag p e contém o seu texto corretamente!', async () => {
    renderWithRouter(<HomePage />);
    const paragraph = await screen.findByText(new RegExp(/Desde criança sempre fui apaixonado por tecnologia/i));

    expect(paragraph).toBeInTheDocument();
  });

  it('verifca se a home contém 3 buttons e se está com o texto correto!', async () => {
    renderWithRouter(<HomePage />);
    const returnsName = ['LinkedIn', 'GitHub', 'Curriculo'].map((el) => {
      const buttons = screen.getByText(el).textContent;

      return buttons
    });
    expect(returnsName).toContainEqual('LinkedIn');
    expect(returnsName).toContainEqual('GitHub');
    expect(returnsName).toContainEqual('Curriculo');
  });

  it('verifica se a home contém uma tag h4 e se está com o texto corretamente!', async () => {
    renderWithRouter(<HomePage />);
    const SomeSkills = await screen.findByRole('heading', { name: 'Some Skills' });

    expect(SomeSkills).toBeInTheDocument();
  });

  it('verifica se a home contém todas as skills', () => {
    renderWithRouter(<HomePage />);
    const skillsLength = ArrayOfSkills.map((_el, index) => {
      const skills = screen.getAllByTestId(`element-${index}`);

      return skills;
    })

    expect(skillsLength.length).toBe(ArrayOfSkills.length);
  });

  it('verifica se a home contém os links e se são os nomes corretos e se existe uma tag p', async () => {
    renderWithRouter(<HomePage />);
    const links = await screen.findAllByRole('link', { name: 'Home' });
    const paragraph = await screen.findByText(new RegExp(/Copyright 2022/i));

    expect(paragraph).toBeInTheDocument();
    expect(links).toHaveLength(2);
  });
});