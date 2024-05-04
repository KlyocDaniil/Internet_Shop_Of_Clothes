import React, { useState } from 'react';
import {EditTitle, EditForm, EditInput, EditButton, EditLabel} from "./styledPersonalAccount.ts";
import notification from "antd/es/notification";

const PersonalInfoEdit = ({ onSave = () => {} }) => {
    const [form, setForm] = useState(() => {
        const savedForm = localStorage.getItem('personalInfoEdit');
        return savedForm? JSON.parse(savedForm) : {
            name: '',
            surname: '',
            email: '',
            phone: '',
            birthday: '',
            city: '',
        };
    });

    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSaveClick = (e) => {
        e.preventDefault();
        localStorage.setItem('personalInfoEdit', JSON.stringify(form));
        onSave(form);
        notification.success({
            message: 'Данные сохранены',
            description: `Добро пожаловать "${form.name + ' ' + form.surname}"!`,
            placement: 'topLeft',
        });
    };

    return (
        <EditForm>
            <EditTitle>Личные данные</EditTitle>
            <EditLabel>Имя:</EditLabel>
            <EditInput
                type="text"
                name="name"
                placeholder="Имя"
                value={form.name}
                onChange={handleInputChange}
            />
            <EditLabel>Фамилия:</EditLabel>
            <EditInput
                type="text"
                name="surname"
                placeholder="Фамилия"
                value={form.surname}
                onChange={handleInputChange}
            />
            <EditLabel>Электронная почта:</EditLabel>
            <EditInput
                type="email"
                name="email"
                placeholder="Электронная почта"
                value={form.email}
                onChange={handleInputChange}
            />
            <EditLabel>Телефон:</EditLabel>
            <EditInput
                type="tel"
                name="phone"
                placeholder="Телефон"
                value={form.phone}
                onChange={handleInputChange}
            />
            <EditLabel>Дата рождения:</EditLabel>
            <EditInput
                type="date"
                name="birthday"
                placeholder="Дата рождения"
                value={form.birthday}
                onChange={handleInputChange}
            />
            <EditLabel>Город:</EditLabel>
            <EditInput
                type="text"
                name="city"
                placeholder="Город"
                value={form.city}
                onChange={handleInputChange}
            />
            <EditButton onClick={handleSaveClick}>СОХРАНИТЬ ИЗМЕНЕНИЯ</EditButton>
        </EditForm>
    );
};

export default PersonalInfoEdit;