import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <section className="container mx-auto flex-auto realtive lg:max-w-[90%] flex flex-col my-5">
    <Navbar />
      <Component {...pageProps} />
    </section>
  );
}

export default MyApp;
