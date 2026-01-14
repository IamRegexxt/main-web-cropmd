import React, { useState } from "react";

export default function DownloadFileButton({ filename = "file.txt", getContent, url }) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    try {
      setLoading(true);

      // If a URL is provided, trigger a direct download from that URL (useful for static files like an APK in public/)
      if (url) {
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        // Make sure the anchor is in the document for some browsers
        document.body.appendChild(a);
        a.click();
        a.remove();
        setLoading(false);
        return;
      }

      let content = typeof getContent === "function" ? getContent() : getContent;
      if (content instanceof Promise) content = await content;

      // Normalize content: allow string, Blob, or objects
      let blob;
      if (content instanceof Blob) {
        blob = content;
      } else if (typeof content === "string") {
        blob = new Blob([content], { type: "text/plain;charset=utf-8" });
      } else if (content == null) {
        blob = new Blob([""], { type: "text/plain;charset=utf-8" });
      } else {
        // Fallback: stringify JSON
        blob = new Blob([JSON.stringify(content, null, 2)], { type: "application/json;charset=utf-8" });
      }

      const urlObj = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = urlObj;
      a.download = filename;
      // Some environments require the anchor to be in the document
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(urlObj);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Failed to create/download file:", err);
      alert("Unable to create file. See console for details.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
    >
      {loading ? "Preparing..." : "Download file"}
    </button>
  );
}
