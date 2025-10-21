import React, { useState } from "react";
import "./index.css";
import { Box, Button, Typography, useMediaQuery, Modal, Card, CardContent, CardActions, Avatar, Grid, Divider, Container } from "@mui/material";
import BoltIcon from '@mui/icons-material/Bolt';
import GroupIcon from '@mui/icons-material/Group';
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '@mui/icons-material/Verified';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import { useTheme } from "@mui/material";
import Carousel from "../../components/carousel";
import Footer from "../layout/footer";

const featuredWorkkers = [
    { name: "Alice", skill: "Graphic Design", img: "", rating: 5 },
    { name: "Bob", skill: "Web Development", img: "", rating: 4.8 },
    { name: "Charlie", skill: "Copywriting", img: "", rating: 4.9 },
    { name: "Diana", skill: "Video Editing", img: "", rating: 4.7 },
];

const testimonials = [
    {
        name: "John Doe",
        feedback: "Workkersnow helped me hire a designer in minutes. Super fast and reliable!",
        avatar: "",
    },
    {
        name: "Sarah Lee",
        feedback: "I found a developer for my urgent project instantly. Highly recommended!",
        avatar: "",
    },
    {
        name: "Mike Smith",
        feedback: "The process was smooth and secure. Will use again for quick jobs.",
        avatar: "",
    },
];

const features = [
    {
        icon: <SpeedIcon sx={{ color: "#0781db", fontSize: 40 }} />,
        title: "Instant Hiring",
        desc: "Find and hire workkers for urgent tasks in minutes.",
    },
    {
        icon: <VerifiedIcon sx={{ color: "#d523a3", fontSize: 40 }} />,
        title: "Verified Workkers",
        desc: "All workkers are vetted and reviewed for quality.",
    },
    {
        icon: <SecurityIcon sx={{ color: "#0781db", fontSize: 40 }} />,
        title: "Secure Payments",
        desc: "Pay safely and only when the job is done.",
    },
];

