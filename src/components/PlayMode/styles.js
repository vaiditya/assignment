import styled from "styled-components";

const PlayModeStyle = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  .container {
    width: 300px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .logo {
      height: 170px;
      display: flex;
      justify-content: center;
      .logo-container {
        height: 60%;
        width: 50%;
        img {
          max-width: 100%;
          max-height: 100%;
        }
        .cross-logo {
          padding-left: 30%;
        }
      }
    }
    .content {
      height: 230px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .verbase {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 25px 0;
      }
      .btn-grp {
        width: 40%;
        .btn {
          width: 100%;
          border: 0;
          height: 40px;
          margin-bottom: 15px;
          border-radius: 20px;
          box-shadow: 0px 3px 9px -2px rgba(0, 0, 0, 0.75);
          cursor: pointer;
          &:focus {
            outline: none;
          }
        }
        .btn-ai {
          background: #039dfc;
          color: #fff;
        }
        .btn-friend {
          background: #fafcfc;
        }
      }
    }
  }
`;

export default PlayModeStyle;
