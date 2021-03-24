import React from 'react'
import Booklist from './components/Booklist'
import { BrowserRouter, Route, Link} from 'react-router-dom';
import axios from 'axios';
// const getDataFormAPI = keyword => { return `${keyword} books` ; }


const App = () => {
    const language = ['React', 'Vue', 'Angular'];
    const getDataFormAPI = async keyword => {
        const requestUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'
        const result = await axios.get(`${requestUrl}${keyword}`);
        return result;
    }
    return (
        <BrowserRouter>
        <div>
            <h1>ReactApp</h1>
            <ul>
            <li><Link to='/'>React</Link></li>
            <li><Link to='/vue'>Vue</Link></li>
            <li><Link to='/angular'>Angular</Link></li>
            </ul>
            <hr/>
            {/* <Booklist language={language[0]}/> */}
            {/* <Route path='/vue' component={Booklist} /> */}
            <Route exact 
                path='/' 
                render={
                    props => 
                    <Booklist 
                        language={language[0]}
                        getData={keyword => getDataFormAPI(keyword)}
                        />}
            />
            <Route path='/vue' render={props =>     
                <Booklist 
                language={language[1]}
                getData={keyword => getDataFormAPI(keyword)}
                />}
            />
            <Route path='/angular' render={props => 
            <Booklist 
                language={language[2]}
                getData={keyword => getDataFormAPI(keyword)}
            />}
        />
        </div>
        </BrowserRouter>
    )
}

export default App