const Home = (props) => {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));

    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            {/* Hero Banner */}
            <Box
                sx={{
                    width: '100%',
                    background: theme.palette.background.default,
                    color: theme.palette.text.primary,
                    py: { xs: 4, sm: 8 },
                    px: 0,
                    transition: "background 0.3s, color 0.3s"
                }}
            >
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: sm ? 'column' : 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 6,
                            mb: 6,
                        }}
                    >
                        <Box sx={{ textAlign: sm ? 'center' : 'left', flex: 1 }}>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: 800,
                                    color: '#0781db',
                                    mb: 2,
                                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' }
                                }}
                            >
                                Instantly Hire Workkers
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    color: '#d523a3',
                                    mb: 2,
                                    fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem', lg: '1.7rem' }
                                }}
                            >
                                Get your urgent tasks done by skilled people, right now!
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#333',
                                    mb: 4,
                                    fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' }
                                }}
                            >
                                Workkersnow connects you with available workkers for your instant needs. Post your job, get responses, and hire the right person in minutes.
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                startIcon={<BoltIcon />}
                                onClick={() => setOpenModal(true)}
                                sx={{ fontWeight: 700, mr: 2 }}
                            >
                                Hire Instantly
                            </Button>
                            <Button
                                variant="outlined"
                                color="secondary"
                                size="large"
                                href="/signup"
                                sx={{
                                    fontWeight: 700,
                                    "&:hover": {
                                        backgroundColor: "#4a6fc8", // Lighter shade of #2249ab
                                        color: "#fff"
                                    }
                                }}
                            >
                                Get Started
                            </Button>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flex: 1,
                            minWidth: 200,
                        }}>
                            <GroupIcon sx={{ fontSize: 140, color: '#0781db' }} />
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Features Section */}
            <Box sx={{
                width: '100%',
                bgcolor: theme.palette.background.paper,
                color: theme.palette.text.primary,
                py: { xs: 3, sm: 6 },
                transition: "background 0.3s, color 0.3s"
            }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4} justifyContent="center">
                        {features.map((f, idx) => (
                            <Grid item xs={12} sm={4} key={idx}>
                                <Box sx={{ textAlign: 'center', px: 2 }}>
                                    {f.icon}
                                    <Typography variant="h6" sx={{ fontWeight: 700, mt: 2, mb: 1 }}>{f.title}</Typography>
                                    <Typography variant="body2" sx={{ color: '#555' }}>{f.desc}</Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Featured Workkers Carousel */}
            <Box sx={{
                width: '100%',
                py: { xs: 3, sm: 6 },
                bgcolor: theme.palette.background.default,
                color: theme.palette.text.primary,
                transition: "background 0.3s, color 0.3s"
            }}>
                <Container maxWidth="lg">
                    <Typography variant="h5" sx={{ color: '#0781db', mb: 3, textAlign: 'center', fontWeight: 700 }}>
                        Featured Workkers
                    </Typography>
                    <Carousel>
                        {featuredWorkkers.map((w, idx) => (
                            <Card key={idx} sx={{ mx: 2, minWidth: 220, boxShadow: 2 }}>
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Avatar sx={{ bgcolor: '#0781db', width: 56, height: 56, mx: 'auto', mb: 1 }}>
                                        {w.name[0]}
                                    </Avatar>
                                    <Typography variant="h6">{w.name}</Typography>
                                    <Typography variant="body2" sx={{ color: '#d523a3', mb: 1 }}>{w.skill}</Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 0.5 }}>
                                        <StarIcon sx={{ color: '#ffd700', fontSize: 20 }} />
                                        <Typography variant="body2">{w.rating}</Typography>
                                    </Box>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'center' }}>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        color="secondary"
                                        sx={{
                                            "&:hover": {
                                                backgroundColor: "#4a6fc8" // Lighter shade of #2249ab
                                            }
                                        }}
                                    >
                                        Hire
                                    </Button>
                                </CardActions>
                            </Card>
                        ))}
                    </Carousel>
                </Container>
            </Box>

            {/* Popup Modal for Instant Hire */}
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                aria-labelledby="hire-modal-title"
                aria-describedby="hire-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                    minWidth: sm ? 300 : 400,
                    maxWidth: '90vw',
                    transition: "background 0.3s, color 0.3s"
                }}>
                    <Typography id="hire-modal-title" variant="h6" sx={{ mb: 2 }}>
                        Post Your Instant Task
                    </Typography>
                    <Typography id="hire-modal-description" sx={{ mb: 2 }}>
                        Describe your task and get matched with available workkers instantly.
                    </Typography>
                    <Box component="form">
                        <input
                            type="text"
                            placeholder="What do you need done?"
                            style={{
                                width: '100%',
                                padding: '10px',
                                marginBottom: '16px',
                                borderRadius: '6px',
                                border: '1px solid #ccc',
                                fontSize: '1rem'
                            }}
                        />
                        <Button variant="contained" color="primary" fullWidth>
                            Submit & Get Matches
                        </Button>
                    </Box>
                </Box>
            </Modal>

            {/* Testimonials Section */}
            <Box sx={{
                width: '100%',
                bgcolor: theme.palette.background.paper,
                color: theme.palette.text.primary,
                py: { xs: 3, sm: 6 },
                transition: "background 0.3s, color 0.3s"
            }}>
                <Container maxWidth="lg">
                    <Typography variant="h5" sx={{ color: '#0781db', mb: 3, textAlign: 'center', fontWeight: 700 }}>
                        What Our Users Say
                    </Typography>
                    <Grid container spacing={3} justifyContent="center">
                        {testimonials.map((t, idx) => (
                            <Grid item xs={12} sm={6} md={4} key={idx}>
                                <Card sx={{ boxShadow: 1, p: 2 }}>
                                    <CardContent sx={{ textAlign: 'center' }}>
                                        <Avatar sx={{ bgcolor: '#d523a3', mx: 'auto', mb: 1 }}>
                                            {t.name[0]}
                                        </Avatar>
                                        <Typography variant="body1" sx={{ mb: 1, fontStyle: 'italic' }}>
                                            "{t.feedback}"
                                        </Typography>
                                        <Divider sx={{ my: 1 }} />
                                        <Typography variant="body2" sx={{ color: '#0781db' }}>
                                            {t.name}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Banner */}
            <Box sx={{
                width: '100%',
                bgcolor: theme.palette.primary.main,
                color: theme.palette.getContrastText(theme.palette.primary.main),
                py: { xs: 3, sm: 6 },
                textAlign: 'center',
                boxShadow: 2,
                marginBottom: '200px',
                transition: "background 0.3s, color 0.3s"
            }}>
                <Container maxWidth="lg">
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
                        Ready to get your work done instantly?
                    </Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        startIcon={<BoltIcon />}
                        href="/signup"
                        sx={{ fontWeight: 700 }}
                    >
                        Join Workkersnow Now
                    </Button>
                </Container>
            </Box>
            <Footer />
        </>
    );
}

export default Home;