import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  @Input() searchVal;
  searchResults: [];
  isResults: boolean;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.searchVal == 'clear') {
      this.searchResults = undefined;
    } else {
      if (this.searchVal) {
        const parameter = `q=${this.searchVal}`;
        this.searchService.getSearchResults(parameter).subscribe((res) => {
          this.searchResults=res;
        });
      }
    }
  }
}
