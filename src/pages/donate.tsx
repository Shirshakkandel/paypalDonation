import Head from 'next/head'
import { useState, FunctionComponent, useEffect } from 'react'
import { PayPalButton } from 'react-paypal-button-v2'
import styled from 'styled-components'

const Donate = styled.div``
const GridCol2 = styled.div``
const LeftFlexColCenter2 = styled.div``

const RightGridCenter = styled.div``
const FlexColXCenter4 = styled.div``

export default function donate() {
  const [amount, setAmount] = useState(10)
  const [scriptLoaded, setScriptLoaded] = useState(false)

  useEffect(() => {
    //search paypal script  we need to add paypal script in Head
    function addPaypalScript() {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://www.paypal.com/sdk/js?client-id=ASVMavJexlnFTEedWDm9JOyigjArIZZzW4Dqc_uELdPicOYZeBOWrktujZfJtmwTzAqm9NXqiQYwqmqJ`
      script.async = true
      script.onload = () => setScriptLoaded(true)
      document.body.appendChild(script)
    }
    addPaypalScript()
  }, [])

  async function addDonationDB(name: string) {
    try {
      const res = await fetch(`${process.env.API_BASE_ENDPOINT}api/donation`, {
        method: 'POST',
        body: JSON.stringify({ name, amount }),
      })

      const data = await res.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Donate className="h-full">
      <Head>
        <title>Donate</title>
      </Head>

      <GridCol2 className="grid h-full p-6 lg:px-24 md:grid-cols-2">
        <LeftFlexColCenter2 className="textBlock-wrapper">
          <h1 className="textBlock-title">
            You can <span className="font-bold text-yellow">Help</span>
          </h1>

          <p className="textBlock-subtitle">
            To save please send your contribution to our fund & keep the series alive
          </p>
        </LeftFlexColCenter2>

        <RightGridCenter className="grid place-items-center">
          <FlexColXCenter4 className="flex flex-col items-center px-4 py-6 mx-auto space-y-4 rounded-md md:w-10/12 bg-gray-dark">
            <h1 className="text-5xl textBlock-title">Donate Box</h1>
            <p className="textBlock-subtitle">Any amount will be appreciated</p>
            <div className="flex space-x-10">
              <DonationAmount value={5} setAmount={setAmount} amount={amount} />
              <DonationAmount value={10} setAmount={setAmount} amount={amount} />
              <DonationAmount value={15} setAmount={setAmount} amount={amount} />
            </div>

            {scriptLoaded ? (
              <PayPalButton
                amount={amount}
                onSuccess={(details, data) => {
                  console.log(details)
                  addDonationDB(details.payer.name.given_name)
                }}
              />
            ) : (
              <span>Loading...</span>
            )}
          </FlexColXCenter4>
        </RightGridCenter>
      </GridCol2>
    </Donate>
  )
}

const DonationAmount: FunctionComponent<{ amount: Number; value: Number; setAmount: Function }> = ({
  amount,
  setAmount,
  value,
}) => {
  return (
    <span
      className={`px-4 py-2 text-lg cursor-pointer bg-gray-light ${
        amount === value ? 'border-2 border-yellow' : ''
      }`}
      onClick={() => setAmount(value)}
    >
      {value}
    </span>
  )
}
