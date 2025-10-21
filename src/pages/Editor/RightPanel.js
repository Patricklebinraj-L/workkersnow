import React from "react";

const RightPanel = ({ config, setConfig, selected }) => {
    if (!selected) return <div style={{ width: 250, padding: 20 }}>Select an element</div>;
    const element = config.elements.find(el => el.id === selected);

    const handleChange = (key, value) => {
        const newConfig = { ...config };
        const el = newConfig.elements.find(el => el.id === selected);

        if (el.type === "text") {
            if (key === "content") el.content = value;
            else el.styles[key] = value;
        } else if (el.type === "rect") {
            el.styles[key] = value;
        } else if (el.type === "image") {
            if (key === "src") el.src = value;
            else el.styles[key] = value;
        }
        setConfig(newConfig);
    };

    return (
        <div style={{ width: 250, borderLeft: "1px solid #ccc", padding: 20 }}>
            <h3>Settings</h3>

            {element.type === "text" && (
                <>
                    <label>Text:</label>
                    <input
                        type="text"
                        value={element.content}
                        onChange={e => handleChange("content", e.target.value)}
                    />
                    <br />
                    <label>Font:</label>
                    <input
                        type="text"
                        value={element.styles.font}
                        onChange={e => handleChange("font", e.target.value)}
                    />
                    <br />
                    <label>Color:</label>
                    <input
                        type="color"
                        value={element.styles.color}
                        onChange={e => handleChange("color", e.target.value)}
                    />
                </>
            )}

            {element.type === "rect" && (
                <>
                    <label>Width:</label>
                    <input
                        type="number"
                        value={element.styles.width}
                        onChange={e => handleChange("width", +e.target.value)}
                    />
                    <br />
                    <label>Height:</label>
                    <input
                        type="number"
                        value={element.styles.height}
                        onChange={e => handleChange("height", +e.target.value)}
                    />
                    <br />
                    <label>Fill:</label>
                    <input
                        type="color"
                        value={element.styles.fill}
                        onChange={e => handleChange("fill", e.target.value)}
                    />
                </>
            )}

            {element.type === "image" && (
                <>
                    <label>Image URL:</label>
                    <input
                        type="text"
                        value={element.src}
                        onChange={e => handleChange("src", e.target.value)}
                    />
                    <br />
                    <label>Width:</label>
                    <input
                        type="number"
                        value={element.styles.width}
                        onChange={e => handleChange("width", +e.target.value)}
                    />
                    <br />
                    <label>Height:</label>
                    <input
                        type="number"
                        value={element.styles.height}
                        onChange={e => handleChange("height", +e.target.value)}
                    />
                </>
            )}
        </div>
    );
};

export default RightPanel;
