import React from 'react'
import './footer.css'
import TopFooter from './TopFooter'
import BottomFooter from './BottomFooter'
import './../../styles/main/main.css';

export default function Footer() {
  return (
    <footer className="mainFooter section">
      <TopFooter className="topFooter" />
      <BottomFooter className="bottomFooter" />
    </footer>
  )
}
