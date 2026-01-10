import React from "react";
import { useParams } from "react-router-dom";

function FocusPage() {
  const { focusId } = useParams();
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      Focus mode for: {focusId}
    </div>
  )
}

export default FocusPage;
