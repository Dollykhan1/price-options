const loadPhone = async (searchText,isShowAll) =>{
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=${searchText}');
    const data = await res.json();
    const phones = data.data;
     //console.log(phones); 
    displayphones(phones,isShowAll);
 }


const displayphones = (phones,isShowAll) =>{
    //console.log(phones)

    const phonContainer = document.getElementById('phone-container');
    //clear phone container cards before adding new cards
    phonContainer.textContent = '';

    //display show all button if there are more then 12 phones
    const showAllContainer =document.getElementById('show-all-container') 
    if(phones.length >12 && !isShowAll){
        showAllContainer.classList.remove('hidden')
    }
    else{
        showAllContainer.classList.add('hidden')
    }
    console.log('is show all',isShowAll)

    //displayphones only 12 phones
    phones = phones.slice(0,12);

    phones.forEach(phone =>{
       // console.log(phone);
        // 2: crate a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 shadow-xl`;
        // 3: set inner html
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-center">
            <button class="btn btn-primary">Show Details</button>
           </div>
        </div>
      </div>
        `;
        // 4: append child
    phonContainer.appendChild(phoneCard);
    });
    // hide loding spinner
    toggleLoadingSpinner(fales);

    }

// handel serch button
const handleSearch = (isShowAll)=>{
    toggleLoadingSpinner(true);
   const serchField = document.getElementById('search-field');
   const searchText = serchField.value;
   console.log(searchText);
   loadPhone(searchText,isShowAll);
}
//handel search recap
// const handleSearch2 =() =>{
//     toggleLoadingSpinner();
//     const searchFild = document.getElementById('search-field2')
//     const searchText =searchFild.value;
//     loadPhone(searchText);
// }
const toggleLoadingSpinner = (isLoding)=>{
    const toggleLoadingSpinner = document.getElementById('loading-spinner');
    if(isLoding){
        loadingSpinner.classList.remove('hidden')
    }
    else{
        loadingSpinner.classList.add('hidden');
    }
}
//handile show showAll
const handelshowAll = ()=>{
    handleSearch(true);
}

//loadPhone();

