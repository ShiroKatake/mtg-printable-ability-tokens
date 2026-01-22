'use client';
import {createContext} from 'react';
import {TokenSvg, Token} from '@/components/Token/Token';
import {StyledPage} from './page.styled';
import Unblockable from '@/public/unblockable.svg';
import SummonSick from '@/public/summon-sick.svg';

const color1 = '#b1261c';
const color4 = '#317522';
const color3 = '#447bbe';
const color5 = '#812e8b';
const color2 = '#f0a000';
const w = '#f0f2c0';
const u = '#b5cde3';
const b = '#aca29a';
const r = '#db8664';
const g = '#93b483';
const c = '#beb9b2';

const protection = (
  <>
    <Token
      abilityName="duels-protection-white"
      tokenColor={w}
      iconColor="#000"
      padding={'2px 0 0 0'}
      iconSize={14}
      tokenSize={19}
      iconShadow={false}
    />
    <Token
      className="ms ms-w"
      tokenColor={w}
      iconColor="#000"
      padding={'2px 0 0 0'}
      iconSize={14}
      tokenSize={19}
      iconShadow={false}
    />
    <Token
      abilityName="duels-protection-blue"
      tokenColor={u}
      iconColor="#000"
      padding={'2px 0 0 0'}
      iconSize={14}
      tokenSize={19}
      iconShadow={false}
    />
    <Token
      className="ms ms-u"
      tokenColor={u}
      iconColor="#000"
      padding={'2px 0 0 0'}
      iconSize={14}
      tokenSize={19}
      iconShadow={false}
    />
    <Token
      abilityName="duels-protection-black"
      tokenColor={b}
      iconColor="#000"
      padding={'2px 0 0 0'}
      iconSize={14}
      tokenSize={19}
      iconShadow={false}
    />
    <Token
      className="ms ms-b"
      tokenColor={b}
      iconColor="#000"
      padding={'2px 0 0 0'}
      iconSize={14}
      tokenSize={19}
      iconShadow={false}
    />
    <Token
      abilityName="duels-protection-red"
      tokenColor={r}
      iconColor="#000"
      padding={'2px 0 0 0'}
      iconSize={14}
      tokenSize={19}
      iconShadow={false}
    />
    <Token
      className="ms ms-r"
      tokenColor={r}
      iconColor="#000"
      padding={'2px 0 0 0'}
      iconSize={14}
      tokenSize={19}
      iconShadow={false}
    />
    <Token
      abilityName="duels-protection-green"
      tokenColor={g}
      iconColor="#000"
      padding={'2px 0 0 0'}
      iconSize={14}
      tokenSize={19}
      iconShadow={false}
    />
    <Token
      className="ms ms-g"
      tokenColor={g}
      iconColor="#000"
      padding={'2px 0 0 0'}
      iconSize={14}
      tokenSize={19}
      iconShadow={false}
    />
    <Token
      abilityName="duels-protection"
      tokenColor={c}
      iconColor="#000"
      padding={'2px 0 0 0'}
      iconSize={15}
      tokenSize={19}
      iconShadow={false}
    />
    <Token
      className="ms ms-c"
      tokenColor={c}
      iconColor="#000"
      padding={'2px 0 0 0'}
      iconSize={14}
      tokenSize={19}
      iconShadow={false}
    />
  </>
);

