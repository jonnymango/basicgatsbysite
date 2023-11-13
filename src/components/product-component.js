export class ProductComponent extends HTMLElement {
    constructor() {
      super();
      this._image = 'some-image.jpg';
      this._link = 'hello-world';
      this._title = 'my title';
      this._description = 'my description';
      this._price='£69.99';
    }
  
    static get observedAttributes() {
      //return ['image'];
      return ['image', 'link', 'title', 'description', 'price'];
    }
  
    attributeChangedCallback(property, oldValue, newValue) {
      if (oldValue === newValue) return;
      this[property] = newValue;
      this.updateContent();
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      const shadow = this.shadowRoot || this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `<div>
      <img src="${this.image}" title="${this.description}" alt="${this.description}"/>
      <h3>${this.title}</h3>
      <h4>${this.price}</h4>
      <p>${this.description}</p>
      <a href="${this.link}">Buy Now</a>
      </div>
      `;
    }
  
    updateContent() {
      const shadow = this.shadowRoot;
      if (shadow) {
        shadow.innerHTML = `<div>
        <img src="${this.image}" title="${this.description}" alt="${this.description}"/>
        <h3>${this.title}</h3>
        <h4>${this.price}</h4>
        <p>${this.description}</p>
        <a href="${this.link}">Buy Now</a>
        </div>`;
      }
    }
  }
  
  