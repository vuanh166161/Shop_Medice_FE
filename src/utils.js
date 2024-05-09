import { orderContant } from "./contant";

export const isJsonString = (data) => {
    try {
        JSON.parse(data)
    } catch (error) {
        return false
    }
    return true
}

export const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

export function getItem (label, key, icon, children, type){
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

export const renderOptions = (arr) => {
    let results = []
    if(arr) {
        results = arr?.map((opt) => {
            return {
                value: opt,
                label: opt
            }
        })
    }
    results.push({
        label: 'Add type',
        value: 'new_type'
    })
    return results
}

export const convertPrice = (price) => {
    try{
        const result = price?.toLocaleString().replaceAll(',','.')
        return `${result} VND`
    }catch(error){
        return null
    }
}

export const initFacebookSDK = () => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
    let locale = "en_US";
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: process.env.REACT_APP_FB_ID,// You App ID
        cookie: true, // enable cookies to allow the server to access
        // the session
        xfbml: true, // parse social plugins on this page
        version: "v2.1" // use version 2.1
      });
    };
    // Load the SDK asynchronously
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = `//connect.facebook.net/${locale}/sdk.js`;
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  };

  export const dataChartPayment = (data, type) => {
    try {
        const object = {}
        Array.isArray(data) && data.forEach((option) => {
            if(!object[option[type]]) {
                object[option[type]] = 1
            }else{
                object[option[type]]+=1
            }
        })
       const results =  Array.isArray(Object.keys(object)) && Object.keys(object).map((item) => {
            return {
                name: orderContant.payment[item],
                value: object[item]
            }
        })
        return results
    }
    catch(e){
        return []
    }
}