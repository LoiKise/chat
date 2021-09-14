import React from 'react'
import Tabs from 'react-bootstrap/Tabs';

export default function index() {
    const Tab = () => <span>Tab</span>;

    const Sonnet = () => <span>Sonnet</span>;
    
    
    return (
       <>
       <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="home" title="Home">
    <Sonnet />
  </Tab>
  <Tab eventKey="profile" title="Profile">
    <hello />
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
    <Sonnet />
  </Tab>
</Tabs>
       </>
    )
}