import React from 'react';
import { Personal, InfoColumn, ColumnTitle, ColumnContent } from './styledPersonalAccount.js';

const PersonalInfo = ({ personalInfo }) => {
    if (!personalInfo) {
        return <div>Нет данных для отображения</div>;
    }

    return (
        <Personal>
            <InfoColumn>
                <ColumnTitle>Имя фамилия</ColumnTitle>
                <ColumnContent>{personalInfo.name}</ColumnContent>
                <ColumnContent>{personalInfo.surname}</ColumnContent>
            </InfoColumn>
            <InfoColumn>
                <ColumnTitle>Телефон:</ColumnTitle>
                <ColumnContent>{personalInfo.phone}</ColumnContent>
            </InfoColumn>
            <InfoColumn>
                <ColumnTitle>Адрес доставки:</ColumnTitle>
                <ColumnContent>{personalInfo.city}</ColumnContent>
            </InfoColumn>
            <InfoColumn>
                <ColumnTitle>Дата рождения:</ColumnTitle>
                <ColumnContent>{personalInfo.birthday}</ColumnContent>
            </InfoColumn>
            <InfoColumn>
                <ColumnTitle>Бонусы:</ColumnTitle>
                <ColumnContent> - </ColumnContent>
            </InfoColumn>
        </Personal>
    );
};

export default PersonalInfo;