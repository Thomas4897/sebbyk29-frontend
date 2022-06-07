import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Avatar,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import DiamondIcon from "@mui/icons-material/Diamond";

const Header = () => {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Avatar
          alt="SebbyK29"
          src="https://static-cdn.jtvnw.net/jtv_user_pictures/6cdd78a1-dcc4-4ac2-b7f9-80b0b14677af-profile_image-70x70.png"
        />

        <Typography
          variant="h6"
          component="div"
          ml={2}
          color="inherit"
          sx={{ flexGrow: 0 }}
        >
          SebbyK29
        </Typography>
        <Typography
          variant="h4"
          component="div"
          ml={2}
          color="inherit"
          sx={{ flexGrow: 1 }}
          style={{
            textAlign: "center",
          }}
        >
          The Eco King
        </Typography>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="primary"
          href="https://www.patreon.com/SebbyK"
        >
          <DiamondIcon />
        </IconButton>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="primary"
          href="https://twitter.com/SebbyK29"
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="primary"
          href="https://www.youtube.com/c/SebbyK29"
        >
          <YouTubeIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
