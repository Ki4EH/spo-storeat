import Main from '../pages/main';
import Menu from '../pages/menu';
import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({subsets: ['latin']})

export default function Home() {
  return (
    <>
      <div className={montserrat.className}>
        <Main />
        {/* <Menu /> */}

      </div>
    </>

  );
}
