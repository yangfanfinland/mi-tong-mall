export interface ListResource {
    status: number,
    data?: {
        endRow: number,
        firstPage: number,
        hasNextPage: boolean,
        hasPreviousPage: boolean,
        isFirstPage: boolean,
        isLastPage: boolean,
        lastPage: number,
        list: Product[],
        navigatePages: number,
        navigatepageNums: number[],
        nextPage: number,
        orderBy: string,
        pageNum: number
        pageSize: number,
        pages: number,
        prePage: number,
        size: number,
        startRow: number,
        total: number
    }
}

export interface Product {
    id: number,
    categoryId: number,
    imageHost?: string,
    mainImage?: String,
    name: string,
    price: number,
    status: number,
    subtitle?: string
}

export interface ProductDetailResource {
    status: number,
    data?: ProductDetail
}

export interface ProductDetail {
    categoryId: number,
    createTime: string,
    detail: string,
    id: number,
    imageHost: string,
    mainImage: string,
    name: string,
    parentCategoryId: number,
    price: number,
    status: number,
    stock: number,
    subImages: string,
    subtitle: string,
    updateTime: string
}