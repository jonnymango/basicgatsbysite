export class NavBarComponent extends HTMLElement {
  constructor() {
    super(); // Always call super first in the constructor
    this.attachShadow({ mode: 'open' }); // Attach a shadow DOM
    this.navItems = [];
  }

  static get observedAttributes() {
    return ['nav-items']; // Observe the 'nav-items' attribute for changes
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'nav-items') {
      this.navItems = JSON.parse(newValue); // Parse the JSON string
      this.render(); // Re-render the component with new items
    }
  }

  connectedCallback() {
    if (!this.hasAttribute('nav-items')) {
      this.setAttribute('nav-items', JSON.stringify(this.navItems)); // Default empty array
    }
    this.render();
  }

  render() {
    if (this.navItems.length > 0) {
      const listItems = this.navItems.map(item => 
        `<li><a href="${item.href}">${item.text}</a></li>`
      ).join('');

      this.shadowRoot.innerHTML = `
        <style>
          /* Scoped styles for your nav component */
          :host {
            display: block;
            background-color: #333;
          }
          ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: center;
          }
          li {
            padding: 1em;
          }
          a {
            text-decoration: none;
            color: white;
            font-weight: bold;
          }
          a:hover {
            color: #ddd;
          }
        </style>
        <nav>
          <ul>
            ${listItems}
          </ul>
        </nav>
      `;
    }
  }
}


      
