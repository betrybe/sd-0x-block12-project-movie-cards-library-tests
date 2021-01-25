import React from 'react';
import { mount, shallow } from 'enzyme';
import Rating from '../components/Rating';

describe('4 - Crie um componente `<Rating />`', () => {
  let wrapper;
  it('Renderize o componente `<Rating />`', () => {
    shallow(<Rating />);
  });
  
  it('Renderize a nota de um filme dentro de `Rating`', () => {
    wrapper = shallow(<Rating rating={3} />);
    expect(wrapper.find('.rating').text()).toEqual('3');
  });
});
