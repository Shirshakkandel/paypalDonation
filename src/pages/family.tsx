import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { quotes } from '@libs/data'
const Family = styled.div``
const GridCol2 = styled.div``
const LeftFlexColYCenter = styled.div``

const Right = styled.div``
const SingleFamilyDetail3 = styled.div``

// export async function getStaticProps() {
//   const { data } = await axios.get(`${process.env.API_BASE_ENDPOINT}api/quotes`)
//   return {
//     props: {
//       quotes: data ?? [],
//     },
//   }
// }

export default function family() {
  return (
    <Family className="h-full">
      <Head>
        <title>Save Walter | Family</title>
      </Head>

      <GridCol2 className="grid h-full gap-5 p-6 lg:px-24 md:grid-cols-2">
        <LeftFlexColYCenter className="textBlock-wrapper">
          <h1 className="textBlock-title">
            <span className="font-bold text-yellow">Family & </span>Friends
          </h1>
          <p className="extBlock-subtitle">Notes from family & friends</p>
        </LeftFlexColYCenter>

        <Right className="space-y-3 flexColYCenter">
          {quotes.map(({ pictureURL, text, name }) => (
            <SingleFamilyDetail3
              className="flex p-3 px-6 space-x-3 text-sm rounded-lg bg-gray-dark md:text-base"
              key={name}
            >
              <div className="flex-shrink-0 text-center">
                <div>
                  <Image
                    src={pictureURL}
                    alt={name}
                    height={60}
                    width={60}
                    objectFit="cover"
                    quality={100}
                    className="rounded-full" //TODO FIX THIS
                  />
                </div>

                <span className="mt-1">{name}</span>
              </div>
              <p className="text-gray-300 ">{text}</p>
            </SingleFamilyDetail3>
          ))}
        </Right>
      </GridCol2>
    </Family>
  )
}
