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
    let arrayFields = [fieldBrand,fieldProduct,fieldIC,fieldComp,industryDropdown,frameworkDropdown,positioningDropdown,holidayDropdown,offerDropdown,channelDropdown]
    //console.log(arrayFields);
    let hideFields=[];
    let promptBase="";
    let currentIndustry="";
    let currentBrand="";
    let currentProduct="";
    let currentIC=[];
    let currentComp=[];
    let currentPositioning=[];
    let currentOffer=[];
    let currentHoliday=[];
    let currentChannel=[];
    let currentFramework=[];
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
    let competitorValue= document.querySelector("input#your-competitor").value;
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
    // values of dropdown option when checked
    // industry dd
    let industrySelected = [...industryNames].filter(e => e.checked);
    let [industryName] = industrySelected;
    selectedText.innerText = industryName.value;
      currentIndustry=industryName.value;
    // framework dd
    let frameworkValueSelect = [...frameworkNames].filter(e => e.checked);
    let [frameworkSelected] = frameworkValueSelect;
    frameworkText.innerText = frameworkSelected.value;
    // positioning dd
    let positioningSelected = [...positioningNames].filter(e => e.checked);
    let [positioningName] = positioningSelected;
    positioningText.innerText=positioningName.value;
    // holiday dd
    let holidaySelect = [...holidayNames].filter(e => e.checked);
    let [holidaySelected] = holidaySelect;
    holidayText.innerText=holidaySelected.value;
    // offer dd
    let offerSelect = [...offerNames].filter(e => e.checked);
    let [offerSelected] = offerSelect;
    offerText.innerText=offerSelected.value;
    // channel dd
    let channelSelect = [...channelNames].filter(e => e.checked);
    let [channelSelected] = channelSelect;
    channelText.innerText=channelSelected.value;
 
    contentTabs.forEach((tab)=>{
    tab.addEventListener("click",()=>{
    //result text
    let resultText = document.querySelector(".result-text");
    let currentTab = tab.innerText;
    switch(currentTab){
    case "Homepage Headline":
     hideFields=[2,5,9];
     selectiveFields(hideFields);   
     promptBase="Behave like an ecommerce expert and create a homepage headline for a"+ currentIndustry+"product called " + currentProduct +" from the brand "+ currentProduct +".";
     resultText.innerText=promptBase;
    break;
    case "Homepage Content":
     hideFields=[1,2,9];
    selectiveFields(hideFields);
    fieldInput();
     promptBase="Act like an ecommerce content writer and create homepage content for a [industry] product by the brand [brand]";
     resultText.innerText=promptBase;
      
    break;
    case "About us Content":
     hideFields=[1,2,4,6,9,5];
    selectiveFields(hideFields);
    //fieldInput();
     promptBase="Think like a PR professional creating content for a website. Write content for the about us section of a [Industry] brand called [brand].";
     resultText.innerText=promptBase;
    break;
    case "Collection Title":
    hideFields=[2,4,9];
    selectiveFields(hideFields);
    //fieldInput();
    promptBase="Act as an ecommerce merchandising expert and create a product collection title for [product] from [brand]."
     resultText.innerText=promptBase; 
    break;
    case "Collection Description":
    hideFields=[2,9,4];
    selectiveFields(hideFields);
    //fieldInput();
    promptBase="Act as an ecommerce merchandising expert and create a product collection description for the [product] from the brand [brand]";
     resultText.innerText=promptBase;
      break;
    case "FAQ":
     hideFields=[2,3,4,5,7,8,9];
    selectiveFields(hideFields);
    //fieldInput();
    promptBase="Behave like an ecommerce retail product specialist and create a list of FAQs with answers for the product '[product]' by the brand [brand].";
    resultText.innerText=promptBase;
    break;
    case "Product titles":
     hideFields=[2,9];
    selectiveFields(hideFields);
   // fieldInput();
    promptBase="Behave like an ecommerce merchandising specialist and draft a product title for [product] from [brand], a [industry] brand.";
    resultText.innerText=promptBase;
    break;
    case "Product Descriptions":
     hideFields=[4,9];
    selectiveFields(hideFields);
    //fieldInput();
    promptBase="Think like an ecommerce merchandising specialist and write a product description to list [product] on an ecommerce store {brand] for a customer who is a [ICP]";
    resultText.innerText=promptBase;
      break;
    case "Page Meta Title":
    hideFields=[2,1,9];
    selectiveFields(hideFields);
    //fieldInput();
    promptBase="Think like an ecommerce SEO expert and generate a page meta title for the brand '[brand]' from the [industry] industry";
    resultText.innerText=promptBase;
      break;
    case "Page Meta Description":
    hideFields=[2,1,9];
    selectiveFields(hideFields);
    //fieldInput();
    promptBase="Think like an ecommerce SEO expert and generate a page meta description for the brand '[brand]' from the [industry] industry";
    resultText.innerText=promptBase;
      break;
    case "Product Page Meta Title":
    hideFields=[2,9];
    selectiveFields(hideFields);
    //fieldInput();
    promptBase="Think like an ecommerce SEO expert and generate a page meta title for [product] from the brand '[brand]' from the [industry] industry";
    resultText.innerText=promptBase;
      break;
    case "Product Page Meta Description":
    hideFields=[2,9];
    selectiveFields(hideFields);
    //fieldInput();
    promptBase="Think like an ecommerce SEO expert and generate a page meta description for [product] from brand '[brand]' from the [industry] industry";
    resultText.innerText=promptBase;
      break;
    case "Email Subject Line":
    hideFields=[2,4,9];
    selectiveFields(hideFields);
    //fieldInput();
    promptBase="Act like an email marketing specialist and draft an email subject line for [product] by the brand [brand] using a maximum of 50 characters.";
    resultText.innerText=promptBase;
      break;
    case "Email Content":
    hideFields=[9];
    selectiveFields(hideFields);
    //fieldInput();
    promptBase="Act like an email marketing expert for ecommerce and draft an email campaign for the product '[product]' from the brand '[brand]', belonging to the [industry] industry. The campaign is intended for a [ICP].";
    resultText.innerText=promptBase;
      break;
    case "SMS message":
    hideFields=[2,4,9];
    selectiveFields(hideFields);
    //fieldInput();
    promptBase="Think like an ecommerce marketing expert and create an SMS campaign for the product '[product]' from the brand '[brand]'";
    resultText.innerText=promptBase;
      break;
    case "Whatsapp Message":
     hideFields=[2,4,9];
    selectiveFields(hideFields);
    //fieldInput();
    promptBase="Behave like an ecommerce marketing expert for Whatsapp and create a campaign for the product '[product]' from the brand '[brand]'";
    resultText.innerText=promptBase;
      break;
    case "Browser Notification":
     hideFields=[2,4,9];
    selectiveFields(hideFields);
    //fieldInput();
    promptBase="Think like an ecommerce website expert and generate a browser notification for the product '[product]' for the store '[brand]'";
    resultText.innerText=promptBase;
      break;
    case "App Notification":
    hideFields=[2,4,9];
    selectiveFields(hideFields);
    //fieldInput();
    promptBase="Think like an ecommerce product expert and generate an app notification for the product '[product]' for the app '[brand]'";
    resultText.innerText=promptBase;
      break;
    case "Ad caption":
     hideFields=[2,4];
    selectiveFields(hideFields);
    //fieldInput();
    promptBase="Think like an ecommerce digital advertiser and create an ad caption for the product [product] from the brand '[brand]. Optimize the caption for [channel] ads and relevant character limits.";
    resultText.innerText=promptBase;
      break;
    case "Ad copy":
     hideFields=[2,4];
    selectiveFields(hideFields);
    //fieldInput();
    promptBase="Think like an ecommerce digital advertising copywriter and create ad copy for the product [product] from the brand '[brand]'. Optimize the copy for [channel] ads.";
    resultText.innerText=promptBase;
      break;
    case "Social media page description":
     hideFields=[2];
    selectiveFields(hideFields);
    //fieldInput();
    promptBase="Think like an ecommerce social media specialist and write a 90 character [channel] page description for a [industry] brand named [brand] which sells [product]";
    resultText.innerText=promptBase;
      break;
    case "Article":
     hideFields=[2,9];
    selectiveFields(hideFields);
    promptBase="Act as an ecommerce content writer and write an article on the product '[product]' from the brand '[brand]'";
    resultText.innerText=promptBase;
      //fieldInput();
      break;
    default:
    console.log("Default");
    }
    })
    })
    }
    setInterval(fieldInput,500);
    });
    
