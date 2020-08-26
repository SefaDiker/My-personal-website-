import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    <div style={props.style}>
        <Card style={{marginBottom: '20px'}}>
            <div className="postImageWrapper">
                <img src={require('../../../blogPostImages/4.jpeg')} alt=""/>
            </div>

            <div style={{textAlign: 'center'}}>

                <span>Başlangıç</span>
                <h2>Neden bu siteyi yaptım?</h2>
                <span>22 Ağustos 2020 tarihinde yazıldı.</span>
                <p></p>

            </div>
            
        </Card>
        <Card style={{marginBottom: '20px'}}>
            <div className="postImageWrapper">
                <img src={require('../../../blogPostImages/2.jpeg')} alt=""/>
            </div>

            <div style={{textAlign: 'center'}}>

                <span>Hobi</span>
                <h2>Neden yazılım ile ilgileniyorum?</h2>
                <span>20 Ağustos 2020 tarihinde yazıldı.</span>
                <p></p>

            </div>
            
        </Card>


    </div>
   )

 }

export default RecentPosts