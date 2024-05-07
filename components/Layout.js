import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import PropTypes from "prop-types";
import NProgress from "nprogress";
import nProgress from "nprogress";
import classNames from "classnames";
import { GoArrowLeft , GoArrowRight } from "react-icons/go";
import { SiNextdotjs, SiCsswizardry,SiTailwindcss,SiGmail } from "react-icons/si";
import { DiJsBadge } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";


const Layout = ({ children, title, footer = true, dark = false }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    router.events.on("routeChangeComplete", () => NProgress.done());

    router.events.on("routeChangeError", () => nProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <div className={classNames({ "bg-dark": dark, "bg-light": !dark })}>
      <Navbar />
      <main className="container py-4">
        {/* Title */}
        {title && (
          <h1 className={classNames("text-center", { "text-light": dark })}>
            {title}
          </h1>
        )}

        {/* Content */}
        {children}
      </main>

      {footer && (
        <footer className="bg-dark text-light text-center">
          <div className="container p-4">
            <h1>&copy; Santiago Moran Portfolio</h1> <br/>
            <p>Formas de contactarme:</p>
            
            <h1><SiGmail/> : moran3490@gmail.com</h1>
           <h3><IoPhonePortraitOutline/> : +54 2473409098</h3>
           <br/>
            <h3>Tecnologias y frameworks que use para crear este portfolio: <br/> <br/>
       <GoArrowRight/>   <SiNextdotjs/>  <DiJsBadge/> <FaReact/> <SiCsswizardry/>   <SiTailwindcss/>         <GoArrowLeft/>
            </h3> 
            <br/>
            <p>2002 - {new Date().getFullYear()}</p>
            <p>All rights Reserved.</p>
           
          </div>
        </footer>
      )}
    </div>
  );
};

Layout.proptypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  footer: PropTypes.bool,
};

export default Layout;