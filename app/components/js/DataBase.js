var db_config =  {
        'db_name': 'DataCol',
        'db_version': 1,
        'dbo': ''
    }

var db_info = [
    {
        'id': 1,
        'name': '湘雅',
        'org_id': '41',
        'hosp_id': '51'
    },
    {
        'id': 2,
        'name': '湘雅2',
        'org_id': '42',
        'hosp_id': '52'
    },{
        'id': 3,
        'name': '湘雅3',
        'org_id': '43',
        'hosp_id': '53'
    },{
        'id': 4,
        'name': '湘雅4',
        'org_id': '44',
        'hosp_id': '54'
    },

]

function db_build(db_name = 'DataCol', db_version = 1){

    var re_db = window.indexedDB.open(db_name,db_version);

    re_db.onsuccess = function(event){
        db_config.dbo = re_db.result;        
    }

    re_db.onupgradeneeded = function(event){
        db_config.dbo = event.target.result;
        var objectStore;
        if (!db_config.dbo.objectStoreNames.contains('user')) {
            objectStore = db_config.dbo.createObjectStore('user', { keyPath: 'id' });
            setTimeout(() => {
                init();
                event.target.result.close();
            }, 1000);
        }
    }

    re_db.onerror = function(){
        console.error('db error')
    }
}

function init(){
    var transaction = db_config.dbo.transaction('user','readwrite'); 
    var store = transaction.objectStore('user'); 
    for(var i=0;i<db_info.length;i++){
        store.add(db_info[i]);    
    }
    db_config.dbo.close();
}

export {db_build,init}