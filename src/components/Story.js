import styles from '../styles/modules/Story.module.sass';
import fetch from 'isomorphic-unfetch';
import { useState } from 'react';

const Story = ({content,like, user_id, doc}) =>
{
    // useState hooks are used here
    const [hide, setHide] = useState('');

    // take out array of data from the passed content object
    const data = content.data;

    // If no data then return empty div
    if(!data){
        return <div></div>
    }

    // Check whether already liked or not
    const heart_class = like ? styles.hearted : '';

    if(like){
        if(!data.liked_people.includes(user_id)){
            return <div></div>
        }
    }else{
        if(data.liked_people.includes(user_id)){
            return <div></div>
        }
    }

    // Date is formatted for the story
    const current_time = new Date(data.posted_time).toString().slice(0, 10);

    // Tags are taken from a array
    const tags = data.tags.join(' ');

    const onlikeUnlikeClicked = async () =>{
        const base_url = process.env.hosting ? process.env.host_url : process.env.dev_url;
        if(like){
            const res = await fetch(`${base_url}/api/user/1/dislike/${doc}`);
            setHide(styles.hide_me);
        }else{
            const res = await fetch(`${base_url}/api/user/1/like/${doc}`);
            setHide(styles.hide_me);
        }
    }

    return (
        <div className={`${styles.story__card} ${hide}`}>
            <div className={styles.story__profile__cover}>
                <img src={`/images/${data.img}`} alt="profile" className={styles.story__profile__img} />
                <div className={styles.story__profile__content}>
                    <span className={styles.story__profile__name}>{data.posted_by}</span>
                    <span className={styles.story__profile__time}><i className="fa fa-clock-o"></i>&nbsp;&nbsp;{current_time}</span>
                </div>
                <div className={styles.story__profile__spacer}></div>
                <i className="fa fa-ellipsis-v"></i>
            </div>
            <div className={styles.story__content__img_cover}>
                <img src={`/images/${data.url}`} alt="story_image" className={styles.story__content__img} />
                <span className={styles.story__content__floating_like} onClick={onlikeUnlikeClicked}>
                    <i className={`fa fa-heart ${heart_class}`}></i>
                </span>
            </div>
            <div className={styles.story__content__desc_cover}  >
                <i className="fa fa-heart"></i><span className={styles.story__content__likes}>{data.like_count} Likes</span>
                <div className={styles.story__content__desc}>
                    {data.long_description}
                </div>
                <div className={styles.story__content__hashes}>
                    {tags}
                </div>
                <div className={styles.story__content__comments}>
                    <i className="fa fa-angle-down"></i>
                    <div>view {data.comment_count} comments</div>
                    <i className="fa fa-comments"></i>
                </div>
            </div>
        </div>
    )
}


export default Story;