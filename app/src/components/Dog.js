import React, { useEffect } from 'react' //import React and useEffect
import { connect } from 'react-redux' //import connect
import { getDog, fetchFail } from '../actions' //import getDog
import styled from 'styled-components'

const DogWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div  {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2%;
    }

    button {
        background-color: dodgerblue;
        color: white;
        border-radius: 5%;
        cursor: pointer;

        :hover {
            opacity: 50%;
        }
    }`

const DogImage = styled.img`

    box-sizing: border-box;
border: 1px solid black;
margin: 3%;
border-radius: 30%;
/* max-height: 100%; */
  @media (max-width: 768px){
  max-width: 100%;
  border-radius: 50%;
  }
    ;`

const Dog = (props) => {
    console.log('Here is Dog props:', props);
    const { dog, isFetching, error } = props;
    console.log('Heres the dog:', dog);
    useEffect(() => {
        props.getDog();
    }, []);

    const handleClick = () => {
        props.getDog()
    }

    if (error) {
        return <h2>We got an error: {error}</h2>;
    }

    if (isFetching) {
        return <h2>Fetching dog for ya! Stand By!</h2>;
    }


    return (
        <DogWrapper>
            <div>
                <h2>What's on this dog's mind?</h2>
                <DogImage src={dog} />
            </div>
            <button onClick={handleClick}>Click for more!</button>
        </DogWrapper>
    )

}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        dog: state.dog,
        isFetching: state.isFetching,
        error: state.error
    }
}
export default connect(mapStateToProps, { getDog, fetchFail })(Dog);
