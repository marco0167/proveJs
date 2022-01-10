const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<link href="../components/header/header.css" rel="stylesheet" type="text/css" />
<header>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="pistone.html">Pistone</a></li>
      </ul>
    </nav>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);