import { Injectable } from '@angular/core';
import { Section } from '../models/section.model';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  getSections(): Section[] {
    return [
      {
        id: 1,
        titleAr: 'تمهيد',
        titleEn: 'Introduction',
        lectures: [
          {
            id: 1,
            titleAr: 'مقدمة عن التعاقد الرقمي',
            titleEn: 'Introduction to Digital Contracts',
            type: 'text',
            content: 'العقد الالكتروني هو اتفاق يُبرم على الإنترنت...',
            order: 1
          },
          {
            id: 2,
            titleAr: 'الأساسيات القانونية للتعاقد الرقمي',
            titleEn: 'Legal Basics of Digital Contracts',
            type: 'video',
            fileUrl: 'assets/videos/contract-basics.mp4',
            videoType: 'file',
            order: 2
          },
          {
            id: 3,
            titleAr: 'أدوات وتقنيات التعاقد الرقمي',
            titleEn: 'Tools and Techniques of Digital Contracts',
            type: 'pdf',
            fileUrl: 'assets/docs/contract-tools.pdf',
            order: 3
          },
          {
            id: 4,
            titleAr: 'أمن المعلومات في التعاقد الرقمي',
            titleEn: 'Information Security in Digital Contracts',
            type: 'audio',
            fileUrl: 'assets/audio/contract-security.mp3',
            order: 4
          },
          {
            id: 5,
            titleAr: 'انفوجرافيك لانواع العقود الرقمية',
            titleEn: 'Infographic of Digital Contract Types',
            type: 'image',
            fileUrl: 'assets/images/contract-types.png',
            order: 5
          },
          {
            id: 6,
            titleAr: 'اختبر معلوماتك',
            titleEn: 'Test Your Knowledge',
            type: 'test',
            totalScore: 10,
            passingScore: 5,
            duration: 30,
            testType: 'electronic',
            order: 6
          }
        ]
      },
      {
        id: 2,
        titleAr: 'التشريعات والقوانين',
        titleEn: 'Legislations and Laws',
        lectures: [
          {
            id: 7,
            titleAr: 'القوانين المنظمة للتوقيع الإلكتروني',
            titleEn: 'Laws Regulating Electronic Signature',
            type: 'text',
            content: 'التوقيع الإلكتروني له قوانين منظمة...',
            order: 1
          },
          {
            id: 8,
            titleAr: 'حالات عملية من المحاكم',
            titleEn: 'Practical Cases from Courts',
            type: 'video',
            fileUrl: 'https://youtu.be/example',
            videoType: 'link',
            order: 2
          }
        ]
      }
    ];
  }
}