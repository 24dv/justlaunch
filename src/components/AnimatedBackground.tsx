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
        size: 25 + Math.random() * 35,
        speed: 0.7 + Math.random() * 1.8,
        rotation: Math.random() * Math.PI * 2,
        opacity: 0.5 + Math.random() * 0.4
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
      
      // Draw improved rocket body (more rocket-like)
      ctx.beginPath();
      ctx.moveTo(0, -rocket.size * 1.8);
      ctx.lineTo(rocket.size / 2.5, -rocket.size * 0.5);
      ctx.lineTo(rocket.size / 2.5, rocket.size * 0.7);
      ctx.lineTo(0, rocket.size);
      ctx.lineTo(-rocket.size / 2.5, rocket.size * 0.7);
      ctx.lineTo(-rocket.size / 2.5, -rocket.size * 0.5);
      ctx.closePath();
      ctx.fill();
      
      // Draw larger rocket fins
      ctx.beginPath();
      ctx.moveTo(rocket.size / 2.5, -rocket.size * 0.2);
      ctx.lineTo(rocket.size, rocket.size * 0.4);
      ctx.lineTo(rocket.size / 2.5, rocket.size * 0.7);
      ctx.closePath();
      ctx.fill();
      
      ctx.beginPath();
      ctx.moveTo(-rocket.size / 2.5, -rocket.size * 0.2);
      ctx.lineTo(-rocket.size, rocket.size * 0.4);
      ctx.lineTo(-rocket.size / 2.5, rocket.size * 0.7);
      ctx.closePath();
      ctx.fill();
      
      // Draw rocket windows (portholes)
      ctx.beginPath();
      ctx.arc(0, -rocket.size * 0.7, rocket.size / 8, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(220, 240, 255, ${rocket.opacity})`;
      ctx.fill();
      
      // Draw rocket flame - larger and more dynamic
      ctx.beginPath();
      ctx.moveTo(-rocket.size / 3.5, rocket.size);
      ctx.lineTo(-rocket.size / 6, rocket.size * 2);
      ctx.lineTo(0, rocket.size * 1.7);
      ctx.lineTo(rocket.size / 6, rocket.size * 2);
      ctx.lineTo(rocket.size / 3.5, rocket.size);
      ctx.closePath();
      
      const flameGradient = ctx.createLinearGradient(0, rocket.size, 0, rocket.size * 2);
      flameGradient.addColorStop(0, `rgba(255, 140, 0, ${rocket.opacity})`);
      flameGradient.addColorStop(1, `rgba(255, 230, 110, ${rocket.opacity})`);
      ctx.fillStyle = flameGradient;
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
          rocket.size = 25 + Math.random() * 35;
          rocket.speed = 0.7 + Math.random() * 1.8;
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
      style={{ opacity: 0.6 }}
    />
  );
};

export default AnimatedBackground;
