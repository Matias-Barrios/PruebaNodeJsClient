import React from 'react';
import App from './App';
import { mount } from 'enzyme';
import logoImage from './assets/images/header_image.png';
import appTitle from './assets/images/app_title.png';



function setup() {
  const wrapper = mount(<App />);
  return { wrapper };
}

describe('App screen', () => {
  const { wrapper } = setup();
  it("renders the images in the header", () => {
    expect(wrapper.find("#logo").prop("src")).toEqual(logoImage);
    expect(wrapper.find("#app_title").prop("src")).toEqual(appTitle);
  });
  it('should display proper text', () => {  
      let mainLabel = wrapper.find('#mainLabel')
      expect( mainLabel.text()  === "Please input a text and be ready to be amazed by the power of receiving it back!!").toEqual(true);
  });
  it('should display a submit button', () => {  
    expect(wrapper.find('#submit_button').props().children).toEqual('Let\'s Go')
  });
  it('should display a response textarea', () => { 
    expect(wrapper.find('#responsetextarea').props().disabled).toEqual(true)
  });
});
