import React, { useState, useEffect } from 'react';
import PersonalInfo from './PersonalInfo';
import Modal from '../Modal/Modal';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import AuthorizationForm from '../RegistrationForm/AuthorizationForm';
import { EditButton, MyProfile, PersonalInfoWrapper, Title, Wrapper } from './styledPersonalAccount.js';
import Orders from "./Orders/Orders";

const PersonalAccount = () => {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [personalInfo, setPersonalInfo] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState('');

    useEffect(() => {
        const storedPersonalInfo = localStorage.getItem('personalInfo');
        if (storedPersonalInfo) {
            setPersonalInfo(JSON.parse(storedPersonalInfo));
            setIsAuthorized(true);
        }
    }, []);

    const handleAuthorize = (form) => {
        setPersonalInfo(form);
        setIsAuthorized(true);
        localStorage.setItem('personalInfo', JSON.stringify(form));
    };

    const handleLogout = () => {
        localStorage.removeItem('personalInfo');
        setIsAuthorized(false);
    };

    const handleModal = (type) => {
        setIsModalOpen(true);
        setModalType(type);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const foundUser = users.find((user) => user.email === personalInfo.email);

        if (foundUser) {
            setPersonalInfo(foundUser);
            setIsAuthorized(true);
        }
    }, []);

    return (
        <Wrapper>
            <MyProfile>
                <Title>Мой профиль</Title>
                {isAuthorized? (
                    <>
                        {personalInfo && (
                            <PersonalInfoWrapper>
                                <PersonalInfo personalInfo={personalInfo} />
                                <EditButton onClick={handleLogout}>Выйти</EditButton>
                            </PersonalInfoWrapper>
                        )}
                    </>
                ) : (
                    <>
                        <EditButton onClick={() => handleModal('authorization')}>Авторизация</EditButton>
                        <EditButton onClick={() => handleModal('registration')}>Регистрация</EditButton>
                    </>
                )}
            </MyProfile>
            {isModalOpen && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    title={modalType === 'registration' ? 'Регистрация' : 'Авторизация'}
                    footer={null}
                >
                    {modalType === 'registration'? (
                        <RegistrationForm
                            onRegister={handleAuthorize}
                            onClose={handleCloseModal}
                        />
                    ) : (
                        <AuthorizationForm
                            onAuthorize={handleAuthorize}
                            onClose={handleCloseModal}
                        />
                    )}
                </Modal>
            )}
            {personalInfo && <Orders />}
        </Wrapper>
    );
};

export default PersonalAccount;