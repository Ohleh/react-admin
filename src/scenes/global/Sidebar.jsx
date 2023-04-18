import React from "react";

import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
// import { Link } from "react-router-dom";
import { tokens } from "../../theme";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
// import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
// import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
// import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Sidebarr = () => {
  const thene = useTheme();
  const colors = tokens(thene.palette.mode);
  const { collapseSidebar } = useProSidebar();
  return (
    <Box
      sx={{
        "& .ps-sidebar-root": {
          border: "none",
        },
        // "& .pro-sidebar-inner": {
        //   background: `${colors.primary[400]} !important`,
        // },
        "& .ps-sidebar-container": {
          background: `${colors.primary[400]} !important`,
        },
        //   "& .pro-icon-wrapper": {
        //backgroundColor: "transparent !important",
        //   },
        //   "& .pro-inner-item": {
        //     padding: "5px 35px 5px 20px !important",
        //   },
        //   "& .pro-inner-item:hover": {
        //     color: "#868dfb !important",
        //   },
        "& .ps-menu-button:hover": {
          backgroundColor: "#868dfb !important",
        },
        //   "& .pro-menu-item.active": {
        //     color: "#6870fa !important",
        //   },
      }}
    >
      <Sidebar>
        <Menu iconShape="square">
          {/* LOGO & MENU ICONS */}
          <MenuItem
            onClick={() => collapseSidebar()}
            // icon={collapseSidebar ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {collapseSidebar && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  admin
                </Typography>
                <IconButton onClick={() => collapseSidebar()}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* USER */}
          {collapseSidebar && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="user-image"
                  width="100px"
                  height="100px"
                  src={"../../assets/user-img.jpg"}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Mr Cat
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Admin
                </Typography>
              </Box>
            </Box>
          )}
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default Sidebarr;
