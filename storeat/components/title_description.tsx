import { IBM_Plex_Sans_Devanagari } from 'next/font/google';

export const rampart_one = IBM_Plex_Sans_Devanagari({
  weight: '400',
  subsets: ['latin']
})

export default function TittleDescription(){
    return(
        <>
            <div className={rampart_one.className}>
                <p>ВАША УМНАЯ КУХНЯ</p>
            </div>
        </>
    )
}