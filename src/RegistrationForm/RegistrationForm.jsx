import React, { useState } from 'react';
import { EditTitle, EditForm, EditInput, EditButton, EditLabel } from '../PersonalAccount/styledPersonalAccount.ts';
import { notification } from 'antd';

const RegistrationForm = ({ onRegister, onClose }) => {
    const [form, setForm] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        birthday: '',
        city: '',
        password: '',
    });

    const [isEmailTaken, setIsEmailTaken] = useState(false);
    const [isPhoneTaken, setIsPhoneTaken] = useState(false);

    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleEmailBlur = () => {
        const users = JSON.parse(localStorage.getItem('users')) || [];

        if (users) {
            const isEmailExists = users.some((user) => user.email === form.email);
            setIsEmailTaken(isEmailExists);
            if (isEmailExists){
                notification.error({
                    message: 'Ошибка',
                    description: 'Почта уже занята.',
                    placement: 'topLeft',
                });
            }
        }

    };



    const handlePhoneBlur = () => {
        const users = JSON.parse(localStorage.getItem('users')) || [];

        if (users) {
            const isPhoneExists = users.some((user) => user.phone === form.phone);
            setIsPhoneTaken(isPhoneExists);

            if (isPhoneExists) {
                notification.error({
                    message: 'Ошибка',
                    description: 'Телефон уже занят.',
                    placement: 'topLeft',
                });
            }
        }

    };

    const handleRegisterClick = (e) => {
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

        if (isEmailTaken || isPhoneTaken) {
            return;
        }

        const newUser = { ...form, id: Date.now() };
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        notification.success({
            message: 'Данные сохранены',
            description: `Добро пожаловать, ${form.name + ' ' + form.surname}!`,
            placement: 'topLeft',
        });
        onClose();
    };

    return (
        <EditForm>
            <EditTitle>Регистрация</EditTitle>
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
                value={form?.email || ''}
                onChange={handleInputChange}
                onBlur={handleEmailBlur}
                status={isEmailTaken ? 'error' : ''}
                placeholder={isEmailTaken ? 'Эта электронная почта уже занята.' : 'Электронная почта'}
            />
            <EditLabel>Телефон:</EditLabel>
            <EditInput
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleInputChange}
                onBlur={handlePhoneBlur}
                status={isPhoneTaken ? 'error' : ''}
                placeholder={isPhoneTaken ? 'Этот телефон уже занят.' : 'Телефон'}
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
            <EditLabel>Пароль:</EditLabel>
            <EditInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={form.password}
                onChange={handleInputChange}
            />
            <EditButton onClick={handleRegisterClick}>Зарегистрироваться</EditButton>
        </EditForm>
    );
};

export default RegistrationForm;