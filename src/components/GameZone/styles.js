import styled from "styled-components";

const GameZoneStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #f8fafb;
  .container {
    height: 100vh;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .toast {
      display: flex;
      justify-content: center;
      font-size: small;
      color: #00804b;
      margin-bottom: 5%;
    }
    .score-container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;

      .score-card {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #a0b0bf;
        border-radius: 15px;
        width: 20%;
        background: #fff;
        box-shadow: 0px 3px 9px -2px rgba(0, 0, 0, 0.75);
        font-weight: 500;
        height: 25px;
      }
      .p1-label {
        display: flex;
        justify-content: flex-end;
        width: 40%;
        span {
          padding-right: 10px;
        }
      }
      .p2-label {
        width: 40%;
        span {
          padding-left: 10px;
        }
      }
    }
    .content {
      display: flex;
      flex-wrap: wrap;
      box-shadow: 0px 0px 102px -51px rgba(0, 0, 0, 0.75);
      border-radius: 10px;
      border: 1px solid grey;
      padding: 10px;
      .cell {
        width: 90px;
        height: 88px;
        min-height: 90px;
        .cell-button {
          width: 100%;
          height: 100%;
          border: 0;
          border-right: 1px solid #bbb1b1;
          border-bottom: 1px solid #bbb1b1;
          background: transparent;
          img {
            max-width: 85%;
          }
          &:focus {
            outline: none;
          }
        }
        &: nth-child(3n) .cell-button {
          border-right: 0;
        }
        &:nth-child(7) .cell-button,
        &:nth-child(8) .cell-button,
        &:nth-child(9) .cell-button {
          border-bottom: 0;
        }
      }
    }
    .revert-container {
      display: flex;
      justify-content: center;
      margin-top: 20px;
      button {
        width: 10%;
        border: 0;
        padding: 0;
        background: transparent;
        &:focus {
          outline: none;
        }
      }
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
`;

export default GameZoneStyle;
