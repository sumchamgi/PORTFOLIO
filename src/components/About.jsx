import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import myImg from '../assets/201812101719791976_2.jpg'


export default function About() {
  
   /*  const [typingTitle , setTypingTitle] = useState('');
    const [count, setCount] = useState(0);
    const competionWord = "포트폴리오 입니다."

    useEffect(()=>{
      const typingInterval = setInterval(()=>{
        setTypingTitle((prevTitle) => {
          let result = prevTitle ? prevTitle + competionWord[count] : competionWord[0];
          setCount(count + 1);

          if (count >= competionWord.length){
            setCount(0);
            setTypingTitle('')
          }

          return result;
        })
      }, 300);
      return ()=>{
        clearInterval(typingInterval)
      }
    })
   */

  return (
    <MyAbout id='About'>
      <div className='container'>
      <h2>About Me {/* {typingTitle} */}</h2>
        <AboutBox>
          <div className='about_img'>
            <img src={myImg} alt="" />
          </div>
          <div className='about_intro'>
            <h3>어쩌구 저쩌구</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam numquam
              obcaecati quia omnis eaque, sequi fugiat distinctio architecto quas odio ipsa ut 
              libero molestias vero ratione optio dolore repellendus corrupti?
            </p>
            
          </div>
        </AboutBox>
        <AboutInfo>
          
        </AboutInfo>
      </div>
      
    </MyAbout>
  )
}


const MyAbout = styled.div`
  height: 900px;
  padding-top: 100px;
  background: #1d1d1d;
  .container{
    width: 1200px;
    margin: 0 auto;
    height: inherit;
    @media screen and (max-width: 1210px) {
    width: 100%;
    }
    h2{
          text-align:center;
          font-size: 40px;
          color: white;
          margin-top: 30px;
        }
    .about_box{
      

    }
  }
    
` 
const AboutBox = styled.div`
   display: flex;
      height: 420px;
      width: 100%;
      background: #1d1d1d;
      padding: 50px 0;
      box-sizing: border-box;
      .about_img{
        flex-basis: 30%;
        width: 100%;
        
        img{
          width: 200px;
          
        }
      }
      .about_intro{
        width: 100%;
        flex-basis:70%;
        color: white;
        h3{
          text-align: center;
          font-size: 28px;
          margin-bottom: 50px;
        }
       
      }
`
const AboutInfo = styled.div`
  width: 100%;
  height: 320px;
  background: #ddd;
  border-radius: 20px;
  
`

