import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  return (
    <div className="w-full">
      {props.meta}
      <main className="content font-sans">{props.children}</main>
      {/* <header></header> */}
      {/* <div className="mx-auto flex h-screen flex-col justify-between">
        <NavBar></NavBar>
        <main className="content font-sans">{props.children}</main>
        <Foot></Foot>
      </div> */}
    </div>
  );
};

export { Main };
