import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'

const Stats = styled.div``
const GridCol2 = styled.div``
const LeftFlexColYCenter = styled.div``

const RightFlexColYCenter = styled.div``
const SingleDonationBox = styled.div``

export async function getServerSideProps() {
  console.log('API', process.env.API_BASE_ENDPOINT)
  const res = await fetch(`${process.env.API_BASE_ENDPOINT}api/donations`)
  const data = await res.json()
  console.log(data)
  return { props: { donations: data } }
}

export default function stats({ donations }) {
  const getTotalDonation = (): String => {
    const total = donations.reduce((acc, donation) => acc + donation.amount, 0)
    return `${total}$`
  }

  console.log(donations)

  return (
    <Stats className="h-full">
      <Head>
        <title>Save Walter|Stats</title>
      </Head>

      <GridCol2 className="grid h-full gap-5 p-6 lg:px-24 md:grid-cols-2">
        <LeftFlexColYCenter className="text-white flexColYCenter">
          <div className="items-center w-10/12 mx-auto textBlock-wrapper md:py-14 bg-gray-dark">
            <h1 className="text-2xl font-medium md:text-5xl text-yellow">Total Donations</h1>
            <span className="px-6 py-4 text-2xl tracking-wide cursor-pointer md:text-3xl bg-gray-light">
              {getTotalDonation()}
            </span>
          </div>
        </LeftFlexColYCenter>

        <RightFlexColYCenter className="text-center flexColYCenter">
          <h1 className="mb-4 text-2xl font-medium md:text-5xl text-yellow">Last 5 Donators</h1>
          {
            //todo add type
            donations.map((d, i) => (
              <SingleDonationBox
                className="flex justify-between px-6 py-3 text-xl cursor-pointer bg-gray-dark"
                key={i}
              >
                <span>{d.name}</span>
                <span>{d.amount}$</span>
              </SingleDonationBox>
            ))
          }
        </RightFlexColYCenter>
      </GridCol2>
    </Stats>
  )
}
