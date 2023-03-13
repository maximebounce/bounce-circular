import NavBar from './ Navbar';
import Foot from './Foot';
import HeroSection from './HeroSection';

export default function LandingPage() {
  return (
    <div className="mx-auto flex h-screen flex-col justify-between">
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <Foot></Foot>
    </div>
  );
}
