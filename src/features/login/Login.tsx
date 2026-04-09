import { Stack, TextField, Button, Typography, Paper } from '@mui/material';
import ShipmentLogo from '../../../assets/logo.png';
import { Link } from '@tanstack/react-router';

export default function LoginPage() {
  return (
    <Stack
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper elevation={3} sx={{ p: 4, width: 360 }}>
        {/* Logo + Title */}
        <Stack spacing={1} sx={{ alignItems: 'center', mb: 3 }}>
          <img
            src={ShipmentLogo}
            alt="Shipment Tracker Logo"
            style={{ width: 80, height: 80 }}
          />
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            Shipment Tracker
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sign in to continue
          </Typography>
        </Stack>

        {/* Form Fields */}
        <Stack spacing={2}>
          <TextField label="Email" type="email" fullWidth />
          <TextField label="Password" type="password" fullWidth />
          <Button variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </Stack>

        {/* Footer Links */}
        <Stack
          sx={{
            mt: 2,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Left side */}
          <Link
            to="/register"
            style={{ textDecoration: 'none', color: '#1976d2' }}
          >
            Create Account
          </Link>

          {/* Right side */}
          <Link
            to="/forgot-password"
            style={{ textDecoration: 'none', color: '#1976d2' }}
          >
            Forgot Password?
          </Link>
        </Stack>
      </Paper>
    </Stack>
  );
}