import confetti from 'canvas-confetti';

let heartShape;

// Verilen noktadan (0-1 arası ekran oranı) kalp patlatır
export function heartBurst(origin = { x: 0.5, y: 0.6 }, count = 40) {
  heartShape ??= confetti.shapeFromText({ text: '❤️', scalar: 2 });
  confetti({
    particleCount: count,
    spread: 80,
    startVelocity: 30,
    scalar: 2,
    shapes: [heartShape],
    origin,
  });
}

export function celebrate() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#ef4444', '#ec4899', '#a855f7'],
  });
}
