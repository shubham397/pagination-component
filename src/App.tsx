import { useState } from "react";
import Pagination from "./components/Pagination";
import "./styles.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <div className="App">
      <h1>Paginated Data Example</h1>

      {/* Example data */}
      <div>Showing content for page {currentPage}</div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
