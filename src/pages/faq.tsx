import FaqComponent from '@/layouts/Faq';
import Foot from '@/layouts/Foot';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

export default function Faq() {
  return (
    <Main meta={<Meta title="FAQ" description="FAQ" />}>
      <div className="mx-auto flex h-screen flex-col justify-between">
        <FaqComponent></FaqComponent>
        <Foot></Foot>
      </div>
    </Main>
  );
}
