import React from 'react';
import {Personal, InfoColumn, ColumnTitle, ColumnContent} from "./styledPersonalAccount.ts";

const PersonalInfo = () => {
    const savedForm = localStorage.getItem('personalInfoEdit');
    const form = savedForm ? JSON.parse(savedForm) : {};

    return (
        <Personal>
            <InfoColumn>
                <ColumnTitle>Контакты:</ColumnTitle>
                <ColumnContent>{form.phone}</ColumnContent>
            </InfoColumn>
            <InfoColumn>
                <ColumnTitle>Адрес доставки:</ColumnTitle>
                <ColumnContent>{form.city}</ColumnContent>
            </InfoColumn>
            <InfoColumn>
                <ColumnTitle>Дата рождения:</ColumnTitle>
                <ColumnContent>{form.birthday}</ColumnContent>
            </InfoColumn>
            <InfoColumn>
                <ColumnTitle>Бонусы:</ColumnTitle>
                <ColumnContent>-</ColumnContent>
            </InfoColumn>
        </Personal>
    );
};

export default PersonalInfo;