import NavBar from './ Navbar';
import Landing from './components/landing-page/Landing';
import Foot from './Foot';

export default function LandingPage() {
  return (
    <div className="mx-auto flex  flex-col justify-between">
      {/* h-screen */}
      <NavBar></NavBar>
      <Landing></Landing>
      <Foot></Foot>
    </div>
  );
}
