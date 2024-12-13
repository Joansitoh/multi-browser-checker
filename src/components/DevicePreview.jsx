const DevicePreview = ({ previewDevice, submittedUrl, handleClosePreview }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div
        className="relative bg-white rounded-lg flex flex-col"
        style={{
          width: `min(${previewDevice.width}px, 90vw)`,
          height: `min(${previewDevice.height}px, 90vh)`,
        }}
      >
        <div className="flex justify-between items-center px-5 py-2">
          <h2 className="text-center text-xl text-black font-bold mb-4">
            {previewDevice.name} {previewDevice.width}x{previewDevice.height}
          </h2>
          <button
            onClick={handleClosePreview}
            className="top-4 right-4 bg-red-500 text-white rounded-md px-4 py-2 focus:outline-none"
          >
            Close
          </button>
        </div>
        <iframe
          src={submittedUrl || "about:blank"}
          title={previewDevice.name}
          className="w-full h-full border-none rounded-lg"
          style={{
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default DevicePreview;
