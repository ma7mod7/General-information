let xhr=new XMLHttpRequest();
let main=document.querySelector("#data");

xhr.onload=function(){
    if(xhr.status==200){
        let dat=JSON.parse(xhr.responseText);
        console.log(dat)

        dat.map(function(ele,index){

        main.innerHTML+=
        `
         
            <div class=" data__re ${index}">
                <img src="${ele.icon}" alt="">
                <p class=" word " > ${ele.category}</p>
                <p>${ele.score}<span class="greynum">/100</span></p>
            </div>

    
        `
      })
       
      let divs = document.querySelectorAll('.data__re');
      divs.forEach((div, index) => {
        if (index === 0) {
            div.style.cssText = `
               background-color:hsla(0, 48%, 91%, 0.666) ;
               height: 50px;
               margin: 8px  25px;
               border-radius: 10px;
          `
          const pCategory = div.querySelector('.word');
          pCategory.style.cssText = `
            color: hsl(0, 100%, 67%);
            margin-right:90px;
            margin-left:-2px;
            
          `;

        } else if (index === 1) {
            
            div.style.cssText = `
            background-color:hsla(37, 65%, 88%, 0.769);
            height: 50px;
            margin:8px  25px;
            border-radius: 10px;
       `   
          const pCategory = div.querySelector('.word');
          pCategory.style.cssText = `
          color:  hsl(39, 100%, 56%);
          margin-right:94px;
         
       ` 
     } else if (index === 2) {
        div.style.cssText = `
              background-color:hsla(166, 100%, 37%, 0.106);
              height: 50px;
              margin:8px  25px;
              border-radius: 10px;

            ` 
            let pCategory=div.querySelector('.word');
            pCategory.style.cssText=
            `
            color:hsl(166, 100%, 37%);
             margin-right: 106px;

            `
        } 

        else if (index === 3) {
          div.style.cssText=
          `
             background-color: hsla(234, 92%, 43%, 0.106);
             height: 50px;
             margin: 8px 25px;
             border-radius: 10px;
          `
          let last=div.querySelector('.word');
          last.style.cssText=
          `
           color: hsl(234, 85%, 45%);
           margin-right: 106px;
          `
        }
      });


    }
}

xhr.open("GET",'/results-summary-component-main/data.json',true);
xhr.send()