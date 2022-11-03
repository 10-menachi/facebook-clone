import React from 'react'
import Image from 'next/image'

function SideBarRow({ Icon, src, Title}) {
  return (
    <div className='flex items-center space-x-2 p-4'>
        {src && (
            <Image
                className='rounded-full'
                src={src}
                width={30}
                height={30}
                layout="fixed"
             />
        )}

        {Icon && (
            <Icon className="h-8 w-8 text-blue-500" />
        )}
        <p className='hidden sm:inline-flex'>{Title}</p>
    </div>
  )
}

export default SideBarRow