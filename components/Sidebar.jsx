import { CalendarDaysIcon, ChevronDownIcon, ClockIcon, ComputerDesktopIcon, ShoppingBagIcon, UserGroupIcon, UsersIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react'
import React from 'react'
import SideBarRow from './SideBarRow';

function Sidebar() {

    const { data: session } = useSession();
    const { data: loading } = useSession();
  return (
    <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>

        <SideBarRow src={session.user.image} Title={session.user.name} />
        <SideBarRow Title='Friends' Icon={UsersIcon} />
        <SideBarRow Title='Groups' Icon={UserGroupIcon} />
        <SideBarRow Title='Market Place' Icon={ShoppingBagIcon} />
        <SideBarRow Title='Watch' Icon={ComputerDesktopIcon} />
        <SideBarRow Title='Events' Icon={CalendarDaysIcon} />
        <SideBarRow Title='Memories' Icon={ClockIcon} />
        <SideBarRow Title='See More' Icon={ChevronDownIcon} />

    </div>
  )
}

export default Sidebar