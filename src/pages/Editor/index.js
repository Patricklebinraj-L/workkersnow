import React, { useRef, useEffect, useState } from "react";
import useStyles from "./styles";
import RightPanel from "./RightPanel";

const initialConfig = {
    elements: [
        {
            id: "text1",
            type: "text",
            content: "Hello Canva!",
            x: 150,
            y: 150,
            rotation: 0,
            scale: 1,
            styles: { font: "24px Arial", color: "#000" }
        },
        {
            id: "rect1",
            type: "rect",
            x: 300,
            y: 200,
            rotation: 0,
            scale: 1,
            styles: { width: 120, height: 80, fill: "#3498db" }
        },
        {
            id: "img1",
            type: "image",
            src: "https://via.placeholder.com/120",
            x: 500,
            y: 250,
            rotation: 0,
            scale: 1,
            styles: { width: 120, height: 120 }
        }
    ]
};

const HANDLE_SIZE = 8;

const Editor = () => {
    const classes = useStyles();
    const canvasRef = useRef(null);
    const [config, setConfig] = useState(initialConfig);
    const [selected, setSelected] = useState(null);
    const [draggingHandle, setDraggingHandle] = useState(null);

    // Draw all elements
    const draw = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        config.elements.forEach(el => {
            ctx.save();
            ctx.translate(el.x, el.y);
            ctx.rotate((el.rotation * Math.PI) / 180);
            ctx.scale(el.scale, el.scale);

            if (el.type === "text") {
                ctx.font = el.styles.font;
                ctx.fillStyle = el.styles.color;
                ctx.fillText(el.content, 0, 0);
            }
            if (el.type === "rect") {
                ctx.fillStyle = el.styles.fill;
                ctx.fillRect(0, 0, el.styles.width, el.styles.height);
            }
            if (el.type === "image") {
                const img = new Image();
                img.src = el.src;
                img.onload = () => {
                    ctx.drawImage(img, 0, 0, el.styles.width, el.styles.height);
                };
            }

            // Draw selection + handles
            if (el.id === selected) {
                ctx.strokeStyle = "blue";
                ctx.lineWidth = 1;

                let w, h;
                if (el.type === "text") {
                    w = ctx.measureText(el.content).width;
                    h = 30;
                    ctx.strokeRect(0, -24, w, h);
                } else {
                    w = el.styles.width;
                    h = el.styles.height;
                    ctx.strokeRect(0, 0, w, h);
                }

                // Draw 4 handles
                const handleCoords = [
                    [0, 0], [w, 0], [0, h], [w, h]
                ];
                ctx.fillStyle = "white";
                ctx.strokeStyle = "black";
                handleCoords.forEach(([hx, hy]) => {
                    ctx.fillRect(hx - HANDLE_SIZE / 2, hy - HANDLE_SIZE / 2, HANDLE_SIZE, HANDLE_SIZE);
                    ctx.strokeRect(hx - HANDLE_SIZE / 2, hy - HANDLE_SIZE / 2, HANDLE_SIZE, HANDLE_SIZE);
                });
            }

            ctx.restore();
        });
    };

    // Get element at mouse
    const getElementAt = (x, y) => {
        const ctx = canvasRef.current.getContext("2d");
        for (let i = config.elements.length - 1; i >= 0; i--) {
            const el = config.elements[i];
            let w, h;
            if (el.type === "text") {
                ctx.font = el.styles.font;
                w = ctx.measureText(el.content).width;
                h = 30;
            } else {
                w = el.styles.width;
                h = el.styles.height;
            }
            if (x >= el.x && x <= el.x + w && y >= el.y - h && y <= el.y + h) {
                return el;
            }
        }
        return null;
    };

    // Detect handle hit
    const getHandleAt = (el, x, y) => {
        let w, h;
        const ctx = canvasRef.current.getContext("2d");
        if (el.type === "text") {
            ctx.font = el.styles.font;
            w = ctx.measureText(el.content).width;
            h = 30;
            const corners = [
                [el.x, el.y - 24], [el.x + w, el.y - 24],
                [el.x, el.y + 6], [el.x + w, el.y + 6]
            ];
            return corners.findIndex(([cx, cy]) =>
                Math.abs(x - cx) < HANDLE_SIZE && Math.abs(y - cy) < HANDLE_SIZE
            );
        } else {
            w = el.styles.width;
            h = el.styles.height;
            const corners = [
                [el.x, el.y], [el.x + w, el.y],
                [el.x, el.y + h], [el.x + w, el.y + h]
            ];
            return corners.findIndex(([cx, cy]) =>
                Math.abs(x - cx) < HANDLE_SIZE && Math.abs(y - cy) < HANDLE_SIZE
            );
        }
    };

    const handleMouseDown = e => {
        const rect = canvasRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (selected) {
            const el = config.elements.find(el => el.id === selected);
            const handleIndex = getHandleAt(el, x, y);
            if (handleIndex !== -1) {
                setDraggingHandle({ id: el.id, handle: handleIndex, startX: x, startY: y });
                return;
            }
        }

        const el = getElementAt(x, y);
        if (el) setSelected(el.id);
        else setSelected(null);
    };

    const handleMouseMove = e => {
        if (!draggingHandle) return;
        const { id, handle, startX, startY } = draggingHandle;
        const el = config.elements.find(el => el.id === id);

        const rect = canvasRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const dx = x - startX;
        const dy = y - startY;

        const newConfig = { ...config };
        const target = newConfig.elements.find(el => el.id === id);

        if (target.type === "rect" || target.type === "image") {
            if (handle === 1 || handle === 3) target.styles.width += dx;
            if (handle === 2 || handle === 3) target.styles.height += dy;
        } else if (target.type === "text") {
            if (handle === 1 || handle === 3) {
                const size = parseInt(target.styles.font.match(/\d+/)[0]) + dx / 10;
                target.styles.font = `${size}px Arial`;
            }
        }

        setConfig(newConfig);
        setDraggingHandle({ ...draggingHandle, startX: x, startY: y });
    };

    const handleMouseUp = () => setDraggingHandle(null);

    // Redraw
    useEffect(() => {
        draw();
    }, [config, selected]);

    return (
        <div className={classes.container}>
            <canvas
                ref={canvasRef}
                width={800}
                height={600}
                className={classes.canvas}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
            />
            <RightPanel config={config} setConfig={setConfig} selected={selected} />
        </div>
    );
};

export default Editor;
