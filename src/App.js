import Profile from './Profile/profile';
import photo from './Pic.jpg'
import './App.css';


function App() {
  const handleName= (name) => {alert(`I am ${name}`)};
  return (
    <div className="App">
      <Profile 
      fullName={'Amine Ghorbel'}
      profession={'Web developer'}
      bio={'I’m curious, and I enjoy work that challenges me to learn something new and stretch in a different direction. I do my best to stay on top of changes in the state of the art so that I can meet challenges with tools well suited to the job at hand.'}
      handleName={handleName}
      >
       <div>
         <img src={photo} alt='pic'  style={{width:150,height:150,padding:'2px',border: '3px solid rgb(91, 204, 246) '}}/>  
       </div>
      </Profile>

    </div>
  );
}

export default App;
