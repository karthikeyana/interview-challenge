const resource = {
    api: "http://localhost:8080",
    tagCount: (obj) =>{
        let tagResult = {};
        let temp = 1;
        let newObj = obj || [];
        newObj.map(ord1=>{
          ord1.dietaries.map(ord2=>{
            if(tagResult[ord2] !== undefined){
              tagResult[ord2] +=1;
            }else{
              tagResult[ord2] = temp;
            }
          })
        })
        return tagResult;
      }
}

export default resource;