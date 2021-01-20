import React,{useState} from 'react'

const Home = () => {
    const [title,setTitle] = useState('')
    
    const IputClickHandle=()=>{
        console.log('red');
    }
    return (
        <div>
            <input className="form-control" name={title} type="text" onClick={IputClickHandle}/>
            <button className="btn">Submit</button>
        </div>
    )
}

export default Home
