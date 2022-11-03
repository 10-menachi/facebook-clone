import React from 'react'
import Image from 'next/image'
import { BellIcon, ChatBubbleLeftIcon, ChevronDownIcon, MagnifyingGlassIcon, ViewColumnsIcon } from '@heroicons/react/24/outline'
import { HomeIcon, FlagIcon, PlayIcon, ShoppingCartIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import HeaderIcon from './HeaderIcon'
import { signOut, useSession } from 'next-auth/react'

function Header() {

    const { data: session } = useSession();

    console.log(session);
  return (
    <div className='flex items-center sticky z-50 bg-white top-0 p-2 lg:px-5 shadow-md'>
        {/* left */}

        <div className='left-section flex items-center'>

            <Image
                src="https://links.papareact.com/5me"
                width={40}
                height={40}
                layout="fixed"
                alt='Facebook Logo'
            />


            <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2 flex-shrink'>
                <MagnifyingGlassIcon className='h-6 text-gray-600' />
                <input type="text" placeholder='Search Facebook' className='flex ml-2 items-center md:inline-flex outline-none border-none bg-transparent placeholder-gray-500 text-gray-600'/>
            </div>

        </div>

        {/* left */}

        {/* center */}
        <div className='flex justify-center flex-grow'>

            <div>
                {/* icons */}
                <div className='flex space-x-6 md:space-x-2'>
                    <HeaderIcon active={true} Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
                {/* icons */}
            </div>

        </div>

        {/* center */}

        {/* right */}
        <div className='flex items-center sm:space-x-2 justify-end'>

            {/* profile pic */}

            <Image
                onClick={signOut}
                src={session.user.image}
                width={40}
                height={40}
                layout="fixed"
                alt='Facebook Logo'
                className='rounded-full'
            />

            {/* profile pic */}

            <p className='whitespace-nowrap font-semibold pr-3'>{session.user.name}</p>
            <ViewColumnsIcon className='icon' />
            <ChatBubbleLeftIcon className='icon' />
            <BellIcon className='icon' />
            <ChevronDownIcon className='icon' />
        </div>
        {/* right */}
    </div>
  )
}

export default Header