"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react';
import axios from "@repo/axios";


const FormComponent = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastname: ''
    });

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Access formData values here

        const { data } = await axios.post('http://localhost:4000/event', { formData })
        console.log(data);
        setFormData({ lastname: '', name: '' })

    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="lastname">Last Name:</label>
                <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormComponent;