import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';

import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

    const [posts, setPosts] = useState([]);
    
    
    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    }, [posts]);



  return(
      <div className="sidebarContainer" style={{
          width: props.width
      }}>
            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Ben Sefa</span>
                </div>
                <div className="profileImageContainer">
                <img src={require('./sidebarImages/1.png' )} width="90%"   alt=""  />
                </div>
                <div className="cardBody">
                    <a>Kısaca</a>
                    <p className="personalBio">Ben sefa. Küçüklüğümden bu yana yeni şeyler üretmeyi ve geliştirmeyi çok seviyorum. En ilgi duyduğum ve ilerlemek istediğim alanların başında yazılım geliyor. Son zamanlarda web tasarım ile uğraşıyorum. HTML, CSS ve JavaScript gibi teknolojileri kullanarak işin Front-End kısmına odaklanıyorum. Kendimi geliştirmek için farklı projeler yapıyorum. Bunun benim ilk projem olduğunu belirtmek isterim. </p>
                </div>
            </Card>

            

            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Güncel Paylaşımlar</span>
                </div>

                <div className="recentPosts">

                    {
                        posts.map(post => {
                            return (
                                <NavLink key={post.id} to={`/post/${post.slug}`}>
                                    <div className="recentPost">
                                        <h3>{post.blogTitle}</h3>
                                        <span>{post.postedOn}</span>
                                    </div>
                                </NavLink>
                                
                            );
                        })
                    }
                </div>

            </Card>
      </div>
    
   )

 }

export default Sidebar