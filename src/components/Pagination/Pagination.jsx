import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.css";
import { useLocation } from "react-router";

export default function Pagination({
  handlePageClick,
  pageCount,
  remountComponent,
  resultsRef,
}) {
  const location = useLocation();

  const prev = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.1599 7.41L10.5799 12L15.1599 16.59L13.7499 18L7.74991 12L13.7499 6L15.1599 7.41Z"
        fill="currentColor"
      />
    </svg>
  );
  const next = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(180)"
    >
      <path
        d="M15.1599 7.41L10.5799 12L15.1599 16.59L13.7499 18L7.74991 12L13.7499 6L15.1599 7.41Z"
        fill="currentColor"
      />
    </svg>
  );

  const scrollUp = (e) => {
    if (location.pathname === "/search") {
      resultsRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      e.event.target.offsetParent.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div key={remountComponent}>
      <ReactPaginate
        nextLabel={next}
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel={prev}
        pageClassName={styles.pageItem}
        pageLinkClassName={styles.pageLink}
        previousClassName={styles.pageItem}
        previousLinkClassName={`${styles.pageLink} ${styles.prev}`}
        nextClassName={styles.pageItem}
        nextLinkClassName={`${styles.pageLink} ${styles.next}`}
        breakLabel="..."
        breakClassName={styles.pageItem}
        breakLinkClassName={styles.pageLink}
        containerClassName={styles.pagination}
        activeClassName={styles.active}
        activeLinkClassName={styles.activeLink}
        renderOnZeroPageCount={null}
        disabledClassName={styles.disabled}
        disabledLinkClassName={styles.disabled}
        onClick={scrollUp}
      />
    </div>
  );
}
