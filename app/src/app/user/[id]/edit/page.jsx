import { TextField } from '@heroui/react';
import React from 'react';

const page = async ({params}) => {

    const {id} = await params

    return (
        <div>
            <h2>Edit Page</h2>
            <div className='flex justify-center'>
                <form className="flex flex-col gap-4">
                                  <TextField className="w-full" name="name" type="text">
                                    <Label>Name</Label>
                                    <Input placeholder="Enter your name" />
                                  </TextField>
                                  <TextField className="w-full" name="email" type="email">
                                    <Label>Email</Label>
                                    <Input placeholder="Enter your email" />
                                  </TextField>
                                  <TextField className="w-full" name="role" type="text">
                                    <Label>Role</Label>
                                    <Input placeholder="Enter your role" />
                                  </TextField>
                
                            <Modal.Footer>
                              <Button slot="close" variant="secondary">
                                Cancel
                              </Button>
                              <Button type='submit' slot="close">Add</Button>
                            </Modal.Footer>
                                </form>
            </div>
        </div>
    );
};

export default page;