'use client'
import styles from './Hero.module.css'
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const Hero = () => {
  const [wrapper, setWrapper] = useState<string>(styles.heroWrapper)

  useEffect(() => {
    const hideMenu = () => {
      console.log('changeee')
      setWrapper(styles.heroWrapperMenu)
    }

    window.addEventListener('scroll', hideMenu, { once: true })
  }, [])

  return (
    <header className={`${styles.wrapperBase} ${wrapper}`}>
      <Image src={'./assets/Wayu_Text.svg'} width={200} height={200} alt={''} />
    </header>
  );
}