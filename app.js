const express=require('express')
const app=express();
const binaceRoutes=require('./routes/index')

const Binance = require('node-binance-api');
const binance = new Binance().options({
  APIKEY: 'oBofWai10TXHveYldag1gtbzzUsDeEkFNTeypYcg0Yp0rjATyPnEcGgqfX6q6RIu',
  APISECRET: 'GlvycamA1PDlKzdmSWHXZWsxL4VA9YKm3Ca0vlBUBBZMFVcb6s4EK9NBANQLxkQ8'
  
});
//binance.futuresPrices()
    //    .then(result=>{
        //  console.log(result)
     //   })
      //  .catch(err=>{
     //    console.log(err)
     // })
   app.use('/binace',binaceRoutes)


app.listen(15000,()=>{
  console.log('app running on port 15000')
})

binance.websockets.candlesticks(  (candlesticks) => {
  let { e:eventType, E:eventTime, s:symbol, k:ticks } = candlesticks;
  let { o:open, h:high, l:low, c:close, v:volume, n:trades, i:interval, x:isFinal, q:quoteVolume, V:buyVolume, Q:quoteBuyVolume } = ticks;
  console.info(symbol+" "+interval+" candlestick update");
  console.info("open: "+open);
  console.info("high: "+high);
  console.info("low: "+low);
  console.info("close: "+close);
  console.info("volume: "+volume);
  console.info("isFinal: "+isFinal);
});

module.exports = app;