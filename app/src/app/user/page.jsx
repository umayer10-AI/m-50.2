import ModalTask from '@/component/ModalTask';
import TableTAsk from '@/component/TableTAsk';
import { deleteUser } from '@/lib/action';
import { getUser } from '@/lib/data';
import React from 'react';

const page = async () => {

    const data = await getUser()

    return (
        <div>
            <div className='flex justify-center gap-2 items-center my-5'>
                <h2>User Page: {data.length}</h2>
                <ModalTask></ModalTask>
            </div>
            <TableTAsk p={data} deleteUser={deleteUser}></TableTAsk>
        </div>
    );
};

export default page;