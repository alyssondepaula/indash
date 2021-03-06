import styled from 'styled-components';


export const Container = styled.div`
   display: flex;
   background-color: var(--color-white);
   flex-direction: row;
   justify-content: space-between;
`;

export const MainContent = styled.div`
   flex: 1;
   background-color: var(--color-gray001);
   flex-direction: column;
   border-top-left-radius: 1.5rem;
   border-bottom-left-radius: 1.5rem;
   padding: 2rem 1.31rem 4rem 12px;
`;

export const HeadingPageContainer = styled.div`
   display: flex;
   align-items: center;
`;


export const Text = styled.text`
   color: var(--color-gray003);
   font-weight: 700;
`;

export const Icon = styled.input`
   width: 1.5rem;
   height: 1.5rem;

`;

export const InputContainer = styled.form`
   display: flex;
   width: 22.75rem;
   height: 2.5rem;
   background-color: var(--color-white);
   margin-top: 2rem;
   border-radius: .5rem;
   border-top:2px solid #E1E0E7;
   border-left:2px solid #E1E0E7;
   border-bottom:2px solid #E1E0E7;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
`;

export const IconContainer = styled.div`
   display: flex;
   width: 2.5rem;
   height: 2.5rem;
   background-color: var(--color-primary);
   border-radius: .5rem;
   align-items: center;
   justify-content: center;
   

`;

export const Input = styled.input`
  flex: 1;
  height: 100%;
  padding-left: 1rem;
  border: none;
  outline: none;

  ::placeholder { 
  color: #ACACAC;
  opacity: 1; 
}
`;

export const ChartContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 23.75rem;
   background-color: var(--color-white);
   border-radius: .5rem;
   align-items: center;
   margin-top: 1.5rem;
   padding: 25px 20px;
`;

export const RecentCompaniesContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   border-radius: .5rem;
   margin-top: 2.37rem;
`;


export const InfoNumbers = styled.div`
   display: flex;
   flex-direction: row;

   width: 100%;
   height: 2.87rem;
   background-color: var(--color-white);
   border-radius: .5rem;
   align-items: center;
   justify-content: space-between;

`;

export const DescritionInfo = styled.div`
   display: flex;
   align-items: flex-end;
   flex-direction: column;
`;

export const TextInfo = styled.text`
   color: var(--color-gray003);
   font-size: 1rem;
   font-weight: 700;
`;

export const HeadingFooterPageContainer = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
`;

export const MarqueeContainer = styled.div`
   width: 100%;
   padding: 12px;
`;

export const QuotechangePercentImg = styled.img`
   border-color: 1.40rem;
   width: 1rem;
   height: 1rem;
   margin-right: .3rem;
`;