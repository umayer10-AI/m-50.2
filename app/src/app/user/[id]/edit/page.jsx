import { updateUser } from '@/lib/action';
import { getId } from '@/lib/data';
import { Button, Input, Label, TextField } from '@heroui/react';
import React from 'react';

const page = async ({params}) => {

    const {id} = await params
    const data = await getId(id)

    const a = async (formData) => {
        "use server"
        await updateUser(id,formData)
    }

    return (
        <div>
            <h2>Edit Page: {data.name}</h2>
            <div className='w-1/2 mx-auto'>
                <form action={a} className="flex flex-col gap-4">
                                  <TextField className="w-full" name="name" defaultValue={data?.name} type="text">
                                    <Label>Name</Label>
                                    <Input placeholder="Enter your name" />
                                  </TextField>
                                  <TextField className="w-full" name="email" defaultValue={data?.email} type="email">
                                    <Label>Email</Label>
                                    <Input placeholder="Enter your email" />
                                  </TextField>
                                  <TextField className="w-full" name="role" defaultValue={data?.role} type="text">
                                    <Label>Role</Label>
                                    <Input placeholder="Enter your role" />
                                  </TextField>
                
                              <div className='flex gap-2'>
                                <Button slot="close" variant="secondary">
                                Cancel
                              </Button>
                              <Button type='submit' slot="close">Update</Button>
                              </div>
                                </form>
            </div>
        </div>
    );
};

export default page;