import { getTestBed, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { SearchService } from './search.service';

describe('SearchService', () => {
  let searchService: SearchService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchService],
    });
    searchService = TestBed.inject(SearchService);
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(searchService).toBeTruthy();
  });

  it('should fetch search result as an Observable', () => {
    searchService.getSearchResults('q=cle').subscribe((result: Array<any>) => {
      expect(result.length).toBe(1);
    });

    const req = httpMock.expectOne(
      `https://jsonplaceholder.typicode.com/comments?q=cle`
    );
    expect(req.request.method).toBe('GET');
    req.flush(MOCK_RESULT_DATA);
    httpMock.verify();
  });
});
export const MOCK_RESULT_DATA = [
  {
    body:'est officiis placeat↵id et iusto ut fugit numquam↵eos aut voluptas ad quia tempore qui quibusdam doloremque↵recusandae tempora qui',
    email: 'Cleve@royal.us',
    id: 201,
    name: 'et adipisci aliquam a aperiam ut soluta',
    postId: 41,
  },
];
