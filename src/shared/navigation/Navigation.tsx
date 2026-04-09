
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import ShipmentLogo from '../../../assets/logo.png';

import { Link } from '@tanstack/react-router';
import { NavigationHeader, SideNavigation } from "./style.ts";


export default function Navigation() {
  return (
    <SideNavigation variant="permanent" anchor="left">

      <NavigationHeader spacing={2}>
        <img
          src={ShipmentLogo}
          alt="Shipment Tracker Logo"
          style={{ width: 80, height: 80 }}
        />
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Shipment Tracker
        </Typography>
      </NavigationHeader>

      {/* Main Navigation */}
      <Stack sx={{ flexGrow: 1, p: 1 }} spacing={1}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Stack direction="row" spacing={2} sx={{ p: 1, alignItems: 'center' }}>
            <HomeIcon />
            <Typography>Home</Typography>
          </Stack>
        </Link>

        <Link to="/shipments" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Stack direction="row" spacing={2} sx={{ p: 1, alignItems: 'center' }}>
            <LocalShippingIcon />
            <Typography>Shipments</Typography>
          </Stack>
        </Link>

        <Link to="/upload" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Stack direction="row" spacing={2} sx={{ p: 1, alignItems: 'center' }}>
            <UploadFileIcon />
            <Typography>Upload</Typography>
          </Stack>
        </Link>
      </Stack>

      {/* Footer Section */}
      <Stack sx={{ p: 2, borderTop: '1px solid #ddd' }} spacing={1}>
        <Link to="/settings" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Stack direction="row" spacing={2} sx={{ p: 1, alignItems: 'center' }}>
            <SettingsIcon />
            <Typography>Settings</Typography>
          </Stack>
        </Link>

        <Link to="/logout" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Stack direction="row" spacing={2} sx={{ p: 1, alignItems: 'center' }}>
            <LogoutIcon color="error" />
            <Typography sx={{ color: 'error.main' }}>Logout</Typography>
          </Stack>
        </Link>
      </Stack>
    </SideNavigation>
  );
}