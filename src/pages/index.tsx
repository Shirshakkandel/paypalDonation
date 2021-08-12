import styled from 'styled-components'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Image from 'next/image'

const NavabarDiv = styled.div``
const GridCol2 = styled.div``
const LeftContent3 = styled.div``

export default function Home() {
  const { push } = useRouter()

  return (
    <NavabarDiv>
      <Head>
        <title>Save Walter</title>
      </Head>

      <GridCol2 className="grid lg:grid-cols-2 p-5 lg:px-24 h-[90vh]">
        <LeftContent3 className="textBlock-wrapper">
          <h1 className="textBlock-title">
            <span className="font-bold">Help</span> Mr. White
          </h1>

          <p className="textBlock-subtitle">
            My dad is amazing. It's funny, but I didn't know that until I found out he was going to
            die.
          </p>

          <button
            onClick={() => push('/donate')}
            className="w-32 p-2 text-2xl font-medium tracking-wider text-black uppercase focus:outline-none md:w-48 bg-yellow"
          >
            Donate
          </button>
        </LeftContent3>

        <Image
          src="/assets/hero.png"
          alt="walter white"
          height={670}
          width={700}
          objectFit="contain"
          quality={100}
        />
      </GridCol2>
    </NavabarDiv>
  )
}
