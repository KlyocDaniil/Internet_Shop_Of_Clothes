import React, { useState } from 'react';
import { RegistrationFormWrapper, Input, Button } from './styledRegistrationForm.ts';
import {EditTitle} from "../PersonalAccount/styledPersonalAccount.ts";

const RegistrationForm = ({ onAuthorize }) => {
    const [form, setForm] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        birthday: '',
        city: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({...prevForm, [name]: value }));
    };

    const handleAuthorize = async () => {
        try {
            onAuthorize(form);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <RegistrationFormWrapper>
            <EditTitle>Авторизация</EditTitle>
            <Input placeholder='Имя' type="text" name="name" value={form.name} onChange={handleChange} required />
            <Input placeholder='Фамилия' type="text" name="surname" value={form.surname} onChange={handleChange} required />
            <Input placeholder='Email' type="email" name="email" value={form.email} onChange={handleChange} required />
            <Input placeholder='Телефон' type="tel" name="phone" value={form.phone} onChange={handleChange} required />
            <Input placeholder='Дата рождения' type="date" name="birthday" value={form.birthday} onChange={handleChange} required />
            <Input placeholder='Город' type="text" name="city" value={form.city} onChange={handleChange} required />
            <Button onClick={handleAuthorize}>Авторизоваться</Button>
        </RegistrationFormWrapper>
    );
};

export default RegistrationForm;