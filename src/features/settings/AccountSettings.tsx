import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import SecurityIcon from "@mui/icons-material/Security";

export default function AccountSettings() {
  return (
    <>
      <Stack spacing={4} sx={{ maxWidth: 700 }}>
        {/* Profile */}
        <Paper elevation={2} sx={{ p: 3, borderRadius: 2, backgroundColor: "#111" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Profile Information
          </Typography>
          <TextField label="Name" defaultValue="Clark" fullWidth sx={{ mb: 2 }} />
          <TextField label="Email" defaultValue="clark@example.com" fullWidth sx={{ mb: 2 }} />
          <Button variant="contained" color="primary">
            Update Profile
          </Button>
        </Paper>

        <Paper elevation={2} sx={{ p: 3, borderRadius: 2, backgroundColor: "#111" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Security Settings
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" color="secondary" startIcon={<LockIcon />}>
              Change Password
            </Button>
            <Button variant="outlined" color="secondary" startIcon={<SecurityIcon />}>
              Enable Two-Factor Authentication
            </Button>
          </Stack>
        </Paper>
      </Stack>
    </>
  );
}
