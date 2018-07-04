function db_build(){

    const redb = window.indexedDB.open("DataCol",1);
    const db;

    redb.onsuccess = function(event){
        console.log('数据库初始化成功')
        db = redb.result;
    }

    redb.onupgradeneeded = function(event){
        console.log('数据库更新ing')
        db = event.target.result;
        /**
         * 建表(id,name,org_id,hos_id,login_id,password)
         */
        if (!db.objectStoreNames.contains('user')) {
            objectStore = db.createObjectStore('user', { keyPath: 'id' });
            //新建索引（索引名，索引所在的属性，配置对象（是否包含重复值））
            objectStore.createIndex('name', 'name', { unique: false });
        }
    }

    redb.onerror = function(){
        console.log('数据库初始化失败')
    }

}

