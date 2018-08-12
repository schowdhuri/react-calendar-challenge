import React from "react";
import styled from "styled-components";

import Calendar from "./CalendarContainer";

const Wrapper = styled.div`
    padding: 20px;
`;


const App = () => {
    return <Wrapper>
        <Calendar />
    </Wrapper>;
};

export default App;
