import Head from "next/head";
import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sticky = useRef();
  const tl = useRef();
  const stickyContainer = useRef();

  // Setting GSAP timeline animation
  useEffect(() => {
    tl.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: stickyContainer.current,
          start: "top 70%",
        },
      })
      .from(sticky.current, { autoAlpha: 0, y: 500, duration: 1 });
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: "vertical", // vertical, horizontal
      gestureDirection: "vertical", // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 10,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    //get scroll value
    lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
      console.log({ scroll, limit, velocity, direction, progress });
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="">
      <Head>
        <title>Lenis scroll</title>
        <meta name="description" content="Created to test out Lenis scroll" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-center">
        <section className="bg-black text-white  h-screen flex flex-col items-center justify-center text-7xl">
          <h1>This is the Introduction section</h1>
        </section>

        <section className="bg-blue-500 h-screen flex flex-col items-center justify-center text-7xl">
          <h1>I Love React</h1>
          <h1>That is why I code everyday</h1>
        </section>

        <section
          ref={stickyContainer}
          className="bg-blue-600 h-screen flex flex-col items-center justify-center text-7xl"
        >
          <h1 className="invisible" ref={sticky}>Hey I am Sticky</h1>
          <div className="text-3xl">
            <p>other contents</p>
            <p>other contents</p>
            <p>other contents</p>
            <p>other contents</p>
            <p>other contents</p>
            <p>other contents</p>
            <p>other contents</p>
            <p>other contents</p>
          </div>
        </section>

        <section className="bg-blue-50 footer h-screen flex flex-col items-center justify-center text-7xl">
          <h1>Let us end the application with this Footer</h1>
        </section>
      </main>
    </div>
  );
}
