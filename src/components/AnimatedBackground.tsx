
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

    // Initialize rockets
    const initRockets = () => {
      rocketsRef.current = Array.from({ length: 15 }, () => ({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 100,
        size: 15 + Math.random() * 20,
        speed: 0.5 + Math.random() * 1.5,
        rotation: Math.random() * Math.PI * 2,
        opacity: 0.2 + Math.random() * 0.5
      }));
    };

    // Draw a single rocket
    const drawRocket = (ctx: CanvasRenderingContext2D, rocket: Rocket) => {
      ctx.save();
      
      // Translate to rocket position and apply rotation
      ctx.translate(rocket.x, rocket.y);
      ctx.rotate(rocket.rotation);
      
      // Set color and opacity
      ctx.fillStyle = `rgba(249, 167, 167, ${rocket.opacity})`;
      ctx.strokeStyle = `rgba(249, 167, 167, ${rocket.opacity})`;
      
      // Draw rocket body
      ctx.beginPath();
      ctx.moveTo(0, -rocket.size * 1.5);
      ctx.lineTo(rocket.size / 2, 0);
      ctx.lineTo(0, rocket.size);
      ctx.lineTo(-rocket.size / 2, 0);
      ctx.closePath();
      ctx.fill();
      
      // Draw rocket fins
      ctx.beginPath();
      ctx.moveTo(rocket.size / 2, -rocket.size / 3);
      ctx.lineTo(rocket.size, 0);
      ctx.lineTo(rocket.size / 2, rocket.size / 3);
      ctx.closePath();
      ctx.fill();
      
      ctx.beginPath();
      ctx.moveTo(-rocket.size / 2, -rocket.size / 3);
      ctx.lineTo(-rocket.size, 0);
      ctx.lineTo(-rocket.size / 2, rocket.size / 3);
      ctx.closePath();
      ctx.fill();
      
      // Draw rocket flame
      ctx.beginPath();
      ctx.moveTo(-rocket.size / 4, rocket.size);
      ctx.lineTo(0, rocket.size * 1.8);
      ctx.lineTo(rocket.size / 4, rocket.size);
      ctx.closePath();
      ctx.fillStyle = `rgba(255, 210, 160, ${rocket.opacity})`;
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
        
        // Add slight horizontal drift
        rocket.x += Math.sin(Date.now() * 0.001 + index) * 0.5;
        
        // Draw the rocket
        drawRocket(ctx, rocket);
        
        // Reset rocket if it goes off screen
        if (rocket.y < -rocket.size * 2) {
          rocket.y = canvas.height + rocket.size;
          rocket.x = Math.random() * canvas.width;
          rocket.size = 15 + Math.random() * 20;
          rocket.speed = 0.5 + Math.random() * 1.5;
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
      style={{ opacity: 0.4 }}
    />
  );
};

export default AnimatedBackground;
