import styled from "styled-components";

export const StyledNavbar = styled.div`
  .container {
    width: 250px;
    height: 100vh;
    position: fixed;
    top: 0;
    box-shadow: 1px 1px 2px 2px #d3d3d3;
    z-index: 20;
    background-color: #fff;
    transition: all 300ms ease-in-out;
    overflow-y: auto;
  }
  .showNav {
    transform: translateX(0px) !important;
  }

  .smallNav {
    position: fixed;
    top: 0;
    height: 75px;
    width: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    display: none;
  }
  .mask {
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 10;
    top: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .hamburg {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  .topSection {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 10%;
    border-bottom: 1px solid #b6b5b5;

    .username {
      font-family: "Open Sans", sans-serif;
      font-size: 0.9em;
      text-align: center;
      color: #7f7d7d;
    }
  }

  .logo {
    font-size: 2.2em;
    color: #5ee484;
    font-family: "Rubik", sans-serif;
  }

  .logout {
    background-color: #f44b4b;
    color: white;
    border: none;
    cursor: pointer;
    font-family: "Rubik", sans-serif;
    padding: 8px 15px;

    margin: 20px 5px;
  }

  //Small Nav List Info
  .taskInfo {
    padding: 10px;
    border-bottom: 1px solid #b6b5b5;

    display: none;
  }

  .addTaskList {
    display: flex;
    width: 100%;
    justify-content: center;
    text-decoration: none;
    font-size: 2em;
    font-weight: bolder;
    transition: all 300ms ease-in-out;
    box-shadow: 0px 0px 4px 0px #d3d3d3;
  }
  .middleSection {
    width: 100%;
    height: 55%;

    overflow-y: auto;
  }

  .bottomSection {
    width: 100%;
    height: 35%;
    outline: 1px solid purple;
  }

  @media only screen and (max-width: 1200px) {
    .container {
      transform: translateX(-500px);
      box-shadow: none;
    }

    .smallNav {
      display: flex;
    }

    .taskInfo {
      display: block;
    }
  }
`;
