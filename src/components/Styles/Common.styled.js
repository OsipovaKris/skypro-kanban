import styled from "styled-components";
import { css } from "styled-components";

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f1f1f1;
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const hover01 = css`
  &:hover {
    background-color: #33399b;
  }
`;

export const hover02 = css`
  &:hover {
    color: #33399b;
  }
  &:hover::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }
`;

export const hover03 = css`
  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
  &:hover a {
    color: #ffffff;
  }
`;

export const topicStyles = {
  _purple: {
    backgroundColor: "#e9d4ff",
    color: "#9a48f1",
  },
  _orange: {
    backgroundColor: "#ffe4c2",
    color: "#ff6d00",
  },
  _green: {
    backgroundColor: "#b4fdd1",
    color: "#06b16e",
  },
  _gray: {
    backgroundColor: "#94a6be",
    color: "#ffffff",
  },
};

export const topicColor = {
  "Web Design": "_orange",
  "Research": "_green",
  "Copywriting": "_purple",
};

// export const PopDisplay = css`
//   &:target {
//     display: block;
//   }
// `;
