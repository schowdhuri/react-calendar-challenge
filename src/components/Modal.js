import React from "react";
import styled from "styled-components";
import moment from "moment";

const Overlay = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 998;
    background-color: rgba(0, 0, 0, 0.2);
`;
const Wrapper = styled.div`
    background-color: #fff;
    padding: 10px;
    border-radius: 2px;
    box-shadow: 2px 2px 10px #000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
const FormField = styled.div`
    margin: 15px 0;
    padding: 10px 20px;
`;
const Label = styled.label`
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 0.9rem;
`;
const Buttons = styled.div`
    margin-top: 20px;
    border-top: solid 1px #e3e3e4;
    padding: 10px;
    text-align: center;
`;
const ButtonSave = styled.button`
    padding: 12px 20px;
    color: #fff;
    background-color: #5fadda;
    border: none;
    margin: 0 5px;
`;
const ButtonCancel = styled.button`
    padding: 12px 20px;
    color: #fff;
    background-color: #5d5d5d;
    border: none;
    margin: 0 5px;
`;
const TextInput = styled.textarea`
    width: 100%;
    height: 80px;
    border: solid 1px #e3e3e4;
    border-radius: 2px;
    padding: 10px;
`;
const TimeInput = styled.input`
    width: 100%;
    border: solid 1px #e3e3e4;
    border-radius: 2px;
    padding: 10px;
`;

class ReminderModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reminder: props.reminder || {
                name: "",
                time: "12:00"
            }
        };
        this.changeName = this.changeName.bind(this);
        this.changeTime = this.changeTime.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }
    changeName(ev) {
        let { reminder } = this.state;
        reminder = {
            ...reminder,
            name: ev.target.value
        }
        this.setState({ reminder });
    }
    changeTime(ev) {
        let { reminder } = this.state;
        reminder = {
            ...reminder,
            time: ev.target.value
        }
        this.setState({ reminder });
    }
    handleSave() {
        const { reminder } = this.state;
        const { name, time } = reminder;
        if(name.trim() && time) {
            this.props.onSave(reminder);
        }
    }
    render() {
        const {
            onCancel            
        } = this.props;
        const { reminder } = this.state;
        return (<Overlay>
            <Wrapper>
                <FormField>
                    <Label>Reminder</Label>
                    <TextInput
                        type="text"
                        value={reminder.name}
                        onChange={this.changeName} />
                </FormField>
                <FormField>
                    <Label>Time</Label>
                    <TimeInput
                        type="time"
                        value={reminder.time}
                        onChange={this.changeTime} />
                </FormField>
                <Buttons>
                    <ButtonCancel onClick={onCancel}>Cancel</ButtonCancel>
                    <ButtonSave onClick={this.handleSave}>Save</ButtonSave>
                </Buttons>
            </Wrapper>
        </Overlay>)
    }
}

export default ReminderModal;
