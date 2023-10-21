import { IPaginationProps } from '../types/notice'

function Pagination({
  itemsPerPage,
  totalItems,
  currentPage,
  onPageChange,
}: IPaginationProps) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i += 1) {
    pageNumbers.push(i)
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li key={number} className={number === currentPage ? 'active' : ''}>
          <a
            onClick={(e) => {
              e.preventDefault()
              onPageChange(number)
            }}
            href="!#"
          >
            {number}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Pagination
