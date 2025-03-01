import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useState } from "react";

function Education({
    data,
    isEditing,
    onEdit,
    onSubmit
}) {
    const [formData, setFormData] = useState(data);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return (
        <section className="education">
            <h2 className="text-2xl font-bold my-4">Education</h2>
            {isEditing ? (
                <form onSubmit={handleSubmit} >
                    <Label>School Name</Label>
                    <Input
                        id='school'
                        name='school'
                        onChange={handleChange}
                        value={formData.school}
                    />

                    <Label>Title</Label>
                    <Input
                        id='title'
                        name='title'
                        onChange={handleChange}
                        value={formData.title}
                    />
                    <Label>Date</Label>
                    <Input
                        id='date'
                        name='date'
                        onChange={handleChange}
                        value={formData.date}
                    />
                    <Button type='submit' className='mt-4'>Submit</Button>
                </form>
            ) : (
                <div className="w-full border border-black rounded p-4 my-4">
                <p>Name: {formData.school}</p>
                <p>Email: {formData.title}</p>
                <p>Phone: {formData.date}</p>
                <Button onClick={onEdit} className='mt-4'>Edit</Button>
            </div>
            )}
        </section>
    )
}

export default Education;