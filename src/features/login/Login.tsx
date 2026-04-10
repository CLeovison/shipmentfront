import { Stack, TextField, Button, Typography, Paper } from "@mui/material";
import { Link } from "@tanstack/react-router";
import ShipmentLogo from "../../../assets/logo.png";
import { LoginBackground } from "./Styles.ts";

export default function LoginPage() {
  return (
    <LoginBackground>
      <Stack
        sx={{
          width: "100%",
          maxWidth: 1000,
          margin: "0 auto",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 4, md: 6 },
        }}
      >
        <Stack
          sx={{
            flex: "1 1 0",
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: "center",
            textAlign: { xs: "center", md: "left" },
            px: { xs: 2, md: 4 },
          }}
          spacing={3}
        >
          <img src={ShipmentLogo} alt="Shipment Tracker Logo" style={{ width: 100, height: 100 }} />
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "#fff" }}>
            Shipment Tracker
          </Typography>
          <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.8)" }}>
            Manage your deliveries with ease.
          </Typography>
          <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.6)", maxWidth: 400 }}>
            Real‑time tracking, instant updates, and powerful analytics to keep your shipments on schedule.
          </Typography>
        </Stack>

        <Stack
          sx={{
            flex: "1 1 0",
            alignItems: "center",
            justifyContent: "center",
            px: { xs: 2, md: 4 },
          }}
        >
          <Paper
            elevation={6}
            sx={{
              p: { xs: 3, md: 4 },
              width: { xs: "100%", sm: 360 },
              backgroundColor: "#121212", // dark card
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#fff",
            }}
          >
            <Stack spacing={1} sx={{ alignItems: "center", mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
                Sign in to continue
              </Typography>
            </Stack>

            <Stack spacing={2}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                variant="outlined"
                slotProps={{
                  inputLabel: { style: { color: "#bbb" } },
                  input: {
                    style: { color: "#fff", backgroundColor: "#1e1e1e" },
                  },
                }}
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                variant="outlined"
                slotProps={{
                  inputLabel: { style: { color: "#bbb" } },
                  input: {
                    style: { color: "#fff", backgroundColor: "#1e1e1e" },
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#00e676",
                  "&:hover": { backgroundColor: "#00c853" },
                  color: "#000",
                }}
                fullWidth
              >
                Login
              </Button>
            </Stack>

            <Stack
              sx={{
                mt: 2,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "#00e676" }}>
                Create Account
              </Link>
              <Link to="/" style={{ textDecoration: "none", color: "#00e676" }}>
                Forgot Password?
              </Link>
            </Stack>
          </Paper>
        </Stack>
      </Stack>
    </LoginBackground>
  );
}
