import React  from 'react'
import PropTypes from 'prop-types';

const profile = (props) => {
    const {
        fullName,
        profession,
        bio,
        handleName,
        children
    }=props
   const styleBtn = {
    backgroundColor: "rgb(82, 171, 152)",
    borderRadius:"5px",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    display: "inline-block",
    fontSize: "12px",
  };
  const styleWrite ={
      color:'rgb(3, 14, 18)'
  }
    return (
        
        <div style={{  textAlign:'center',backgroundColor:'rgb(252, 222, 103)' ,height:"700px" ,color:'white'  }}>
            {children}
            <h1 style={styleWrite}> {fullName} </h1>
            <h3 style={styleWrite}> {profession} </h3>
            <p style={styleWrite}> {bio} </p>
            <button onClick= { () => handleName(fullName)} style={styleBtn}>Guess What?</button>
            
        </div>
        
    )
}
profile.defaultProps = {
    fullName:"Amine Ghorbel",
    profession:"Web developer(default)",
    bio:"this the bio as default thank you so much"
    
}
profile.propTypes = {
        fullName: PropTypes.string,
        profession: PropTypes.string,
        bio: PropTypes.string,
        handleName: PropTypes.func,
        children: PropTypes.object
}

export default profile

