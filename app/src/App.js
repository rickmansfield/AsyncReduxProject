import './App.css';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect } from 'react';
import Dog from './components/Dog'

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
  useEffect(() => {
    axios.get('https://aws.random.cat/meow')
      .then(res => {
        console.log('Dogs res.data: ', res.data)

      })
  }, [])
  return (
    <Wrapper>
      <h1>Dog Lovers Look Up</h1>
      <h2>🐕🐕🐕🐕</h2>
      <Dog />
    </Wrapper>
  );
}

export default App;
