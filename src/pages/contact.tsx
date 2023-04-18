import Contact from '@/layouts/Contact';
import { Meta } from '@/layouts/Meta';
import SimpleNavBar from '@/layouts/SimpleNavbar';
import { Main } from '@/templates/Main';

export default function ContactPage() {
  return (
    <>
      <Main meta={<Meta title="Contact" description="Contactez-nous" />}>
        <div className="mx-auto flex min-h-screen flex-col justify-between bg-bounce-100">
          <SimpleNavBar></SimpleNavBar>
          <Contact></Contact>
        </div>
      </Main>
    </>
  );
}
