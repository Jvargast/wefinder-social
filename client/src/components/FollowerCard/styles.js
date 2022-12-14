import styled from "styled-components";

export const FollowerCardContainer = styled.div`
  width: 100%;
  border-radius: 0.7rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  max-height: 10rem;
`;

export const Follower = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    display: flex;
    gap: 10px;
  }
`;

export const FollowerImage = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
`;
/* .followerImage{
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
}

.name{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

.name>span:nth-of-type(1){
    font-weight: bold;
}



.fc-button{
    height: 2rem;
    padding-left: 20px;
    padding-right: 20px;
}

.UnfollowButton{
    color: var(--orange);
    border: 2px solid var(--orange);
    cursor: pointer;
    background: transparent;
}


.FollowersCard>span{
    font-weight: bold;
    color: orange;
    align-self: center;
    cursor: pointer;
} */
