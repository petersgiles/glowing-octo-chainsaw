export class Page {
  // The number of elements in the page
  public size: number = 0
  // The total number of elements
  public totalElements: number = 0
  // The total number of pages
  public totalPages: number = 0
  // The current page number
  public pageNumber: number = 0
}

// tslint:disable-next-line:max-classes-per-file
export class PagedData<T> {
  public data = []
  public page = new Page()
}
