import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData =[
    {
        title:"Welcome Screen",
        path: './WelcomeScreen',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title:"Login",
        path: './LoginScreen',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'
    },
    {
        title:"Factors",
        path: './app/components/Factors',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'
    },

]