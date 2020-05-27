import React, { Component } from 'react';
import About from './About';
export default function index() {
  return (
    <div>
         <style jsx global>{`
      body {
        margin: 0;
        scroll-behavior: smooth
      }
      body::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: #e2e2e2;
    }
    
    body::-webkit-scrollbar {
        border-radius: 10px;
        width: 12px;
        background-color: #2e2e2e;
    }
    
    body::-webkit-scrollbar-thumb {
        border-radius: 10px;
        width: 12px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #26292E;
    }
    `}</style>
        <About/>
    </div>
  );
}