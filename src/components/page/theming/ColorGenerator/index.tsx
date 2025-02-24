import React, { Fragment, useEffect, useRef, useState } from 'react';

import styles from './styles.module.scss';

import { generateColor } from '../_utils/index';

import clsx from 'clsx';

import ColorDot from '../ColorDot';
import ColorInput from '../ColorInput';

const ColorGenerator = (props) => {
  const [colors, setColors] = useState({
    primary: generateColor('#0054e9'),
    secondary: generateColor('#0163aa'),
    tertiary: generateColor('#6030ff'),
    success: generateColor('#2dd55b'),
    warning: generateColor('#ffc409'),
    danger: generateColor('#c5000f'),
    light: generateColor('#f6f8fc'),
    medium: generateColor('#5f5f5f'),
    dark: generateColor('#2f2f2f'),
  });

  const [activeColor, setActiveColor] = useState(null);

  const [cssText, setCssText] = useState('');

  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const event = new CustomEvent('demoMessage', { detail: { cssText } });
    window.dispatchEvent(event);
  }, [cssText]);

  useEffect(() => {
    setCssText(codeRef.current.textContent);
  }, [colors]);

  return (
    <section {...props} className={clsx(props.className, styles.colorGenerator)}>
      <ul className={styles.selectColors}>
        {Object.entries(colors).map(([name, color]) => {
          const { tint, shade, value } = color;
          const nameCap = name[0].toUpperCase() + name.substring(1);

          const formattedValue = value.charAt(0) === '#' ? value : '#' + value;
          const isOpen = activeColor === name ? true : false;

          return (
            <li
              key={name}
              className={clsx(styles.item, { [styles.isOpen]: isOpen })}
              onClick={() => setActiveColor(activeColor === name ? null : name)}
            >
              <div className={styles.titleRow}>
                <div className={styles.titleRowStart}>
                  <ColorDot color={formattedValue} />
                  {nameCap}
                </div>
                <div className={styles.titleRowEnd}>
                  <ColorInput
                    onClick={(event) => event.stopPropagation()}
                    color={formattedValue}
                    setColor={(color) =>
                      setColors((colors) => {
                        colors[name] = generateColor(color);
                        return { ...colors };
                      })
                    }
                  />
                  <Caret />
                </div>
              </div>

              <ul className={styles.submenu}>
                <li className={styles.subcategory}>
                  <div className={styles.headingGroup}>
                    <ColorDot color={shade} />
                    <span>{nameCap}-shade</span>
                  </div>
                  <code>{shade}</code>
                </li>
                <li className={styles.subcategory}>
                  <div className={styles.headingGroup}>
                    <ColorDot color={tint} />
                    <span>{nameCap}-tint</span>
                  </div>
                  <code>{tint}</code>
                </li>
              </ul>
            </li>
          );
        })}
      </ul>
      <pre className={styles.codePre}>
        <code ref={codeRef}>
          :root {'{'}
          {'\n'}
          {Object.entries(colors).map(([name, color], i) => (
            <Fragment key={i}>
              {'\t'}--ion-color-{name}: {color.value};{'\n'}
              {'\t'}--ion-color-{name}-rgb: {color.valueRgb};{'\n'}
              {'\t'}--ion-color-{name}-contrast: {color.contrast};{'\n'}
              {'\t'}--ion-color-{name}-contrast-rgb: {color.contrastRgb};{'\n'}
              {'\t'}--ion-color-{name}-shade: {color.shade};{'\n'}
              {'\t'}--ion-color-{name}-tint: {color.tint};{'\n'}
              {'\n'}
            </Fragment>
          ))}
          {'}'}
          {'\n'}
        </code>
      </pre>
    </section>
  );
};

const Caret = (props) => (
  <svg width="10px" height="6px" viewBox="0 0 10 6" version="1.1" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      id="Welcome"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g id="Desktop-HD" transform="translate(-1025.000000, -335.000000)" stroke="#AEB4BE" strokeWidth="2">
        <polyline
          id="arrow"
          transform="translate(1030.000000, 338.000000) rotate(90.000000) translate(-1030.000000, -338.000000) "
          points="1028 334 1032 338.020022 1028 342"
        ></polyline>
      </g>
    </g>
  </svg>
);

export default ColorGenerator;
