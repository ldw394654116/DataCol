import React from 'react'
import {top_info} from './Info'
require('../css/TopLink.css');

class TopLink extends React.Component {
    
    constructor(props){
        super(props);
    }

    render() {
        return(
            <nav className="top_nav">
            {
                top_info.map((e) => {
                    return (<a className="top_a" key={e.index}>{e.name}</a>);
                })
            }
            </nav>
        )
    }

}

export default TopLink