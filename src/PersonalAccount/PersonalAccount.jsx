import React, { useState, useEffect } from 'react';
import PersonalInfo from './PersonalInfo';
import Modal from '../Modal/Modal';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import AuthorizationForm from '../RegistrationForm/AuthorizationForm';
import { EditButton, MyProfile, PersonalInfoWrapper, Title, Wrapper } from './styledPersonalAccount.js';

const PersonalAccount = () => {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [personalInfo, setPersonalInfo] = useState({});
    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
    const [isAuthorizationOpen, setIsAuthorizationOpen] = useState(false);

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

    const handleOpenRegistration = () => {
        setIsRegistrationOpen(true);
    };

    const handleCloseRegistration = () => {
        setIsRegistrationOpen(false);
    };

    const handleOpenAuthorization = () => {
        setIsAuthorizationOpen(true);
    };

    const handleCloseAuthorization = () => {
        setIsAuthorizationOpen(false);
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
                {isAuthorized ? (
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
                        <EditButton onClick={handleOpenAuthorization}>Авторизация</EditButton>
                        <EditButton onClick={handleOpenRegistration}>Регистрация</EditButton>
                    </>
                )}
            </MyProfile>
            {isRegistrationOpen && (
                <Modal
                    isOpen={isRegistrationOpen}
                    onClose={handleCloseRegistration}
                    title="Регистрация"
                    // footer={null}
                >
                    <RegistrationForm
                        onRegister={handleAuthorize}
                        onClose={handleCloseRegistration}
                    />
                </Modal>
            )}
            {isAuthorizationOpen && (
                <Modal
                    isOpen={isAuthorizationOpen}
                    onClose={handleCloseAuthorization}
                    title="Авторизация"
                    footer={null}
                >
                    <AuthorizationForm
                        onAuthorize={handleAuthorize}
                        onClose={handleCloseAuthorization}
                    />
                </Modal>
            )}
             {/*{personalInfo && <PersonalInfoEdit personalInfo={personalInfo} onSave={setPersonalInfo} />}*/}
        </Wrapper>
    );
};

export default PersonalAccount;