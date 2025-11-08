
import { Question } from '../types';

export const ALL_QUESTIONS: Question[] = [
  // Chapter 1
  {
    id: '1-1',
    chapter: 1,
    text: 'حاصل عبارت (-8) + (+5) کدام است؟',
    options: [
      { id: '1-1-a', text: '-3' },
      { id: '1-1-b', text: '3' },
      { id: '1-1-c', text: '13' },
      { id: '1-1-d', text: '-13' },
    ],
    correctOptionId: '1-1-a',
  },
  {
    id: '1-2',
    chapter: 1,
    text: 'قرینه عدد -1/4 کدام است؟',
    options: [
      { id: '1-2-a', text: '-1/4' },
      { id: '1-2-b', text: '+1/4' },
      { id: '1-2-c', text: '4' },
      { id: '1-2-d', text: '-4' },
    ],
    correctOptionId: '1-2-b',
  },
  {
    id: '1-3',
    chapter: 1,
    text: 'حاصل عبارت 10 - 2 * 3 با توجه به ترتیب عملیات کدام است؟',
    options: [
      { id: '1-3-a', text: '24' },
      { id: '1-3-b', text: '4' },
      { id: '1-3-c', text: '-16' },
      { id: '1-3-d', text: '8' },
    ],
    correctOptionId: '1-3-b',
  },
  // Chapter 2
  {
    id: '2-1',
    chapter: 2,
    text: 'کدام یک از اعداد زیر اول است؟',
    options: [
      { id: '2-1-a', text: '9' },
      { id: '2-1-b', text: '15' },
      { id: '2-1-c', text: '23' },
      { id: '2-1-d', text: '27' },
    ],
    correctOptionId: '2-1-c',
  },
  {
    id: '2-2',
    chapter: 2,
    text: 'تجزیه عدد ۱۲ به عوامل اول کدام است؟',
    options: [
      { id: '2-2-a', text: '2 × 6' },
      { id: '2-2-b', text: '3 × 4' },
      { id: '2-2-c', text: '2 × 2 × 3' },
      { id: '2-2-d', text: '1 × 12' },
    ],
    correctOptionId: '2-2-c',
  },
  {
    id: '2-3',
    chapter: 2,
    text: 'ب.م.م (بزرگترین مقسوم علیه مشترک) دو عدد ۱۸ و ۲۴ کدام است؟',
    options: [
      { id: '2-3-a', text: '3' },
      { id: '2-3-b', text: '6' },
      { id: '2-3-c', text: '9' },
      { id: '2-3-d', text: '12' },
    ],
    correctOptionId: '2-3-b',
  },
  // Chapter 3
  {
    id: '3-1',
    chapter: 3,
    text: 'مجموع زاویه های داخلی یک پنج ضلعی چند درجه است؟',
    options: [
      { id: '3-1-a', text: '360' },
      { id: '3-1-b', text: '540' },
      { id: '3-1-c', text: '720' },
      { id: '3-1-d', text: '180' },
    ],
    correctOptionId: '3-1-b',
  },
  {
    id: '3-2',
    chapter: 3,
    text: 'کدام چهارضلعی قطرهایش بر هم عمود و با هم برابر هستند؟',
    options: [
      { id: '3-2-a', text: 'لوزی' },
      { id: '3-2-b', text: 'مستطیل' },
      { id: '3-2-c', text: 'مربع' },
      { id: '3-2-d', text: 'متوازی الاضلاع' },
    ],
    correctOptionId: '3-2-c',
  },
  // Chapter 4
  {
    id: '4-1',
    chapter: 4,
    text: 'عبارت جبری 2(x + 3y) ساده شده کدام است؟',
    options: [
      { id: '4-1-a', text: '2x + 3y' },
      { id: '4-1-b', text: 'x + 6y' },
      { id: '4-1-c', text: '2x + 6y' },
      { id: '4-1-d', text: '5xy' },
    ],
    correctOptionId: '4-1-c',
  },
  {
    id: '4-2',
    chapter: 4,
    text: 'اگر a=2 و b=3 باشد، مقدار عبارت a² + b چقدر است؟',
    options: [
      { id: '4-2-a', text: '5' },
      { id: '4-2-b', text: '7' },
      { id: '4-2-c', text: '8' },
      { id: '4-2-d', text: '9' },
    ],
    correctOptionId: '4-2-b',
  },
  // Chapter 5
  {
    id: '5-1',
    chapter: 5,
    text: 'حاصل جمع دو بردار [2, 3] و [1, -1] کدام است؟',
    options: [
      { id: '5-1-a', text: '[3, 2]' },
      { id: '5-1-b', text: '[1, 4]' },
      { id: '5-1-c', text: '[3, 4]' },
      { id: '5-1-d', text: '[2, 2]' },
    ],
    correctOptionId: '5-1-a',
  },
  {
    id: '5-2',
    chapter: 5,
    text: 'اگر بردار a = [3, 4] باشد، بردار 2a کدام است؟',
    options: [
      { id: '5-2-a', text: '[5, 6]' },
      { id: '5-2-b', text: '[6, 8]' },
      { id: '5-2-c', text: '[3, 8]' },
      { id: '5-2-d', text: '[6, 4]' },
    ],
    correctOptionId: '5-2-b',
  },
  // Chapter 6
  {
    id: '6-1',
    chapter: 6,
    text: 'در یک مثلث قائم الزاویه، اضلاع قائم ۳ و ۴ هستند. طول وتر چقدر است؟',
    options: [
      { id: '6-1-a', text: '5' },
      { id: '6-1-b', text: '6' },
      { id: '6-1-c', text: '7' },
      { id: '6-1-d', text: '25' },
    ],
    correctOptionId: '6-1-a',
  },
  {
    id: '6-2',
    chapter: 6,
    text: 'در مثلث متساوی الساقین، زاویه های روبرو به ساق های برابر، ... هستند.',
    options: [
      { id: '6-2-a', text: 'نابرابر' },
      { id: '6-2-b', text: 'مکمل' },
      { id: '6-2-c', text: 'متمم' },
      { id: '6-2-d', text: 'برابر' },
    ],
    correctOptionId: '6-2-d',
  },
  // Chapter 7
  {
    id: '7-1',
    chapter: 7,
    text: 'حاصل (2³) * (2⁴) کدام است؟',
    options: [
      { id: '7-1-a', text: '2⁷' },
      { id: '7-1-b', text: '2¹²' },
      { id: '7-1-c', text: '4⁷' },
      { id: '7-1-d', text: '4¹²' },
    ],
    correctOptionId: '7-1-a',
  },
  {
    id: '7-2',
    chapter: 7,
    text: 'جذر تقریبی عدد ۱۷ به کدام عدد نزدیک تر است؟',
    options: [
      { id: '7-2-a', text: '3' },
      { id: '7-2-b', text: '4' },
      { id: '7-2-c', text: '5' },
      { id: '7-2-d', text: '16' },
    ],
    correctOptionId: '7-2-b',
  },
  // Chapter 8
  {
    id: '8-1',
    chapter: 8,
    text: 'میانگین اعداد ۱۰، ۱۲، ۱۴ چقدر است؟',
    options: [
      { id: '8-1-a', text: '10' },
      { id: '8-1-b', text: '11' },
      { id: '8-1-c', text: '12' },
      { id: '8-1-d', text: '36' },
    ],
    correctOptionId: '8-1-c',
  },
  {
    id: '8-2',
    chapter: 8,
    text: 'در پرتاب یک تاس، احتمال آمدن عدد زوج چقدر است؟',
    options: [
      { id: '8-2-a', text: '1/6' },
      { id: '8-2-b', text: '2/6' },
      { id: '8-2-c', text: '3/6' },
      { id: '8-2-d', text: '1' },
    ],
    correctOptionId: '8-2-c',
  },
  // Chapter 9
  {
    id: '9-1',
    chapter: 9,
    text: 'اندازه هر زاویه محاطی روبرو به قطر دایره، چند درجه است؟',
    options: [
      { id: '9-1-a', text: '45' },
      { id: '9-1-b', text: '90' },
      { id: '9-1-c', text: '180' },
      { id: '9-1-d', text: '360' },
    ],
    correctOptionId: '9-1-b',
  },
  {
    id: '9-2',
    chapter: 9,
    text: 'در یک دایره، اگر دو کمان برابر باشند، ... آنها نیز با هم برابرند.',
    options: [
      { id: '9-2-a', text: 'شعاع های' },
      { id: '9-2-b', text: 'قطرهای' },
      { id: '9-2-c', text: 'وترهای' },
      { id: '9-2-d', text: 'مماس های' },
    ],
    correctOptionId: '9-2-c',
  },
];
