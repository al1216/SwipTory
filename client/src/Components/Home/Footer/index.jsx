import React from 'react'
import './style.css';
import Food from './Food';
import useStoryContext from '../../../hooks/useProductContext';

export default function Index() {
    const {footerRef} = useStoryContext();
  return (
    <div className="footer" ref={footerRef}>
        <Food />
    </div>
  )
}
