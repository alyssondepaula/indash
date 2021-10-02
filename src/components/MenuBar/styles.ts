import styled from 'styled-components';

export const Container = styled.div`
   width: 6rem;
   height: 100vh;
   background-color: var(--color-white);
`;

export const LogoContainer = styled.div`
   width:  6rem;
   height: 4.5rem;
   padding: 1.25rem 1.56rem;
`;

export const LogoImg = styled.img`
   width:  46px;
   height: 46px;
`;

export const Menu = styled.div`
   display: flex;
   width: 100%;
   height: 10%;
   margin-top: 2.5rem;
   flex-direction: column;
   align-items: center;

`;

export const OptionMenu = styled.div<{selected: boolean | undefined}>`
   display: flex;
   width: 100%;
   height: 3rem;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   cursor: pointer;

    &::before {
        content: "";
        width: .25rem;
        height:  3rem;
        border-radius: 0rem .75rem .75rem 0rem;
        left: 0px;
        position: absolute;
        background: var(--color-secondary);
      }

`;

export const MenuIconOption = styled.img`
   width:  32px;
   height: 32px;
`;