const allTokens = () => {
  return (
    <>
      {protection}
      {Array.from({length: 10}, (_, index) => (
        <Token
          key={index}
          abilityName="haste"
          tokenColor={color1}
          padding={'0 3px 0 0'}
          iconSize={12}
        />
      ))}
      {Array.from({length: 10}, (_, index) => (
        <Token
          key={index}
          abilityName="goad"
          tokenColor={color1}
          padding={'0 0 1px 1px'}
          iconSize={15}
        />
      ))}
      {Array.from({length: 5}, (_, index) => (
        <Token
          key={index}
          abilityName="first-strike"
          tokenColor={color1}
          padding={'0 0 0 2px'}
          iconSize={15}
        />
      ))}
      {Array.from({length: 5}, (_, index) => (
        <Token
          key={index}
          abilityName="double-strike"
          tokenColor={color1}
          padding={'0 0 0 2px'}
          iconSize={15}
        />
      ))}
      {Array.from({length: 10}, (_, index) => (
        <Token
          key={index}
          abilityName="vigilance"
          tokenColor={color1}
          padding={'3px 0 0 0'}
          iconSize={13}
        />
      ))}
      {Array.from({length: 10}, (_, index) => (
        <Token
          key={index}
          abilityName="trample"
          tokenColor={color2}
          iconSize={14}
        />
      ))}
      {Array.from({length: 5}, (_, index) => (
        <Token
          key={index}
          abilityName="deathtouch"
          tokenColor={color2}
          padding={'0 0 4px 0'}
          iconSize={15}
        />
      ))}
      {Array.from({length: 5}, (_, index) => (
        <Token
          key={index}
          abilityName="lifelink-original"
          tokenColor={color2}
          padding={'2px 0 0 0'}
          iconSize={15}
        />
      ))}
      {Array.from({length: 10}, (_, index) => (
        <Token
          key={index}
          abilityName="flying"
          tokenColor={color3}
          padding={'0 0 2px 0'}
          iconSize={13}
        />
      ))}
      {Array.from({length: 5}, (_, index) => (
        <Token
          key={index}
          abilityName="menace"
          tokenColor={color3}
          padding={'0 0 0 1px'}
          iconSize={13}
        />
      ))}
      {Array.from({length: 10}, (_, index) => (
        <Token
          key={index}
          abilityName="reach"
          tokenColor={color3}
          padding={'0 0 2px 1px'}
          iconSize={12}
        />
      ))}
      {Array.from({length: 5}, (_, index) => (
        <TokenSvg
          key={index}
          abilityName="unblockable"
          tokenColor={color3}
          padding={'0 0 3px 15px'}
          iconSize={65}
        >
          <Unblockable />
        </TokenSvg>
      ))}
      {Array.from({length: 5}, (_, index) => (
        <Token
          key={index}
          abilityName="indestructible"
          tokenColor={color4}
          padding={'0 3px 4px 0'}
          iconSize={15}
        />
      ))}
      {Array.from({length: 5}, (_, index) => (
        <Token
          key={index}
          className="ms ms-toughness-mtga"
          tokenColor={color4}
          padding={'3px 0 0 0'}
          iconSize={12}
        />
      ))}
      {Array.from({length: 5}, (_, index) => (
        <Token
          key={index}
          abilityName="hexproof"
          tokenColor={color4}
          padding={'0 0 2px 1px'}
          iconSize={15}
        />
      ))}
      {Array.from({length: 5}, (_, index) => (
        <Token
          key={index}
          abilityName="ward"
          tokenColor={color4}
          padding={'0 0 2px 0'}
          iconSize={16}
        />
      ))}
      {Array.from({length: 5}, (_, index) => (
        <Token
          key={index}
          abilityName="duels-haunt"
          tokenColor={color4}
          padding={'0 0 0 5px'}
          iconSize={14}
        />
      ))}
      {Array.from({length: 5}, (_, index) => (
        <Token
          key={index}
          className="ms ms-counter-stun"
          tokenColor={color5}
          padding={'0 0 4px 0'}
          iconSize={16}
        />
      ))}
      {Array.from({length: 10}, (_, index) => (
        <Token
          key={index}
          className="ms ms-counter-doom"
          tokenColor={color5}
          padding={'0 0 3px 0'}
          iconSize={15}
        />
      ))}
      {Array.from({length: 10}, (_, index) => (
        <Token
          key={index}
          abilityName="decayed"
          tokenColor={color5}
          padding={'0 0 4px 5px'}
          iconSize={14}
        />
      ))}
      {Array.from({length: 10}, (_, index) => (
        <TokenSvg
          key={index}
          abilityName="summon-sick"
          tokenColor={color5}
          iconSize={50}
          padding={'0 0 1px 1px'}
        >
          <SummonSick />
        </TokenSvg>
      ))}
      {Array.from({length: 5}, (_, index) => (
        <Token
          key={index}
          abilityName="duels-cannot-block"
          tokenColor={color5}
          padding={'0 0 3px 0'}
          iconSize={13}
        />
      ))}
    </>
  );
};

export const SizeIncreaseContext = createContext(0);

export default function Home() {
  const sizeIncrease = 7;
  return (
    <StyledPage $sizeIncrease={sizeIncrease}>
      <SizeIncreaseContext value={sizeIncrease}>
        {allTokens()}
      </SizeIncreaseContext>
    </StyledPage>
  );
}
