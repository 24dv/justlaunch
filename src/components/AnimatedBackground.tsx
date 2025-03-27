
import React, { useEffect, useRef } from 'react';

interface Rocket {
  x: number;
  y: number;
  size: number;
  speed: number;
  rotation: number;
  opacity: number;
}

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rocketsRef = useRef<Rocket[]>([]);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize rockets - fewer rockets, larger size
    const initRockets = () => {
      rocketsRef.current = Array.from({ length: 8 }, () => ({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 200,
        size: 40 + Math.random() * 50, // Significantly larger rockets
        speed: 1 + Math.random() * 2.5, // Faster upward movement
        rotation: -0.1 + Math.random() * 0.2, // More focused upward orientation
        opacity: 0.6 + Math.random() * 0.4 // Higher opacity
      }));
    };

    // Draw a single rocket inspired by the provided design
    const drawRocket = (ctx: CanvasRenderingContext2D, rocket: Rocket) => {
      ctx.save();
      
      // Translate to rocket position and apply rotation
      ctx.translate(rocket.x, rocket.y);
      ctx.rotate(rocket.rotation);
      
      const rocketColor = `rgba(249, 167, 167, ${rocket.opacity})`;
      const accentColor = `rgba(255, 255, 255, ${rocket.opacity})`;
      
      // Draw rocket body - more streamlined like the reference image
      ctx.beginPath();
      
      // Rocket nose cone
      ctx.moveTo(0, -rocket.size * 1.2);
      ctx.lineTo(rocket.size * 0.3, -rocket.size * 0.7);
      ctx.lineTo(rocket.size * 0.3, rocket.size * 0.4);
      
      // Rocket body bottom
      ctx.lineTo(rocket.size * 0.2, rocket.size * 0.4);
      ctx.lineTo(rocket.size * 0.2, rocket.size * 0.6);
      ctx.lineTo(-rocket.size * 0.2, rocket.size * 0.6);
      ctx.lineTo(-rocket.size * 0.2, rocket.size * 0.4);
      
      // Rocket body top
      ctx.lineTo(-rocket.size * 0.3, rocket.size * 0.4);
      ctx.lineTo(-rocket.size * 0.3, -rocket.size * 0.7);
      
      ctx.closePath();
      ctx.fillStyle = rocketColor;
      ctx.fill();
      
      // Draw rocket fins
      ctx.beginPath();
      ctx.moveTo(rocket.size * 0.2, rocket.size * 0.3);
      ctx.lineTo(rocket.size * 0.5, rocket.size * 0.5);
      ctx.lineTo(rocket.size * 0.2, rocket.size * 0.6);
      ctx.closePath();
      ctx.fill();
      
      ctx.beginPath();
      ctx.moveTo(-rocket.size * 0.2, rocket.size * 0.3);
      ctx.lineTo(-rocket.size * 0.5, rocket.size * 0.5);
      ctx.lineTo(-rocket.size * 0.2, rocket.size * 0.6);
      ctx.closePath();
      ctx.fill();
      
      // Draw rocket window/porthole
      ctx.beginPath();
      ctx.arc(0, -rocket.size * 0.2, rocket.size * 0.15, 0, Math.PI * 2);
      ctx.fillStyle = accentColor;
      ctx.fill();
      ctx.strokeStyle = rocketColor;
      ctx.lineWidth = rocket.size * 0.03;
      ctx.stroke();
      
      // Draw rocket's small antenna/tip
      ctx.beginPath();
      ctx.moveTo(0, -rocket.size * 1.2);
      ctx.lineTo(rocket.size * 0.05, -rocket.size * 1.3);
      ctx.arc(0, -rocket.size * 1.3, rocket.size * 0.05, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw rocket flame - large and dynamic
      ctx.beginPath();
      
      // Outer flame
      ctx.moveTo(-rocket.size * 0.2, rocket.size * 0.6);
      ctx.lineTo(-rocket.size * 0.3, rocket.size * 1.2);
      ctx.lineTo(0, rocket.size * 0.9);
      ctx.lineTo(rocket.size * 0.3, rocket.size * 1.2);
      ctx.lineTo(rocket.size * 0.2, rocket.size * 0.6);
      
      const flameGradient = ctx.createLinearGradient(0, rocket.size * 0.6, 0, rocket.size * 1.5);
      flameGradient.addColorStop(0, `rgba(255, 90, 0, ${rocket.opacity})`);
      flameGradient.addColorStop(0.5, `rgba(255, 150, 10, ${rocket.opacity})`);
      flameGradient.addColorStop(1, `rgba(255, 230, 110, ${rocket.opacity * 0.7})`);
      
      ctx.fillStyle = flameGradient;
      ctx.fill();
      
      // Inner flame - brighter
      ctx.beginPath();
      ctx.moveTo(-rocket.size * 0.1, rocket.size * 0.6);
      ctx.lineTo(-rocket.size * 0.15, rocket.size * 1.0);
      ctx.lineTo(0, rocket.size * 0.8);
      ctx.lineTo(rocket.size * 0.15, rocket.size * 1.0);
      ctx.lineTo(rocket.size * 0.1, rocket.size * 0.6);
      
      const innerFlameGradient = ctx.createLinearGradient(0, rocket.size * 0.6, 0, rocket.size * 1.0);
      innerFlameGradient.addColorStop(0, `rgba(255, 255, 255, ${rocket.opacity})`);
      innerFlameGradient.addColorStop(1, `rgba(255, 200, 50, ${rocket.opacity})`);
      
      ctx.fillStyle = innerFlameGradient;
      ctx.fill();
      
      ctx.restore();
    };

    // Animation loop
    const animate = () => {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw each rocket
      rocketsRef.current.forEach((rocket, index) => {
        // Move rocket upward
        rocket.y -= rocket.speed;
        
        // Add very slight horizontal drift - reduced for less chaotic movement
        rocket.x += Math.sin(Date.now() * 0.0005 + index) * 0.3;
        
        // Draw the rocket
        drawRocket(ctx, rocket);
        
        // Reset rocket if it goes off screen
        if (rocket.y < -rocket.size * 2) {
          rocket.y = canvas.height + rocket.size + Math.random() * 150;
          rocket.x = canvas.width * 0.1 + Math.random() * (canvas.width * 0.8); // Keep rockets more centered
          rocket.size = 40 + Math.random() * 50;
          rocket.speed = 1 + Math.random() * 2.5;
          rocket.rotation = -0.1 + Math.random() * 0.2; // Keep rockets pointing mostly upward
        }
      });
      
      // Continue animation
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    initRockets();
    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
      resizeCanvas();
      initRockets();
    });

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
};

export default AnimatedBackground;
