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
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
        <li
          key={number}
          className={number === currentPage ? 'active' : ''}
          onClick={(e) => {
            e.preventDefault()
            onPageChange(number)
          }}
        >
          <a href="!#">{number}</a>
        </li>
      ))}
    </ul>
  )
}

export default Pagination
