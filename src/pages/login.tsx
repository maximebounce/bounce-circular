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
        <div className="bg-bounce-100">
          <SignIn></SignIn>
        </div>
      </Main>
    </>
  );
}
