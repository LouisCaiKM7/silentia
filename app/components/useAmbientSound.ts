"use client";

import { useEffect, useRef } from "react";

type ModeKey = "off" | "focus" | "nap" | "soothe";

const BASE_PATH = process.env.NODE_ENV === "production" ? "/silentia" : "";

const modeAudio: Record<Exclude<ModeKey, "off">, string> = {
  focus: `${BASE_PATH}/audio/focus.mp3`,
  nap: `${BASE_PATH}/audio/nap.mp3`,
  soothe: `${BASE_PATH}/audio/soothe.mp3`,
};

const FADE_MS = 1500;
const VOLUME = 0.4;

export function useAmbientSound(mode: ModeKey) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeRef = useRef<number | null>(null);

  useEffect(() => {
    // Clear any ongoing fade
    if (fadeRef.current) {
      cancelAnimationFrame(fadeRef.current);
      fadeRef.current = null;
    }

    const prev = audioRef.current;

    if (mode === "off") {
      // Fade out current audio
      if (prev) {
        fadeOut(prev, FADE_MS, () => {
          prev.pause();
          prev.currentTime = 0;
          audioRef.current = null;
        });
      }
      return;
    }

    const src = modeAudio[mode];

    // If same source is already playing, skip
    if (prev && !prev.paused && prev.src.endsWith(src.split("/").pop()!)) {
      return;
    }

    // Fade out previous
    if (prev) {
      const old = prev;
      fadeOut(old, 800, () => {
        old.pause();
        old.currentTime = 0;
      });
    }

    // Create and play new audio
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0;
    audioRef.current = audio;

    audio.play().then(() => {
      fadeIn(audio, FADE_MS, VOLUME);
    }).catch(() => {
      // Autoplay blocked — will play on next user interaction
    });

    return () => {
      // Cleanup on unmount
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [mode]);

  function fadeIn(audio: HTMLAudioElement, duration: number, target: number) {
    const start = performance.now();
    const from = audio.volume;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      audio.volume = from + (target - from) * t;
      if (t < 1) fadeRef.current = requestAnimationFrame(tick);
    };
    fadeRef.current = requestAnimationFrame(tick);
  }

  function fadeOut(audio: HTMLAudioElement, duration: number, onDone: () => void) {
    const start = performance.now();
    const from = audio.volume;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      audio.volume = from * (1 - t);
      if (t < 1) {
        fadeRef.current = requestAnimationFrame(tick);
      } else {
        onDone();
      }
    };
    fadeRef.current = requestAnimationFrame(tick);
  }
}
