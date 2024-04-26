import React from 'react'
import { Navbar , Header , InfoCom , InfoCom2 , Review} from './container/index/index.js'
import {analysis,coding,design} from './image.js';

import './App.css'

function App() {

  return (
    <>
     <Navbar />
     <Header />
     <InfoCom img={analysis} title="Analysis" text = 'We offer a comprehensive range of testing services, including test design, test automation,and test management. Our streamlined approach to testing enables us to deliver high-quality results without unnecessary complexity or confusion.' />
     <InfoCom2 img={design} title="Design" text = "Our streamlined approach to testing enables us to deliver high-quality results without unnecessary complexity or confusion. We focus on what's important, and our clients appreciate the efficiency and effectiveness of our services." />
     <InfoCom img={coding} title="Coding" text = "Whether you're in test planning, test execution, or test reporting, we have the right tools to optimize your testing process. We work closely with our clients to understand their unique needs." />
     <Review />
    </>
  )
}

export default App
