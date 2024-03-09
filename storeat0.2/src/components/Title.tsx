import { Alice } from "next/font/google";

export const alice = Alice({
    weight: '400',
    subsets: ['latin']
  })

const Title = () =>{
    return(
        <div className={alice.className}>StorEat.</div>
    )
};
export default Title;