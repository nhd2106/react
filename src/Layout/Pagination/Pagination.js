import React from 'react';
import {Pagination,PaginationItem,PaginationLink} from 'reactstrap';
const PaginationComponent = ({
    currentPage,
    pageSize,
    totalCount,
    onChangePage
  }) => {
    const totalPage = Math.ceil(totalCount / pageSize);
   
    
    //   Ví dụ totalPage = 5 => [0, 1, 2, 3, 4]
    const pages = [...Array(totalPage).keys()];
    
    
    return (
      <Pagination>
           <PaginationLink first onClick = {()=> onChangePage(1)}/>
              {
                  pages.map(page=>(
                    <PaginationItem key={page}>    
                      <PaginationLink onClick={()=>{onChangePage(page+1); window.scrollTo(0,800)}}>
                          {page+1}
                      </PaginationLink>
                    </PaginationItem>
                  ))
              }
          <PaginationLink last onClick = {()=> onChangePage(totalPage)}/>
      </Pagination>
    );
  };
export default PaginationComponent;
