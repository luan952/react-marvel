import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: 400px;
  perspective: 1000px;
  .card {
    transition: all 0.5s ease-in-out;
    transform-style: preserve-3d;
    cursor: pointer;
  }

  .card.flipped {
    transform: rotateY(180deg);
    transition: all 0.5s ease-in-out;
  }

  .front,
  .back {
    border-radius: 1rem;
        box-shadow: rgba(0, 0, 0, 2.2) 0px 2px 6px;
    position: absolute;
    width: 300px;
    height: 400px;
    backface-visibility: hidden;
  }

  .front {
    width: 100%;
    z-index: 2;
    position: absolute;
    >img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 1rem;
      box-shadow: rgba(0, 0, 0, 2.2) 0px 2px 6px;
    }
  }

  .back {
    background-color: #333;
    color: #fff;
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    align-items: center;
    p,h2 {
      padding: 0 0.8rem;
      text-align: center;
    }
  }

`;