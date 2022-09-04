/* import Form from "../components/Form"; */
import { Container, Wrapper } from "../components/Layout/styles";
/* import Main from "../components/Main"; */
/* import ProfileCard from "../components/ProfileCard";
import SideBar from "../components/Sidebar"; */
import Stories from "../components/Stories";
import React, { useEffect } from 'react'

import Status from '../components/home/Status'
import Posts from '../components/home/Posts'
import RightSideBar from '../components/home/RightSideBar'

import { useSelector } from 'react-redux'
import LoadIcon from '../assets/spinner.svg'


let scroll = 0;

export default function Feed() {
  const { homePosts } = useSelector(state => state)

    window.addEventListener('scroll', () => {
        if(window.location.pathname === '/'){
            scroll = window.pageYOffset
            return scroll;
        }
    })

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({top: scroll, behavior: 'smooth'})
        }, 100)
    },[])
  return (
    <>
      <Container>
        <Stories/>
        <Wrapper>
          <div className="home row mx-0">
            <div className="col-md-8">
                <Status />

                {
                    homePosts.loading 
                    ? <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
                    : (homePosts.result === 0 && homePosts.posts.length === 0)
                        ? <h2 className="text-center">No Post</h2>
                        : <Posts />
                }
                
            </div>
            
            <div className="col-md-4">
                <RightSideBar />
            </div>
        </div>
        </Wrapper>
      </Container>
    </>
  );
}
