/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
import { H1WebComponent } from "./src/components/h1-component"
import { H2WebComponent } from "./src/components/h2-component"
import { NavBarComponent } from "./src/components/navbar-component"
import { ProductComponent } from "./src/components/product-component"

if (!customElements.get('h1-web-component')) {
    customElements.define('h1-web-component', H1WebComponent);
}

if (!customElements.get('h2-web-component')) {
    customElements.define('h2-web-component', H2WebComponent);
}

if (!customElements.get('productcard-component')) {
    customElements.define('productcard-component', ProductComponent);
}

if (!customElements.get('navbar-component')) {
    customElements.define('navbar-component', NavBarComponent);
}

