function Paging(props) {
  const { chosePage, pageNumbers, currentPage } = props;
  const onChosePage = (event) => {
    chosePage(event);
  };
  return (
    <div className="pagination-custom">
      <ul id="page-numbers">
        {pageNumbers.map((number) => {
          if (currentPage === number) {
            return (
              <li key={number} id={number} className="active">
                {number}
              </li>
            );
          } else {
            return (
              <li key={number} id={number} onClick={onChosePage}>
                {number}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
export default Paging;
