const sslChecker = require('ssl-checker')
const axios = require('axios')
const { domain, NO_OF_DAYS, SLACK_URL } = process.env

async function checkCert (domain) {
   // const temphostname = domain.split(",");
    for(const hostname  of domain.split(","))
    {
       // console.log(hostname)
         const info = await sslChecker(hostname);
         if (parseInt(info.daysRemaining) < parseInt(NO_OF_DAYS))
         {
            await axios.post(SLACK_URL, {
                text: `${hostname} is about to exp in ${info.daysRemaining} days plz renew it asap`
              })
         }
    }
}

checkCert(domain)
