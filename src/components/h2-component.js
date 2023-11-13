export class H2WebComponent extends HTMLElement {

  connectedCallback() {
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
        <h2>
          <slot></slot>
        </h2>`
  }
}