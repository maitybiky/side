import React from 'react';
import "./Pagination.css"
import {MdOutlineKeyboardArrowLeft} from "react-icons/md"
import {MdOutlineKeyboardArrowRight} from "react-icons/md"

function Pagination({ PostParPage, totalPost, Paginate, CurrentPage }) {
  console.log(PostParPage, totalPost, CurrentPage);
  const TotalNumber = []
  for (let i = 1; i <= Math.ceil(totalPost / PostParPage); i++) {
    TotalNumber.push(i)
  }

  function NextPage() {
    if (CurrentPage === (totalPost / PostParPage)) {
      console.log(totalPost / PostParPage);
    } else if (CurrentPage > (totalPost / PostParPage)) {
      // 
    }
    else {
      Paginate(CurrentPage + 1)

      console.log("next");
    }
  }
  function PrevPage() {
    if (CurrentPage < 2) {

    } else {
      Paginate(CurrentPage - 1)
    }
  }
  return (
    <>
      <div className="pagination-area">
        <a className="next page-numbers" onClick={PrevPage}>
        {/* <i className="fas fa-arrow-left"></i> */}
        <MdOutlineKeyboardArrowLeft/>
                </a>
        {TotalNumber.map(number => {
          return <span className={CurrentPage === number ? "page-numbers current" : "page-numbers "} aria-current="page" onClick={() => Paginate(number)}>
            {number}
          </span>
        })}
        {/*                             
                            <a href="all-queations.html" className="page-numbers">
                                2
                            </a>
                            <a href="all-queations.html" className="page-numbers">
                                3
                            </a> */}
        <a className="next page-numbers" onClick={NextPage}>
        {/* <i class="fas fa-arrow-right"></i>   */}
        <MdOutlineKeyboardArrowRight/>
              </a>
      </div>
    </>
  )
}

export default Pagination