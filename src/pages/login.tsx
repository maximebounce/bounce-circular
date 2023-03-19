import Foot from '@/layouts/Foot';
import { Meta } from '@/layouts/Meta';
import SignIn from '@/layouts/SignIn';
import { Main } from '@/templates/Main';

export default function Login() {
  return (
    <>
      <Main
        meta={
          <Meta title="Login" description="Connexion à votre espace club" />
        }
      >
        <div className="mx-auto flex h-screen flex-col justify-between bg-bounce-100">
          {/* <NavBar></NavBar> */}
          <SignIn></SignIn>
          <Foot></Foot>
        </div>
      </Main>
    </>
  );
}
