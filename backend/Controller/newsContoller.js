const axios = require('axios');



const API=process.env.API_KEY
const BASE_URL='https://gnews.io/api/v4/'
const newsController=async(req,res)=>{

  try{

    const {category,country,language,q}=req.query

    console.log(category,country,q)
    let apiUrl=`${BASE_URL}`
    if(!q)
{
    apiUrl+=`top-headlines?`
}





if(q)  apiUrl = `${BASE_URL}search?q=${q}`

if (language) apiUrl += `&lang=${language}`;

if (country) apiUrl += `&country=${country}`;

if (category) apiUrl += `&category=${category}`;


apiUrl+=`&apikey=${API}`

console.log(apiUrl)

const response=await axios.get(apiUrl)

console.log(response.data)

res.send({
    data:response.data
})
  }catch(err){

    

    res.send({
      err:err,
      message:"Api call failed"
    })

  }


}

module.exports={newsController}