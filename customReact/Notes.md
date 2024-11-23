<!-- ? Creating custom- react folder  includes  * index.html and  * customreact.js  file -->


<!-- ! customreact.js -->

<!-- ! function 1 -->

function customRender(reactElement,mainContainer){
  // [creating the DOM element based on type]
  const reactElement = document.createElement(reactElement.type);  // a tag in this case

  //[ set the props attribute on element]

  for (const prop in reactElement.props){
    if (reactElement.props.hasOwnProperty(prop)) {
      element.setAttribute(prop,reactElement.props[prop]);

    }
  }
  // [ set children( text content or nested element)]

  if (typeof reactElement.children === 'string' ){
    element.textContent = reactElement.children; // for text nodes
  }
  mainContainer.appendChild(element);

}

<!-- ! function 2 -->

function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute('href', reactElement.props.href);
  domElement.setAttribute('target', reactElement.props.target);

  container.appendChild(domElement);
}


<!--? Inside the function:

<!-- **  A new DOM element (domElement) is created based on the reactElement.type (here, it’s <a>). -->

<!-- ** The inner HTML of the new DOM element is set to reactElement.children, which is the text "Visit Google". -->

<!-- ** Two attributes (href and target) are set using the values from reactElement.props. -->

<!-- ** The newly created DOM element is appended to the container. --> -->

const reactElement = {
  type: 'a',  // Corrected from 'typeof' to 'type'
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Visit Google'
};




<!-- ? How it works:

<!--* createElement: This will create an HTML element of type 'a' (an anchor tag in this case). -->

<!-- * setAttribute: This loops through the props of reactElement and sets them as attributes on the DOM element (e.g., href, target). -->

<!-- * textContent: If children is a string, it will be set as the text content of the element. -->

<!--* appendChild: Finally, the element is appended to the mainContainer, which is passed into the customRender function. --> -->



<!-- ? Explanation: -->

<!--* document.createElement(reactElement.type): Creates an anchor (<a>) element based on the type property in reactElement. -->

<!-- * setAttribute: Sets the href and target attributes on the anchor tag. -->

<!-- * element.textContent = reactElement.children: If the children is a string (in this case, "Click to GOOGlE"), it sets the text content of the anchor. -->

<!-- * mainContainer.appendChild(element): Finally, the new element is appended to the mainContainer. -->





const reactElement = {
  type: 'a',
  props: {
    href: 'https//google.com',
    target: '_blank'
  },
  children : 'click to GOOGlE'
}

<!-- * type 'a' -> The type of  element is anchor tag <a> -->

<!-- * props ->  -->

<!-- * href: 'https//google.com', The link that the anchoe will point to

<!-- * target: '_blank': This link makes open in a new tab* --> -->

<!-- * children : 'click to GOOGlE': The text content of anchor tag <a> * -->





const mainContainer = document.querySelector('#root')


<!-- * const mainContainer -> is the variable in this case will refrence this DOM element allowing you to manipulate and update the content

 <!-- * document.querySelector ->  method that returns  the  first element of the matched specified CSS selector in this case id  ('#root') --> -->


customRender(reactElement, mainContainer)