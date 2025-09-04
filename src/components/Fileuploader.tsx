import { useState } from "react";

function FileUpload() {
  const [fileName, setFileName] = useState< string | null>(null);

  return (
    <div className="flex flex-col items-start gap-2">
      {/* Label */}
      <label
        htmlFor="file-upload"
        className="text-white text-sm font-medium"
      >
        Upload Avatar
      </label>

      {/* Upload area */}
      <label
        htmlFor="file-upload"
        className="flex flex-col items-center justify-center w-full max-w-lg h-30 
                   border-4 border-dashed border-gray-400 rounded-xl cursor-pointer 
                   bg-white/5 hover:bg-white/10 transition" >
                    
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-xl border border-white/20 mb-2">
            <img src="src/assets/images/icon-upload.svg" alt="icon-upload" />
          </div>
          
          <p className="text-gray-300 text-sm">
            {fileName ? fileName : "Drag and drop or click to upload"}
          </p>
        </div>

        <input
          id="file-upload"
          type="file"
          className="hidden"
          accept="image/png, image/jpeg"
          onChange={(e) =>
            setFileName(e.target.files?.[0]?.name || null)
          }
        />
      </label>

      {/* Hint */}
      <div className="flex gap-1 items-center">
      <img src="src/assets/images/icon-info.svg" alt="icon-info" />
      <p className="text-gray-400 text-xs mt-1">
        Upload your photo (JPG or PNG, max size: 500KB).
      </p>
      </div>
    </div>
  );
}

export default FileUpload;
