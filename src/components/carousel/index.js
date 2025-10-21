import React, { useState } from "react";
import "./index.css";
import { Box, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const images = [
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
];

const Carousel = () => {
    const [active, setActive] = useState(0);

    const handlePrev = () => {
        setActive((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActive((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <Box className="carousel-container" sx={{
            position: 'relative',
            width: '100%',
            maxWidth: 600,
            margin: '0 auto',
            borderRadius: 3,
            boxShadow: 3,
            overflow: 'hidden',
            background: '#fff',
        }}>
            <Box className="carousel-inner" sx={{
                width: '100%',
                height: { xs: 200, sm: 320, md: 390 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
            }}>
                <img
                    src={images[active]}
                    alt={`slide-${active}`}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '8px',
                        transition: 'all 0.5s',
                        boxShadow: '0 2px 16px rgba(0,0,0,0.08)'
                    }}
                    onError={e => { e.target.src = "https://via.placeholder.com/600x390?text=Workkersnow"; }}
                />
            </Box>
            <IconButton
                className="carousel-control-prev"
                onClick={handlePrev}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: 16,
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(255,255,255,0.85)',
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    boxShadow: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'box-shadow 0.2s, background 0.2s',
                    '&:hover': {
                        bgcolor: 'rgba(7,129,219,0.18)',
                        boxShadow: 4,
                    }
                }}
            >
                <ArrowBackIosNewIcon sx={{ color: '#0781db', fontSize: 28 }} />
            </IconButton>
            <IconButton
                className="carousel-control-next"
                onClick={handleNext}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    right: 16,
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(255,255,255,0.85)',
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    boxShadow: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'box-shadow 0.2s, background 0.2s',
                    '&:hover': {
                        bgcolor: 'rgba(7,129,219,0.18)',
                        boxShadow: 4,
                    }
                }}
            >
                <ArrowForwardIosIcon sx={{ color: '#0781db', fontSize: 28 }} />
            </IconButton>
            <Box sx={{
                position: 'absolute',
                bottom: 12,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: 1,
            }}>
                {images.map((_, idx) => (
                    <Box
                        key={idx}
                        sx={{
                            width: 10,
                            height: 10,
                            borderRadius: '50%',
                            background: active === idx ? '#0781db' : '#e0e0e0',
                            transition: 'background 0.3s'
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Carousel;