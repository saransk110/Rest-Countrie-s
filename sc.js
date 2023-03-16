let cont = document.createElement("div");
cont.setAttribute("class","container")

let row = document.createElement("div");
row.setAttribute("class","row")
cont.append(row);

fetch("https://restcountries.com/v2/all")

.then((response)=> (response.json()))
.then(data=>{
    
    for (let i=0;i<data.length;i++){
        let  cdiv = document.createElement("div")
cdiv.setAttribute("class","card");
        //////////CBODY//////////////////
        let cbody = document.createElement('div')
        cbody.setAttribute("class","card-body");
        ////////////HEAD/////////////
        let head = document.createElement("h5");
        head.setAttribute("class",'card-title');
        head.innerHTML=data[i].name;
        head.style.backgroundColor="black"
        head.style.padding="10px"
        head.style.color="white";
        head.style.textAlign='center'
        ///////IMG/////////////////////
        let image = document.createElement('img')
        image.setAttribute("class","card-img");
        image.setAttribute("src",data[i].flag);
        image.style.height="200px"
        ///////NAME//////////////////
        let name = document.createElement("div");
        name.setAttribute("class",'card-text');
        name.innerHTML=`NAME : ${data[i].name}`
        name.style.textAlign="center";
        name.style.marginTop="10px"
        name.style.fontWeight="700";
        ////////CAPITAL///////////////
        let capital = document.createElement("div");
        capital.setAttribute("class",'card-text');
        capital.innerHTML=`CAPITAL : ${data[i].capital}`
        capital.style.textAlign="center";
        capital.style.fontWeight="700";
        /////////REGION///////////////
        let region = document.createElement("div");
        region.setAttribute("class",'card-text');
        region.innerHTML=`REGION : ${data[i].region}`
        region.style.textAlign="center";
        region.style.fontWeight="700";
        ////////COUNRTYCODE/////////////////
        let countryC = document.createElement("div");
        countryC.setAttribute("class",'card-text');
        countryC.innerHTML=`COUNTRY CODE : ${data[i].alpha3Code}`
        countryC.style.textAlign="center";
        countryC.style.fontWeight="700";
        //////// LAT LNG///////
        let latlng = document.createElement("div");
        latlng.setAttribute("class",'card-text');
        if (undefined != data[i].latlng){
            latlng.innerHTML=`LAT: ${data[i].latlng[0]} LONG :${data[i].latlng[1]}`
            latlng.style.textAlign="center";
            latlng.style.fontWeight="700";
        }else{
            latlng.innerHTML="LAT : NA LONG : NA";
            latlng.style.textAlign="center";
            latlng.style.fontWeight="700";
        }
        ////////weather////////////
        let click = document.createElement("div");
        click.setAttribute("class",'card-text');
        let bt = document.createElement("button");
        bt.setAttribute("class","btn btn-primary");
        bt.innerHTML="Click for Weather"
        bt.style.textAlign="center";


        try {
            if (undefined == data[i].latlng){
                throw new Error("NA")
            }
            let url =`https://api.openweathermap.org/data/2.5/weather?lat=${data[i].latlng[0]}&lon=${data[i].latlng[1]}&appid=23528d5b17bea516d219e9999b4a582a`
            fetch(url)
             .then((datas)=>datas.json()) 
             .then((val)=>{
                
                
                bt.setAttribute("onclick",`alert(${val.main.temp})`);  
             })
            
        } catch (error) {
            console.log(error);
            bt.innerHTML="Not Available";

        }


        click.append(bt)
        cbody.append(head,image,name,capital,region,countryC,latlng,click)
        cdiv.append(cbody)
        row.append(cdiv)
        document.body.append(cont)
        
        
    }
})
