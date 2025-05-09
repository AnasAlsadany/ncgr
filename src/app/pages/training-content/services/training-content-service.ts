// sections.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Section {
  id: number;
  arabicTitle: string;
  englishTitle: string;
}

@Injectable({
  providedIn: 'root',
})
export class SectionsService {
  private mockSections: Section[] = [
    { id: 1, arabicTitle: 'القسم الأول', englishTitle: 'First Section' },
    { id: 2, arabicTitle: 'القسم الثاني', englishTitle: 'Second Section' },
  ];

  getSections(): Observable<Section[]> {
    return of(this.mockSections);
  }

  addSection(section: Section): Observable<Section> {
    section.id = this.mockSections.length + 1;
    this.mockSections.push(section);
    return of(section);
  }
}
