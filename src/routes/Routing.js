import { Routes, Route, Navigate } from "react-router-dom";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<p>Home</p>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
