import {Box,Tab} from "@mui/material";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import { useState } from "react";
import { FiMail } from "react-icons/fi";
import { BsCameraReels } from "react-icons/bs";
import { IoPricetagsOutline } from "react-icons/io5";
import styles from "./TabDisplay.module.css";
import UserPost from "./userpost/UserPost";
import UserReels from "./userreels/UserReels";
import UserTags from "./usertags/UserTags";

function TabDisplay(){
    const [value,setValue] = useState('1');

    const handleChange = (event, newValue) => { 
        setValue(newValue);
    }

    return <Box className={styles.mainbox}>
        <TabContext value={value}>
            <Box sx={{borderBottom:1,
                 borderColor: 'divider'}}>
                <TabList aria-label='Tabs example' 
                        onChange={handleChange}
                        textColor="blue"
                        indicatorColor="blue" 
                        centered>
                    <Tab label='Posts' value='1'icon={<FiMail />} iconPosition="start"></Tab>
                    <Tab label='Reels'value='2' icon={<BsCameraReels />} iconPosition="start"></Tab>
                    <Tab label='Tags' value='3' icon={<IoPricetagsOutline />} iconPosition="start"></Tab>
                </TabList>
            </Box>
            <TabPanel value='1'>
                <UserPost />
            </TabPanel>
            <TabPanel value='2'>
                <UserReels />
            </TabPanel>
            <TabPanel value='3'>
                <UserTags />
            </TabPanel>
        </TabContext>
    </Box>
}

export default TabDisplay;