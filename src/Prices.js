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
    <br/>
    {"bitcoin: "}<Span>
                   {prices.bitcoin.bitcoin  ? <>{prices.bitcoin.bitcoin}$</> : "waiting..."} 
                 </Span><br/><br/>
    {"ethereum: "}<Span>
                   {prices.ethereum.ethereum  ? <>{prices.ethereum.ethereum}$</> : "waiting..."} 
                 </Span><br/><br/>
    {"tron: "}<Span>
                   {prices.tron.tron  ? <>{prices.tron.tron}$</> : "waiting..."} 
                 </Span><br/><br/>
    {"usdt: "}<Span>
                   {prices.usdt.usdt  ? <>{prices.usdt.usdt}$</> : "waiting..."} 
                 </Span><br/><br/>
    </>
   );
}

export default Prices;
