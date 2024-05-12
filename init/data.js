const sampleListings = [
    {
      title: "Sandy Cove Beach Villa",
      description: "Embark on an extraordinary journey of luxury and comfort in our palatial beach villas.",
      image: {
        url : "https://images.unsplash.com/photo-1590523278191-995cbcda646b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2hlc3xlbnwwfHwwfHx8MA%3D%3D",
        filename : "listingimage",
      },
      price: 1900.99,
      location: "New York" ,
      country: "USA "
    },
    {
      title: "Golden Sands Villa",
      description: "Step into a realm of unparalleled grandeur and relaxation in our sprawling beachfront villas.",
      image: {
        url : "https://images.unsplash.com/photo-1590602391458-7aaa83454938?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2hlcyUyMHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
        filename : "listingimage",
      },
      price: 1029.99,
      location: "Toronto",
      country: "Canada"
    },
    {
      title: "Blue Lagoon Villa",
      description: "Experience the pinnacle of magnificence and serenity in our vast and lavish beach villas.",
      image: {
        url: "https://images.unsplash.com/photo-1628870571248-4f5db428986c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYWNoZXMlMjB2aWxsYXN8ZW58MHx8MHx8fDA%3D",
        filename : "listingimage",
      },
      price: 1039.99,
      location: "London",
      country: "UK"
    },
    {
      title: "Sunset View Beach Resort",
      description: "urrender to the allure of unparalleled splendor and tranquility in our expansive beach villas.",
      image : {
        url: "https://images.unsplash.com/photo-1685287924308-3ce5a5777ad2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNoZXMlMjB2aWxsYXN8ZW58MHx8MHx8fDA%3D",
        filename : "listingimage",
      },
      price: 4329.99,
      location: "Sydney",
      country: "Australia"
    },
    {
      title: "Palm Paradise Villa",
      description: "Indulge in the ultimate sanctuary of opulence and breathtaking views in our immense beach villas.",
      image : {
        url: "https://images.unsplash.com/photo-1590580672645-68ade56b8a21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoZXMlMjB2aWxsYXN8ZW58MHx8MHx8fDA%3D",
        filename : "listingimage",
      },
      price: 5329.99,
      location: "Berlin",
      country: "Germany"
    },
    {
      title: "Oceanfront Villa",
      description: "Escape to an oasis of luxury and refinement nestled along the pristine shoreline in our expansive beach villas.",
      image : {
        url: "https://images.unsplash.com/photo-1628870970123-68cfb9889a74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYWNoZXMlMjB2aWxsYXN8ZW58MHx8MHx8fDA%3D",
        filename : "listingimage",
      },
      price: 6549.99,
      location: "Paris",
      country: "France"
    },
    {
      title: "Sapphire Shores Villa",
      description: " Enter a realm of extravagant living and coastal charm in our grandiose beachfront villas.",
      image : {
        url: "https://media.istockphoto.com/id/453094933/photo/sunset-on-maldives-island-water-villas-resort.webp?b=1&s=170667a&w=0&k=20&c=g_K9Ul3b7VLvqjbZMB-qpjWKE17xSNsbS6whDcaN7oU=",
        filename : "listingimage",
      },
      price: 7329.99,
      location: "Tokyo",
      country: "Japan"
    },
    {
      title: "Seaside Sanctuary Villa",
      description: "Delight in the grandiosity and exclusivity of our exquisite beachfront villas, designed for the most discerning guests.",
      image : {
        url: "https://media.istockphoto.com/id/1298306226/photo/young-woman-riding-bicycle-on-wooden-pier-in-the-maldives.webp?b=1&s=170667a&w=0&k=20&c=4pNDXLmavvysxhST9cz8LJa-bIJ0w2ahyzURLQuXn_4=",
        filename : "listingimage",
      },
      price: 4389.99,
      location: "Rio de Janeiro",
      country: "Brazil"
    },
    {
      title: "Tropical Haven Villa",
      description: "Revel in the sheer elegance and sophistication of our majestic beach villas, set against the backdrop of the azure ocean.",
      image : {
        url: "https://images.unsplash.com/photo-1628870776167-b4b684441e10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYWNoZXMlMjB2aWxsYXN8ZW58MHx8MHx8fDA%3D",
        filename : "listingimage",
      },
      price: 5499.99,
      location: "Mumbai",
      country: "India"
    },
    {
      title: "Crystal Cove Beach Resort",
      description: "Immerse yourself in the sheer magnitude and opulence of our beachfront villas, promising an unparalleled coastal experience.",
      image : {
        url: "https://media.istockphoto.com/id/645432324/photo/swimming-pool-with-the-sea.webp?b=1&s=170667a&w=0&k=20&c=fF7sqNEmRrmmBSc_1vRkt1xJtYKxEyGRXND1XIIuU0Y=",
        filename : "listingimage",
      },
      price: 1049.99,
      location: "Rome",
      country: "Italy"
    },
    // Additional data
    {
      title: "Paradise Cove Villa",
      description: "Luxuriate in the expansive elegance of our beach villas.",
      image : {
        url: "https://images.unsplash.com/photo-1496693927883-41bf761f7b89?w=500&auto=format&fit=crop&q=",
        filename : "listingimage",
      },
      price: 1191.99,
      location: "Miami",
      country: "USA"
    },
    {
      title: "Tranquil Beach Villa",
      description: "Experience the grandeur of oceanfront living in our spacious beach villas.",
      image : {
        url: "https://images.unsplash.com/photo-1649898461453-5045c30cb778?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2hlcyUyMHBhbGFtfGVufDB8fDB8fHww",
        filename : "listingimage",
      },
      price: 12439.99,
      location: "Los Angeles",
      country: "USA"
    },
    {
      title: "Coral Cove Villa",
      description: "Revel in the opulent surroundings of our grand beach villas.",
      image : {
        url: "https://images.unsplash.com/photo-1520520731457-9283dd14aa66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlYWNoZXMlMjBwYWxhbXxlbnwwfHwwfHx8MA%3D%3D",
        filename : "listingimage",
      },
      price: 14339.99,
      location: "Miami",
      country: "USA"
    },
    {
      title: "Island Paradise Villa",
      description: "Immerse yourself in the breathtaking splendor of our expansive beach villas.",
      image : {
        url: "https://images.unsplash.com/photo-1695411560235-595738c0dbda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYWNoZXMlMjBwYWxhbXxlbnwwfHwwfHx8MA%3D%3D",
        filename : "listingimage",
      },
      price: 1449.99,
      location: "Miami",
      country: "USA"
    },
    {
      title: "Serenity Beach Resort",
      description: "Indulge in the extravagant amenities and space of our beachfront villas.",
      image : {
        url: "https://plus.unsplash.com/premium_photo-1681922761181-ee59fa91edc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmlsbGFzfGVufDB8fDB8fHww",
        filename : "listingimage",
      },
      price: 1159.99,
      location: "Miami",
      country: "USA"
    },
    {
        title: "Summer Swimming Pool",
        description: "Dive into luxury at our summer swimming pool, where every splash is a moment of relaxation and joy.",
        image : {
          url : "https://media.istockphoto.com/id/162137765/photo/summer-swimming-pool.webp?b=1&s=170667a&w=0&k=20&c=MUrToO2laN6g8bk5pCohoqBan7YVoh0kqBL5j92SS9s=",
          filename : "listingimage",
      },
        price: 19239.99,
        location: "Los Angeles",
        country: "USA"
      },
      {
        title: "Luxury Vacation Experience",
        description: "Indulge in a luxury vacation experience like no other, where every moment is filled with romance and adventure.",
        image : {
          url: "https://media.istockphoto.com/id/1264652417/photo/couple-enjoying-luxury-vacations.webp?b=1&s=170667a&w=0&k=20&c=DoVDckRgiJkQgQ2-xJiYHIEncxwskGGT8yg3u23V5VA=",
          filename : "listingimage",
        },
        price: 29439.99,
        location: "Miami",
        country: "USA"
      },
      {
        title: "Maldives Island Resort",
        description: "Escape to paradise at our Maldives Island Resort, where over-water villas and pristine beaches await your arrival.",
        image : {
          url: "https://media.istockphoto.com/id/1220728896/photo/maldives-island-resort-over-water-villas.webp?b=1&s=170667a&w=0&k=20&c=Epn-rcfXkPF1Ifk0nf6P0UdhjOPzseCdikBldQLrrcw=",
          filename : "listingimage",
        },
        price: 39439.99,
        location: "Maldives",
        country: "Maldives"
      },
      {
        title: "Modern Building Near Pond",
        description: "Immerse yourself in modern luxury at our stunning building near a tranquil pond, where every detail is designed for your comfort and pleasure.",
        image : {
          url: "https://media.istockphoto.com/id/505530020/photo/exterior-of-modern-building-near-pond-at-twilight.webp?b=1&s=170667a&w=0&k=20&c=NCh402bQT_BZG1tscSrFDldWzSCH2DOdZUqTfsI4U_c=",
          filename : "listingimage",
        },
        price: 44399.99,
        location: "Tokyo",
        country: "Japan"
      },
      {
        title: "Luxury Residential District",
        description: "Discover the epitome of luxury living in our exclusive residential district, where elegant villas and palm-lined paths create an oasis of serenity.",
        image : {
          url: "https://media.istockphoto.com/id/1367954158/photo/residential-district-with-luxury-villas-walking-path-and-palm-trees.webp?b=1&s=170667a&w=0&k=20&c=7fnelIUBmNUXI7Di9Txc6CaaKd0rdevqdHlSK-R1h5s=",
          filename : "listingimage",
        },
        price: 59329.99,
        location: "Berlin",
        country: "Germany"
      },
      {
        title: "Floating Breakfast in Overwater Bungalow",
        description: "Start your day in paradise with a floating breakfast in our luxurious overwater bungalow, where every bite is accompanied by stunning ocean views.",
        image : {
          url: "https://media.istockphoto.com/id/1298864624/photo/couple-enjoying-floating-breakfast-in-private-overwater-bungalow.webp?b=1&s=170667a&w=0&k=20&c=1oSd4eWH4xYQgDg1Xe1M7FDhzgi-MPqLQiNcV_-OOVQ=",
          filename : "listingimage",
        },
        price: 69439.99,
        location: "Maldives",
        country: "Maldives"
      },
      {
        title: "Poolside Restaurant",
        description: "Savor delectable cuisine and breathtaking views at our poolside restaurant, where every meal is a celebration of flavor and relaxation.",
        image : {
          url: "https://media.istockphoto.com/id/139944265/photo/the-restaurant-at-swimming-pool-bentota-sri-lanka.webp?b=1&s=170667a&w=0&k=20&c=kVul1Z3ONdtPNK50jw4C0ike7qLqCq0SPEPo2wk-0lA=",
          filename : "listingimage",
        },
        price: 1799.99,
        location: "Sri Lanka",
        country: "Sri Lanka"
      },
      {
        title: "Guest House in Natural Surroundings",
        description: "Escape the hustle and bustle of city life in our tranquil guest house, nestled amidst the natural beauty of a coconut tree plantation.",
        image : {
          url: "https://media.istockphoto.com/id/1295744448/photo/guest-house-in-middle-of-natural-surroundings-of-coconut-tree-plantation-pollachi-tamil-nadu.webp?b=1&s=170667a&w=0&k=20&c=86IrdNp7yFVqlGwlEW41pihA4Em3R_wU955vSXqzVA8=",
          filename : "listingimage",
        },
        price: 89119.99,
        location: "Tamil Nadu",
        country: "India"
      },
      {
        title: "Old Stone House",
        description: "Step back in time and embrace the charm of our historic old stone house, where rustic elegance meets modern comfort.",
        image : {
          url: "https://media.istockphoto.com/id/185275043/photo/old-stone-house.webp?b=1&s=170667a&w=0&k=20&c=Vc0kqh9rnvQ589Vs_Ymm2gtT3Tjg43PyD5fF5KaUenY=",
          filename : "listingimage",
        },
        price: 1999.99,
        location: "Edinburgh",
        country: "Scotland"
      },
      {
        title: "Modern Minimalist Family Villa",
        description: "Experience contemporary luxury at our modern minimalist family villa, where sleek design and spacious comfort come together to create your perfect home away from home.",
        image : {
          url: "https://media.istockphoto.com/id/1254871777/photo/modern-minimalist-family-villa.webp?b=1&s=170667a&w=0&k=20&c=IxPTdXDjk8jRTV44--CB_0J5CH3e0ZVN84CdM8BvGD0=",
          filename : "listingimage",
        },
        price: 11099.99,
        location: "Amsterdam",
        country: "Netherlands"
      }
  ];
  
  
  



module.exports = {data : sampleListings};