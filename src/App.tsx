/**
 * Internal dependencies.
 */
import "./index.css";
import Footer from "./components/Footer";
import Service from "./components/Services/Service";
import '../src/index.css';
import ShareCalculator from "./components/Calculator/ShareCalculator";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";


function App() {
  return (
    <div className="container mx-auto p-10 dark:bg-gray-900">
      <Navbar logo={logo} />
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-400 dark:border-white lg:my-8" />
      <Banner banner={banner} />
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-400 dark:border-white lg:my-8" />
      <Service/>
      <ShareCalculator/>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-400 dark:border-white lg:my-8" />
      <Footer logo={logo} />
    </div>
  );
}

export default App;
