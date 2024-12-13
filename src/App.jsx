import { useState } from "react";
import DevicePreview from "./components/DevicePreview";

function App() {
  const [url, setUrl] = useState("");
  const [submittedUrl, setSubmittedUrl] = useState("");

  const [divider, setDivider] = useState(5);
  const [previewDevice, setPreviewDevice] = useState(null);

  const devices = [
    { name: "Desktop", width: 1920, height: 1080 },
    { name: "Tablet", width: 1024, height: 768 },
    { name: "Mobile", width: 375, height: 667 },
    { name: "Laptop", width: 1366, height: 768 },
    { name: "iPad Pro", width: 1024, height: 1366 },
    { name: "Galaxy S21", width: 360, height: 800 },
    { name: "iPhone 14", width: 390, height: 844 },
  ];

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedUrl(url);
  };

  const handlePreview = (device) => {
    setPreviewDevice(device);
  };

  const handleClosePreview = () => {
    setPreviewDevice(null);
  };

  return (
    <div className="w-full h-screen py-20 justify-center flex flex-col items-center overflow-clip">
      <div id="header" className="h-1/3 flex flex-col gap-4 items-center">
        <h1 className="uppercase font-semibold">Multi Browser Checker</h1>
        <div className="flex gap-2 items-center mt-4">
          <input
            type="text"
            value={url}
            onChange={handleInputChange}
            placeholder="Enter a URL to visualulize"
            className="border-b border-gray-300 bg-transparent py-2 pr-5 outline-none focus:outline-none focus:border-blue-500 transition duration-300"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-10 rounded focus:outline-none transition duration-300"
          >
            Check
          </button>
        </div>
        <input
          type="range"
          min="1"
          max="10"
          value={divider}
          onChange={(e) => setDivider(e.target.value)}
          className="w-full"
        />
      </div>
      {previewDevice ? (
        <DevicePreview
          previewDevice={previewDevice}
          submittedUrl={submittedUrl}
          handleClosePreview={handleClosePreview}
        />
      ) : null}
      <div className="h-2/3 w-full px-4">
        <div className="h-full rounded-md w-full overflow-x-scroll">
          <div id="device-container" className="flex gap-10 p-10">
            {devices.map((device) => (
              <div className="flex flex-col">
                <span
                  className="text-sm font-semibold mb-2 hover:underline cursor-pointer"
                  onClick={() => handlePreview(device)}
                >
                  {device.name}
                </span>
                <div
                  key={device.name}
                  className="border-4 rounded-md border-gray-300 flex-shrink-0 relative"
                  style={{
                    width: `${device.width / divider + 8}px`,
                    height: `${device.height / divider + 8}px`,
                  }}
                >
                  <iframe
                    src={submittedUrl || "about:blank"}
                    title={device.name}
                    className="w-full h-full"
                    style={{
                      border: "none",
                      transform: `scale(${1 / divider})`,
                      transformOrigin: "top left",
                      width: `${device.width}px`,
                      height: `${device.height}px`,
                    }}
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
