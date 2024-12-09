import Image from 'next/image';

export default function LibraryStoolChair() {
  return (
    <div className="min-h-screen bg-gray-100">
    
      <div className="max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      
          <div className="w-full h-80 md:h-[400px] relative">
            <Image
              src="/pictures/chair2.png"
              alt="Library Stool Chair"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>

        
          <div>
            <h1 className="text-3xl font-bold mb-4">Library Stool Chair</h1>
            <p className="text-xl text-green-600 font-semibold mb-2">$20.00 USD</p>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

   
      <div className="bg-white py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <a href="#" className="text-blue-600 hover:underline">
              View all
            </a>
          </div>

         
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          
            <div className="bg-gray-100 rounded-lg p-4 shadow">
              <div className="w-full h-40 relative mb-4">
                <Image
                  src="/pictures/chair1.png"
                  alt="Library Stool Chair 1"
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <h3 className="text-lg font-medium mb-2">Library Stool Chair</h3>
              <p className="text-gray-600 font-semibold">$20.00</p>
            </div>
           
            <div className="bg-gray-100 rounded-lg p-4 shadow">
              <div className="w-full h-40 relative mb-4">
                <Image
                  src="/pictures/chair2.png"
                  alt="Library Stool Chair 2"
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <h3 className="text-lg font-medium mb-2">Library Stool Chair</h3>
              <p className="text-gray-600 font-semibold">$20.00</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 shadow">
              <div className="w-full h-40 relative mb-4">
                <Image
                  src="/pictures/chair3.png"
                  alt="Library Stool Chair 3"
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <h3 className="text-lg font-medium mb-2">Library Stool Chair</h3>
              <p className="text-gray-600 font-semibold">$20.00</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 shadow">
              <div className="w-full h-40 relative mb-4">
                <Image
                  src="/pictures/chair4.png"
                  alt="Library Stool Chair 4"
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <h3 className="text-lg font-medium mb-2">Library Stool Chair</h3>
              <p className="text-gray-600 font-semibold">$20.00</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 shadow">
              <div className="w-full h-40 relative mb-4">
                <Image
                  src="/pictures/chair5.png"
                  alt="Library Stool Chair 5"
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <h3 className="text-lg font-medium mb-2">Library Stool Chair</h3>
              <p className="text-gray-600 font-semibold">$20.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
