/*
    const arr = [
        'account/user',
        'account/profile',
        'account/user/logId',
        'account/user/logName',
        'config/dashboard/sean',
        'config/dashboard/tracy',
        'config/logfiles',
    ];

    convert this above structure to below one
    {
    "account": {
      "user": {
        "logId":{},
        "logName":{}
      }
    },
    "config":{
      "dashboard":{ 
        "sean":{},
        "tracy":{}
      },
      "logfiles":{}
    }
  }
*/
const constructStructure = (mapObject, strArray) => {
    const [head, ...tail] = strArray;
    if(!mapObject[head]){
        if(tail.length){
            return {
                ...mapObject,
                [head] : constructStructure({}, tail)
            }
        } else {
            return {
                ...mapObject,
                [head] : {}
            } 
        }
    }  else {
        if(tail.length){
            return {
                ...mapObject,
                [head] : constructStructure(mapObject[head], tail)
            }
        }
    }
};
const arr = [
    'account/user',
    'account/profile',
    'account/user/logId',
    'account/user/logName',
    'config/dashboard/sean',
    'config/dashboard/tracy',
    'config/logfiles',
];

function objectify(){
    return arr.reduce((acc, arrStr) => {
        let temp = arrStr.split('/');
        const newObj = constructStructure(acc, temp);
        return newObj;
    }, {});
}


console.log(objectify());