import React from "react";
import styled from "styled-components";
import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ReminderModal from "./Modal";
import Reminders from "./RemindersContainer";

const Wrapper = styled.div`

`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border: solid 1px #e3e3e3;
`;
const DayName = styled.th`
    background-color: #efefef;
    padding: 20px 0;
    width: 14.28%
`;
const Day = styled.td`
    padding: 30px 10px;
    border: solid 1px #e3e3e3;
    position: relative;
`;

const Header = styled.div`
    display: flex;
    margin-bottom: 10px;
`;
const Prev = styled.button`
    flex: 1;
    background: none;
    border: none;
    font-weight: bold;
    text-align: left;
    cursor: pointer;
`;
const Next = styled.button`
    flex: 1;
    background: none;
    border: none;
    font-weight: bold;
    text-align: right;
    cursor: pointer;
`;
const CurrentMonth = styled.div`
    text-align: center;
    flex: 10;
    font-weight: bold;
`;
const DateNum = styled.h3`
    font-size: 1.6rem;
    font-weight: 600;
    text-align: center;
`;

const AddReminder = styled.button`
    background: #f2f2f2;;
    border: none;
    font-weight: bold;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    &:hover {
        background-color: #e3e3e4;
    }
`;

class Calendar extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            reminder: null,
            selectedDate: null
        }
        this.openReminderModal = this.openReminderModal.bind(this);
        this.closeReminderModal = this.closeReminderModal.bind(this);
        this.saveReminder = this.saveReminder.bind(this);
    }
    openReminderModal(date, reminder) {
        this.setState({
            showModal: true,
            reminder,
            selectedDate: date
        });
    }
    closeReminderModal() {
        this.setState({
            showModal: false,
            selectedDate: null,
            reminder: null
        });
    }
    saveReminder(reminder) {
        this.props.saveReminder(reminder, this.state.selectedDate);
        this.closeReminderModal();
    }
    render() {
        const {
            month,
            prevMonth,
            nextMonth
        } = this.props;
        const { reminder } = this.state;
        const dayInMonth = month.clone();
        const firstOfMonth = dayInMonth.date(1);
        const lastOfMonth = firstOfMonth.clone()
            .add("1", "month")
            .subtract(1, "days");
        let i=0;
        
        let rows = [];

        let date = 1;
        while(date < lastOfMonth.date()) {
            const cols = [];
            for(let j=0; j<7; j++) {
                if((date === 1 && firstOfMonth.day() > j) ||
                    date > lastOfMonth.date()
                ) {
                    cols.push(<Day key={`${i}-${j}`}>&nbsp;</Day>);
                } else {
                    const curDate = month
                        .clone()
                        .date(date)
                        .format("YYYY-MM-DD");

                    cols.push(<Day key={`${i}-${j}`}>
                        <DateNum>{date}</DateNum>
                        <Reminders
                            date={curDate}
                            onEdit={r => this.openReminderModal(curDate, r)} />
                        <AddReminder
                            onClick={() => this.openReminderModal(curDate)}
                        > + </AddReminder>
                    </Day>);
                    date++;
                }
            }
            rows.push(<tr key={`row-${i}`}>{cols}</tr>);
            i++;
        }
        return <Wrapper>
            <Header>
                <Prev onClick={prevMonth}>
                    <FontAwesomeIcon icon="chevron-left" />
                </Prev>
                <CurrentMonth>{dayInMonth.format("MMMM, YYYY")}</CurrentMonth>
                <Next onClick={nextMonth}>
                    <FontAwesomeIcon icon="chevron-right" />
                </Next>
            </Header>
            <Table>
                <thead>
                    <tr>
                        <DayName>Sun</DayName>
                        <DayName>Mon</DayName>
                        <DayName>Tue</DayName>
                        <DayName>Wed</DayName>
                        <DayName>Thu</DayName>
                        <DayName>Fri</DayName>
                        <DayName>Sat</DayName>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>
            {this.state.showModal
                ? <ReminderModal
                    reminder={reminder}
                    onSave={this.saveReminder}
                    onCancel={this.closeReminderModal} />
                : null}
        </Wrapper>;
    }
}

export default Calendar;
