import styled from 'styled-components';

export const Wrapper = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #FCFCFC;
`

export const MyProfile = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 10px 10px;
  width: 1164px;
  height: 163px;
  flex-wrap: nowrap;
  padding-bottom: 40px; // добавил padding, чтобы не накладывались
  border-bottom: 1px solid #DEDEDB;
`

export const Personal = styled.div `
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const InfoColumn = styled.div `
  flex-basis: calc(23% - 10px); // уменьшил ширину, чтобы не накладывались
  margin: 20px 5px;
  display: flex;
  width: 200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #DEDEDB;
  &:last-child {
    border-right: none;
  }
`

export const ColumnTitle = styled.div `
  margin-bottom: 15px;
`
export const Title = styled.h1 `
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  margin-bottom: 10px;
`
export const ColumnContent = styled.div `
  font-size: smaller;
  font-weight: bold;
`

export const EditTitle = styled.h2 `
  font-weight: bold;
  margin-bottom: 10px;
`
export const PersonalInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`

export const EditForm = styled.form `
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%; // добавил ширину 100%, чтобы растянуть по ширине MyProfile
`

export const EditInput = styled.input `
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 50px;
  width: 60%; // добавил ширину 100%, чтобы растянуть по ширине PersonalInfoEdit
`

export const EditLabel = styled.label `
  margin-bottom: 5px;
`

export const EditButton = styled.button `
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  background-color: #565656;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
`