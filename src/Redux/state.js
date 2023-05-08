const state = {
  users: [{ username: "", password: "" }],
  businesses: [
    {
      id: 1,
      name: "Black Sugar Caffe",
      description:
        "A lifestyle caffé, Black Sugar Caffé creates and promotes the concept of community togetherness while offering great food and exceptional services. Although modest in concept, Black Sugar Caffé is nowhere near ordinary. Our ambiance emulates a mix of new-age trendiness and old-school charm, bold yet a touch of zen and elegance.",
      hours: "8:00AM - 7:00PM",
      address: "109 W 7th St Ste 105 Georgetown, TX 78626",
    },
    {
      id: 2,
      name: "The Vacuum Shop",
      description:
        "We repair most major brand vacuum cleaners.  We also offer parts, belts, filters  for major vacuum models. Free shipping of belts and bags with an order of $ 25.00 or more.",
      hours: "10:00AM - 3:00PM",
      address: "1701 S Mays St Ste J Round Rock, TX 78664",
    },
    {
      id: 3,
      name: "Pokeworks",
      description: "Get Poke Your Way™. Our hand-crafted Signature Works and FOMO-worthy bowls and burritos offer unique flavors found only at Pokeworks.",
      hours: "11:00AM - 9:00PM",
      address: "900 N Austin Ave Ste 408 Georgetown, TX 78626",
    },
  ],
}

export default state