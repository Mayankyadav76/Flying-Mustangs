import React from 'react';

export default function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1579685055980-48dd748d862e",
      title: "RC Plane in Flight"
    },
    {
      url: "https://images.unsplash.com/photo-1506947411487-a56738267384",
      title: "Racing Drone"
    },
    {
      url: "https://images.unsplash.com/photo-1452859030917-45a996f147b4",
      title: "Model Aircraft Display"
    },
    {
      url: "https://images.unsplash.com/photo-1597484661643-2f5fef640dd1",
      title: "Drone Photography"
    },
    {
      url: "https://images.unsplash.com/photo-1508614589041-895b88991e3e",
      title: "RC Plane Competition"
    },
    {
      url: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108",
      title: "Aerial View"
    }
  ];

  return (
    <div className="pt-16">
      <div className="relative h-96">
        <img
          src="https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&q=80&w=2070"
          alt="Gallery Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Gallery</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={`${image.url}?auto=format&fit=crop&q=80&w=800`}
                alt={image.title}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white font-semibold text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}