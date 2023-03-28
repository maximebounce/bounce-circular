import Invite from '@/layouts/Invite';
import { Meta } from '@/layouts/Meta';
import SimpleNavBar from '@/layouts/SimpleNavbar';
import { Main } from '@/templates/Main';

export default function InvitationPage() {
  return (
    <>
      <Main
        meta={
          <Meta
            title="Invitation"
            description="Créer un compte et rejoindre votre espace club"
          />
        }
      >
        <div className="mx-auto flex h-screen flex-col justify-between bg-bounce-100">
          <SimpleNavBar></SimpleNavBar>
          <Invite></Invite>
          {/* <Foot></Foot> */}
        </div>
      </Main>
    </>
  );
}
