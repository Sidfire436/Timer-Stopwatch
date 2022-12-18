import React from 'react'
import TimerComponent from './timer';
import StopwatchComponent from './stopwatch'
import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

const STabs = styled(Tabs)`
  font-family: BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 20px;
  width: 50%;
  font-weight:bold;
  color:blue;
  border: 2px solid red;
`;

const STabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;
STabList.tabsRole = 'TabList';

const STab = styled(Tab)`
  margin-right: 4px;
  border: 1px solid black;
  padding: 4px;
  user-select: none;
  cursor: arrow;

  &.is-selected {
    // color: white;
    // background: black;
    border-bottom: 1px solid white;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 255, .5)
  }
`;
STab.tabsRole = 'Tab';

const STabPanel = styled(TabPanel)`
  display: none;
  min-height: 40vh;
  border: 1px solid black;
  padding: 4px;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }
`;
STabPanel.tabsRole = 'TabPanel';

const App = () => {
  return (
    <>
      <STabs
        selectedTabClassName='is-selected'
        selectedTabPanelClassName='is-selected'
      >
        <STabList>
          <STab>Timer</STab>
          <STab>Stopwatch</STab>
        </STabList>
        <STabPanel>
          <TimerComponent />
        </STabPanel>
        <STabPanel>
          <StopwatchComponent />
        </STabPanel>
      </STabs>
    </>
  )
}

export default App