import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const tags = ["<html></html>","<h1></h1>","<p></p>","<b></b>"];
  const arrows = ["../arrow.svg","../arrow.svg","../arrow.svg","../arrow.svg",]
  const info = ["start and end document","heading tags(h1 to h6)","paragraph tag","bold text tag"];
  return (
    <>
      <div className='mainContainer'>
          <h1>Basics of <span>html</span></h1>

          <main className='contentContainer'>

            <ol className='listOne'>
              {tags.map((tag,index)=>{
                return (
              <li>  
                <p><span>{index+1}.&nbsp;</span>{tag}</p>
              </li>
                )
              })}
              
            </ol>


            <ul className='listTwo'>
            {arrows.map((tag)=>{
                return (
              <li>  
                <img src={tag} alt="" />
              </li>
                )
              })}
            </ul>


            <ul className='listThree'>
            {info.map((tag)=>{
                return (
              <li>  
                <p>{tag}</p>
              </li>
                )
              })}
            </ul>
          </main>
      </div>
    </>
  )
}

export default App
