import React from "react";
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/Inbox";
import HelpIcon from "@material-ui/icons/Help";


function Header(){
    return(
        <header>
        <div className="header-container">
            <div className="header-left">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Stack_Overflow.png" alt='logo' />
              <h3>products</h3>
            </div>
            <div className="header-middle">
               <div className="header-search=container">
               <SearchIcon />
            <input type="text" placeholder="Search..." />
               
               </div>
            </div>
            
            <div className="header-right">
                <div className="header-right-cont">
                <Avatar />
                <InboxIcon />
                <HelpIcon />
                 <svg
                 aria-hidden="true"
                 class="svg-icon iconStackExchange"
                 width="24"
                 height="24"
                 viewBox="0 0 18 18"
                 fill="rgba(0,0,0,0.5)"
                 style={{
                 cursor: "pointer",
              }}
            >
                 <path d="M15 1H3a2 2 0 00-2 2v2h16V3a2 2 0 00-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 002-2v-2H1v2Zm16-7H1v4h16V6Z"></path>
                 </svg>
                </div>
            </div>

        </div>
        </header>
    )
}

export default Header