// import React from 'react';



// class Item extends React.Component {

//     render() {

//         return (

//             <li>

//                 {this.props.name},

//                 ${this.props.price}

//             </li>

//         );

//     }

// }



// class App extends React.Component {

//     state = {

//         items: [

//             { id: 1, name: 'Apple', price: 0.99 },

//             { id: 2, name: 'Orange', price: 0.89 },

//         ]

//     }



//     nameRef = React.createRef();

//     priceRef = React.createRef();



//     add = () => {

//         let id = this.state.items.length + 1;

        



//         this.setState({

//             items: [

//                 ...this.state.items,

//                 { id, name: `Item ${id}`, price: 0.01 }

//             ]

//         });

//     }



//     render() {

//         return (

//             <div>

//                 <h1>Hello React</h1>

//                 <ul>

//                     {this.state.items.map(i => {

//                         return (

//                             <Item

                                

//                                 name={i.name}

//                                 price={i.price}

//                             />

//                         )

//                     })}

//                 </ul>

                

//                 <button onClick={this.add}>Add</button>

//             </div>

//         )

//     }

// }
// export default App;


// import React from 'react';



// class Item extends React.Component{
//   render(){
//     return(
//       <li>{this.props.name},${this.props.price}</li>
//     )
//   }
// }

// class AddForm extends React.Component{
//   nameRef=React.createRef();
//   priceRef=React.createRef();

//   Add=()=>{
//     let name=this.nameRef.current.value;
//     let price=this.priceRef.current.value;

//     this.props.add(name,price);
//   }

//   render(){
//     return(
//       <div>
//         <input type="text" ref={this.nameRef}></input><br/>
//         <input type="text" ref={this.priceRef}></input><br/>
//         <button onClick={this.Add}>Add</button>
//       </div>
//     )
//   }
// }

// class App extends React.Component{

//   state={
//     items:[
//       {id:1,name:"Apple",price:0.99},
//       {id:2,name:"Orange",price:0.89},
//     ]
//   }
  
  
//   add=(name,price)=>{
//     let id=this.state.items.length+1;
    
    
    

//     this.setState({
//       items:[
//         ...this.state.items,
//         {id,name,price}
//       ]
//     })

//   }

//   render(){
//     return(
//       <div>
//         <h1>Hello React</h1>
//         <ul>
//           {
//             this.state.items.map((i)=>{
//               return (
//                 <Item key={i.id} name={i.name} price={i.price}/>             )
              
//             })
//           }

//         </ul>
//         <AddForm add={this.add}/>
//       </div>
//     )
//   }
// }

// export default App;


// import React from "react";

// class Item extends React.Component{
//   render(){
//     return (
//       <li>{this.props.name},${this.props.price}</li>
//     )
//   }
// }

// class AddFrom extends React.Component{
//   nameRef=React.createRef();
//   priceRef=React.createRef();

//   add=()=>{
//     let name=this.nameRef.current.value;
//     let price=this.priceRef.current.value;
//     this.props.add(name,price);
//   }
//   render(){
//     return(
//       <div>
//         <input type="text" ref={this.nameRef}/><br/>
//         <input type="text" ref={this.priceRef}/><br/>
//         <button onClick={this.add}>Add</button>
//       </div>
//     )
//   }

// }



// class App extends React.Component{

//   state={
//     items:[{id:1,name:"Apple",price:0.99},{id:2,name:"Banana",price:0.89}]
//   }
  
  

//   add=(name,price)=>{
//     let id=this.state.items.length+1;
    
//     this.setState({
//       items:[...this.state.items,{id,name,price}]
//     })
//   }

//   render(){
//     return(
//       <div>
//         <h1>Hello World</h1>
//         <ul>
//           {
//             this.state.items.map((i)=><Item key={i.id} name={i.name} price={i.price}/>)
//           }
//         </ul>        
//         <AddFrom add={this.add}/>
//       </div>
      
//     )
//   }


// }

// export default App;


// import React from "react";

