import { format, register } from 'timeago.js'; // yarn add timeago.js 설치
import koLocale from 'timeago.js/lib/lang/ko'; // 한국어로 사용하고 싶을때

register('ko', koLocale);

export function formatAgo(date, lang = 'en_US') {
  return format(date, lang);
}