import { MenuItem, Select, Stack, Typography } from "@mui/material";

export default function DisplaySettings() {
  return (
    <>
      <Stack spacing={3} sx={{ maxWidth: 600 }}>
        {/* Theme */}
        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          <Typography sx={{ minWidth: 150 }}>Theme</Typography>
          <Select defaultValue="dark" size="small" sx={{ minWidth: 200 }}>
            <MenuItem value="light">Light</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
            <MenuItem value="system">System Default</MenuItem>
          </Select>
        </Stack>

        {/* Font Size */}
        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          <Typography sx={{ minWidth: 150 }}>Font Size</Typography>
          <Select defaultValue="medium" size="small" sx={{ minWidth: 200 }}>
            <MenuItem value="small">Small</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="large">Large</MenuItem>
          </Select>
        </Stack>

        {/* Accent Color */}
        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          <Typography sx={{ minWidth: 150 }}>Accent Color</Typography>
          <Select defaultValue="blue" size="small" sx={{ minWidth: 200 }}>
            <MenuItem value="blue">Blue</MenuItem>
            <MenuItem value="green">Green</MenuItem>
            <MenuItem value="red">Red</MenuItem>
          </Select>
        </Stack>

        {/* Table Density */}
        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          <Typography sx={{ minWidth: 150 }}>Table Density</Typography>
          <Select defaultValue="comfortable" size="small" sx={{ minWidth: 200 }}>
            <MenuItem value="compact">Compact</MenuItem>
            <MenuItem value="comfortable">Comfortable</MenuItem>
          </Select>
        </Stack>

        {/* Date Format */}
        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          <Typography sx={{ minWidth: 150 }}>Date Format</Typography>
          <Select defaultValue="MM/DD/YYYY" size="small" sx={{ minWidth: 200 }}>
            <MenuItem value="MM/DD/YYYY">MM/DD/YYYY</MenuItem>
            <MenuItem value="DD/MM/YYYY">DD/MM/YYYY</MenuItem>
          </Select>
        </Stack>
      </Stack>
    </>
  );
}
