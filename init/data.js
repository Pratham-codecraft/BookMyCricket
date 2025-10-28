const sampleListings = [
  {
    title: "Sardar Patel Stadium",
    description:
      "Book a premium international-level ground in Ahmedabad with lush green grass and modern facilities. Ideal for tournaments and corporate matches.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1605851079837-4f3b64fefc5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Ahmedabad",
    country: "India",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [72.585, 23.033],
    },
  },
  {
    title: "Wankhede Cricket Ground",
    description:
      "A scenic seaside stadium in Mumbai — perfect for professional-level matches and events. Night match lighting available.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1598373182308-1b37c1f2df15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Mumbai",
    country: "India",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [72.8777, 19.076],
    },
  },
  {
    title: "Eden Gardens",
    description:
      "Play where legends have played. A large, well-maintained turf ground with seating for spectators and top-quality pitch.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1540747913346-19e32dc3e67a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4800,
    location: "Kolkata",
    country: "India",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [88.3639, 22.5726],
    },
  },
  {
    title: "Chinnaswamy Stadium",
    description:
      "Located in the heart of Bangalore, this ground offers excellent facilities for league and practice matches.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587049352841-7e13d94e043b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4200,
    location: "Bangalore",
    country: "India",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [77.5946, 12.9716],
    },
  },
  {
    title: "Motibaug Cricket Ground",
    description:
      "A serene and open ground in Vadodara suitable for weekend matches, college tournaments, and practice sessions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Vadodara",
    country: "India",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [73.1812, 22.3072],
    },
  },
  {
    title: "DY Patil Sports Academy",
    description:
      "A world-class stadium with top-notch turf and lighting. Great for night matches and cricket events.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Navi Mumbai",
    country: "India",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [73.0197, 19.033],
    },
  },
  {
    title: "Gujarat University Ground",
    description:
      "An ideal budget-friendly ground for college and amateur matches, located centrally in Ahmedabad.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Ahmedabad",
    country: "India",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [72.5714, 23.0225],
    },
  },
  {
    title: "Sawai Mansingh Stadium",
    description:
      "A picturesque stadium in Jaipur with premium amenities. Available for tournaments and practice sessions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1524224745116-5ffb01e1f0a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3700,
    location: "Jaipur",
    country: "India",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [75.7873, 26.9124],
    },
  },
  {
    title: "Chepauk Ground",
    description:
      "A historic cricket venue in Chennai offering a great pitch for both batting and bowling practice.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1623282033815-26e3c2ac169b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3900,
    location: "Chennai",
    country: "India",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [80.2707, 13.0827],
    },
  },
  {
    title: "Local Turf Arena",
    description:
      "Perfect for quick turf matches with friends. Fully enclosed synthetic turf and night lighting available.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Surat",
    country: "India",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [72.8311, 21.1702],
    },
  },
    {
    title: "Rajiv Gandhi International Stadium",
    description:
      "An iconic ground in Hyderabad with modern seating, lush outfield, and great practice facilities for professionals.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1595526114035-0d45ed16f8e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4600,
    location: "Hyderabad",
    country: "India",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [78.4867, 17.385],
    },
  },
  {
    title: "Holkar Cricket Stadium",
    description:
      "Compact yet world-class ground in Indore, known for its batting-friendly pitch and lush surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520975869019-62a3b4b86c70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Indore",
    country: "India",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [75.8577, 22.7196],
    },
  },
  {
    title: "Green Park Stadium",
    description:
      "A scenic ground in Kanpur offering well-maintained turf and practice nets for day-long sessions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1591133388742-9e63bb3e86a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Kanpur",
    country: "India",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [80.3319, 26.4499],
    },
  },
  {
    title: "Barabati Stadium",
    description:
      "Historic stadium in Cuttack perfect for local tournaments and inter-district matches.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1625840474593-d24d8baf5638?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Cuttack",
    country: "India",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [85.8793, 20.4625],
    },
  },
  {
    title: "HPCA Stadium",
    description:
      "Enjoy breathtaking Himalayan views while playing in Dharamshala’s world-famous stadium.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522780550582-74b07c7f1af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4200,
    location: "Dharamshala",
    country: "India",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [76.3213, 32.219],
    },
  },
  {
    title: "M. A. Chidambaram Indoor Arena",
    description:
      "A smaller practice turf near Chennai city, equipped with indoor training nets and floodlights.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1601581886209-56b17a6abf1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Chennai",
    country: "India",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [80.2707, 13.0827],
    },
  },
  {
    title: "Brabourne Stadium",
    description:
      "One of Mumbai’s oldest grounds — well-maintained with seating for small tournaments and events.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1607748851925-4ec0e30b5a19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3600,
    location: "Mumbai",
    country: "India",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [72.8777, 19.076],
    },
  },
  {
    title: "Jawaharlal Nehru Stadium",
    description:
      "Multi-purpose stadium in Delhi suitable for football, athletics, and cricket practice sessions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1596558450268-3d6d8b08c67f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4400,
    location: "New Delhi",
    country: "India",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [77.209, 28.6139],
    },
  },
  {
    title: "Fatorda Stadium",
    description:
      "Located in Goa, this scenic stadium is ideal for both football and cricket events with great ambiance.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1599058917212-fb8aef49a1d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3700,
    location: "Margao",
    country: "India",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [73.9455, 15.2832],
    },
  },
  {
    title: "Salt Lake Stadium",
    description:
      "A world-class football venue in Kolkata — available for tournaments and practice matches.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4100,
    location: "Kolkata",
    country: "India",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [88.3639, 22.5726],
    },
  },
  {
    title: "JRD Tata Sports Complex",
    description:
      "A premier sports complex in Jamshedpur with excellent turf and athletic tracks for events.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1626727077336-d2a60a8f0f63?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Jamshedpur",
    country: "India",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [86.2029, 22.8046],
    },
  },
  {
    title: "Sector 42 Stadium",
    description:
      "Modern ground in Chandigarh featuring lush green turf and spectator stands. Ideal for league matches.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3300,
    location: "Chandigarh",
    country: "India",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [76.7794, 30.7333],
    },
  },
  {
    title: "Dehradun Cricket Ground",
    description:
      "Nestled amidst hills, this ground offers peaceful surroundings for training and friendly matches.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1625244721380-6f8efbf0de1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2900,
    location: "Dehradun",
    country: "India",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [78.0322, 30.3165],
    },
  },
  {
    title: "Lal Bahadur Shastri Stadium",
    description:
      "A multipurpose stadium in Hyderabad, suitable for cricket and athletic training.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578302758060-dbfed072c69f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3100,
    location: "Hyderabad",
    country: "India",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [78.4867, 17.385],
    },
  },
  {
    title: "Pune Sports Club Ground",
    description:
      "High-quality ground in Pune ideal for professional coaching and weekend leagues.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1611841520561-1ab70b80774e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3400,
    location: "Pune",
    country: "India",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [73.8567, 18.5204],
    },
  },
  {
    title: "Rajkot Cricket Ground",
    description:
      "Modern cricket venue in Rajkot with lush grass and a lively atmosphere, great for local leagues.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3100,
    location: "Rajkot",
    country: "India",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [70.8022, 22.3039],
    },
  },
  {
    title: "Lucknow Sports Ground",
    description:
      "A newly renovated ground perfect for training, coaching sessions, and friendly tournaments.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520975869019-62a3b4b86c70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Lucknow",
    country: "India",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [80.9462, 26.8467],
    },
  },
  {
    title: "Thane Turf Park",
    description:
      "A compact yet premium turf park suitable for small 5-a-side football and cricket practice sessions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1593764592202-6c7362deec9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Thane",
    country: "India",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [72.9781, 19.2183],
    },
  },
  {
    title: "Kochi International Ground",
    description:
      "Spacious ground in Kerala featuring excellent drainage and lush grass for smooth play all season.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3900,
    location: "Kochi",
    country: "India",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [76.2673, 9.9312],
    },
  },
  {
    title: "Nagpur Sports Arena",
    description:
      "A well-equipped cricket and football venue in Nagpur, great for tournaments and coaching camps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3100,
    location: "Nagpur",
    country: "India",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [79.0882, 21.1458],
    },
  },
  {
    title: "Noida Turf Ground",
    description:
      "Modern turf in Noida designed for small-sided football matches and quick cricket sessions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1623282033815-26e3c2ac169b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Noida",
    country: "India",
    reviews: [],
    geometry: {
      type: "Point",
      coordinates: [77.391, 28.5355],
    },
  },
];

module.exports = { data: sampleListings };
