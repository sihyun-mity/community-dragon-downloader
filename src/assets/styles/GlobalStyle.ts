import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    border-radius: 8px;
  }

  *::-webkit-scrollbar-thumb {
    height: 56px;
    border-radius: 8px;
    border: 4px solid transparent;
    background-clip: content-box;
    background-color: #888;
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  body {
    background-color: #282A3A;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    word-break: keep-all;
    user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    overflow: overlay;
    color: #fff;
  }

  button {
    padding: 0;
  }
`;

export default GlobalStyle;
