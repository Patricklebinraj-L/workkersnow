import React from "react";
import "./index.css";
import { Box, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTheme } from "@mui/material";

const Footer = () => {
        const theme = useTheme();
        return (
                <Box className="footer-container" component="footer">
                        <Box className="footer-content">
                                <Box className="footer-links">
                                        <Link href="/" underline="none" color="inherit">Home</Link>
                                        <Link href="/about" underline="none" color="inherit">About</Link>
                                        <Link href="/contact" underline="none" color="inherit">Contact</Link>
                                        <Link href="/privacy" underline="none" color="inherit">Privacy</Link>
                                        <Link href="/terms" underline="none" color="inherit">Terms</Link>
                                </Box>
                                <Box className="footer-social">
                                        <IconButton href="https://facebook.com" size="small" sx={{ color: theme.palette.secondary.main }}><FacebookIcon /></IconButton>
                                        <IconButton href="https://twitter.com" size="small" sx={{ color: theme.palette.secondary.main }}><TwitterIcon /></IconButton>
                                        <IconButton href="https://linkedin.com" size="small" sx={{ color: theme.palette.secondary.main }}><LinkedInIcon /></IconButton>
                                </Box>
                        </Box>
                        <Typography className="footer-copyright" variant="body2">
                                © {new Date().getFullYear()} Workkersnow. All rights reserved.
                        </Typography>
                </Box>
        );
}

export default Footer;
