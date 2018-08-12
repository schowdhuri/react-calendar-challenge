import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.ul`
    list-style-type: none;
    margin: 10px 0 0 0;
    padding: 0;
`;
const Reminder = styled.li`
    display: flex;
    padding: 0;
    margin: 4px 0;
    background-color: #e3e3e4;
    border-radius: 2px;
    font-size: 0.8rem;
`;
const Time = styled.span`
    flex: 1;
    padding: 4px;
`;
const Name = styled.span`
    flex: 3;
    max-width: 10rem;
    text-overflow: ellipsis;
    overflow: hidden;
    word-wrap: break-word;
    padding: 4px;
`;
const buttonStyles = `
    flex: 1;
    background: none;
    border: none;
    padding: 2px;
    height: 1.5rem;
`;
const Edit = styled.button`
    ${buttonStyles}
    color: #5fadda;
`;
const Delete = styled.button`
    ${buttonStyles}
    color: #c52121;
`;

class Reminders extends React.Component {
    render() {
        const { reminders, onEdit, onDelete } = this.props;

        return <Wrapper>
            {reminders.map(r => <Reminder key={r.id}>
                <Time>{r.time}</Time>
                <Name>{r.name}</Name>
                <Edit onClick={() => onEdit(r)} title="Edit">
                    <FontAwesomeIcon icon="edit" />
                </Edit>
                <Delete onClick={() => onDelete(r.id)} title="Delete">
                    <FontAwesomeIcon icon="trash" />
                </Delete>
            </Reminder>)}
        </Wrapper>;
    }
}

export default Reminders;
