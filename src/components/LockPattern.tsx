import { useState, useRef, useEffect } from "react";

interface Dot {
    x: number;
    y: number;
    selected?: boolean;
}

interface Line {
    from: Dot;
    to: Dot;
}

const PatternLock: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [dots, setDots] = useState<Dot[]>([]);
    const [lines, setLines] = useState<Line[]>([]);
    const [pattern, setPattern] = useState<Dot[]>([]);
    const [isDrawing, setIsDrawing] = useState(false);
    const [currentLine, setCurrentLine] = useState<Line | null>(null);

    const patternSize = 3;
    const dotRadius = 22;
    const dotMargin = 25;

    useEffect(() => {
        const initializeDots = () => {
            const newDots: Dot[] = [];
            for (let row = 0; row < patternSize; row++) {
                for (let col = 0; col < patternSize; col++) {
                    newDots.push({
                        x: dotMargin + dotRadius + col * (dotMargin + dotRadius * 2),
                        y: dotMargin + dotRadius + row * (dotMargin + dotRadius * 2),
                        selected: false,
                    });
                }
            }
            setDots(newDots);
        };

        initializeDots();
    }, []);

    useEffect(() => {
        const draw = () => {
            const canvas = canvasRef.current;
            if (canvas) {
                const ctx = canvas.getContext("2d");
                if (ctx) {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    dots.forEach((dot) => {
                        ctx.beginPath();
                        ctx.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2);
                        ctx.fillStyle = dot.selected ? "#1f4696" : "#FFFFFF";
                        ctx.fill();
                        ctx.stroke();
                    });

                    ctx.beginPath();
                    ctx.lineWidth = 5;
                    ctx.strokeStyle = "#1f4696";
                    lines.forEach((line) => {
                        ctx.moveTo(line.from.x, line.from.y);
                        ctx.lineTo(line.to.x, line.to.y);
                    });

                    if (currentLine) {
                        ctx.moveTo(currentLine.from.x, currentLine.from.y);
                        ctx.lineTo(currentLine.to.x, currentLine.to.y);
                    }

                    ctx.stroke();
                }
            }
        };

        draw();
    }, [dots, lines, currentLine]);

    const getDot = (x: number, y: number): Dot | undefined => {
        return dots.find((dot) => {
            const dx = dot.x - x;
            const dy = dot.y - y;
            return dx * dx + dy * dy < dotRadius * dotRadius;
        });
    };

    const selectDot = (dot: Dot) => {
        dot.selected = true;
        setPattern((prev) => [...prev, dot]);
        if (pattern.length > 0) {
            setLines((prev) => [...prev, { from: pattern[pattern.length - 1], to: dot }]);
        }
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
        setIsDrawing(true);
        const { offsetX, offsetY } = e.nativeEvent;
        const dot = getDot(offsetX, offsetY);
        if (dot) {
            selectDot(dot);
        }
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (!isDrawing) return;
        const { offsetX, offsetY } = e.nativeEvent;
        setCurrentLine({ from: pattern[pattern.length - 1], to: { x: offsetX, y: offsetY } });
        const dot = getDot(offsetX, offsetY);
        if (dot && !dot.selected) {
            selectDot(dot);
        }
    };

    const handleMouseUp = () => {
        setIsDrawing(false);
        setCurrentLine(null);
    };

    return (
        <div className="mt-4">
            <p className="text-center">sperr muster</p>
            <div className="relative bg-white border-2 border-gray-300 rounded-lg">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full"
                    width={230}
                    height={230}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                ></canvas>
            </div>
        </div>
    );
};

export default PatternLock;
