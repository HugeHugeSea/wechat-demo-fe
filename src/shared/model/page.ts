export class Page {
  first?: boolean;
  last?: boolean;
  pageIndex?: number;
  totalPages?: number;
  totalElements?: number;
  size?: number;
  number?: number;
  numberOfElements?: number;

  constructor(first: boolean = true, last: boolean = false, pageIndex: number = 1, number: number = 0, totalPages: number = 0,
    totalElements: number = 0, size: number = 15, numberOfElements: number = 15) {
    this.first = first;
    this.last = last;
    //  pageIndex/number = paginator.pageIndex
    this.pageIndex = pageIndex;
    this.number = number;
    //  totalPages =
    this.totalPages = totalPages;
    //  totalElements = [(length)]
    this.totalElements = totalElements;
    //  size/numberOfElements = Items per page
    this.size = size;
    this.numberOfElements = numberOfElements;
  }
}
