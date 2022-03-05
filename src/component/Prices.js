import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'

const Span = styled.span`
  color: LightGray;
  font-weight: bold;
`;

const Prices = () => {
  const prices = useSelector(state => state.prices);
  return (
    <>
    page 1
    </>
  );
}

export default Prices;
