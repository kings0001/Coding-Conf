/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

function FileUpload({ onFileSelect }: { onFileSelect: (fileUrl: string | null) => void }) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);

    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreview(objectUrl);
      onFileSelect(objectUrl); // 🔥 send preview URL to parent
    } else {
      setPreview(null);
      onFileSelect(null);
    }
  };

  const handleRemove = () => {
    setFile(null);
    setPreview(null);
    onFileSelect(null);
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <label className="text-white text-sm font-medium">Upload Avatar</label>

      {!preview ? (
        <label
          htmlFor="file-upload"
          className="flex flex-col items-center justify-center w-full max-w-lg h-32 
                     border-4 border-dashed border-gray-400 rounded-xl cursor-pointer 
                     bg-white/5 hover:bg-white/10 transition"
        >
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-xl border border-white/20 mb-2">
              <img src="src/assets/images/icon-upload.svg" alt="icon-upload" />
            </div>
            <p className="text-gray-300 text-sm">
              Drag and drop or click to upload
            </p>
          </div>

          <input
            id="file-upload"
            type="file"
            className="hidden"
            accept="image/png, image/jpeg"
            required
            onChange={handleFileChange}
          />
        </label>
      ) : (
        <div className="flex flex-col items-center justify-center w-full max-w-lg py-4 border-4 border-dashed border-gray-400 rounded-xl bg-white/5">
          <img
            src={preview}
            alt="preview"
            className="w-16 h-16 rounded-full object-cover mb-3"
          />
          <div className="flex gap-3">
            <button
              onClick={handleRemove}
              className="text-gray-300 text-sm bg-white/10 px-3 py-1 rounded-md hover:bg-white/20"
            >
              Remove image
            </button>
            <label
              htmlFor="file-upload"
              className="text-gray-300 text-sm bg-white/10 px-3 py-1 rounded-md hover:bg-white/20 cursor-pointer"
            >
              Change image
              <input
                id="file-upload"
                type="file"
                className="hidden"
                accept="image/png, image/jpeg"
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>
      )}

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
