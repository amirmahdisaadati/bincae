const Binance = require('node-binance-api');
const binance = new Binance().options({
  APIKEY: 'oBofWai10TXHveYldag1gtbzzUsDeEkFNTeypYcg0Yp0rjATyPnEcGgqfX6q6RIu',
  APISECRET: 'GlvycamA1PDlKzdmSWHXZWsxL4VA9YKm3Ca0vlBUBBZMFVcb6s4EK9NBANQLxkQ8',

});

let methods={};


methods.getAllPrice=()=>{
    return new Promise((resolve,reject)=>{

        binance.futuresPrices()
                .then(result=>{
                   // for(let key in result)
                    //{
                   //     result[key]=`${parseFloat(result[key])*3000*10} Rial`
                    //}
                   //console.log(result)
                   for(let key in result)
                   {
                        result[key]=result[key]*300000
                            if(Number.isInteger(result[key]))
                             {
                                continue
                            }
                            else
                            {
                                result[key]=parseInt(result[key])
                            }
                   }
                   
                    resolve({
                        status:200,
                        msg:'success',
                        data:result
                    })
                    
                })
                .catch(err=>{
                    console.log(err)
                    reject({
                        status:400,
                        msg:'something  went wrong:error like ETIMEDOUT and ...',
                        error:err
                    })
                })
    })
}



module.exports=methods