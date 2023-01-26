
import styled from 'styled-components'
import htmlImg from '../assets/html.png'
import cssImg from '../assets/css.png'
import javascriptImg from '../assets/javascript.png'
import sassImg from '../assets/sass.png'
import reactImg from '../assets/react.png'
import jqueryImg from '../assets/jquery.png'

import nodeImg from '../assets/node.png'
import expressImg from '../assets/express.png'
import mongoImg from '../assets/mongo.png'
import mysqlImg from '../assets/mysql.png'


export default function Skill() {

  
  const frontEndSkills = [
    {
      id: 1,
      name: 'html',
      url: htmlImg
    },
    
    {
      id: 2,
      name: 'css',
      url: cssImg
    },
    {
      id: 3,
      name: 'sass',
      url: sassImg
    },
    {
      id: 4,
      name: 'javascript',
      url: javascriptImg
    },
    {
      id: 5,
      name: 'jquery',
      url: jqueryImg
    },
    
    {
      id: 6,
      name: 'react',
      url: reactImg
    },
  ]
  const backEndSkills = [
    {
      id: 1,
      name: 'node.js',
      url: nodeImg
    },
    {
      id: 2,
      name: 'express',
      url: expressImg
    },
    {
      id: 3,
      name: 'mongoDB',
      url: mongoImg
    },
    {
      id: 4,
      name: 'mySql',
      url: mysqlImg
    },
  ]


  return (
    <MySkill id='Skill'>
      <div className='container'>
        <h3>Skill</h3>
        <FrontEndUl>
          {frontEndSkills.map(frontEndSkill=>(
            <FrontEndLi key={frontEndSkill.id}>
              <img src={frontEndSkill.url} alt="" />
              <p>{frontEndSkill.name}</p>
            </FrontEndLi>
          ))}
        </FrontEndUl>
        <BackEndUl>
        {backEndSkills.map(backEndSkill=>(
            <BackEndLi key={backEndSkill.id}>
              <img src={backEndSkill.url} alt="" />
              <p>{backEndSkill.name}</p>
            </BackEndLi>
          ))}
        </BackEndUl>  
      </div>
      
    </MySkill>
  )
}


const MySkill = styled.div`
  height: 800px;
  background: #ddd;
  padding: 50px;
  box-sizing: border-box;
  .container{
    width: 1200px;
    margin: 0 auto;
    height: inherit;
    @media screen and (max-width: 1210px) {
    width: 100%;
    }
    h3{
      text-align:center;
      font-size: 40px;
      color: black;
      margin: 30px 0;
    }
  }
` 

const FrontEndUl = styled.ul`
  width: 100%;
  height: 250px;
  background: white;
  margin-bottom: 50px;
  border-radius: 20px;
  display: flex;
`
const FrontEndLi = styled.li`
  padding: 20px;
  p{
    text-align: center;
  }
  img{
    width: 80px;
    height: 80px;
  }
`
const BackEndUl = styled(FrontEndUl)`
  
`
const BackEndLi = styled(FrontEndLi)`
  p{
    text-align: center;
  }
  img{
    width: 80px;
    height: 80px;
  }
`