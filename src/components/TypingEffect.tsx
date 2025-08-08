// src/components/TypingEffect.tsx
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypingEffectProps {
  strings: string[];
}

export default function TypingEffect({ strings }: TypingEffectProps) {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(el.current!, {
      strings,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 2000,
      loop: true,
      showCursor: true,
    });

    return () => typed.destroy(); // clean up
  }, [strings]);

  return <span ref={el} />;
}
