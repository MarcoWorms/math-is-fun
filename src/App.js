import React, { Component } from 'react'
import './App.css'

function debug (x) {
  console.log(x)
  return x
}

const Quarter = ({ children }) =>
  <div
    style={{
      boxSizing: 'border-box',
      float: 'left',
      width: '50%',
      height: '50%',
      border: 'solid 1px black'
    }}
  >
    { children }
  </div>

const Point = ({ x, y, size }) => {
  size = size || 8
  const normalize = (coord) => coord - size/2 - 1
  return (
    <div
      style={{
        width: size + 'px',
        height: size + 'px',
        borderRadius: '100%',
        backgroundColor: 'red',
        position: 'absolute',
        transform: `translate(${ normalize(x) }px, ${ normalize(y) }px)`
      }}
    />
  )
}


const Formula = ({ xCoords, f }) =>
  <div>
    {xCoords.map( (x, index) =>
      <Point x={x} y={-f(x)} key={index} />
    )}
  </div>


const buildRange = size =>
  Array(size).fill(1).map((e,i,a)=>i-a.length/2)

const Graph = ({ range, f }) =>
  <div className="App">
    <Quarter />
    <Quarter />
    <Quarter />
    <Quarter>
      <Formula xCoords={buildRange(range * 2)} f={f} />
    </Quarter>
  </div>

const App = () => <Graph range={1000} f={x => x*(x/1000)} />

export default App
