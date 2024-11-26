"use client";

import { useEffect, useRef } from "react";

export default function TriangularMesh() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d")!;
        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        // Generate nodes
        const generateNodes = () =>
            Array.from({ length: 100 }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
            }));

        let nodes = generateNodes();

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // Update node positions
            nodes.forEach((node) => {
                node.x += node.vx;
                node.y += node.vy;

                // Bounce nodes off edges
                if (node.x < 0 || node.x > width) node.vx *= -1;
                if (node.y < 0 || node.y > height) node.vy *= -1;
            });

            // Draw triangles
            ctx.beginPath();
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
                    if (dist < 150) {
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                    }
                }
            }
            ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
            ctx.lineWidth = 0.5;
            ctx.stroke();

            // Draw nodes
            nodes.forEach((node) => {
                ctx.beginPath();
                ctx.arc(node.x, node.y, 1, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
                ctx.fill();
            });
        };

        const animate = () => {
            draw();
            requestAnimationFrame(animate);
        };

        animate();

        // Handle window resize
        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            nodes = generateNodes(); // Regenerate nodes to fit the new dimensions
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
            }}
        ></canvas>
    );
}