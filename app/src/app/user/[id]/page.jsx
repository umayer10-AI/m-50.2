import { getId } from '@/lib/data';
import React from 'react';

const page = async ({params}) => {

    const {id} = await params
    const data = await getId(id)

    return (
        <div>
            <h2>{data.name}</h2>
            <h2>{data.email}</h2>
            <h2>{data.role}</h2>
        </div>
    );
};

export default page;