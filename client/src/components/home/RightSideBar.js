import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import UserCard from '../UserCard'
import FollowBtn from '../FollowBtn'
import LoadIcon from '../../assets/spinner.svg'
import { getSuggestions } from '../../redux/actions/suggestionsAction'
/* import { Item } from '../List/styles' */
import SideBar from '../Sidebar'
import styled from 'styled-components'

const Container = styled.div`
  display: none;
  @media (min-width: 1000px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: rgb(71,51,128);
background: linear-gradient(90deg, rgba(71,51,128,1) 0%, rgba(128,102,159,1) 85%); 
    border-radius:10px 10px 0 0;
     width:300px;
  }

`;

const Suggestion = styled.div`
display: none;
@media (min-width: 1000px) {
    display: block;
}
`;

const RightSideBar = () => {
    const { auth, suggestions } = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <Suggestion className="mt-3" style={{width:"300px"}}>
            {/* <UserCard user={auth.user} /> */}
            <SideBar/>
            <Container>
                <h5 className="text-white d-flex justify-content" >Sugerencias para ti</h5>
                {
                    !suggestions.loading &&
                    <i className="fas fa-redo" style={{cursor: 'pointer'}}
                    onClick={ () => dispatch(getSuggestions(auth.token)) } />
                }
            </Container>

            {
                suggestions.loading 
                ? <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" />
                : <div className="suggestions" >
                    {
                        suggestions.users.map(user => (
                            <UserCard key={user._id} user={user} >
                                <FollowBtn user={user} />
                            </UserCard>
                        ))
                    }
                </div>
            }
            

        </Suggestion>
    )
}

export default RightSideBar