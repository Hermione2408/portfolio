import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

// Utility function to generate a random number within a range
const randomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Generate random hues and alphas for the lights
const generateHuesAndAlphas = () => {
  const hues = Array.from({ length: 3 }, () => randomInRange(70, 300));
  const alphas = Array.from({ length: 3 }, () => Math.random().toFixed(2));
  return { hues, alphas };
};
const flicker = keyframes`
  0%, 50%, 100% {
    transform: scale(1);
  }
  25% {
    transform: scale(0);
  }
`;

const shift = keyframes`
  50% {
    transform: translate(0, 0) scale(1);
  }
`;
const Scene = styled.div`
  --hue-1: ${(props) => props.hues[0]};
  --hue-2: ${(props) => props.hues[1]};
  --hue-3: ${(props) => props.hues[2]};
  --alpha-1: ${(props) => props.alphas[0]};
  --alpha-2: ${(props) => props.alphas[1]};
  --alpha-3: ${(props) => props.alphas[2]};
  overflow: hidden;
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: -1; 
  top: 0;
  left: 0;
`;

const Star = styled.div`
  --hue: 55;
  border-radius: 50%;
  background: hsl(var(--hue), 100%, 50%);
  box-shadow: 0 0 5px 1px hsla(var(--hue), 100%, 85%, 1);
  height: calc(var(--size, 2) * 1px);
  position: absolute;
  width: calc(var(--size, 2) * 1px);
  left: calc(var(--x, 0) * 1vw);
  opacity: 0.5;
  top: calc(var(--y, 0) * 1vh); /* Changed from vw to vh for vertical positioning */
  animation: flicker calc(var(--duration, 2) * 1s) calc(var(--delay, 10) * 1s) infinite steps(1);
`;


const Lights = styled.div`
width 200vmax
height 100vmax
position absolute
left 50%
top 0
transform translate(-20%, -55%) rotate(30deg)
display flex
filter blur(75px)
`;

const Light = styled.div`
  flex: 1;
  background-image: linear-gradient(0deg, transparent, hsla(var(--hue-1), 100%, 50%, var(--alpha-1)) 10%, transparent, hsla(var(--hue-2), 100%, 50%, var(--alpha-2)) 40%, transparent, hsla(var(--hue-3), 100%, 50%, var(--alpha-3)) 60%);
  background-size: 100% 40vmax;
  background-position: center bottom;
  background-repeat: no-repeat;
  transform: translate(var(--left), var(--up)) scale(1);
  animation: shift calc(var(--duration, 2) * 1s) calc(var(--delay, 0) * -1s) infinite ease;
  @media (max-width: 768px) {
    --up: calc(var(--y, 10) * 2vmax);
    --left: calc(var(--x, 2) * 2vmax);
  }
`;


export const NorthernLightsBackground = () => {
  const { hues, alphas } = generateHuesAndAlphas();
  const starCount = 20;
  const lightCount = 30;

  return (
    <Scene hues={hues} alphas={alphas}>
      {Array.from({ length: starCount }).map((_, index) => (
        <Star
          key={index}
          style={{
            '--size': `${Math.random() * 2}`,
            '--x': `${Math.random() * 100}`,
            '--y': `${Math.random() * 100}`,
            '--duration': `${randomInRange(5, 10)}`,
            '--delay': `${randomInRange(4, 10)}`,
          }}
        />
      ))}
      <Lights>
        {Array.from({ length: lightCount }).map((_, index) => (
          <Light
            key={index}
            style={{
              '--duration': `${randomInRange(5, 15)}`,
              '--delay': `${randomInRange(4, 10)}`,
              '--x': `${randomInRange(0, 5)}`,
              '--y': `${randomInRange(0, 10)}`,
              '--scale': `${Math.random() / 10}`,
            }}
          />
        ))}
      </Lights>
    </Scene>
  );
};

