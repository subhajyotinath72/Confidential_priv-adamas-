"use client";

import React, { useEffect, useRef, useState } from "react";

interface InteractiveBlockGridProps {
  className?: string;
  blockSize?: number;
  blockGap?: number;
  maxElevation?: number;
  proximityRadius?: number;
}

export const InteractiveBlockGrid: React.FC<InteractiveBlockGridProps> = ({
  className = "",
  blockSize = 54,
  blockGap = 12,
  maxElevation = 14,
  proximityRadius = 180,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mousePos = useRef<{ x: number; y: number; active: boolean }>({
    x: -1000,
    y: -1000,
    active: false,
  });
  const lastClientPos = useRef<{ clientX: number; clientY: number }>({
    clientX: -1000,
    clientY: -1000,
  });
  const ripples = useRef<
    Array<{ x: number; y: number; radius: number; maxRadius: number; strength: number }>
  >([]);
  const animFrameId = useRef<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;

    let elevations: Float32Array = new Float32Array(0);

    const updateDimensions = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(rect.width, 320);
      height = Math.max(rect.height, 400);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.resetTransform?.();
      ctx.scale(dpr, dpr);

      const step = blockSize + blockGap;
      cols = Math.ceil(width / step) + 2;
      rows = Math.ceil(height / step) + 2;

      elevations = new Float32Array(cols * rows);
    };

    updateDimensions();

    const updateMouseFromClient = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      const relX = clientX - rect.left;
      const relY = clientY - rect.top;

      if (
        relX >= -100 &&
        relX <= width + 100 &&
        relY >= -100 &&
        relY <= height + 100
      ) {
        mousePos.current = {
          x: relX,
          y: relY,
          active: true,
        };
      } else {
        mousePos.current.active = false;
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      lastClientPos.current = { clientX: e.clientX, clientY: e.clientY };
      updateMouseFromClient(e.clientX, e.clientY);
    };

    const handleScroll = () => {
      if (lastClientPos.current.clientX >= 0) {
        updateMouseFromClient(
          lastClientPos.current.clientX,
          lastClientPos.current.clientY
        );
      }
    };

    const handlePointerLeave = () => {
      mousePos.current.active = false;
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      if (clickX >= 0 && clickX <= width && clickY >= 0 && clickY <= height) {
        ripples.current.push({
          x: clickX,
          y: clickY,
          radius: 12,
          maxRadius: Math.max(width, height) * 0.45,
          strength: 1.0,
        });
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });

    let resizeObserver: ResizeObserver | null = null;
    if (canvas.parentElement) {
      resizeObserver = new ResizeObserver(() => {
        updateDimensions();
      });
      resizeObserver.observe(canvas.parentElement);
    }

    const drawRoundedRect = (
      c: CanvasRenderingContext2D,
      x: number,
      y: number,
      w: number,
      h: number,
      r: number
    ) => {
      c.beginPath();
      c.moveTo(x + r, y);
      c.arcTo(x + w, y, x + w, y + h, r);
      c.arcTo(x + w, y + h, x, y + h, r);
      c.arcTo(x, y + h, x, y, r);
      c.arcTo(x, y, x + w, y, r);
      c.closePath();
    };

    const step = blockSize + blockGap;
    const cornerRadius = 8;
    let isRunning = true;

    const render = () => {
      if (!isRunning) return;

      ctx.clearRect(0, 0, width, height);

      const mx = mousePos.current.x;
      const my = mousePos.current.y;
      const isMouseActive = mousePos.current.active;

      // Viewport culling boundaries
      const rect = canvas.getBoundingClientRect();
      const viewTop = -rect.top - 150;
      const viewBottom = viewTop + window.innerHeight + 300;

      // Update ripple shockwaves
      for (let i = ripples.current.length - 1; i >= 0; i--) {
        const rip = ripples.current[i];
        rip.radius += 12;
        rip.strength *= 0.95;
        if (rip.strength < 0.02 || rip.radius > rip.maxRadius) {
          ripples.current.splice(i, 1);
        }
      }

      // Draw and compute visible grid blocks
      for (let r = 0; r < rows; r++) {
        const by = r * step - step / 2;

        // Skip rows that are outside the current viewport
        if (by + blockSize < viewTop || by > viewBottom) {
          continue;
        }

        for (let c = 0; c < cols; c++) {
          const idx = r * cols + c;
          const bx = c * step - step / 2;
          const cx = bx + blockSize / 2;
          const cy = by + blockSize / 2;

          let targetElev = 0;

          // 1. Proximity lift towards cursor
          if (isMouseActive) {
            const dist = Math.hypot(cx - mx, cy - my);
            if (dist < proximityRadius) {
              const norm = dist / proximityRadius;
              const factor = Math.cos(norm * (Math.PI / 2));
              targetElev = Math.max(targetElev, Math.pow(factor, 1.7) * maxElevation);
            }
          }

          // 2. Ripple lift from click shockwaves
          for (let i = 0; i < ripples.current.length; i++) {
            const rip = ripples.current[i];
            const dist = Math.hypot(cx - rip.x, cy - rip.y);
            const waveDist = Math.abs(dist - rip.radius);
            const waveThickness = 75;
            if (waveDist < waveThickness) {
              const waveFactor = Math.cos((waveDist / waveThickness) * (Math.PI / 2));
              targetElev = Math.max(
                targetElev,
                waveFactor * rip.strength * (maxElevation * 1.3)
              );
            }
          }

          // Smooth interpolation
          const curr = elevations[idx] || 0;
          const next = curr + (targetElev - curr) * 0.16;
          elevations[idx] = next;

          const elevation = next;
          const normElev = Math.min(elevation / maxElevation, 1);

          let shiftX = 0;
          if (elevation > 0.5 && isMouseActive) {
            shiftX = ((mx - cx) / proximityRadius) * (elevation * 0.25);
          }

          const renderX = bx + shiftX;
          const renderY = by - elevation;

          // 3D Shadow
          if (elevation > 0.4) {
            ctx.save();
            const shadowBlur = 6 + elevation * 1.6;
            const shadowOffsetY = 3 + elevation * 1.2;
            const shadowOpacity = 0.05 + normElev * 0.14;

            ctx.shadowColor = `rgba(16, 62, 59, ${shadowOpacity})`;
            ctx.shadowBlur = shadowBlur;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = shadowOffsetY;

            drawRoundedRect(ctx, renderX, renderY, blockSize, blockSize, cornerRadius);
            ctx.fillStyle = `rgba(255, 255, 255, ${0.9 + normElev * 0.1})`;
            ctx.fill();
            ctx.restore();
          }

          // Surface
          drawRoundedRect(ctx, renderX, renderY, blockSize, blockSize, cornerRadius);

          if (elevation > 0.4) {
            const grad = ctx.createLinearGradient(
              renderX,
              renderY,
              renderX,
              renderY + blockSize
            );
            grad.addColorStop(0, "#ffffff");
            grad.addColorStop(
              1,
              `rgba(240, 253, 250, ${0.85 + normElev * 0.15})`
            );
            ctx.fillStyle = grad;
            ctx.fill();

            // Highlight border
            const borderAlpha = 0.12 + normElev * 0.55;
            ctx.strokeStyle = `rgba(13, 148, 136, ${borderAlpha})`;
            ctx.lineWidth = 1 + normElev * 0.8;
            ctx.stroke();

            // 3D Bevel Highlight
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(renderX + cornerRadius, renderY + 1);
            ctx.lineTo(renderX + blockSize - cornerRadius, renderY + 1);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.75 + normElev * 0.25})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.restore();
          } else {
            // Resting state
            ctx.fillStyle = "rgba(255, 255, 255, 0.55)";
            ctx.fill();

            ctx.strokeStyle = "rgba(16, 62, 59, 0.06)";
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      isRunning = false;
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("click", handleClick);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [mounted, blockSize, blockGap, maxElevation, proximityRadius]);

  if (!mounted) return null;

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/20 pointer-events-none" />
    </div>
  );
};

export default InteractiveBlockGrid;
