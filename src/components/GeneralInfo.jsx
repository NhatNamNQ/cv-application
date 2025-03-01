import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useState } from "react";

function GeneralInfo({
    data,
    isEditing,
    onSubmit,
    onEdit
}) {
    const [formData, setFormData] = useState(data);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData)
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <section className="general-info">
            <h2 className="text-2xl font-bold my-4">General Information</h2>
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <Label htmlFor='name'>Name</Label>
                    <Input
                        className=''
                        id='name'
                        name='name'
                        onChange={handleChange}
                        value={formData.name}
                    />

                    <Label>Email</Label>
                    <Input
                        type='email'
                        id='email'
                        name='email'
                        onChange={handleChange}
                        value={formData.email}
                    />
                    <Label>Phone</Label>
                    <Input
                        type='tel'
                        id='phone'
                        name='phone'
                        onChange={handleChange}
                        value={formData.phone}
                    />
                    <Button type='submit' className='mt-4'>Submit</Button>
                </form>
                ) : (
                    <div className="w-full border border-black rounded p-4 my-4">
                        <p>Name: {formData.name}</p>
                        <p>Email: {formData.email}</p>
                        <p>Phone: {formData.phone}</p>
                        <Button onClick={onEdit} className='mt-4'>Edit</Button>
                    </div>
                )}
        </section>
    )
}

export default GeneralInfo;