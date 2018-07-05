import React from 'react'

class IDB extends React.Component {
    constructor(props){
        super(props);
        // this.read = this.read.bind(this);
        this.state = {
            'info': '123strr',
            'id': 2
        }
    }

    read(id){
        var info;
        var re_db = window.indexedDB.open('DataCol',1);
        re_db.onsuccess = function(event){
            
            var transaction = re_db.result.transaction(['user']);
            var store = transaction.objectStore('user');
            var request = store.get(id);
            request.onerror = function(event) {
                console.error('read error');
            };
            request.onsuccess = function(event) {
                if (request.result) {                    
                    info = {
                        'id':request.result.id,
                        'name':request.result.name,
                        'org_id':request.result.org_id,
                        'hosp_id':request.result.hosp_id,
                    }                                                 
                }else{
                    info = 'no data';
                }
            };            
        }
        setTimeout(() => {
           this.check(
               info.id + '. .' + info.name
            ); 
        }, 100);
    }

    check(infos){
        this.setState({
            info: infos
        })
    }

    render(){
        var is = this.state.info;        
        return (
            <main>
                <div>{is}</div>
                <button onClick={this.read.bind(this,2)}>Refresh</button>
            </main>
        )
    }
}

export default IDB