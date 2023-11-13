export class H1WebComponent extends HTMLElement {
    constructor() {
      super();
      this.content = 'World';
    }
  
    static get observedAttributes() {
      return ['content'];
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
      shadow.innerHTML = `<h1>${this.content}</h1>`;
    }
  
    updateContent() {
      const shadow = this.shadowRoot;
      if (shadow) {
        shadow.innerHTML = `<h1>${this.content}</h1>`;
      }
    }
  }
  
 