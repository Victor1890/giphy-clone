import styled from "@emotion/styled";

export const CardGifContent = styled.div`
  --gifShadow-size: var(--gridList-gap, 6px);
  margin-bottom: 0.5em;
  position: relative;
`;

export const GifsButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 1;
`;

export const GifsLink = styled.div`
  color: #000;
  display: block;
  text-decoration: none;
  position: relative;
  width: 100%;
`;

export const GifsTitle = styled.h4`
  background: rgba(0, 0, 0, 0.3);
  bottom: 0;
  font-size: 12px;
  color: #fff;
  margin: 0;
  position: absolute;
`;

export const GifsImg = styled.img`
  width: 100%;
  object-fit: contain;
  vertical-align: top;
`;
