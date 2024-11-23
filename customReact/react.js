

function customRender(reactElement,mainContainer){
  // creating the DOM element based on type
  const reactElement = document.createElement(reactElement.type);  // a tag in this case

  // set the props attribute on element

  for (const prop in reactElement.props){
    if (reactElement.props.hasOwnProperty(prop)) {
      element.setAttribute(prop,reactElement.props[prop]);

    }
  }
  //  set children( text content or nested element)

  if (typeof reactElement.children === 'string' ){
    element.textContent = reactElement.children; // for text nodes
  }
  mainContainer.appendChild(element);
}






const reactElement = {
  type: 'a',
  props: {
    href: 'https//google.com',
    target: '_blank'
  },
  children : 'click to GOOGlE'
}

const mainContainer = document.querySelector('#root')


customRender(reactElement, mainContainer)
