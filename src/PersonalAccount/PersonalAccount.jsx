import React, { useState, useEffect } from 'react';
import { MyProfile, Title, Wrapper, EditButton, PersonalInfoWrapper } from './styledPersonalAccount.ts';
import PersonalInfo from './PersonalInfo';
import PersonalInfoEdit from './PersonalInfoEdit';
import Modal from '../Modal/Modal';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

const PersonalAccount = () => {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [personalInfo, setPersonalInfo] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const storedPersonalInfo = localStorage.getItem('personalInfo');
        if (storedPersonalInfo) {
            setPersonalInfo(JSON.parse(storedPersonalInfo));
            setIsAuthorized(true);
        }
    }, []);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    const handleAuthorize = (form) => {
        setPersonalInfo(form);
        setIsAuthorized(true);
        localStorage.setItem('personalInfo', JSON.stringify(form));
    };

    const handleLogout = () => {
        setIsAuthorized(false);
        setPersonalInfo(null);
        localStorage.removeItem('personalInfo');
    };

    return (
        <Wrapper>
            <MyProfile>
                <Title>Мой профиль</Title>
                {isAuthorized ? (
                    <>
                        <PersonalInfoWrapper>
                            <PersonalInfo personalInfo={personalInfo} />
                            <EditButton onClick={handleLogout}>Выйти</EditButton>
                        </PersonalInfoWrapper>
                        <PersonalInfoEdit personalInfo={personalInfo} onSave={setPersonalInfo} />
                    </>
                ) : (
                    <EditButton onClick={handleOpenModal}>Войти</EditButton>
                )}
            </MyProfile>

            {isOpen && (
                <Modal onClose={handleCloseModal}>
                    <RegistrationForm onAuthorize={handleAuthorize} />
                </Modal>
            )}
        </Wrapper>
    );
};

export default PersonalAccount;