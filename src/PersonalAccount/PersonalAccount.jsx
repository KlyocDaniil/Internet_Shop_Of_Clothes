import React from 'react';
import {MyProfile, Title, Wrapper} from "./styledPersonalAccount.ts";
import PersonalInfo from "./PersonalInfo.jsx";
import PersonalInfoEdit from "./PersonalInfoEdit";

const PersonalAccount = () => {
    return (
        <Wrapper>
            <MyProfile>
                <Title>Мой профиль</Title>
                <PersonalInfo />
            </MyProfile>
            <PersonalInfoEdit />
        </Wrapper>
    );
};

export default PersonalAccount;