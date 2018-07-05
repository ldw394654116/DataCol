import React from 'react'
import TopLink from './TopLink'
import LeftLink from './LeftLink'
import {db_build} from '../js/DataBase'
import InfoBox from './InfoBox'
import Login from './Login'

require('../css/App.css')

class App extends React.Component {  
  
  render() {
    db_build()   
    return (
      // <main>    

      // <TopLink />

      // <section className='app_section'>
      //     <InfoBox />
      //     <InfoBox />
      //     <InfoBox />
      //     <InfoBox />
      // </section>

      // </main>

      <Login/>
    );
  }
}



export default App
