import { Injectable } from '@angular/core';
// component file will have @component and service file-@injectable
//service file communicates with backend-use
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getState(arg0: number): any {
    throw new Error('Method not implemented.');
  }
  states = [
    {
        id: 1,
        Name: 'Kerala',
        Image: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcR3hEdzjpMxs7IbbD_Y7lOk2qV-q19dEqNCCIWihKsz9jHfHJ6DQtgqlHu7lHGF1Q-KeAL4VGcI4q8py1cNIkaqprQjsKlWVZDtKmhSZw',
        Description: 'Kerala, situated on the southwestern coast of India, is often called “God’s Own Country” for a reason. This lush green state is known for its tranquil backwaters, palm-fringed beaches, and abundant natural beauty.'
    },
    {
        id: 2,
        Name: 'Tamil Nadu',
        Image: 'https://lh5.googleusercontent.com/p/AF1QipPFHu6-rRv77GnsYHo-fUIjcspJXKO9OFuxthD9=w675-h390-n-k-no',
        Description: 'Tamil Nadu is renowned for its ancient temples, classical music, and vibrant culture. Chennai, Mahabalipuram, and Madurai are major attractions.'
    },
    {
        id: 3,
        Name: 'Rajasthan',
        Image: 'https://lh5.googleusercontent.com/p/AF1QipNNCNn4A9ujrP0drFeNWF0ewQJllcIA7CuLUEmT=w675-h390-n-k-no',
        Description: 'Rajasthan, the Land of Kings, is known for its majestic forts, palaces, and the vast Thar Desert. Jaipur, Udaipur, and Jaisalmer are highlights.'
    },
    {
        id: 4,
        Name: 'Uttar Pradesh',
        Image: 'https://lh5.googleusercontent.com/p/AF1QipOwcynxRpNebAQYvogATP7Bg7j0k45R21LWYlCN=w675-h390-n-k-no',
        Description: 'Uttar Pradesh boasts iconic sites like the Taj Mahal, Varanasi, and Lucknow, blending history, spirituality, and culture.'
    },
    {
        id: 5,
        Name: 'Maharashtra',
        Image: 'https://lh5.googleusercontent.com/p/AF1QipMyHvx8SO_K1vn5exHJ45hLRmusux72uRbwxKS3=w675-h390-n-k-no',
        Description: 'Maharashtra combines urban charm in Mumbai with historical wonders like Ajanta and Ellora Caves, along with scenic hill stations.'
    },
    {
        id: 6,
        Name: 'Karnataka',
        Image: 'https://lh5.googleusercontent.com/p/AF1QipNGKmat-CrwL7uariXKGx5Pwu3fQSCvMSiBggHm=w675-h390-n-k-no',
        Description: 'Karnataka features ancient ruins in Hampi, lush greenery in Coorg, and the tech-savvy capital, Bengaluru.'
    },
    {
        id: 7,
        Name: 'Gujarat',
        Image: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSkYgbzaFATNyPKtO-9ivlzS8jSlfMQWrqWOUvj1d9OPefYHurkMlypl5VFf8BqhJQBh110bQh9GDMzKFltgIaNGd9HGvONiUp-1YoBag',
        Description: 'Gujarat is known for Gir National Park, Rann of Kutch, and its vibrant Navratri celebrations.'
    },
    {
        id: 8,
        Name: 'Punjab',
        Image: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQ-jarvRwk0GZK58XbVfRmqgkf-CT8g_xm63MGHbWuW6XpZv-d_unjsmknTonz7NA3bgniUZhxyqTcV8m5mwdbpr94tom7nZBIkOVDwcQ',
        Description: 'Punjab offers delicious cuisine, the Golden Temple in Amritsar, and a lively cultural heritage.'
    },
    {
        id: 9,
        Name: 'West Bengal',
        Image: 'https://lh5.googleusercontent.com/p/AF1QipMHvkB151icA3Pa0YFWpakcpCv_LplFa1gorz6j=w675-h390-n-k-no',
        Description: 'West Bengal is known for Kolkata’s colonial charm, Darjeeling’s tea estates, and the Sundarbans mangroves.'
    },
    {
        id: 10,
        Name: 'Odisha',
        Image: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTSNSJFZOCUNUGpzIweYPEN4IAiAJF_E4U3KrGAQS79NWunrr74u-8dh_G7c2GvKPDgZyBFfyR4b-LSkzyR_82hLs4R0JWXHunXw4k-3w',
        Description: 'Odisha features the Jagannath Temple, Konark Sun Temple, and serene beaches like Puri and Gopalpur.'
    },
    {
        id: 11,
        Name: 'Assam',
        Image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSdvDXioGoGfaIAW7xr4-L7B6nLjZWr7Dj_JMLS4voYz-APqcw8ObMSPo_nJTio-tNHB5tkHx6-nflqlTV13f8U_O0SlG8ZhdH-AyEdwQ',
        Description: 'Assam is home to Kaziranga National Park, Majuli Island, and sprawling tea gardens.'
    },
    {
        id: 12,
        Name: 'Bihar',
        Image: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTfrs-reR4RZDSQi5HsLWYA86nJ61ubYiHyMq0HR2XYps2dd27XxdRTSidGFGPxAJVTfDMWMPlgEWfFvOt1JqFEzeAkdRgc0lo_msl7xg',
        Description: 'Bihar boasts rich history with sites like Bodh Gaya, Nalanda, and ancient ruins in Vaishali.'
    },
    {
        id: 13,
        Name: 'Madhya Pradesh',
        Image: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSbmH_Psd_X_5m3whNZAx0CqEmacTWxDvslAdLenqmGo3y5ywouaXgtJvUlwy3LQV4L5L0EKJsJcxSFSi37qsAc6QgbCMIAYL_V2DTq_Q',
        Description: 'Madhya Pradesh offers Khajuraho’s intricate temples, Bandhavgarh National Park, and Sanchi Stupa.'
    },
    {
        id: 14,
        Name: 'Himachal Pradesh',
        Image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTWNR93D2R5V3ksOgAaU1qdfSKB2W5ZnFGDuhtQqoT5JbMoAJIP55KiUPYCQccdRKGsPDwxccLgwDLCcFJc4ftRMycOZ9kCt2xVBwQ3RA',
        Description: 'Himachal Pradesh is a paradise with destinations like Manali, Shimla, and Dalhousie offering natural beauty and adventure.'
    },
    {
        id: 15,
        Name: 'Arunachal Pradesh',
        Image: 'https://lh5.googleusercontent.com/p/AF1QipMDzwTkq9YgDXl7V2bYPjF2Ry5jqTz5bDdoHlDA=w675-h390-n-k-no',
        Description: 'Arunachal Pradesh is known for its untouched landscapes, monasteries, and Tawang.'
    },
    {
        id: 16,
        Name: 'Sikkim',
        Image: 'https://lh5.googleusercontent.com/p/AF1QipMM4IcPLd_zu9AsmtwAeRvd-PDBRcb0hYDOo9Q6=w675-h390-n-k-no',
        Description: 'Sikkim offers scenic beauty, monasteries, and attractions like Gangtok and Tsomgo Lake.'
    },
    {
        id: 17,
        Name: 'Goa',
        Image: 'https://lh5.googleusercontent.com/p/AF1QipM2zARk2pKNRxnuPFHtGhRux8luz1CQSZsNJwAa=w675-h390-n-k-no',
        Description: 'Goa is a coastal paradise known for its beaches, nightlife, and Portuguese heritage.'
    },
    {
        id: 18,
        Name: 'Telangana',
        Image: 'https://lh5.googleusercontent.com/p/AF1QipNq7bKZgYwwPuQf0Mp-LV5nHOtIU3IN5sv65J4r=w675-h390-n-k-no',
        Description: 'Telangana blends heritage sites like the Charminar with modern attractions like Ramoji Film City.'
    },
    {
        id: 19,
        Name: 'Andhra Pradesh',
        Image: 'https://lh5.googleusercontent.com/p/AF1QipOSapB92Pzyo7zTV6kYWRjABLZRskGoisJqiahp=w675-h390-n-k-no',
        Description: 'Andhra Pradesh is famous for Tirupati, Araku Valley, and its long coastline.'
    },
    {
        id: 20,
        Name: 'Jharkhand',
        Image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRg4-JqRIBPlgXiFoLasZXPigL-Zhl4icXBBYkeVxQ-tymKshqLUHW2lVqI-T5Vo_jsqbLYhc-8jmQa2ygr_EswsKJV1nbFW13tWvY_ZmU',
        Description: 'Jharkhand is known for its waterfalls, wildlife sanctuaries, and temples like Baidyanath Dham.'
    },
    {
        id: 21,
        Name: 'Chhattisgarh',
        Image: 'https://lh5.googleusercontent.com/p/AF1QipNb0uwXvAnPrjL-cUtu_7vThHf0zVSVQhkccHHj=w675-h390-n-k-no',
        Description: 'Chhattisgarh features tribal heritage, lush forests, and waterfalls like Chitrakote.'
    },
    {
        id: 22,
        Name: 'Uttarakhand',
        Image: 'https://lh3.googleusercontent.com/proxy/acr1id4-G26cVI75veShlbAHWtGhbNDxQLCfqhE71r8AVpmD2eLA972zSTAbY7vPho_STS7ceNglmQBPa62nEbeli25exG1jaArlc-cLBwPqhdoRqFuPBBiB4IaUBqx4e5RQSOsrY0rcNs1ZCegYiVPRYDjaBjM=w675-h390-n-k-no',
        Description: 'Uttarakhand is the Land of Gods with destinations like Rishikesh, Haridwar, and Nainital.'
    },
    {
        id: 23,
        Name: 'Meghalaya',
        Image: 'https://lh5.googleusercontent.com/p/AF1QipN1sTBR5wfoZUvhVPVIRt2U5YCBo5LEoumMuKyX=w675-h390-n-k-no',
        Description: 'Meghalaya is home to the wettest places on Earth, stunning caves, and the Living Root Bridges.'
    },
    {
        id: 24,
        Name: 'Manipur',
        Image: 'https://lh5.googleusercontent.com/p/AF1QipObGOIWLgEjFkqenwQjSYxbWYWFfvCBFJYkSpTK=w675-h390-n-k-no',
        Description: 'Manipur is known for Loktak Lake, the only floating lake in the world, and its vibrant culture.'
    },
    {
        id: 25,
        Name: 'Nagaland',
        Image: 'https://lh5.googleusercontent.com/p/AF1QipOejFhHgR9b1_XjdBZEVXoHdjL3HNrkZ6Rmuyoc=w675-h390-n-k-no',
        Description: 'Nagaland boasts colorful festivals like Hornbill and scenic landscapes.'
    },
    {
        id: 26,
        Name: 'Tripura',
        Image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS3jCY7dA8ifaTlgzF3puK_cCtmQx-dGa7oywz9yihGoA2qIgFl3neHicXk6ode4aSHGy1Q9-sTbW9FJ0DHxkk87hdmQ0_zzHR9_JUL4Q',
        Description: 'Tripura features Neermahal, Ujjayanta Palace, and its tribal heritage.'
    },
    {
        id: 27,
        Name: 'Mizoram',
        Image: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRmvj91H3k-Bhh9Oz_PoP5h7EPHfg5vr3BY3asJpb6xNuMQ0nD5bthIJG-7pOX8lKmh-qVacOj5CUxzJ8iwdvuco4Gqm0MAngHoxDprNQ',
        Description: 'Mizoram offers lush greenery, serene lakes, and the Phawngpui Hills.'
    },
    {
        id: 28,
        Name: 'Haryana',
        Image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQNe7l9zmaSnWD1LmeTKgILiFAm7pabmGZoCLkl-qPCsFUSrqd64THvPM7qQQ2XHzjHSbE_aA9gl6znzjZww4JF6-f-wF3l3Pcls-orsrU',
        Description: 'Haryana, in northern India, is known for its agriculture and industrial hubs like Gurgaon.'
    }

  ]

  constructor() { }
  getStates(){
    return this.states;
  }
  getStateByID(id:any){
    return this.states.find(state => state.id === id);  }
}
