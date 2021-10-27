import styled from "styled-components";

export const HomeWrapper = styled.div`
  .container {
    display: grid;
    align-items: center;
    margin-top: -6rem;
    color: var(--white);
  }

  .home-img {
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
        .info {
          margin-top: -10rem;
        }

        p {
            font-size: 0.9rem;
        }

        h1 {
          font-size: 2.3rem;
        }
    }

  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: 6rem;
    display: flex;
    align-items: center;
  }

  h1 {
    font-weight: 700;
  }

  .main-img{
    display: none;
  }

  .other-img {
    display: none;
  }

  @media screen and (min-width: 768px) {
    .container {
      grid-template-columns: 1fr 1fr;
      column-gap: 6rem;
    }

    .main-img {
      display: block;
    }

    .mobile-img {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    .mobile-img {
      display: block;
      margin-top: -13rem;
      margin-bottom: 4rem;
      width: 75%;
      height: auto;
    }
  }
`;

export const Container = styled.section`
  header {
    text-align: center;
    margin-bottom: 2rem;
  }

  select {
      color: var(--white);
  }

  .form h4 {
    text-align: center;
  }
  
  .form > p {
    text-align: center;
    color: var(--green-light);
    letter-spacing: var(--letterSpacing);
    margin-top: 0;
  }

  .status {
    background: var(--grey-900);
    border-radius: var(--borderRadius);
    border-color: transparent;
    padding: 0.25rem;
  }
`