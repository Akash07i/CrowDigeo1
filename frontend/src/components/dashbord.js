

import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, CssBaseline, Box } from "@mui/material";
import { Menu, Dashboard, Search, People, Chat, Assignment, Payment, Settings, Logout } from "@mui/icons-material";
// import DashboardPage from "./pages/DashboardPage";
// import MakersPage from "./pages/MakersPage";
// import PushersPage from "./pages/PushersPage";
// import BackersPage from "./pages/BackersPage";
// import ToolsPage from "./pages/ToolsPage";
// import FinancePage from "./pages/FinancePage";
// import SettingsPage from "./pages/SettingsPage";
import MakersPage from "../pages/MakersPage";
import PushersPage from "../pages/PushersPage";
import BackersPage from "../pages/BackersPage";
import ToolsPage from "../pages/ToolsPage";
import FinancePage from "../pages/FinancePage";
import SettingsPage from "../pages/SettingsPage";
import DashboardPage from "../pages/DashboardPage";


const drawerWidth = 260;

const menuItems = [
  { text: "Dashboard", icon: <Dashboard />, component: <DashboardPage /> },
  { text: "Makers", icon: <People/>, component: <MakersPage /> },
  { text: "Pushers", icon: <People />, component: <PushersPage /> },
  { text: "Backers", icon: <People />, component: <BackersPage /> },
  { text: "Tools", icon: <Assignment />, component: <ToolsPage /> },
  { text: "Finance", icon: <Payment />, component: <FinancePage /> },
  { text: "Settings", icon: <Settings />, component: <SettingsPage /> },
];

export default function IdeatorDashboard() {
  const [open, setOpen] = useState(true);
  const [selectedPage, setSelectedPage] = useState({ title: "Dashboard", component: <DashboardPage /> });

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* Top Navigation Bar */}
      <AppBar position="fixed" sx={{ width: open ? `calc(100% - ${drawerWidth}px)` : "100%", ml: open ? `${drawerWidth}px` : 0, background: "#0056A8" }}>
        <Toolbar>
          <IconButton color="inherit" onClick={() => setOpen(!open)} edge="start" sx={{ mr: 2 }}>
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap>
            {selectedPage.title} Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      {/* Sidebar Navigation */}
      <Drawer variant="persistent" anchor="left" open={open} sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box", background: "#003D73", color: "white" }
      }}>
        <Toolbar />
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index} onClick={() => setSelectedPage({ title: item.text, component: item.component })}>
              <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* Main Content Area */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, background: "#f4f6f8", minHeight: "100vh" }}>
        {selectedPage.component}
      </Box>
    </Box>
  );
}
