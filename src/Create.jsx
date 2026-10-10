
import { useRef, useState } from "react";
import "./Create.css";

function Create() {
  const fileInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [caption, setCaption] = useState("");
  const [step, setStep] = useState(1);
  const [isShared, setIsShared] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/") &&
        !file.type.startsWith("video/")) {
      alert("Please select an image or video.");
      return;
    }

    if (preview) {
      URL.revokeObjectURL(preview);
    }

    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
    setStep(2);
    setIsShared(false);
  };

  const handleRemoveFile = () => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }

    setSelectedFile(null);
    setPreview("");
    setCaption("");
    setStep(1);
    setIsShared(false);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleShare = () => {
    if (!selectedFile) return;

    const newPost = {
      id: Date.now(),
      caption,
      fileName: selectedFile.name,
      fileType: selectedFile.type,
      preview,
      createdAt: new Date().toISOString(),
    };

    const existingPosts = JSON.parse(
      localStorage.getItem("instagramPosts") || "[]"
    );

    localStorage.setItem(
      "instagramPosts",
      JSON.stringify([newPost, ...existingPosts])
    );

    setIsShared(true);
  };

  return (
    <div className="create-page">
      <div className="create-header">
        <h1>Create new post</h1>

        {selectedFile && !isShared && (
          <button
            className="create-share-top"
            onClick={handleShare}
          >
            Share
          </button>
        )}
      </div>

      <div className="create-card">
        {!selectedFile ? (
          <div className="upload-section">
            <div className="upload-icon">
              <svg
                width="76"
                height="76"
                viewBox="0 0 76 76"
                fill="none"
              >
                <rect
                  x="12"
                  y="12"
                  width="52"
                  height="52"
                  rx="8"
                  stroke="white"
                  strokeWidth="3"
                />

                <circle cx="29" cy="29" r="5" fill="white" />

                <path
                  d="M15 54L31 38L42 49L50 41L62 53"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M52 8V22M45 15H59"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <h2>Share your moments</h2>

            <p>
              Upload photos and videos to share with your friends.
            </p>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*,video/*"
              onChange={handleFileChange}
              hidden
            />

            <button
              className="select-file-btn"
              onClick={() => fileInputRef.current.click()}
            >
              Select from computer
            </button>

            <span className="upload-note">
              PNG, JPG, GIF or MP4
            </span>
          </div>
        ) : isShared ? (
          <div className="success-section">
            <div className="success-icon">✓</div>

            <h2>Your post has been shared!</h2>

            <p>
              Your creation has been saved to this browser.
            </p>

            <button
              className="select-file-btn"
              onClick={handleRemoveFile}
            >
              Create another post
            </button>
          </div>
        ) : (
          <div className="editor-section">
            <div className="editor-preview">
              {selectedFile.type.startsWith("video/") ? (
                <video
                  src={preview}
                  controls
                  className="preview-media"
                />
              ) : (
                <img
                  src={preview}
                  alt="Post preview"
                  className="preview-media"
                />
              )}

              <button
                className="remove-preview"
                onClick={handleRemoveFile}
                title="Remove media"
              >
                ×
              </button>
            </div>

            <div className="editor-details">
              <div className="editor-user">
                <img
                  src="https://i.pravatar.cc/100?img=12"
                  alt="Profile"
                />

                <div>
                  <strong>rahulparmar</strong>
                  <span>Creating a new post</span>
                </div>
              </div>

              <textarea
                placeholder="Write a caption..."
                value={caption}
                onChange={(event) =>
                  setCaption(event.target.value)
                }
                maxLength={2200}
              />

              <div className="caption-footer">
                <span>✎</span>
                <span>{caption.length}/2,200</span>
              </div>

              <div className="editor-file-info">
                <span>📎</span>
                <span>{selectedFile.name}</span>
              </div>

              <button
                className="share-post-btn"
                onClick={handleShare}
              >
                Share post
              </button>
            </div>
          </div>
        )}
      </div>

      <p className="create-footer">
        Make something worth sharing. ✨
      </p>
    </div>
  );
}

export default Create;

