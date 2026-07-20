import Header from '@/components/header';
import Hero from '@/components/hero';
import Features from '@/components/features';
import Pricing from '@/components/pricing';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
