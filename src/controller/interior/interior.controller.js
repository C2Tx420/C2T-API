const data = [
  {
    id: "5d0a2a45-1334-4b57-a8be-fa6d26a5a1b7",
    title: "Modern Living Room",
    category: "Living Design",
    createdAt: "2023-11-06T14:30:00",
    description:
      "A stunning modern living room with contemporary design elements.",
    image:
      "https://plus.unsplash.com/premium_photo-1674815329488-c4fc6bf4ced8?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
    tag: ["modern", "contemporary", "interior design", "home decor"],
    content:
      "<p>This modern living room features sleek furniture and a minimalist design. The large windows provide ample natural light, creating a bright and inviting space.</p><img src='https://plus.unsplash.com/premium_photo-1674815329488-c4fc6bf4ced8?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJpb3J8ZW58MHwwfDB8fHww' alt='Modern Living Room'>",
  },
  {
    id: "6f4a1b76-2c3e-4d28-b0d5-8677a5f6a4fd",
    title: "Cozy Bedroom Retreat",
    category: "Interior Design",
    createdAt: "2023-10-20T12:45:00",
    description:
      "A cozy and relaxing bedroom designed for comfort and serenity.",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3J8ZW58MHwwfDB8fHww",
    tag: ["cozy", "bedroom design", "relaxation", "serenity"],
    content:
      "<p>Create your own oasis with this cozy bedroom retreat. Soft textures and warm lighting help create a calming atmosphere, perfect for unwinding after a long day.</p><img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3J8ZW58MHwwfDB8fHww' alt='Cozy Bedroom'>",
  },
  {
    id: "1b4b0942-51f0-45e2-ae5d-2c4d4610e6b1",
    title: "Sleek Bathroom Design",
    category: "Kitchen Design",
    createdAt: "2023-09-18T11:20:00",
    description:
      "A sleek and modern bathroom with elegant fixtures and a spacious layout.",
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW50ZXJpb3J8ZW58MHwwfDB8fHww",
    tag: ["sleek", "bathroom design", "modern fixtures", "spacious layout"],
    content:
      "<p>Elevate your daily routine with this sleek bathroom design. Contemporary elements and clean lines create a sense of luxury and comfort.</p><img src='https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW50ZXJpb3J8ZW58MHwwfDB8fHww' alt='Sleek Bathroom'>",
  },
  {
    id: "29cb82a1-e1f9-46e1-8c75-8fbc9b0a7f85",
    title: "Elegant Dining Room",
    category: "Interior Design",
    createdAt: "2023-08-14T09:10:00",
    description:
      "An elegant dining room with sophisticated decor and a warm ambiance.",
    image:
      "https://plus.unsplash.com/premium_photo-1661963540233-94097ba21f27?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW50ZXJpb3J8ZW58MHwwfDB8fHww",
    tag: ["elegant", "dining room", "sophisticated decor", "warm ambiance"],
    content:
      "<p>Host gatherings in style with this elegant dining room. Luxurious details and inviting lighting create a welcoming atmosphere for guests.</p><img src='https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW50ZXJpb3J8ZW58MHwwfDB8fHww' alt='Elegant Dining Room'>",
  },
  {
    id: "e6974e13-0ef4-41fc-bbb6-c1b324c60671",
    title: "Rustic Bedroom Design",
    category: "Living Design",
    createdAt: "2023-07-10T16:55:00",
    description:
      "A rustic bedroom with natural wood accents and a cozy, intimate feel.",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGludGVyaW9yfGVufDB8MHwwfHx8MA%3D%3D",
    tag: ["rustic", "bedroom design", "natural wood", "cozy feel"],
    content:
      "<p>Experience the charm of a rustic bedroom with natural textures and earthy tones. Unwind in this intimate space inspired by nature's tranquility.</p><img src='https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW50ZXJpb3J8ZW58MHwwfDB8fHww' alt='Rustic Bedroom'>",
  },
  {
    id: "6e722982-0a1b-45b0-9b4c-c92e43b32b45",
    title: "Modern Home Office",
    category: "Interior Design",
    createdAt: "2023-06-05T14:40:00",
    description:
      "A modern home office with a functional workspace and contemporary design.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGludGVyaW9yfGVufDB8MHwwfHx8MA%3D%3D",
    tag: [
      "modern",
      "home office",
      "functional workspace",
      "contemporary design",
    ],
    content:
      "<p>Create a productive environment with this modern home office setup. Stylish furniture and efficient organization enhance your workflow and creativity.</p><img src='https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW50ZXJpb3J8ZW58MHwwfDB8fHww' alt='Modern Home Office'>",
  },
  {
    id: "61d3343d-ef43-418e-9cf5-4f944527c6a3",
    title: "Minimalist Living Room",
    category: "Interior Design",
    createdAt: "2023-05-01T08:25:00",
    description:
      "A minimalist living room with clean lines and a clutter-free design.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGludGVyaW9yfGVufDB8MHwwfHx8MA%3D%3D",
    tag: ["minimalist", "living room", "clean lines", "clutter-free design"],
    content:
      "<p\"Embrace simplicity with this minimalist living room. Neutral tones and simple decor create a calming space for relaxation and contemplation.</p><img src='https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW50ZXJpb3J8ZW58MHwwfDB8fHww' alt='Minimalist Living Room'>",
  },
  {
    id: "42d45d61-3e58-47d8-aa0f-2fbb828e0117",
    title: "Vintage Study Room",
    category: "Living Design",
    createdAt: "2023-04-02T13:15:00",
    description:
      "A vintage-inspired study room with antique furniture and rich, warm colors.",
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGludGVyaW9yfGVufDB8MHwwfHx8MA%3D%3D",
    tag: ["vintage", "study room", "antique furniture", "warm colors"],
    content:
      "<p\"Travel back in time with this vintage study room. Classic accents and traditional design elements evoke a sense of nostalgia and intellectual curiosity.</p><img src='https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW50ZXJpb3J8ZW58MHwwfDB8fHww' alt='Vintage Study Room'>",
  },
  {
    id: "c2dbcfab-66a4-46c0-b4a6-6d48cd5a4d0e",
    title: "Urban Loft Bedroom",
    category: "Interior Design",
    createdAt: "2023-03-15T11:50:00",
    description:
      "An urban loft bedroom with industrial touches and a spacious layout.",
    image:
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGludGVyaW9yfGVufDB8MHwwfHx8MA%3D%3D",
    tag: ["urban", "loft bedroom", "industrial touches", "spacious layout"],
    content:
      "<p\"Experience city living with this urban loft bedroom. Open space and contemporary accents capture the essence of modern urban aesthetics.</p><img src='https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW50ZXJpb3J8ZW58MHwwfDB8fHww' alt='Urban Loft Bedroom'>",
  },
];

const getNews = () => {
  const news = data.map((item) => {
    const { id, title, image, category } = item;
    return { id, title, image, category };
  });
  return news.slice(0, 6);
};

const getNewsDetail = (id) => {
  const result = data.find((item) => item.id === id);
  return result;
};

export { getNews, getNewsDetail };
