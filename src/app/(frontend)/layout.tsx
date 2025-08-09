import { SanityLive } from '@/sanity/lib/live';
import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />

      <SanityLive />
    </main>
  );
};

export default MainLayout;