// class Title extends React.Component{
//   render(){
//     return(
//       <h1>
//         {this.props.name}
//       </h1>
//     )
//   }
// }

// class Header extends React.Component{
//   render(){
//     return(
//       <div>
//         <Title name={this.props.name} />
//       </div>
//     )
//   }
// }

// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         <Header name="Hello React"/>
//       </div>
//     )
//   }
// }


// export default App;

// import React from "react";
// import Toolbar from './components/ToolBar'



// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         <Toolbar>
//           <h1>Hello React</h1>
//           <p>Component Composition</p>
//         </Toolbar>

//       </div>
//     )
//   }
// }

// export default App;



// // Funtional Component

// import React,{createRef,useState} from "react";

// const Item=({name,price})=>{
//   return(
//     <li>{name},${price}</li>
//   )
// }

// const AddForm=props=>{

//   let nameRef=createRef();
//   let priceRef=createRef();
//   let add=()=>{
//     let name=nameRef.current.value;
//     let price=priceRef.current.value;
//     props.add(name,price)

//   }
//   return(
//     <div>
//       <input type="text" ref={nameRef} /><br/>
//       <input type="text" ref={priceRef} /><br/>
//       <button onClick={add}>Add</button>
//     </div>

//   )
// }

// const App= props =>{
//   let [items,setItems]= useState([
//     {id:1,name:'Apple',price:0.99},
//     {id:2,name:'Orange',price:0.89}
//   ]);

  

//   let add=(name,price)=>{
//     let id=items.length+1;
    
//     setItems(
//       [...items,{id,name,price}]
//     )

//   }



//   return(
//     <div>
//       <ul>
//         {
//           items.map((i)=><Item key={i.id} name={i.name} price={i.price}/>)
//         }        
//       </ul>
//       <AddForm add={add}/>
//     </div>
//   )
// }

// export default App;

// //Context
// import React from "react";

// const MyContext=React.createContext("Hello React");

// const Title=props=>{
//   const name=React.useContext(MyContext)
//   return(
//     <h1>
//       {name}
//     </h1>
//   )
  
    
    
  
// }

// const Header=props=>{
//   return <Title />
// }


// const App=props=>{
//   return(
    
    

//     <Header/>

//   )
// }

// export default App;

// import React, {useState, useEffect} from "react";

// const App = props => {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         fetch('https://reqres.in/api/users?page=2')
//         .then(res => res.json())
//         .then(json => {
//             setUsers(json.data);
//         })
//     })

//     return (
//         <ul>
//             {users.map(u => <li key={u.id}>{u.first_name}</li>)}
//         </ul>
//     )
// }

// export default App;

// import React from "react";
// import { BlogProvier } from "./BlogContext";
// import AddPostForm from "./AddPostForm";
// import PostList from "./PostList";

// const App = () => {
//     return (
//         <BlogProvier>
//             <div className="App">
//                 <h1>Blogging Platform</h1>
//                 <AddPostForm />
//                 <PostList />
//             </div>
//         </BlogProvier>
//     )
// }

// export default App;

import React from 'react';
import Header from './components/Header';
import Project from './components/Project';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import './App.css';

const projectsData = [
  {
    title: 'Project 1',
    description: 'Description of Project 1',
    imageUrl: 'project1.jpg',
    link: 'https://example.com/project1',
  },
  {
    title: 'Project 2',
    description: 'Description of Project 1',
    imageUrl: 'project1.jpg',
    link: 'https://example.com/project1',
  },
  {
    title: 'Project 2',
    description: 'Description of Project 1',
    imageUrl: 'project1.jpg',
    link: 'https://example.com/project1',
  },
  // Add more project objects
];

const App = () => {
  return (
    <div className="App">
    <Header />
    <ProjectSection projects={projectsData} />
    <Skills />
    <AboutMe />
    <Contact />
  </div>
  );
};

const ProjectSection = ({ projects }) => {
    return (
      <section className="projects-section" id="projects">
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </section>
    );
  };

export default App;

