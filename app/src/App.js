import './App.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-image: url('https://wallpaperaccess.com/full/340452.png');
  background-repeat: no-repeat;
  background-size: cover;
  color: dodgerblue;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

function App() {
  return (
<Wrapper>
  <h1>Dog Lovers Look Up</h1>
  <h2>🐕🐕🐕🐕</h2>
  

</Wrapper>
  );
}

export default App;
