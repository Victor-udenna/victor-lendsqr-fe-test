import "./PaginationStyle.scss";
import Button from "../Button/Button";
import arrowLeft from "../../../assets/images/arrow-left.svg";
import arrowRight from "../../../assets/images/arrow-right.svg";
import arrowdowm from "../../../assets/images/arrow-down.svg";

interface Ipagination {
  readonly totalCount: number;
  readonly currentPage: number;
  readonly itemsPerPage: number;
  readonly onPageChange: (page: number) => void;
  readonly onItemsPerPageChange: (items: number) => void;
}

const Pagination = ({
  totalCount,
  currentPage,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
}: Ipagination) => {
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onItemsPerPageChange(parseInt(e.target.value, 10));
  };

  const generatePageNumbers = () => {
    const pages = [];
    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1, 2, 3);
      if (currentPage > 4) {
        pages.push("...");
      }
      if (currentPage > 3 && currentPage < totalPages - 2) {
        pages.push(currentPage);
      }
      if (currentPage < totalPages - 3) {
        pages.push("...");
      }
      pages.push(totalPages - 2, totalPages - 1, totalPages);
    }
    return pages;
  };

  return (
    <div className="pagination">
      <div className="pagination__result">
        <p>Showing</p>
        <div className="pagination__select__container">
          <select
            className="pagination__result-select"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
          >
            <option value={10}>{"10"}</option>
            <option value={20}>{"20"}</option>
            <option value={50}>{"50"}</option>
            <option value={100}>{"100"}</option>
          </select>
          <img width={12} height={12} alt="select icon" src={arrowdowm} />
        </div>
        <p>{`out of ${totalCount}`}</p>
      </div>
      <div className="pagination__control">
        <Button
          className="pagination__btn"
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        >
          <img width={6.75} height={11.21} alt="arrow btn" src={arrowLeft} />
        </Button>

        <div className="pagination__page">
          {generatePageNumbers().map((page, index) => (
            <p
              key={index}
              className={currentPage === page ? "active" : ""}
              onClick={() => typeof page === "number" && onPageChange(page)}
            >
              {page}
            </p>
          ))}
        </div>

        <Button
          className="pagination__btn"
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        >
          <img width={6.75} height={11.21} alt="arrow btn" src={arrowRight} />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
