class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
      .footer {
        list-style-type: none;
        z-index: 1;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #3c4565;
        bottom: 0;
        left: 0;
        width: 100%;
        box-shadow: 0px 10px 20px #373f5b;
      }
      </style>
      
      <div class="footer">
        <p>Footer</p>
      </div>
        `;
  }
}

customElements.define("footer-component", Footer);
