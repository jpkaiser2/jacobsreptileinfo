class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="turtles.html">Turtles</a></li>
    <li><a href="lizards.html">Lizards</a></li>
    <li><a href="frogs.html">Frogs</a></li>
  </ul>
  
  <style>
    ul {
      list-style-type: none;
      z-index: 1;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #3c4565;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      box-shadow: 0px 10px 20px #373f5b;
    }
  
    li {
      float: left;
    }
  
    li a {
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }
  
    li a:hover {
      background-color: #fff;
      color: #3c4565;
    }
  </style>
  
      `;
  }
}

customElements.define("header-component", Header);
