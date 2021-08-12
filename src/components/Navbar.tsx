import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavFlexJustifyBetween = styled.div``
const FlexItemCenter = styled.div``
const MobileHidden = styled.div``

const RightFlex6 = styled.div``

export default function Navbar() {
  const { pathname } = useRouter()

  return (
    <NavFlexJustifyBetween className="flex justify-between items-center text-white h-[10vh] px-5 md:px-10">
      <Link href="/">
        <a>
          <FlexItemCenter className={`flex items-center space-x-4 cursor-pointer`}>
            <img src="assets/logo.png" alt="" className="object-contain w-12 h-12 " />
            <MobileHidden
              className={`hidden text-gray-200 md:block ${pathname === '/' ? 'text-yellow' : ''}`}
            >
              <p>Father,Husband & Teacher</p>
              <p>Save Mr. White</p>
            </MobileHidden>
          </FlexItemCenter>
        </a>
      </Link>

      <RightFlex6 className="flex space-x-6 uppercase">
        <Link href="/donate">
          <a className={`${pathname === '/donate' ? 'text-yellow' : ''}`}>Donate</a>
        </Link>

        <Link href="/stats">
          <a className={pathname === '/stats' ? 'text-yellow' : ''}>stats</a>
        </Link>

        <Link href="/family">
          <a className={pathname === '/family' ? 'text-yellow' : ''}>family</a>
        </Link>
      </RightFlex6>
    </NavFlexJustifyBetween>
  )
}
