// css
import "../Home/Home.css"

//components
// import Gallery from "../../components/Gallery/Gallery";

import AppHeader from "../../components/AppHeader/AppHeader";
import AppSection from "../../components/AppSection/AppSection";
import AppTitle from "../../components/AppTitle/AppTitle";
import AppFooter from "../../components/AppFooter/AppFooter";


export default function Home() {



  return (
    <div className="home-container" id="home">
      <AppTitle title="HOME" />
      <AppHeader />
      <AppSection />
      <AppFooter />
    </div>
  );
}
