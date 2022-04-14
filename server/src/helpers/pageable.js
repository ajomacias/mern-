'use strict'

export const getPageable = (querys)=>{
    let page = querys.page;
    let size = querys.size;

    if(!page) page = 0;

    if(!size) size = 10

    if(Number.isNaN(page)) page = 0 ;

    if(page < 0) page = 0;
    
    if(Number.isNaN(size)) size = 10;
    
    if(size < 5) size = 10;

    console.log(size, page)

    return{
        ouftset : page * size,
        limit : size
    }
    
}

export const resPageable = (pageable)=>{

    return {
        size : pageable.limit,
        page : pageable.ouftset / pageable.limit
    }

}