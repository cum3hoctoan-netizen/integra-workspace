"use client";
import React, { useEffect, useState } from 'react';
import { BlockMath } from 'react-katex';

const formulas = [
  "\\int_a^b f(x)dx = F(b) - F(a)",
  "\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e",
  "\\sum_{k=0}^n \\binom{n}{k} = 2^n",
  "f'(x_0) = \\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x}",
  "e^{i\\pi} + 1 = 0",
  "\\int u dv = uv - \\int v du",
  "\\chi(M) = \\sum_{k=0}^n (-1)^k b_k"
];

export default function MathBackground() {
  const [mounted, setMounted] = useState(false);

  // Đảm bảo client-side render để không bị lỗi hyration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-60">
      {formulas.map((formula, index) => (
        <div
          key={index}
          className="math-floater"
          style={{
            left: `${Math.random() * 80 + 10}%`, // Phân bố ngẫu nhiên chiều ngang
            animationDuration: `${Math.random() * 20 + 30}s`, // Trôi cực chậm (30-50s)
            animationDelay: `${Math.random() * 15}s`, // Xuất hiện lệch nhịp nhau
            fontSize: `${Math.random() * 0.8 + 1}rem` // To nhỏ khác nhau
          }}
        >
          <BlockMath math={formula} />
        </div>
      ))}
    </div>
  );
}
