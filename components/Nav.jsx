import Link from 'next/link'
import styles from './nav.module.css'
import { Navbar } from "flowbite-react";
import { Dropdown } from "flowbite-react";


const Nav = () => {
  return (
<nav className='h-20 shadow flex items-center'>
  <div className="flex w-full lg:max-w-[1200px] mx-auto justify-between items-center">
      <div>
          <Link href='/' className="font-bold text-3xl">Next-Blog ⌨</Link>
      </div>
      <div>
          <ul className="flex gap-5 items-center text-xl">
              <Link href="/" className='hidden lg:block'>Home</Link>
              <Dropdown label="Blog Menu" className='border-none'>
                <Dropdown.Item className='w-[150px] px-5' href='/blogs'>
                  Blog List
                </Dropdown.Item>
                <Dropdown.Item href='/form' className='w-[150px] px-5'>
                  Make A Blog
                </Dropdown.Item>
              </Dropdown>
                    
          </ul>
      </div>
  </div>
</nav>

  )
}

export default Nav
