import React from "react"
import Layout from "@components/layout"
import SEO from "@components/seo"
import {
  MiniMap,
  ChapterSearch
} from '@components/Home'

import "./index.sass"

const Pin = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0)">
  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#26A1A1" stroke-width="2" stroke-linecap="square"/>
  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#26A1A1" stroke-width="2" stroke-linecap="square"/>
  </g>
  <defs>
  <clipPath id="clip0">
  <rect width="24" height="24" fill="white"/>
  </clipPath>
  </defs>
  </svg>
)

const People = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#26A1A1" stroke-width="2" stroke-linecap="square"/>
  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#26A1A1" stroke-width="2" stroke-linecap="square"/>
  <path d="M23 20.9999V18.9999C22.9993 18.1136 22.7044 17.2527 22.1614 16.5522C21.6184 15.8517 20.8581 15.3515 20 15.1299" stroke="#26A1A1" stroke-width="2" stroke-linecap="square"/>
  <path d="M16 3.12988C16.8604 3.35018 17.623 3.85058 18.1676 4.55219C18.7122 5.2538 19.0078 6.11671 19.0078 7.00488C19.0078 7.89305 18.7122 8.75596 18.1676 9.45757C17.623 10.1592 16.8604 10.6596 16 10.8799" stroke="#26A1A1" stroke-width="2" stroke-linecap="square"/>
  </svg>

)

const Card = ({Icon, title, description}) => {
  return(
    <section className="quantitative-card">
      <h1>{title}</h1>
      <small>{description}</small>
    </section>  
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{
      padding: 10,
      display: 'grid',
      gridTemplateColumns: '100%',
      gridGap: '20px',
      gridRowGap: '20px'
    }}>
      <section style={{
        display: 'inline-grid',
        gridTemplateColumns: '700px 2fr',
        gridTemplateRows: '45vh',
        gridRowGap: '10px',
        gridGap: '20px'
      }}>
        <MiniMap />
        <ChapterSearch />
      </section> 
      <section style={{
        display: 'inline-grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: '25vh',
        gridGap: '10px'
      }}>
        <Card Icon={<Pin />} title="200" description="Local groups around the globe" />
        <Card Icon={<People />} title="100.000" description="Active members" />
        <Card Icon={<Pin />} title="200" description="Local groups around the globe" />
        <Card Icon={<People />} title="100.000" description="Active members" />    
      </section> 
      <section style={{
        display: 'inline-grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: '30vh',
        gridGap: '10px'
      }}>
        <section className='informative-card'>
          <p>
          The Interaction Design Association (IxDA) is a member-supported organization dedicated to the discipline of interaction design. Since its launch in 2003, IxDA has grown into a global network of more than 100,000 individuals and over 200 local groups, focusing on interaction design issues for the practitioner, no matter their level of experience.
          </p>
        </section>
        <section className='informative-card'>
          <p>
          You should see that image...
          </p>
        </section>
      </section> 
    </div>
  </Layout>
)

export default IndexPage
