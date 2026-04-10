import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Stack, Drawer, Box, Paper, BottomNavigation, BottomNavigationAction, Collapse, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import ShipmentLogo from "../../../assets/logo.png";
import { Link } from "@tanstack/react-router";

export default function Navigation() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [value, setValue] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const navItems = [
    { to: "/", label: "Home", icon: <HomeIcon /> },
    { to: "/shipments", label: "Shipments", icon: <LocalShippingIcon /> },
    { to: "/upload", label: "Upload", icon: <UploadFileIcon /> },
  ];

  return (
    <>
      {/* Header ONLY on mobile */}
      {isMobile && (
        <AppBar
          position="fixed"
          sx={{
            background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
            color: "white",
            zIndex: 1300,
          }}
        >
          <Toolbar>
            <img src={ShipmentLogo} alt="Shipment Tracker Logo" style={{ width: 40, height: 40, marginRight: 12 }} />
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Shipment Tracker
            </Typography>
          </Toolbar>
        </AppBar>
      )}

      {/* Sidebar ONLY on desktop */}
      {!isMobile && (
        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            "& .MuiDrawer-paper": {
              width: 240,
              background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            },
          }}
        >
          <Box sx={{ p: 2 }}>
            {/* Logo + Title at top */}
            <Stack spacing={1} alignItems="center">
              <img src={ShipmentLogo} alt="Shipment Tracker Logo" style={{ width: 80, height: 80 }} />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  borderBottom: "2px solid white",
                  pb: 0.5,
                  textAlign: "center",
                  width: "100%",
                }}
              >
                Shipment Tracker
              </Typography>
            </Stack>

            {/* Navigation links */}
            <Stack sx={{ mt: 4 }} spacing={2}>
              {navItems.map(({ to, label, icon }) => (
                <Link key={to} to={to} style={{ textDecoration: "none", color: "inherit" }}>
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                      alignItems: "center",
                      p: 1.5,
                      borderRadius: 2,
                      transition: "background 0.3s",
                      "&:hover": {
                        background: "rgba(255,255,255,0.2)",
                      },
                    }}
                  >
                    {icon}
                    <Typography>{label}</Typography>
                  </Stack>
                </Link>
              ))}
            </Stack>
          </Box>

          {/* Hamburger trigger + overlay at bottom */}
          <Box sx={{ p: 2, position: "relative" }}>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                alignItems: "center",
                p: 1.5,
                borderRadius: 2,
                cursor: "pointer",
                "&:hover": {
                  background: "rgba(255,255,255,0.2)",
                },
              }}
              onClick={() => setExpanded(!expanded)}
            >
              <MenuIcon />
              <Typography>More</Typography>
            </Stack>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <Box
                sx={{
                  position: "absolute",
                  bottom: 60, // show above trigger
                  left: 0,
                  right: 0,
                  background: "rgba(0,0,0,0.4)",
                  p: 2,
                }}
              >
                <Link to="/settings" style={{ textDecoration: "none", color: "inherit" }}>
                  <Stack direction="row" spacing={2} sx={{ alignItems: "center", mb: 1 }}>
                    <SettingsIcon />
                    <Typography>Settings</Typography>
                  </Stack>
                </Link>
                <Link to="/logout" style={{ textDecoration: "none", color: "inherit" }}>
                  <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                    <LogoutIcon sx={{ color: "red" }} />
                    <Typography sx={{ color: "red" }}>Logout</Typography>
                  </Stack>
                </Link>
              </Box>
            </Collapse>
          </Box>
        </Drawer>
      )}

      {/* Bottom Navigation ONLY on mobile */}
      {isMobile && (
        <Paper
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1200,
            background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
          }}
          elevation={8}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
            sx={{
              background: "transparent",
              "& .MuiBottomNavigationAction-root": {
                color: "white",
                transition: "all 0.3s ease",
                "&.Mui-selected": {
                  color: "#fff",
                  fontWeight: "bold",
                  transform: "scale(1.1)",
                },
              },
            }}
          >
            {navItems.map(({ to, label, icon }) => (
              <BottomNavigationAction key={to} label={label} icon={icon} component={Link} to={to} />
            ))}
            <BottomNavigationAction label="More" icon={<MenuIcon />} onClick={() => setExpanded(!expanded)} />
          </BottomNavigation>

          {/* Expanded overlay ABOVE bottom nav */}
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Box
              sx={{
                position: "absolute",
                bottom: 60,
                left: 0,
                right: 0,
                background: "rgba(0,0,0,0.4)",
                color: "white",
                p: 2,
                textAlign: "center",
              }}
            >
              <Link to="/settings" style={{ textDecoration: "none", color: "inherit" }}>
                <Stack direction="row" spacing={2} sx={{ justifyContent: "center", mb: 1 }}>
                  <SettingsIcon />
                  <Typography>Settings</Typography>
                </Stack>
              </Link>
              <Link to="/logout" style={{ textDecoration: "none", color: "inherit" }}>
                <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
                  <LogoutIcon sx={{ color: "red" }} />
                  <Typography sx={{ color: "red" }}>Logout</Typography>
                </Stack>
              </Link>
            </Box>
          </Collapse>
        </Paper>
      )}
    </>
  );
}
