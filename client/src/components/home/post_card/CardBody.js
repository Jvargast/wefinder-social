import React, { useState } from 'react'
import Carousel from '../../Carousel'
import ReactPlayer from 'react-player/lazy'

const CardBody = ({post, theme}) => {
    const [readMore, setReadMore] = useState(false)
    
    return (
        <div className="card_body">
            <div className="card_body-content" 
            style={{
                filter: theme ? 'invert(1)' : 'invert(0)',
                color: theme ? 'white' : '#111',
            }}>
                <span>
                    {
                        post.content.length < 60 
                        ? post.content 
                        : readMore ? post.content + ' ' : post.content.slice(0, 60) + '.....'
                    }
                </span>
                {
                    post.content.length > 60 &&
                    <span className="readMore" onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'Esconder contenido' : 'Leer más'}
                    </span>
                }

            </div>
            {
                post.images.length > 0 ? <Carousel images={post.images} id={post._id} />: post.video ?<ReactPlayer width={"100%"} url={post.video} style={{filter: theme ? 'invert(1)' : 'invert(0)'}}/> : null
            }
        </div>
    )
}

export default CardBody