import styled from 'styled-components'
import { Link }from 'react-scroll'


export default function Header() {

  const menus = [
    {id:0, title:"about"},
    {id:1, title:"skill"},
    {id:2, title:"Project"}
  ]
  
  return (
    <MyHeader>
      <div className='container'>
        <div className='nav'>
          <h1>CSY'S</h1>
          <MyMenuDiv>
            {menus.map((menu)=>(
              <MyMenuList key={menu.id}>
                <Link to={menu.title} spy={true} smooth={true} offset={-100}>
                  {menu.title}
                </Link>
              </MyMenuList>
            ))}
          </MyMenuDiv>
        </div>
      </div>
    </MyHeader>
  )
}

const MyHeader = styled.header`
    width: 100%;
    height: 100px;
    border-bottom: 1px solid black;
    position: fixed;
    background: white;
    
    .container{
      width: 1056px;
      margin: 0 auto;
      height: inherit;
      @media screen and (max-width: 1057px) {
      width: 100%;
      }
      .nav{
        padding: 0 20px;
        display: flex;
        height: 100%;
        justify-content: space-between;
        align-items: center;
        h1{
          font-size: 40px;
          
        }
      }
    }
   
`
const MyMenuDiv = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
  font-size: 20px;
`
const MyMenuList = styled.span`
  cursor: pointer;
  padding: 10px;
`
