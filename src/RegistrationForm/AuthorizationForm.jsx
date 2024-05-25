import React, { useState } from 'react';
import { EditTitle, EditForm, EditInput, EditButton, EditLabel } from '../PersonalAccount/styledPersonalAccount.ts';
import { notification } from 'antd';

const AuthorizationForm = ({ onAuthorize, onClose }) => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleAuthorizeClick = (e) => {
        e.preventDefault();

        const isEmpty = Object.values(form).some((value) => !value);

        if (isEmpty) {
            notification.error({
                message: 'Ошибка',
                description: 'Пожалуйста, заполните все поля формы.',
                placement: 'topLeft',
            });
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const foundUser = users.find((user) => user.email === form.email && user.password === form.password);

        if (!foundUser) {
            notification.error({
                message: 'Ошибка авторизации',
                description: 'Неправильный email или пароль.',
                placement: 'topLeft',
            });
            return;
        }

        onAuthorize(foundUser);
        notification.success({
            message: 'Авторизация успешна',
            description: `Добро пожаловать, ${foundUser.name}!`,
            placement: 'topLeft',
        });
        onClose();
    };

    return (
        <EditForm>
            <EditTitle>Авторизация</EditTitle>
            <EditLabel>Электронная почта:</EditLabel>
            <EditInput
                type="email"
                name="email"
                placeholder="Электронная почта"
                value={form.email}
                onChange={handleInputChange}
            />
            <EditLabel>Пароль:</EditLabel>
            <EditInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={form.password}
                onChange={handleInputChange}
            />
            <EditButton onClick={handleAuthorizeClick}>Авторизоваться</EditButton>
        </EditForm>
    );
};

export default AuthorizationForm;