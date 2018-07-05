import React from 'react'
import {left_info} from '../js/Info'
require('../css/LeftLink.css');

class LeftLink extends React.Component {
    
    constructor(props){
        super(props);
    }

    render() {
        return(
            <nav className="left_nav">
            {
                left_info.map((e) => {
                    return (<a className="left_a" key={e.index}>{e.name}</a>);
                })
            }
            </nav>
        )
    }

}

export default LeftLink