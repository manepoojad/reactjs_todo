import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';
import LoginIcon from '@mui/icons-material/Login';

  export const SidebarData= [
    {
        title:"Home",
        icon:<HomeIcon/>,
        link:'/home'
    },
    {
        title:"About",
        icon:<InfoIcon/>,
        link:"/about"
    },
    {
        title:"ContactUs",
        icon:<ContactsIcon/>,
        link:"/contactUs"
    },
    {
        title:"LogIn",
        icon:<LoginIcon/>,
        link:"/logIn"
    },

  ]
  
  