import styled from "styled-components";

const FetchPlayersStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  .container {
    width: 300px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .verbase {
      width: 100%;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .content {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      height: 300px;
      .div-blur {
        filter: blur(3px);
        cursor: pointer;
      }
      .name-container {
        width: 50%;
        .logo {
          display: flex;
          justify-content: center;

          margin-top: 15%;
          img {
            max-width: 100%;
            max-height: 100%;
          }
          .cross-logo {
            padding-left: 30%;
          }
        }
        .input-blur {
          pointer-events: none;
        }
        input {
          width: 80%;
          box-sizing: border-box;
          border: 1px solid #e6e7e8;
          border-radius: 20px;
          height: 27px;
          margin: 15% 10%;
          padding-left: 5%;
          padding-left: 10px;

          &:focus {
            outline: none;
          }
        }

        .logo {
          height: 120px;
        }
      }
    }
    .btn-container {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 200px;
      .btn {
        width: 40%;
        height: 40px;
        border: 0;
        border-radius: 20px;
        box-shadow: 0px 3px 9px -2px rgba(0, 0, 0, 0.75);
        background: #fafcfc;
        cursor: pointer;
        &:focus {
          outline: none;
        }
      }
    }
  }
`;

export default FetchPlayersStyle;
