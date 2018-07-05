import React from 'react'
require('../css/InfoBox.css');

class InfoBox extends React.Component {
    
    constructor(props){
        super(props);
    }

    render() {
        return(
            <main className='infobox_main'>
                <h3>title</h3>
                <section>section</section>
            </main>
        )
    }

}

export default InfoBox