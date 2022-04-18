import { TestBed } from '@angular/core/testing';

import { LikedPostsService } from './liked-posts.service';

describe('LikedPostsService', () => {
  let service: LikedPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikedPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
