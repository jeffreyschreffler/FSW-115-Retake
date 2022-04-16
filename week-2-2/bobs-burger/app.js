const bobs = [
    {
      id: 32,
      name: "Beatrice",
      image: "https://bobsburgers-api.herokuapp.com/images/characters/32.jpg",
      gender: "Female",
      hairColor: "Red",
      occupation: "Receptionist at Spratt's Sweets factory",
      firstEpisode: "Like Gene for Chocolate",
      voicedBy: "Melissa Bardin Galsky",
      url: "https://bobsburgers-api.herokuapp.com/characters/32"
    },
    {
      id: 55,
      name: "Burt Dellalucci",
      image: "https://bobsburgers-api.herokuapp.com/images/characters/55.jpg",
      gender: "Male",
      hairColor: "Red",
      occupation: "Co-announcer at Wonder Wharf Baseball Park",
      firstEpisode: "Lobsterfest",
      voicedBy: "Tim Heidecker",
      url: "https://bobsburgers-api.herokuapp.com/characters/55"
    },
    {
      id: 60,
      name: "Candace",
      image: "https://bobsburgers-api.herokuapp.com/images/characters/60.jpg",
      gender: "Female",
      hairColor: "Red",
      occupation: "Babysitter/College Student",
      firstEpisode: "Wag the Hog",
      voicedBy: "Melissa Bardin Galsky",
      url: "https://bobsburgers-api.herokuapp.com/characters/60"
    },
    {
      id: 104,
      name: "Daniel Cunningham",
      image: "https://bobsburgers-api.herokuapp.com/images/characters/104.jpg",
      gender: "Male",
      hairColor: "Red",
      occupation: "Deputy Mayor of Seymour's Bay",
      firstEpisode: "I Bob Your Pardon",
      voicedBy: "Paul F. Tompkins",
      url: "https://bobsburgers-api.herokuapp.com/characters/104"
    },
    {
      id: 129,
      name: "Doris",
      image: "https://bobsburgers-api.herokuapp.com/images/characters/129.jpg",
      gender: "Female",
      hairColor: "Red",
      occupation: "Riding Instructor at Horsing Around Riding Center",
      firstEpisode: "The Horse Rider-er",
      voicedBy: "Brooke Dillman",
      url: "https://bobsburgers-api.herokuapp.com/characters/129"
    },
    {
      id: 154,
      name: "Fanny",
      image: "https://bobsburgers-api.herokuapp.com/images/characters/154.jpg",
      gender: "Female",
      age: "29",
      hairColor: "Red",
      occupation: "Singer",
      firstEpisode: "Wharf Horse",
      voicedBy: "Jordan Peele",
      url: "https://bobsburgers-api.herokuapp.com/characters/154"
    },
    {
      id: 170,
      name: "Gertie Humikowski",
      image: "https://bobsburgers-api.herokuapp.com/images/characters/170.jpg",
      gender: "Female",
      hairColor: "Red",
      occupation: "Student",
      firstEpisode: "Just One of the Boyz 4 Now for Now",
      voicedBy: "H. Jon Benjamin",
      url: "https://bobsburgers-api.herokuapp.com/characters/170"
    },
    {
      id: 173,
      name: "Ginger",
      image: "https://bobsburgers-api.herokuapp.com/images/characters/173.jpg",
      gender: "Female",
      age: "40s",
      hairColor: "Red",
      relatives: [
        "https://bobsburgers-api.herokuapp.com/characters/77",
        "Unnamed daughter",
        "Tony"
      ],
      firstEpisode: "Sliding Bobs",
      url: "https://bobsburgers-api.herokuapp.com/characters/173"
    },
    {
      id: 175,
      name: "Girl #3",
      image: "https://bobsburgers-api.herokuapp.com/images/characters/175.jpg",
      gender: "Female",
      hairColor: "Red",
      occupation: "Student at Wagstaff School",
      firstEpisode: "Topsy",
      voicedBy: "Laura Silverman",
      url: "https://bobsburgers-api.herokuapp.com/characters/175"
    },
    {
      id: 221,
      name: "Jeremy",
      image: "https://bobsburgers-api.herokuapp.com/images/characters/221.jpg",
      gender: "Male",
      hairColor: "Red",
      occupation: "Student at Wagstaff School",
      firstEpisode: "Topsy",
      voicedBy: "H. Jon Benjamin",
      url: "https://bobsburgers-api.herokuapp.com/characters/221"
    },
    {
      id: 263,
      name: "Kyle",
      image: "https://bobsburgers-api.herokuapp.com/images/characters/263.jpg",
      gender: "Male",
      hairColor: "Red",
      occupation: "Employee at Chef Marks the Spot",
      firstEpisode: "Mo Mommy Mo Problems",
      voicedBy: "David Herman",
      url: "https://bobsburgers-api.herokuapp.com/characters/263"
    },
    {
      id: 281,
      name: "Mandy",
      image: "https://bobsburgers-api.herokuapp.com/images/characters/281.jpg",
      gender: "Female",
      hairColor: "Red",
      occupation: "Student at Huxley High School",
      relatives: [
        "https://bobsburgers-api.herokuapp.com/characters/404",
        "Sylvester Stieblitz"
      ],
      firstEpisode: "Better Off Sled",
      voicedBy: "Jillian Bell",
      url: "https://bobsburgers-api.herokuapp.com/characters/281"
    },
    {
      id: 294,
      name: "Marta",
      image: "https://bobsburgers-api.herokuapp.com/images/characters/294.jpg",
      gender: "Female",
      hairColor: "Red",
      occupation: "Employee at Fresh Feed",
      firstEpisode: "Lindapendent Woman",
      url: "https://bobsburgers-api.herokuapp.com/characters/294"
    },
    {
      id: 329,
      name: "Mr. Grant",
      image: "https://bobsburgers-api.herokuapp.com/images/characters/329.jpg",
      gender: "Male",
      hairColor: "Red",
      occupation: "Spanish teacher/A/V advisor at Wagstaff School",
      firstEpisode: "Broadcast Wagstaff School News",
      voicedBy: "Will Forte",
      url: "https://bobsburgers-api.herokuapp.com/characters/329"
    },
    {
      id: 380,
      name: "Patsy",
      image: "https://bobsburgers-api.herokuapp.com/images/characters/380.jpg",
      gender: "Female",
      hairColor: "Red",
      occupation: "Bassist in The Ta Tas",
      firstEpisode: "Purple Rain-Union",
      url: "https://bobsburgers-api.herokuapp.com/characters/380"
    },
    {
      id: 386,
      name: "Peter Pescadero",
      image: "https://bobsburgers-api.herokuapp.com/images/characters/386.jpg",
      gender: "Male",
      age: "11",
      hairColor: "Red",
      occupation: "Student at Wagstaff School",
      firstEpisode: "Spaghetti Western and Meatballs",
      voicedBy: "H. Jon Benjamin",
      url: "https://bobsburgers-api.herokuapp.com/characters/386"
    },
    {
      id: 394,
      name: "Pud",
      image: "https://bobsburgers-api.herokuapp.com/images/characters/394.jpg",
      gender: "Male",
      hairColor: "Red",
      occupation: "College student",
      firstEpisode: "My Big Fat Greek Bob",
      voicedBy: "Dana Snyder",
      url: "https://bobsburgers-api.herokuapp.com/characters/394"
    },
    {
      id: 405,
      name: "Rena",
      image: "https://bobsburgers-api.herokuapp.com/images/characters/405.jpg",
      gender: "Female",
      hairColor: "Red",
      relatives: [
        "Unnamed younger sister"
      ],
      firstEpisode: "Tina Tailor Soldier Spy",
      voicedBy: "Sarah Baker",
      url: "https://bobsburgers-api.herokuapp.com/characters/405"
    },
    {
      id: 472,
      name: "Timmy and Scott O'Brien",
      image: "https://bobsburgers-api.herokuapp.com/images/characters/472.jpg",
      gender: "Male",
      hairColor: "Red",
      occupation: "Wagstaff School Students",
      firstEpisode: "Thelma & Louise Except Thelma is Linda",
      voicedBy: "Timmy (Larry Murphy), Scott (H. Jon Benjamin)",
      url: "https://bobsburgers-api.herokuapp.com/characters/472"
    }
  ];

  bobs.forEach(function (elm){
    let displayArea = document.querySelector('#ul-list');
    let newItem = document.createElement('li');
    displayArea.append(newItem);
    newItem.textContent = elm.name
    newItem.classList.add("list-style")
  })
  
  
