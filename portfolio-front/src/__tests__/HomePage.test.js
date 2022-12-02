import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import HomePage from '../Pages/HomePage';

describe('Testando se a HomePage funciona de forma esperada', () => {
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

  // it('verifica se a home contém uma tag p e contém o seu texto corretamente!', () => {
  //   renderWithRouter(<HomePage />);
  //   const paragraph = screen.getByRole('paragraph', { name: new RegExp("/Desde criança sempre fui apaixonado/i") });

  //   expect(paragraph).toBeInTheDocument();
  // });
});