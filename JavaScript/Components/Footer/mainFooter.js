import footerGrid from "./footerGrid.js"
import footerIcons from "./footerIcons.js"
import footerLogo from "./footerLogo.js"

export default {
    components: { footerGrid, footerIcons, footerLogo },
    template: `
    <span class="footer-content">
    <footerLogo></footerLogo>
    <footerGrid></footerGrid>
    <footerIcons></footerIcons>
    </span>

    `,
}