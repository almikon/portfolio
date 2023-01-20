import React from 'react'
// import '../css/typer.css'
import TypeWriterEffect from 'react-typewriter-effect';

const Typer = () => {
    return (
        <>
            <h3 class='typer'>
            <TypeWriterEffect
        textStyle={{
          fontFamily: 'Monospace',
          color: 'red',
          fontWeight: 500,
          fontSize: '1em',
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[  
            'Internet Shop', 
            'Instagram clone',
            'Regular web page',
            'Personal blog',
            'Cryptocurrency exchange'
          ]}
        multiTextDelay={1000}
        typeSpeed={90}
        multiTextLoop = {true}
      />
            </h3>
        </>
    );
}

export default Typer