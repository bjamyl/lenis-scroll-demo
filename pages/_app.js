import "../styles/globals.css";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
gsap.registerPlugin(CSSPlugin);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;
