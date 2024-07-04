import headerLogo from "./headerLogo.js"
import headerSearch from "./headerSearch.js"
import headerLinks from "./headerLinks.js"

export default {
  components: { headerLogo, headerSearch, headerLinks },
  template: `     
<div class="banner">
  <div class="navigation">
    <headerLogo></headerLogo>
    <headerSearch></headerSearch>
    <headerLinks></headerLinks>
  </div>
</div>
      `,
}