import styled from "styled-components";

export const Mask = styled.div`
  &.wr-ui-dialog-mask {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

export const Content = styled.div`
  &.wr-ui-dialog {
    position: fixed;
    min-width: 20em;
    border-radius: 4px;
    background: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    
    .wr-ui-dialog-close {
      position: absolute;
      bottom: 100%;
      left: 100%;
      width: 1.5em;
      height: 1.5em;
      border-radius: 50%;
      background: white;
      transform: translate(-50%, 50%);

      svg {
        width: 1.5em;
        height: 1.5em;
      }
    }

    .wr-ui-dialog-header {
      font-size: 22px;
      padding: 8px 16px;
      border-bottom: 1px solid grey;
    }

    .wr-ui-dialog-main {
      min-height: 6em;
      padding: 8px 16px;
    }

    .wr-ui-dialog-footer {
      border-top: 1px solid grey;
      padding: 8px 16px;
      display: flex;
      justify-content: flex-end;
    }
  }
`;
