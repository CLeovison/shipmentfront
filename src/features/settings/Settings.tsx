import { Stack, Typography, Paper, List, ListItemButton, ListItemText } from "@mui/material";
import Navigation from "../../shared/navigation/Navigation.tsx";
import { useState } from "react";
import MonitorIcon from "@mui/icons-material/Monitor";
import SecurityIcon from "@mui/icons-material/Security";
import AccountSettings from "./AccountSettings.tsx";
import DisplaySettings from "./DisplaySettings.tsx";

export default function Settings() {
  const [activeTab, setActiveTab] = useState<"display" | "account">("display");

  return (
    <Stack
      direction="row"
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      <Navigation />

      <Stack direction={{ xs: "column", md: "row" }} spacing={4} sx={{ flexGrow: 1, p: { xs: 2, md: 4 } }}>
        <Paper
          elevation={1}
          sx={{
            width: { xs: "100%", md: 280 },
            p: 2,
            borderRadius: 2,
            flexShrink: 0,
            backgroundColor: "inherit",
            color: "inherit",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Preferences
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: "gray" }}>
            Customize how the app looks and feels.
          </Typography>
          <List>
            <ListItemButton selected={activeTab === "display"} onClick={() => setActiveTab("display")}>
              <MonitorIcon sx={{ mr: 1 }} />
              <ListItemText primary="Display Settings" />
            </ListItemButton>
          </List>

          {/* Category: Account & Security */}
          <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
            Account & Security
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: "gray" }}>
            Manage your profile and protect your account.
          </Typography>
          <List>
            <ListItemButton selected={activeTab === "account"} onClick={() => setActiveTab("account")}>
              <SecurityIcon sx={{ mr: 1 }} />
              <ListItemText primary="Manage Account" />
            </ListItemButton>
          </List>
        </Paper>

        <Paper
          elevation={0}
          sx={{
            flexGrow: 1,
            p: { xs: 2, md: 4 },
            borderRadius: 2,
            backgroundColor: "inherit",
            color: "inherit",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
            {activeTab === "display" ? "Display Settings" : "Account & Security"}
          </Typography>

          {activeTab === "display" && <DisplaySettings />}

          {activeTab === "account" && <AccountSettings />}
        </Paper>
      </Stack>
    </Stack>
  );
}
