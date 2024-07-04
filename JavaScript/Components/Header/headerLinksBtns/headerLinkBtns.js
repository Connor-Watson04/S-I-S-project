import headerLinkViewAll from "./headerLink-ViewAll.js"
import headerLinkBestSellers from "./headerLink-BestSellers.js"
import headerLinkBasket from "./headerLink-Basket.js"
import headerLinkSignIn from "./headerLink-signIn.js"

export default {
    components: { headerLinkViewAll, headerLinkBestSellers, headerLinkBasket, headerLinkSignIn },

    template: `
    <headerLinkViewAll title="View All"></headerLinkViewAll>
    <headerLinkBestSellers title="Best Sellers!"></headerLinkBestSellers>
    <headerLinkBasket title="Basket"></headerLinkBasket>
    <headerLinkSignIn title="Sign In"></headerLinkSignIn>
    `,
}