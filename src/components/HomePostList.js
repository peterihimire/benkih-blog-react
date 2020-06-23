import React from "react";
import HomePost from "../components/HomePost";
import { PostConsumer } from "../context";
import ReactPaginate from "react-paginate";
// import Paginate from "../components/Paginate";

const HomePostList = () => {
  return (
    <PostConsumer>
      {value => {
        console.log(value);
        const { slice, posts, pageCount, handlePageClick } = value;
        console.log(slice, posts, pageCount, handlePageClick);
        return (
          // <div>hello</div>
          <div className="home-post-list">
            {slice.map(item => {
              return (
                <>
                  <HomePost key={item.id} blog={item} />
                </>
              );
            })}
            <ReactPaginate
              previousLabel={"prev"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </div>
        );
      }}
    </PostConsumer>
  );
};

export default HomePostList;
