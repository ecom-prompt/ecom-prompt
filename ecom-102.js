window.addEventListener('DOMContentLoaded', (event) => {
    // Selective loading
    let contentTabs = document.querySelectorAll(".content-tab");
    let fieldBrand = document.querySelector("#field-brand");
    let fieldProduct = document.querySelector("#field-product");
    let fieldIC = document.querySelector("#field-ic");
    let fieldComp = document.querySelector("#field-comp");
    let industryDropdown = document.querySelector("#industry-dd");
    let frameworkDropdown = document.querySelector("#framework-dd");
    let positioningDropdown = document.querySelector("#positioning-dd");
    let offerDropdown = document.querySelector("#offer-dd");
    let holidayDropdown = document.querySelector("#holiday-dd");
    let channelDropdown = document.querySelector("#channel-dd");
    let wrapperFormField = document.querySelector(".wrapper-form-fields");
    let resetForm = document.querySelector(".reset-form-btn");
     let brandInput= document.querySelector("input#brand-name").value;
    // buttons
     let validationBtn = document.querySelector("#validation-btn");
    let promptGenerationBtn = document.querySelector("#generate-btn");
    let messageError = document.querySelectorAll(".message-error");
    let productInput= document.querySelector("input#your-product").value;
    let icInput= document.querySelector("input#your-ideal-customer").value;
    let generatedResult = document.querySelector(".result-ai");
    let resultAiContainer = document.querySelector(".copy-result-container");
    // result wrappper
    let resultData = document.querySelector(".prompt-wrapper");
    let errorMessage = document.querySelector(".container-error")
    let arrayFields = [fieldBrand,fieldProduct,fieldIC,fieldComp,industryDropdown,frameworkDropdown,positioningDropdown,holidayDropdown,offerDropdown,channelDropdown]
    let promptBase="";
    let currentIndustry="";
    let currentBrand="";
    let currentProduct="";
    let currentIC="";
    let currentComp="";
    let currentPositioning="";
    let currentOffer="";
    let currentHoliday="";
    let currentChannel="";
    let currentFramework="";
    // function selective loading///
    function selectiveFields(fields){
    arrayFields.forEach(field=>field.style.display="block");
    for(let i=0;i<fields.length;i++){
    arrayFields[fields[i]].style.display="none";
    }
    }
    // function prompt template
    //function field checker
    function fieldInput(){
    let brandValue= document.querySelector("input#brand-name").value;
        currentBrand=brandValue;
    let productValue= document.querySelector("input#your-product").value;
         currentProduct=productValue;
    let icValue= document.querySelector("input#your-ideal-customer").value;
      currentIC=icValue;
    let competitorValue= document.querySelector("input#your-competitor").value;
        currentComp=competitorValue;
    //dropdowns
    let industryNames = document.querySelectorAll(".industry-select");
    let frameworkNames = document.querySelectorAll(".framework-select");
    let positioningNames = document.querySelectorAll(".positioning-select");
    let holidayNames = document.querySelectorAll(".holiday-select");
    let offerNames = document.querySelectorAll(".offer-select");
    let channelNames = document.querySelectorAll(".channel-select");
    let selectedText = document.querySelector(".selected-text");
    let frameworkText = document.querySelector(".framework-select-text");
    let positioningText = document.querySelector(".positioning-select-text");
    let holidayText = document.querySelector(".holiday-select-text");
    let offerText = document.querySelector(".offer-select-text");
    let channelText = document.querySelector(".channel-select-text");
    let resultText = document.querySelector(".result-text");
    let competitorPrompt = " Use a tone similar to that of " + currentComp +".";
    if(currentComp.length < 1){
        competitorPrompt="";
        }
    // values of dropdown option when checked
    // industry dd
    let industrySelected = [...industryNames].filter(e => e.checked);
    let [industryName] = industrySelected;
    selectedText.innerText = industryName?.value;
    currentIndustry=industryName?.value;
     if(selectedText.innerText != "Select"){
     selectedText.style.color="#fff";
    //closeTheOpenedDropDown('industry');
     }
    // framework dd
    let frameworkValueSelect = [...frameworkNames].filter(e => e.checked);
    let [frameworkSelected] = frameworkValueSelect;
    frameworkText.innerText = frameworkSelected?.value;
    currentFramework=frameworkSelected.getAttribute("data-prompt");
     if(frameworkText.innerText != "Select"){
     frameworkText.style.color="#fff";
     //closeTheOpenedDropDown('framework');
     }
    // positioning dd
    let positioningSelected = [...positioningNames].filter(e => e.checked);
    let [positioningName] = positioningSelected;
    positioningText.innerText=positioningName?.value;
      currentPositioning=positioningName.getAttribute("data-prompt");
     if(positioningText.innerText != "Select"){
     positioningText.style.color="#fff";
    // closeTheOpenedDropDown('positioning');
     }
    // holiday dd
    let holidaySelect = [...holidayNames].filter(e => e.checked);
    let [holidaySelected] = holidaySelect;
    holidayText.innerText=holidaySelected?.value;
    currentHoliday=holidaySelected.getAttribute("data-prompt");
    if(holidayText.innerText != "Select"){
     holidayText.style.color="#fff";
    // closeTheOpenedDropDown('holiday');
     }
    // offer dd
    let offerSelect = [...offerNames].filter(e => e.checked);
    let [offerSelected] = offerSelect;
    offerText.innerText=offerSelected?.value;
    currentOffer=offerSelected.getAttribute("data-prompt");
     if(offerText.innerText != "Select"){
     offerText.style.color="#fff";
        // closeTheOpenedDropDown('offer');
     }
    // channel dd
    let channelSelect = [...channelNames].filter(e => e.checked);
    let [channelSelected] = channelSelect;
    channelText.innerText=channelSelected?.value;
      currentChannel=channelSelected?.value;
         if(channelText.innerText != "Select"){
     channelText.style.color="#fff";
      //closeTheOpenedDropDown('channel');
     }
     let currentTab = [...contentTabs].find(e=>e.classList.contains("active-btn"));     
     let activeTab= currentTab.innerText;
      switch(activeTab){
      case "Homepage Headline":  
     promptBase="Behave like an ecommerce expert and create a homepage headline for a "+ currentIndustry +" product called " + currentProduct +" from the brand "+ currentBrand +"."+ competitorPrompt + " " + currentFramework + " " + currentPositioning + " " + currentHoliday + " " + currentOffer;
     resultText.innerText=promptBase;
      validateFields1();
    break;
    case "Homepage Content":
     promptBase="Act like an ecommerce content writer and create homepage content for a " + currentIndustry +" product by the brand " + currentBrand + "."+ competitorPrompt + " " + currentFramework + " " + currentPositioning + " " + currentHoliday + " " + currentOffer;
     resultText.innerText=promptBase;
              validateFields2();
    break;
    case "About us Content":
     promptBase="Think like a PR professional creating content for a website. Write content for the about us section of a " + currentIndustry +" brand called "+ currentBrand +"."+ competitorPrompt + " " + currentFramework + " " + currentPositioning + " " + currentHoliday + " " + currentOffer;
     resultText.innerText=promptBase;
              validateFields2();
    break;
    case "Collection Title":
    promptBase="Act as an ecommerce merchandising expert and create a product collection title for "+ currentProduct +" from "+ currentBrand + "."+ competitorPrompt + " " + currentFramework + " " + currentPositioning + " " + currentHoliday + " " + currentOffer;
     resultText.innerText=promptBase;
              validateFields3();
    break;
    case "Collection Description":
    promptBase="Act as an ecommerce merchandising expert and create a product collection description for the "+ currentProduct +" from the brand "+ currentBrand + "."+ competitorPrompt + " " + currentFramework + " " + currentPositioning + " " + currentHoliday + " " + currentOffer;
     resultText.innerText=promptBase;
              validateFields3();
      break;
    case "FAQ":
    promptBase="Behave like an ecommerce retail product specialist and create a list of FAQs with answers for the product "+ currentProduct +" by the brand "+ currentBrand + "."+ competitorPrompt + " " + currentFramework + " " + currentPositioning + " " + currentHoliday + " " + currentOffer;
    resultText.innerText=promptBase;
              validateFields3();
    break;
    case "Product Titles":
    promptBase="Behave like an ecommerce merchandising specialist and draft a product title for "+ currentProduct +" from "+ currentBrand + ", a " + currentIndustry +" brand."+ competitorPrompt + " " + currentFramework + " " + currentPositioning + " " + currentHoliday + " " + currentOffer;
    resultText.innerText=promptBase;
              validateFields1();
    break;
    case "Product Descriptions":
    promptBase="Think like an ecommerce merchandising specialist and write a product description to list "+ currentProduct +" on an ecommerce store "+ currentBrand + " for a customer who is a " +currentIC+"."+ competitorPrompt + " " + currentFramework + " " + currentPositioning + " " + currentHoliday + " " + currentOffer;
    resultText.innerText=promptBase;
              validateFields4();
      break;
    case "Page Meta Title":
    promptBase="Think like an ecommerce SEO expert and generate a page meta title for the brand "+ currentBrand + " from the " + currentIndustry +" industry "+ competitorPrompt + " " + currentFramework + " " + currentPositioning + " " + currentHoliday + " " + currentOffer;
    resultText.innerText=promptBase;
              validateFields2();
      break;
    case "Page Meta Description":
    promptBase="Think like an ecommerce SEO expert and generate a page meta description for the brand "+ currentBrand + " from the " + currentIndustry +" industry "+ competitorPrompt + " " + currentFramework + " " + currentPositioning + " " + currentHoliday + " " + currentOffer;
    resultText.innerText=promptBase;
              validateFields2();
      break;
    case "Product Page Meta Title":
    promptBase="Think like an ecommerce SEO expert and generate a page meta title for "+ currentProduct +" from the brand "+ currentBrand + " from the " + currentIndustry +" industry "+ competitorPrompt + " " + currentFramework + " " + currentPositioning + " " + currentHoliday + " " + currentOffer;
    resultText.innerText=promptBase;
              validateFields1();
      break;
    case "Product Page Meta Description":
    promptBase="Think like an ecommerce SEO expert and generate a page meta description for "+ currentProduct +" from brand "+ currentBrand + " from the " + currentIndustry +" industry "+ competitorPrompt + " " + currentFramework + " " + currentPositioning + " " + currentHoliday + " " + currentOffer;
    resultText.innerText=promptBase;
              validateFields1();
      break;
    case "Email Subject Line":
    promptBase="Act like an email marketing specialist and draft 5 email subject line options for "+ currentProduct +" by the brand "+ currentBrand + " using a maximum of 50 characters each."+ competitorPrompt + " " + currentFramework + " " + currentPositioning + " " + currentHoliday + " " + currentOffer;
    resultText.innerText=promptBase;
              validateFields3();
      break;
    case "Email Content":
    promptBase="Act like an email marketing expert for ecommerce and draft an email campaign for the product "+ currentProduct +" from the brand "+ currentBrand + ", belonging to the " + currentIndustry +" industry. The campaign is intended for a "+ currentIC+"."+ competitorPrompt + " " + currentFramework + " " + currentPositioning + " " + currentHoliday + " " + currentOffer;
    resultText.innerText=promptBase;
              validateFields5();
      break;
    case "SMS Message":
    promptBase="Think like an ecommerce marketing expert and create an SMS campaign for the product "+ currentProduct +" from the brand "+ currentBrand + "."+ competitorPrompt + " " + currentFramework + " " + currentPositioning + " " + currentHoliday + " " + currentOffer;
    resultText.innerText=promptBase;
              validateFields3();
      break;
    case "Whatsapp Message":
    promptBase="Behave like an ecommerce marketing expert for Whatsapp and create a campaign for the product "+ currentProduct +" from the brand "+ currentBrand + "."+ competitorPrompt + " " + currentFramework + " " + currentPositioning + " " + currentHoliday + " " + currentOffer;
    resultText.innerText=promptBase;
              validateFields3();
      break;
    case "Browser Notification":
    promptBase="Think like an ecommerce website expert and generate a browser notification for the product "+ currentProduct +" for the store "+ currentBrand + "."+ competitorPrompt + " " + currentFramework + " " + currentPositioning + " " + currentHoliday + " " + currentOffer;
    resultText.innerText=promptBase;
              validateFields3();
      break;
    case "App Notification":
    promptBase="Think like an ecommerce product expert and generate an app notification for the product "+ currentProduct +" for the app "+ currentBrand + "."+ competitorPrompt + " " + currentFramework + " " + currentPositioning + " " + currentHoliday + " " + currentOffer;
    resultText.innerText=promptBase;
              validateFields3();
      break;
    case "Ad Caption":
    promptBase="Think like an ecommerce digital advertiser and create an ad caption for the product "+ currentProduct +" from the brand "+ currentBrand + ". Optimize the caption for " + currentChannel+" ads and relevant character limits."+ competitorPrompt + " " + currentFramework + " " + currentPositioning + " " + currentHoliday + " " + currentOffer;
    resultText.innerText=promptBase;
              validateFields7();
      break;
    case "Ad Copy":
    promptBase="Think like an ecommerce digital advertising copywriter and create ad copy for the product "+ currentProduct +" from the brand "+ currentBrand + ". Optimize the copy for "+currentChannel+" ads."+ competitorPrompt + " " + currentFramework + " " + currentPositioning + " " + currentHoliday + " " + currentOffer;
    resultText.innerText=promptBase;
              validateFields7();
      break;
    case "Social Media Page Description":
    promptBase="Think like an ecommerce social media specialist and write a 90 character "+currentChannel+" page description for a " + currentIndustry +" brand named "+ currentBrand + " which sells "+ currentProduct +"."+ competitorPrompt + " " + currentFramework + " " + currentPositioning + " " + currentHoliday + " " + currentOffer;
    resultText.innerText=promptBase;
              validateFields6();
      break;
    case "Article":
    promptBase="Act as an ecommerce content writer and write an article on the product "+ currentProduct +" from the brand "+ currentBrand + "."+ competitorPrompt + " " + currentFramework + " " + currentPositioning + " " + currentHoliday + " " + currentOffer;
    resultText.innerText=promptBase;
              validateFields3();
      break;
    default:
    console.log("Default");
      }
    }
    // button validation 
    function clickValidation(){
    validationBtn.addEventListener("click",function(){
        messageError.forEach(message=>message.style.display="block");
      setTimeout(function(){messageError.forEach(message=>message.style.display="none")},1500);
    })
    }
 // function validation
    function validateFields1(){
        // product,industry and brand
    if(currentIndustry != "Select" && currentBrand.length > 2 && currentProduct.length > 2 ){
     resultData.style.display="block";
        validationBtn.style.display="none";
        promptGenerationBtn.style.display="block";
     }
        else {
        resultData.style.display="none";
             validationBtn.style.display="block";
        promptGenerationBtn.style.display="none";
        }
        clickValidation();
    }
    function validateFields2(){
         //  industry and brand
    if(currentIndustry != "Select" && currentBrand.length > 2 ){
     resultData.style.display="block";
           validationBtn.style.display="none";
        promptGenerationBtn.style.display="block";
        
     }
         else{
        resultData.style.display="none";
       validationBtn.style.display="block";
        promptGenerationBtn.style.display="none";
        }
        clickValidation();
    }
    function validateFields3(){
   //  product and brand
    if(currentBrand.length > 2 && currentProduct.length > 2 ){
     resultData.style.display="block";
           validationBtn.style.display="none";
        promptGenerationBtn.style.display="block";
     }
         else{
        resultData.style.display="none";
             validationBtn.style.display="block";
        promptGenerationBtn.style.display="none";
        }
        clickValidation();
    }
    function validateFields4(){
            //  product and brand , icp
    if( currentProduct.length > 2 && currentBrand.length > 2 && currentIC.length > 2 ){
     resultData.style.display="block";
           validationBtn.style.display="none";
        promptGenerationBtn.style.display="block";
     }
         else{
        resultData.style.display="none";
               validationBtn.style.display="block";
        promptGenerationBtn.style.display="none";
        }
        clickValidation();
    }
    function validateFields5(){
        //  product and brand , icp,industry
    if(currentIndustry != "Select" && currentBrand.length > 2 && currentProduct.length > 2 && currentIC.length > 2 ){
     resultData.style.display="block";
           validationBtn.style.display="none";
        promptGenerationBtn.style.display="block";
     }
         else{
        resultData.style.display="none";
              validationBtn.style.display="block";
        promptGenerationBtn.style.display="none";
        }
        clickValidation();
    }

    function validateFields6(){
        //  product and brand , channel,industry
    if(currentIndustry != "Select" && currentChannel != "Select" && currentBrand.length > 2 && currentProduct.length > 2){
     resultData.style.display="block";
           validationBtn.style.display="none";
        promptGenerationBtn.style.display="block";
     }
         else{
        resultData.style.display="none";
              validationBtn.style.display="block";
        promptGenerationBtn.style.display="none";
        }
        clickValidation();
    }
        function validateFields7(){
        //  product and brand , channel 
    if(currentChannel != "Select" && currentBrand.length > 2 && currentProduct.length > 2  ){
     resultData.style.display="block";
           validationBtn.style.display="none";
        promptGenerationBtn.style.display="block";
     }
             else{
        resultData.style.display="none";
                  validationBtn.style.display="block";
        promptGenerationBtn.style.display="none";
        }
            clickValidation();
    }
    // tab click ///
    contentTabs.forEach((tab)=>{
    tab.addEventListener("click",()=>{
        contentTabs.forEach(a=>a.classList.remove("active-tab"));
        contentTabs.forEach(a=>a.classList.remove("active-btn"));
        tab.classList.add("active-tab");
        tab.classList.add("active-btn");
        wrapperFormField.style.display="block";
        resetFullForm();
    let resultText = document.querySelector(".result-text");
    let currentTab = tab.innerText;
    switch(currentTab){
    case "Homepage Headline":
     hideFields=[2,5,9];
     selectiveFields(hideFields); 
      //(function(){setInterval(validateFields1,500)
                // })();
       generateButton();
    break;
    case "Homepage Content":
     hideFields=[1,2,9];
    selectiveFields(hideFields);
            // (function(){setInterval(validateFields2,500)
                 //})();
      generateButton();
    break;
    case "About us Content":
     hideFields=[1,2,7,8,5,9];
    selectiveFields(hideFields);
      // (function(){setInterval(validateFields2,500)
                // })();
             generateButton();
    break;
    case "Collection Title":
    hideFields=[2,4,9];
    selectiveFields(hideFields);
     //(function(){setInterval(validateFields3,500)
                 //})();
             generateButton();
    break;
    case "Collection Description":
    hideFields=[2,9,4];
    selectiveFields(hideFields);
  // (function(){setInterval(validateFields3,500)
                // })();
             generateButton();
      break;
    case "FAQ":
     hideFields=[2,3,4,5,7,8,9];
    selectiveFields(hideFields);
       //(function(){setInterval(validateFields3,500)
                // })();
             generateButton();
    break;
    case "Product Titles":
     hideFields=[2,9];
    selectiveFields(hideFields);
      //(function(){setInterval(validateFields1,500)
                // })();
             generateButton();
    break;
    case "Product Descriptions":
     hideFields=[4,9];
    selectiveFields(hideFields);
  // (function(){setInterval(validateFields4,500)
                 //})();
             generateButton();
      break;
    case "Page Meta Title":
    hideFields=[2,1,9];
    selectiveFields(hideFields);
   //(function(){setInterval(validateFields2,500)
                // })();
             generateButton();
      break;
    case "Page Meta Description":
    hideFields=[2,1,9];
    selectiveFields(hideFields);
  // (function(){setInterval(validateFields2,500)
                // })();
             generateButton();
      break;
    case "Product Page Meta Title":
    hideFields=[2,9];
    selectiveFields(hideFields);
    //(function(){setInterval(validateFields1,500)
                // })();
             generateButton();
      break;
    case "Product Page Meta Description":
    hideFields=[2,9];
    selectiveFields(hideFields);
      //(function(){setInterval(validateFields1,500)
              //   })();
             generateButton();
      break;
    case "Email Subject Line":
    hideFields=[2,4,9];
    selectiveFields(hideFields);
  // (function(){setInterval(validateFields3,500)
               //  })();
             generateButton();
      break;
    case "Email Content":
    hideFields=[9];
    selectiveFields(hideFields);
     //(function(){setInterval(validateFields5,500)
                 //})();
             generateButton();
      break;
    case "SMS Message":
    hideFields=[2,4,9];
    selectiveFields(hideFields);
   //(function(){setInterval(validateFields3,500)
                 //})();
             generateButton();
      break;
    case "Whatsapp Message":
     hideFields=[2,4,9];
    selectiveFields(hideFields);
  // (function(){setInterval(validateFields3,500)
                // })();
             generateButton();
      break;
    case "Browser Notification":
     hideFields=[2,4,9];
    selectiveFields(hideFields);
  // (function(){setInterval(validateFields3,500)
                // })();
             generateButton();
      break;
    case "App Notification":
    hideFields=[2,4,9];
    selectiveFields(hideFields);
   //(function(){setInterval(validateFields3,500)
                 //})();
             generateButton();
      break;
    case "Ad Caption":
     hideFields=[2,4];
    selectiveFields(hideFields);
   //(function(){setInterval(validateFields7,500)
                // })();
             generateButton();
      break;
    case "Ad Copy":
     hideFields=[2,4];
    selectiveFields(hideFields);
  // (function(){setInterval(validateFields7,500)
                // })();
             generateButton();
      break;
    case "Social Media Page Description":
     hideFields=[2];
    selectiveFields(hideFields);
  // (function(){setInterval(validateFields6,500)
                // })();
             generateButton();
      break;
    case "Article":
     hideFields=[2,4,9];
    selectiveFields(hideFields);
   //(function(){setInterval(validateFields3,500)
                // })();
             generateButton();
      break;
    default:
    console.log("Default");
    }
    })
    })
     function closeTheOpenedDropDown(dropDown){
     const dropDownNode = document.evaluate(`//div[@id='${dropDown}-dd']/div/nav`,
        document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
       dropDownNode.setAttribute('class', dropDownNode.getAttribute('class').replace(' w--open',''));
      }
      // generate button 
    function generateButton(){
    let generateBtn = document.querySelector("#generate-btn");
    let emailForm = document.querySelector("#email-collection-form");
    let wrapperEmailForm = document.querySelector(".wrapper-email-form");
    let generatedResult = document.querySelector(".result-ai");
    let resultAiContainer = document.querySelector(".copy-result-container");
    // generate button email form
    generateBtn.addEventListener("click",showForm);
    //generate AI result
    function showForm(){
    let cookieData=document.cookie.split(";");
    if(cookieData.indexOf(" email=true") != -1){
    generatePrompt();
    }
    else{
    wrapperEmailForm.style.display="block";
    emailForm.addEventListener("submit",function(){
    document.cookie="email=true";
    wrapperEmailForm.style.display="none";
    generatePrompt();
    })
    }
    }
    }
    // 
// generate prompt
function generatePrompt(){
let resultText = document.querySelector(".result-text");
let promptText = resultText.innerText;
console.log(promptText);
let urlRequest = "https://fms-dev.getmoda.io/completions/create";
fetch(urlRequest,{
method:"POST",
headers:{
"Content-Type": "application/json",   
    "Access-Control-Allow-Origin":"*",
},
body:JSON.stringify({
 "model": "text-davinci-003",
  "prompt":promptText ,
  "max_tokens": 750,
  "temperature": 0,
  "n":1
})
}).then(response=>response.json()).then((data)=>{
console.log(data);
if(data.success == true){
let aiResult=data.data.choices[0].text;
let str = aiResult.replace(/\n/g, '');
generatedResult.innerText= aiResult.replace(/\n/g, '');
resultAiContainer.style.display="block";
}
  else{
  errorMessage.style.display="block";
  }
});
}
// copy to clipboard
    
    ///reset form fields
    
function resetTextFieldByID(id) {
    document.getElementById(id).value = '';
}
    function resetDropDown(className, path) {
    document.querySelectorAll(className).forEach(industry => {
        if(industry.value === 'Select'){
            industry.checked=true;
            const selectedTextField = document.evaluate(path,
                document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
           // selectedTextField.removeAttribute('style');
        } else if(industry.checked){
            industry.checked = false;
        }
    });
}
function resetDropDowns() {
    resetDropDown('.industry-select', `//div[@id='industry-dd']/div/div/div[@class='selected-text']`);
    resetDropDown('.framework-select', `//div[@id='framework-dd']/div/div/div[@class='framework-select-text']`);
    resetDropDown('.positioning-select', `//div[@id='positioning-dd']/div/div/div[@class='positioning-select-text']`);
    resetDropDown('.holiday-select', `//div[@id='holiday-dd']/div/div/div[@class='holiday-select-text']`);
    resetDropDown('.offer-select', `//div[@id='offer-dd']/div/div/div[@class='offer-select-text']`);
    resetDropDown('.channel-select', `//div[@id='channel-dd']/div/div/div[@class='channel-selected-text']`);
}
function resetTextFieldByClassName(className){
    document.querySelector(className).innerHTML = '';
}

 

function resetTextFields() {
    resetTextFieldByID('brand-name');
    resetTextFieldByID('your-product');
    resetTextFieldByID('your-ideal-customer');
    resetTextFieldByID('your-competitor');
}
 
function switchingContentType(){
    resetTextFields();
    resetDropDowns();
    resetTextFieldByClassName('.result-text');
}

function resetFullForm() {
    switchingContentType();
}
  let copyBtnResult = document.querySelector(".btn-getcopy");
  copyBtnResult.addEventListener("click",clipboardCopy);
    let copyBtnResult2 = document.querySelector(".getcopy-2");
  copyBtnResult2.addEventListener("click",clipboardCopy2);
  // copy clipboard
  function clipboardCopy(){
    copyBtnResult.innerText="Copied";
 // let promptResultData = document.querySelector(".result-text");
  let copyWrapperText = document.querySelector(".result-text").innerText;
setTimeout(function(){copyBtnResult.style.backgroundColor="#0000";copyBtnResult.innerText="Copy";},1000)
navigator.clipboard.writeText(copyWrapperText); 
  }
      // copy clipboard
  function clipboardCopy2(){
    copyBtnResult2.innerText="Copied";
  //let promptResultData = document.querySelector(".result-text");
  let copyWrapperText = document.querySelector(".result-ai").innerText;
setTimeout(function(){copyBtnResult2.style.backgroundColor="#0000";copyBtnResult2.innerText="Copy";},1000)
navigator.clipboard.writeText(copyWrapperText); 
  }
setInterval(fieldInput,500);
});
   
