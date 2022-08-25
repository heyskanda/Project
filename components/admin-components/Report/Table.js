import React from 'react'
import { admins } from '../AdminsData'

export const Table = () => {
    
    const heading = ['Name', 'Status', 'Role', 'Edit']
    
    console.log(admins)

    return (
        <>
            <div className='w-full min-h-fit bg-slate-700 rounded-lg grid grid-cols-4'>
                <div className='bg-slate-800 text-light-blue border-b p-5 px-10 col-span-4 row-flex justify-between rounded-t-lg'>
                    {
                        heading.map((head) => (
                            <div className=''>{head}</div>
                        ))
                    }
                </div>

                <div className='text-light-blue border-b p-5 px-10 col-span-4 row-flex justify-between'>
                    {
                        heading.map((head) => (
                            <div className=''>{head}</div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
