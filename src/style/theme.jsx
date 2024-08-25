import { css } from 'styled-components';

export const theme = {
  absoluteCenter: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
};

export const mixins = {
  flexBox: (direction = 'row', align = 'center', justify = 'center') => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,
};
