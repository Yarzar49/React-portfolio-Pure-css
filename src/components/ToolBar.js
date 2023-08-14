import React from "react";
// import '../css/Toolbar.css';

class Toolbar extends React.Component{
  
  
  render(){  
  let a=20;
  let b=10; 
  const styles={
      toolbar:{
        background : 'red',
        padding:a-b,

      },
      dark:{
        color:'white',
        border:'1px solid black',
      }
    } 
    
    return(
      <div style={styles.toolbar}>
        {this.props.children}
      </div>
    )
  }
}

export default Toolbar;